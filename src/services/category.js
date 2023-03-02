const CategoryModal = require("../models/category");

//GET ALL
export const getCategoryAllService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await CategoryModal.find({}).sort({
        create_at: "desc",
        updated_at: "desc",
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get category.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
//Insert
export const insertCategoryService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body);
      const newUser = new CategoryModal({
        name: body.name,
        slug: body.slug,
        images: body.images,
        parent_id: body.parent_id,
        value: body.value,
        status: body.status,
        create_by: body.create_by,
        update_by: body.update_by,
      });
      const response = await newUser.save();
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Category.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//update
export const updateCategoryService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await CategoryModal.findByIdAndUpdate(
        { _id: body._id },
        {
          $set: {
            name: body.name,
            slug: body.slug,
            images: body.images,
            parent_id: body.parent_id,
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
        msg: response ? "OK" : "Failed to update category.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteCategoryServices = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await CategoryModal.findByIdAndRemove({
        _id: body._id,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to delete category.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
