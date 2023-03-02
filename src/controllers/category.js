import * as services from "../services/category";

export const getCategoryAll = async (req, res) => {
  // const { id } = req.user;
  try {
    const response = await services.getCategoryAllService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at category controller: " + error,
    });
  }
};
export const insertCategory = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.insertCategoryService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at category controller: " + error,
    });
  }
};
export const updateCategory = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.updateCategoryService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at category controller: " + error,
    });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.deleteCategoryServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at category controller: " + error,
    });
  }
};
