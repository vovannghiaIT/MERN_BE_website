const OrderdetailModal = require("../models/orderdetail");

//GET ALL
export const getOrderdetailAllService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await OrderdetailModal.find({}).sort({
        create_at: "desc",
        updated_at: "desc",
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Orderdetail.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
//Inset
export const insertOrderdetailService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body);
      const newUser = new OrderdetailModal({
        name: body.name,
        orderId: body.orderId,
        images: body.images,
        price: body.price,
        quantity: body.quantity,
        amount: body.amount,
        status: body.status,
        create_by: body.create_by,
        update_by: body.update_by,
      });
      const response = await newUser.save();
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Orderdetail.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//update User
export const updateOrderdetailService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await OrderdetailModal.findByIdAndUpdate(
        { _id: body._id },
        {
          $set: {
            name: body.name,
            orderId: body.orderId,
            images: body.images,
            price: body.price,
            quantity: body.quantity,
            amount: body.amount,
            status: body.status,
            create_by: body.create_by,
            update_by: body.update_by,
          },
        },
        { new: true, useFindAndModify: false }
      );

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to update Orderdetail.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//GET ALL
export const deleteOrderdetailServices = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await OrderdetailModal.findByIdAndRemove({
        _id: body._id,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to delete Orderdetail.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
