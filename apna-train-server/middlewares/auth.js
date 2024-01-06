import { getUser } from "../service/auth.js";

export const restrictToLoggedinUserOnly = async (req, resp, next) => {
  const userUid = req.cookies?.uid;

  if (!userUid) {
    resp.status(404).send({
      message: "User is not logedin",
    });
  }

  const user = getUser(userUid);

  if (!user)
    return resp.status(404).send({
      message: "user is not logedin",
    });

  req.user = user;

  next();
};
