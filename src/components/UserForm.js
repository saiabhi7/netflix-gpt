import React, { useRef, useState } from "react";
import { validate } from "../helpers/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import { PHOTO_URL } from "../utils/constants";

const UserForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmit = () => {
    const message = validate(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message) return;

    //Sign In or Sign Up user
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // User has been successfully signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              // Profile updated!
              const { displayName, email, photoURL, uid } = auth.currentUser;
              dispatch(
                addUser({
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                  uid: uid,
                })
              );
            })
            .catch((error) => {
              // An error occurred
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      //Sign In flow
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // User has successfully signed in
          const user = userCredential.user;
          // We can dispatch action here but this is handled by onAuthStateChanged function in Container.js
          /* const { displayName, email, photoURL, uid } = user;
          dispatch(
            addUser({
              displayName: displayName,
              email: email,
              photoURL: photoURL,
              uid: uid,
            })
          ); 
          navigate("/browse"); */
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="md:w-1/4 w-[95%] absolute p-8 bg-black mx-auto my-64 left-0 right-0 text-white rounded-lg bg-opacity-80"
    >
      <h1 className="my-5 font-bold text-3xl">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>
      <div className="my-5 w-[90%]">
        {!isSignInForm && (
          <input
            ref={name}
            className="p-3 w-full my-3 bg-gray-900"
            type="text"
            placeholder="Enter Full Name"
          />
        )}
        <input
          ref={email}
          className="p-3 w-full my-3 bg-gray-900"
          type="text"
          placeholder="Enter Email or Phone Number"
        />
        <input
          ref={password}
          className="p-3 w-full my-3 bg-gray-900"
          type="password"
          placeholder="Enter Password"
        />
        {errorMessage && (
          <span className="text-red-800 text-lg font-semibold">
            {errorMessage}
          </span>
        )}
        <button
          className="w-full bg-red-800 my-3 font-bold text-2xl py-3"
          onClick={handleFormSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
      </div>

      <p className="mb-5 text-xl">
        New to Netflix?{" "}
        <span className="underline cursor-pointer" onClick={handleSignInForm}>
          {isSignInForm ? "Sign Up Now" : "Sign In Now"}
        </span>
      </p>
    </form>
  );
};

export default UserForm;
