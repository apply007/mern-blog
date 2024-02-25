import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
const signup = async (req, res) => {
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
      return res.status(400).json({ message: "All fields are required" });
    }
const hashPassword= bcryptjs.hashSync(password,10)
    const newUser = new UserModel({ username, email,password:hashPassword });

    await newUser.save();
    res.status(200).json({ message: "Successfully save to MongoDB" });
  } catch (error) {
    res.status(500).json({ message: error.message + "Internal error" });
  }
};

export default signup;
