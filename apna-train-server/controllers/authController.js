import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { setUser } from "../service/auth.js";

export const signupController = async (req, resp) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const result = await user.save();
    resp.status(201).send({
      message: "User created successfully",
      result,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    resp.status(500).send({ message: "Internal Server Error" });
  }
};

export const loginController = async (req, resp) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      const check = await bcrypt.compare(password, user.password);

      if (check) {
        const token = setUser(user);
        resp.cookie("uid", token);
        resp.status(200).send({
          message: "User logged in successfully",
          token,
          user: {
            _id: user._id,
            username: user.username,
            email: user.email,
            travellers: user.travellers,
          },
        });
      } else {
        resp.status(401).send({ message: "Wrong password" });
      }
    } else {
      resp.status(401).send({ message: "User doesn't exist" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    resp.status(500).send({ message: "Internal Server Error" });
  }
};
