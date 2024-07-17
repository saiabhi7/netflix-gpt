import React from "react";
import Logo from "./Logo";
import UserForm from "./UserForm";

const Login = () => {
  return (
    <div className="relative h-screen object-cover bg-no-repeat bg-center m-auto p-0 bg-background-image">
      <Logo />
      <UserForm />
    </div>
  );
};

export default Login;
