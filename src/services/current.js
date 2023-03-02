import bcrypt from "bcryptjs";
const UserModel = require("../models/users");

// GET CURRENT
export const getOne = (_id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await UserModel.findOne({ _id: _id });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get current.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
