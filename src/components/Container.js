import React, { useEffect } from "react";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";

const Container = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // This will be invoked whenever there is auth change
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User Signed In
        console.log("user", user);
        const { displayName, email, photoURL, uid } = user;
        dispatch(
          addUser({
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            uid: uid,
          })
        );
        navigate("/browse");
      } else {
        // User Signed Out
        navigate("/");
      }
    });
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
};

export default Container;
