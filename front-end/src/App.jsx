import "./app.scss";
import { createBrowserRouter, Outlet, Route, RouterProvider } from "react-router-dom";

import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import MyGigs from "./pages/myGigs/MyGigs";
import Signin from "./components/signin/Signin";
import Signinuser from "./components/signin/Signinuser";
// import Chatbot from "./components/Chatbot"; 
import ErrorBoundary from "./ErrorBoundary";


import { UserProvider } from "./UserContext";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <UserProvider>
          <Navbar />
        <ErrorBoundary> 
        <Outlet />
        </ErrorBoundary> 
        {/* <Chatbot /> */}
        <Footer />
       </UserProvider>
      </div>
    );
  }


  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <ErrorBoundary> {/* Wrap Home with ErrorBoundary */}
              <Home />
            </ErrorBoundary>
          ),
        },
        
        {
          path: "/gigs",
          element: (
            <ErrorBoundary> {/* Wrap Gigs with ErrorBoundary */}
              <Gigs />
            </ErrorBoundary>
          ),
        },
        
        {
          path: "/signin",
          element: (
            <ErrorBoundary> {/* Wrap Signin with ErrorBoundary */}
              <Signin />
            </ErrorBoundary>
          ),
        },
        {
          path: "/signinuser",
          element: (
            <ErrorBoundary> {/* Wrap Signinuser with ErrorBoundary */}
              <Signinuser />
            </ErrorBoundary>
          ),
        },
        {
          path: "/myGigs",
          element: (
            <ErrorBoundary> {/* Wrap MyGigs with ErrorBoundary */}
              <MyGigs />
            </ErrorBoundary>
          ),
        },
        {
          path: "/orders",
          element: (
            <ErrorBoundary> {/* Wrap Orders with ErrorBoundary */}
              <Orders />
            </ErrorBoundary>
          ),
        },
        {
          path: "/messages",
          element: (
            <ErrorBoundary> {/* Wrap Messages with ErrorBoundary */}
              <Messages />
            </ErrorBoundary>
          ),
        },
        // {
        //   path: "/message/:id",
        //   element: (
        //     <ErrorBoundary> {/* Wrap Message with ErrorBoundary */}
        //       <Message />
        //     </ErrorBoundary>
        //   ),
        // },
        {
          path: "/add",
          element: (
            <ErrorBoundary> {/* Wrap Add with ErrorBoundary */}
              <Add />
            </ErrorBoundary>
          ),
        },
        {
          path: "/gig/:id",
          element: (
            <ErrorBoundary> {/* Wrap Gig with ErrorBoundary */}
              <Gig />
            </ErrorBoundary>
          ),
        },
      ],
    },
    {
      path: "/register",
      element: (
        <ErrorBoundary> {/* Wrap Register with ErrorBoundary */}
          <Register />
        </ErrorBoundary>
      ),
    },
    {
      path: "/login",
      element: (
        <ErrorBoundary> {/* Wrap Login with ErrorBoundary */}
          <Login />
        </ErrorBoundary>
      ),
    },
  ]);


  

  return <RouterProvider router={router} />;
}



export default App;