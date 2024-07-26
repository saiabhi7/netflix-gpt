import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../store/slices/userSlice";
import { USER_AVATAR } from "../utils/constants";
import { switchToGPT } from "../store/slices/gptSlice";
import LanguageSwitch from "./LanguageSwitch";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const toggleGPT = useSelector((store) => store.gpt.switchToGPT);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //Sign out successful
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleSwitchToGPT = () => {
    dispatch(switchToGPT());
  };

  return (
    <div className="absolute top-[10%] md:top-3 w-full md:right-2 md:w-3/12 flex justify-center gap-3 md:justify-between z-10">
      {toggleGPT && <LanguageSwitch />}
      <button
        className="px-4 md:px-4 md:py-2 rounded-lg text-white bg-purple-800"
        onClick={handleSwitchToGPT}
      >
        {toggleGPT ? "Home" : "Switch to GPT"}
      </button>
      <img
        className="hidden md:inline-block w-10 h-10"
        src={USER_AVATAR}
        alt="profile"
      />
      <button
        className="bg-red-500 px-4 py-2 font-semibold text-xl rounded-lg"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default UserProfile;
