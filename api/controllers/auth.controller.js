import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import handleError from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    console.log(req.body);

    const { username, email, password } = req.body;
    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      next(handleError(400, "All fields are required"));
    }
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = await UserModel({
      username,
      email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(200).json({ message: "Successfully save to MongoDB" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = await req.body;
    if (!email || !password || email === "" || password === "") {
    return  next(handleError(400, "All fields are required"));
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
    return   next(handleError(404, "User Not Found"));
    }

    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return next(handleError(400, "Wrong credential"));
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = user._doc;
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatePassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashPassword = bcryptjs.hashSync(generatePassword, 10);

      const newUser = new UserModel({
        username: name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        email,
        password: hashPassword,
        profilePicture: googlePhotoUrl,
      });

      await newUser.save();
      const token = jwt.sign(
        {
          id: newUser._id,
        },
        process.env.JWT_SECRET
      );

const {password, ...rest }=newUser._doc
      res.status(200).cookie('access_token',token).json(rest)
    }
  } catch (error) {
    next(error);
  }
};
