import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import handleError from "../utils/error.js";
const signup = async (req, res,next) => {
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
      next(handleError( 400,"All fields are required"))
    }
const hashPassword= bcryptjs.hashSync(password,10)
    const newUser = new UserModel({ username, email,password:hashPassword });

    await newUser.save();
    res.status(200).json({ message: "Successfully save to MongoDB" });
  } catch (error) {
    next(error)
  }
};

export default signup;
