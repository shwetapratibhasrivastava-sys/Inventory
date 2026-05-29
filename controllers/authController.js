import Auth from "../models/authModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json("All fields are required");
    }

    const exisiting = await Auth.findOne({ email });
    if (exisiting) {
      return res.json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const auth = await Auth.create({
      name,
      email,
      password: hashedPassword,
    });

    res.json({
      message: "User created successfully",
      data: {
        id:auth.id,
        name:auth.name,
        email:auth.email,
      }
    });
  } catch (error) {
    res.json(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json("All fields are required");
    }

    const exisiting = await Auth.findOne({ email });
    if (!exisiting) {
      return res.json({ message: "User donn't exists" });
    }

    const valid = await bcrypt.compare(password, exisiting.password);

    if (!valid) {
      return res.json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: exisiting.id,
        email: exisiting.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRY,
      },
    );

    return res.json({
      message: "Login successful",
      token,
      data: {
        _id: exisiting._id,
        name: exisiting.name,
        email: exisiting.email,
      },
    });
  } catch (error) {
    return res.json(error.message);
  }
};
