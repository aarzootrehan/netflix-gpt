import React, { useRef, useState } from "react";
import Header from "./Header";
import { isValid } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  // Hooks
  const [isSigninForm, setIsSigninForm] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const navigate = useNavigate();

  /**
   * useRef
   */
  const emailField = useRef();
  const passField = useRef();
  const fName = useRef();

  // Method for toggling sign in / sign up form
  const toggleSigninForm = () => {
    setIsSigninForm(!isSigninForm);
  };

  // Method to sign in user in the app
  const signInUser = () => {
    setErrorMsg("");
    const error = isValid(emailField.current.value, passField.current.value);
    if (!error) {
      console.log(emailField.current.value);
      console.log(passField.current.value);
      // go to sign in / sign up
      if (!isSigninForm) {
        // Sign in the user
        signInWithEmailAndPassword(
          auth,
          emailField.current.value,
          passField.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("User Signed in successfully!!", user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("OOPSS!! Error in signing", errorCode, errorMessage);
            setErrorMsg(errorMessage);
          });
      } else {
        // Sign up api service
        createUserWithEmailAndPassword(
          auth,
          emailField.current.value,
          passField.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("User signed up ", user);
            updateProfile(auth.currentUser, {
              displayName: fName.current.value,
              photoURL: USER_AVATAR,
            })
              .then(() => {
               
                // dispatch(
                //   addUser({ uid: uid, email: email, displayName: displayName })
                // );
                // Profile updated!
               // navigate("/browse");
              })
              .catch((error) => {
                // An error occurred
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("OOPSS some error ", errorCode, errorMessage);
            setErrorMsg(errorMessage);
          });
      }
    } else setErrorMsg(error);
  };

  return (
    <div className="login-page">
      <Header />
      <div className="sign-in">
        <h3 className="sign-in-heading">
          {" "}
          {isSigninForm ? "Sign Up" : "Sign In"}
        </h3>
        <form
          className="sign-in-form"
          onSubmit={(event) => event.preventDefault()}
        >
          {isSigninForm ? (
            <input
              type="text"
              ref={fName}
              placeholder="Full Name"
              className="h-[40px] w-[70%] text-2xl-white p-8 bg-inherit rounded-2xl border border-white sign-in-field"
            />
          ) : (
            ""
          )}
          <input
            ref={emailField}
            type="email"
            placeholder="Email or phone number"
            className="h-[40px] w-[70%] text-2xl-white p-8 bg-inherit rounded-2xl border border-white sign-in-field"
          />
          <input
            ref={passField}
            type="password"
            placeholder="Password"
            className="h-[40px] w-[70%] text-2xl-white p-8 bg-inherit rounded-2xl border border-white sign-in-field"
          />

          <button className="sign-in-btn" onClick={signInUser}>
            {isSigninForm ? "Sign Up" : "Sign In"}
          </button>

          <div className="error-block">{errorMsg}</div>
          <div className="details-sec" onClick={toggleSigninForm}>
            <span>
              {isSigninForm
                ? "Already registered? Sign in!"
                : "New to Netflix? Sign up now"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
