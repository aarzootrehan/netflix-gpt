import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import LearnMore from "./LearnMore";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./Error";


const Body = () => {

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
