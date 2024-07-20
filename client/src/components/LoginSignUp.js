import React from "react";
import Modal from "./common/Modal";

const LoginSignUp = ({ showModal, setShowModal }) => {
  const handleLogin = () => {
    window.location.href = "/auth/google";
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal isVisible={showModal} onClose={handleClose} onClick={handleLogin}>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Login/Signup</h1>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleLogin}
          >
            Login with Google
          </button>
        </div>
      </Modal>
    </>
  );
};

export default LoginSignUp;
