const ProductModal = require("../models/products");

//GET ALL
export const getProductAllService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await ProductModal.find({}).sort({
        create_at: "desc",
        updated_at: "desc",
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Product.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
//Insert
export const insertProductService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const newUser = new ProductModal({
        name: body.name,
        categoryId: body.categoryId,
        operaId: body.operaId,
        brandId: body.brandId,
        images: body.images,
        star: body.star,
        slug: body.slug,
        description: body.description,
        number: body.number,
        price: body.price,
        pricesale: body.pricesale,
        status: body.status,
        create_by: body.create_by,
        update_by: body.update_by,
      });
      const response = await newUser.save();
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Product.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//update
export const updateProductService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await ProductModal.findByIdAndUpdate(
        { _id: body._id },
        {
          $set: {
            name: body.name,
            categoryId: body.categoryId,
            operaId: body.operaId,
            brandId: body.brandId,
            images: body.images,
            star: body.star,
            slug: body.slug,
            description: body.description,
            number: body.number,
            price: body.price,
            pricesale: body.pricesale,
            status: body.status,
            create_by: body.create_by,
            update_by: body.update_by,
          },
        },
        { new: true, useFindAndModify: false }
      );

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to update Product.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//GET ALL
export const deleteProductServices = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await ProductModal.findByIdAndRemove({
        _id: body._id,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to delete Product.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//Get detail
export const getProductDetailSlugService = (query) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await ProductModal.findOne({ slug: query.slug });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get product detail service.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
