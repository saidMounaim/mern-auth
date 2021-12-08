import asyncHandler from "express-async-handler";
import User from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";

// @DESC Register User
// @ROUTE /api/users
// @METHOD POST
export const registerUser = asyncHandler(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({
    success: true,
    data: {
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    },
  });
});
