import React, { useState } from "react";
import Modal from "./common/Modal";

const LoginSignUp = ({ showModal, setShowModal }) => {
  const [auth, setAuth] = useState({
    userName: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(auth);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  };

  return (
    <>
      <Modal isVisible={showModal} onClose={handleClose} onClick={handleLogin}>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center gap-5 my-6"
        >
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              name="userName"
              type="userName"
              autoFocus
              value={auth.userName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              name="password"
              type="password"
              value={auth.password}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className="bg-blue-400 text-white rounded px-3">
            LOGIN
          </button>
        </form>
      </Modal>
    </>
  );
};

export default LoginSignUp;
