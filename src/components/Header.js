import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO_URL, SUPPORTED_LANGUAGES, USER_URL } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { setLanguage } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(
          "Navigating to browse page as auth has changed from Header Componen"
        );
        const { uid, email, displayName } = user;
        // Dispatching an action to the store to store data in it
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signoutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("Dispacthing remove user");
        dispatch(removeUser());
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log("OOPSS!! Cannot sign out", error.errorMessage);
        navigate("/error");
      });
  };

  const toggleGptSearchHandler = () => {
    dispatch(toggleGptSearch());
  };

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    dispatch(setLanguage(selectedLanguage));
    console.log("Selected language:", selectedLanguage);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-black">
      <img src={LOGO_URL} alt="netflix-logo" className="netflix-logo" />
      <div className="cursor-pointer border-b-gray-200">
        <select
          className="bg-white text-white border-none rounded-lg p-2 m-3"
          onChange={(e) => changeLanguage(e)}
        >
          {SUPPORTED_LANGUAGES.map((language) => (
            <option
              key={language.identifier}
              value={language.identifier}
              className="text-white"
            >
              {language.name}
            </option>
          ))}
        </select>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-lg gpt-search-btn"
          onClick={toggleGptSearchHandler}
        >
          Gpt Search
        </button>
        <span>{user?.displayName}</span>
        <img
          src={USER_URL}
          alt="signout-logo"
          className="w-[50px] h-[50px] rounded-full"
        />
        <span className="text-center flex" onClick={signoutUser}>
          (Sign Out)
        </span>
      </div>
    </div>
  );
};

export default Header;
