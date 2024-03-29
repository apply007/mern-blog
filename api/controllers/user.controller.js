import handleError from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const userController = (req, res) => {
  res.json({ message: "API is working" });
};

export const updateUser = async (req, res, next) => {

  if (req.user1.id !== req.params.userId) {
    return next(handleError(403, "Not allowed to update tis user"));
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(handleError(400, "password must 6 characters"));
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(handleError(400, "username must 7 to 20 characters"));
    }
  }  

  if (req.body.username.includes(" ")) {
    return next(handleError(400, "username don't space"));
  }
  if (req.body.username !== req.body.username.toLowerCase()) {
    return next(handleError(400, "username must be lowercase"));
  }
  if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
  
    return next(handleError(400, "username must be letter and number"));
 
  }
  //  
  // const user=await User.findOne(req.body.username)
  // console.log(user)
  // if (req.body.username===user.username) {
  //   return next(handleError(400, "username duplicate"));
  // }
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          profilePicture: req.body.profilePicture,
          password: req.body.password,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updateUser._doc;
    res.status(200).json(rest)
  } catch (error) {
    next(handleError(error));
  }
};
