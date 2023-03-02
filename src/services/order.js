const OrdersModal = require("../models/orders");

//GET ALL
export const getOrdersAllService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await OrdersModal.find({}).sort({
        create_at: "desc",
        updated_at: "desc",
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Orders.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
//Inset
export const insertOrdersService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body);
      const newUser = new OrdersModal({
        code: body.code,
        userId: body.userId,
        exportdate: body.exportdate,
        deliveryaddress: body.deliveryaddress,
        deliveryname: body.deliveryname,
        deliveryphone: body.deliveryphone,
        deliveryemail: body.deliveryemail,
        value: body.value,
        status: body.status,
        create_by: body.create_by,
        update_by: body.update_by,
      });
      const response = await newUser.save();
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Orders.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//update User
export const updateOrdersService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await OrdersModal.findByIdAndUpdate(
        { _id: body._id },
        {
          $set: {
            code: body.code,
            userId: body.userId,
            exportdate: body.exportdate,
            deliveryaddress: body.deliveryaddress,
            deliveryname: body.deliveryname,
            deliveryphone: body.deliveryphone,
            deliveryemail: body.deliveryemail,
            value: body.value,
            status: body.status,
            create_by: body.create_by,
            update_by: body.update_by,
          },
        },
        { new: true, useFindAndModify: false }
      );

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to update Orders.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteOrdersServices = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await OrdersModal.findByIdAndRemove({
        _id: body._id,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to delete Orders.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
