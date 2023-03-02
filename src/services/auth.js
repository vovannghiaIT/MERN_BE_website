const UserModel = require("../models/users");
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
require("dotenv").config();
const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const registerService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body);
      const listUser = await UserModel.findOne({ email: body.email }).exec();
      //   console.log(listUser);
      const newUser = new UserModel({
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone,
        password: hashPassword(body.password),
        email: body.email,
        gender: body.gender,
        address: body.address,
        roles: body.roles,
        orders: body.orders,
        amount: body.amount,
        avatar: body.avatar,
        status: body.status,
        create_by: body.create_by,
        update_by: body.update_by,
      });

      if (listUser === null) {
        const response = await newUser.save();
        const token =
          response &&
          jwt.sign(
            {
              _id: response._id,
              email: response.email,
            },
            process.env.SECRET_KEY,
            { expiresIn: "2d" }
          );
        // console.log(response);
        resolve({
          err: token ? 0 : 2,
          msg: "Register is successfully !",
          token: token || null,
        });
      } else {
        resolve({
          msg: "Phone number or email has been aldready used !",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
export const loginService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body);
      const response = await UserModel.findOne({
        email: body.email,
        status: 1,
      }).exec();
      const isCorrectPassword =
        response && bcrypt.compareSync(body.password, response.password);
      const token =
        isCorrectPassword &&
        jwt.sign(
          { _id: response._id, email: response.email },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );

      resolve({
        err: token ? 0 : 2,
        msg: token
          ? "Login is successfully !"
          : response
          ? "Password is wrong !"
          : "email không đúng hoặc tài khoản không khả dụng!",
        token: token || null,
      });
    } catch (error) {
      reject(error);
    }
  });
