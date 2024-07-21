import React, { useContext, useState } from "react";
import Modal from "./common/Modal";
import { AuthContext } from "../authProvider/AuthProvider";
import { message } from "antd";

const LoginSignUp = ({ showModal, setShowModal }) => {
  const { login } = useContext(AuthContext);
  const [auth, setAuth] = useState({
    userName: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(auth.userName, auth.password);
      message.success("Login Successful");
    } catch (error) {
      message.error(error.message);
    }
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
