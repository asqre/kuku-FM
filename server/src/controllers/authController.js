import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return res.status(200).send({
          success: true,
          message: "Login Successful",
          data: user,
        });
      }
    }

    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ userName, password: hashedPassword });
      return res.status(201).send({
        success: true,
        message: "User Created",
        data: newUser,
      });
    }

    res.status(401).send({
      success: false,
      message: "Invalid Credentials",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
