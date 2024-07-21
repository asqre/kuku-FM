import React, { useContext, useState } from "react";
import LoginSignUp from "../LoginSignUp";
import { AuthContext } from "../../authProvider/AuthProvider";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleAuth = () => {
    if (user) {
      logout();
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="h-[10vh] bg-[#EF4130] px-16 flex items-center">
        <div className="text-white text-2xl font-light">KUKU FM</div>
        <div className="ml-auto text-white cursor-pointer" onClick={handleAuth}>
          {user ? "Logout" : "Login / Signup"}
        </div>
      </div>
      <LoginSignUp showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Header;
