const ProductModal = require("../models/products");

//GET ALL
export const getSearchService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      //   console.log(body.key);
      const response = await ProductModal.find({
        name: { $regex: body.key, $options: "i" },
      }).sort({
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
