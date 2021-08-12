import React from "react";
import "./App.css";
import Body from "./Components/Body/Body";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Components/Login/Login";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  React.useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in.
        dispatch(
          login({
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            email: userAuth.email,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        //User is signed out.
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Body />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
