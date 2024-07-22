import React, { useContext, useState } from "react";
import Modal from "./common/Modal";
import { AuthContext } from "../authProvider/AuthProvider";
import { message } from "antd";

const LoginSignUp = ({ showModal, setShowModal }) => {
  const { login, signup } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [auth, setAuth] = useState({
    userName: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(auth.userName, auth.password);
      setShowModal(false);
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

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setAuth({ userName: "", password: ""});
  };

  return (
    <>
      <Modal isVisible={showModal} onClose={handleClose} onClick={handleLogin}>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center gap-5 my-6"
        >
          <h4 className="title">{isLogin ? "LOGIN" : "SIGN UP"}</h4>

          <div className="mb-3 px-8">
            <input
              name="userName"
              type="text"
              autoFocus
              value={auth.userName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-[250px]"
              placeholder="Enter Your Username"
              required
            />
          </div>
          <div className="mb-3">
            <input
              name="password"
              type="password"
              value={auth.password}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-[250px]"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className="bg-blue-400 text-white rounded px-3">
            {isLogin ? "LOGIN" : "SIGN UP"}
          </button>

          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={toggleMode}
              className="text-blue-500 ml-2"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </form>
      </Modal>
    </>
  );
};

export default LoginSignUp;