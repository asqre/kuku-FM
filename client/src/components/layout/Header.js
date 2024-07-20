import React, { useState } from "react";
import LoginSignUp from "../LoginSignUp";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="h-[10vh] bg-[#EF4130] px-16 flex items-center">
        <div className="text-white text-2xl font-light">KUKU FM</div>
        <div
          className="ml-auto text-white cursor-pointer"
          onClick={handleLogin}
        >
          Login / Signup
        </div>
      </div>
      <LoginSignUp showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Header;
