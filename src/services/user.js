const UserModel = require("../models/users");

import bcrypt from "bcryptjs";
const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));
//GET ALL
export const getUserAllService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await UserModel.find({}).sort({
        create_at: "desc",
        updated_at: "desc",
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get user.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
//Insert
export const insertUserService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body);
      const newUser = new UserModel({
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone,
        password: body.password,
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
      const response = await newUser.save();
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get user.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
export const insertUserHashService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body);
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
      const response = await newUser.save();
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get user.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
export const updateUserHashService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body);
      const response = await UserModel.findByIdAndUpdate(
        { _id: body._id },
        {
          $set: {
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
          },
        },
        { new: true, useFindAndModify: false }
      );
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get user.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//update User
export const updateUserService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await UserModel.findByIdAndUpdate(
        { _id: body._id },
        {
          $set: {
            firstName: body.firstName,
            lastName: body.lastName,
            phone: body.phone,
            password: body.password,
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
          },
        },
        { new: true, useFindAndModify: false }
      );

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to update user.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//GET ALL
export const deleteUserServices = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await UserModel.findByIdAndRemove({
        _id: body._id,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to delete user.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
