const BrandsModal = require("../models/brands");

//GET ALL
export const getBrandAllService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await BrandsModal.find({}).sort({
        create_at: "desc",
        updated_at: "desc",
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get brand.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
//Inset
export const insertBrandService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body);
      const newUser = new BrandsModal({
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
        msg: response ? "OK" : "Failed to get brand.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//update
export const updateBrandService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await BrandsModal.findByIdAndUpdate(
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
        msg: response ? "OK" : "Failed to update brand.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteBrandServices = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await BrandsModal.findByIdAndRemove({
        _id: body._id,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to delete brand.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
