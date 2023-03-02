const OperaModal = require("../models/opera");

//GET ALL
export const getOperaAllService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await OperaModal.find({}).sort({
        create_at: "desc",
        updated_at: "desc",
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Opera.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
//Inset
export const insertOperaService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body);
      const newUser = new OperaModal({
        name: body.name,
        slug: body.slug,
        images: body.images,
        status: body.status,
        create_by: body.create_by,
        update_by: body.update_by,
      });
      const response = await newUser.save();
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Opera.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//update User
export const updateOperaService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await OperaModal.findByIdAndUpdate(
        { _id: body._id },
        {
          $set: {
            name: body.name,
            slug: body.slug,
            images: body.images,
            status: body.status,
            create_by: body.create_by,
            update_by: body.update_by,
          },
        },
        { new: true, useFindAndModify: false }
      );

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to update Opera.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteOperaServices = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await OperaModal.findByIdAndRemove({
        _id: body._id,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to delete Opera.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
