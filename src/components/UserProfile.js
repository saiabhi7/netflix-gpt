import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../store/slices/userSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  console.log("user data", userData);

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

  return (
    <div className="absolute right-2 p-3 w-1/12 flex justify-between">
      <img
        className="w-10 h-10"
        src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
        alt="profile"
      />
      <button
        className="bg-red-500 px-1 font-semibold text-xl"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default UserProfile;
