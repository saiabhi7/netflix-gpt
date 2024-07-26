import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { addUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { LOGO } from "../utils/constants";

const Logo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // This will be invoked whenever there is auth change
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User Signed In
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
    <div className="absolute bg-gradient-to-b from-black w-screen z-10">
      <img className="w-44 my-3 mx-auto md:mx-7" src={LOGO} alt="logo" />
    </div>
  );
};

export default Logo;
