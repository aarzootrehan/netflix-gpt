import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import LearnMore from "./LearnMore";
import { createBrowserRouter, RouterProvider } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Error from "./Error";


const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        const {uid, email, displayName} = user;
        // Dispatching an action to the store to store data in it
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
      } else {
        dispatch(removeUser());
      }
    })
  }, []);

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
        {
            path: "/learn-more",
            element: <LearnMore/>
        },
        {
          path: "/error",
          element: <Error/>
        }
    ])


    

  return (
    <div className="body-container">
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
