import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO_URL, USER_URL } from "../utils/constants";

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

  return (
    <div className="flex justify-between items-center p-4 bg-black">
      <img
        src={LOGO_URL}
        alt="netflix-logo"
        className="netflix-logo"
      />
      <div className="cursor-pointer border-b-gray-200" onClick={signoutUser}>
        <span>{user?.displayName}</span>
        <img
          src={USER_URL}
          alt="signout-logo"
          className="w-[50px] h-[50px] rounded-full"
        />
        <span className="text-center flex">(Sign Out)</span>
      </div>  
    </div>
  );
};

export default Header;
