import axios from "axios";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { message } from "antd";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const login = async (userName, password) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/login`,
        { userName, password }
      );
      let user = res.data.data;
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      message.success(res.data.message);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const authValue = { user, login, logout };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
