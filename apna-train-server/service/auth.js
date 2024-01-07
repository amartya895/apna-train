import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();
const key = process.env.SECRET_KEY;
export const setUser = (user) => {
  
  return jwt.sign(
    { userId: user._id, email: user.email },
    key,
    { expiresIn: "1h" } // You can adjust the expiration time
  );
};

export const getUser = (token) => {
  
  if (!token) return null;
  try {
    return jwt.verify(token, key);
  } catch (error) {
    return null;
  }
};
