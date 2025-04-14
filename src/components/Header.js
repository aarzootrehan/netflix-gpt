import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  
  const signoutUser = () => {
    signOut(auth).then(() => {
      console.log("Dispacthing remove user");
      dispatch(removeUser());
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log("OOPSS!! Cannot sign out", error.errorMessage);
      navigate("/error")

    });
  }


  return (
    <div className="header-container">
      <img
        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
        alt="netflix-logo"
        className="netflix-logo"
      />
      <div className="cursor-pointer" onClick={signoutUser}>
        <span>{user?.displayName}</span>
        <img
          src="https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Flight._CB616315948_.png"
          alt="signout-logo"
          className="user-logo"
        />
        (Sign Out)
      </div>
    </div>
  );
};

export default Header;
