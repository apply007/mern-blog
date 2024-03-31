import jwt from "jsonwebtoken";

import  handleErrors  from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    next(handleErrors(401, "unauthorized"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      next(handleErrors(401, "unauthorized"));
    }
    req.user = user;
    next();
  });
};
