import * as services from "../services/user";

export const getUserAll = async (req, res) => {
  // const { id } = req.user;
  try {
    const response = await services.getUserAllService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at user controller: " + error,
    });
  }
};
export const insertUser = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.insertUserService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at user controller: " + error,
    });
  }
};
export const insertUserHash = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.insertUserHashService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at user controller: " + error,
    });
  }
};
export const updateUser = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.updateUserService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at user controller: " + error,
    });
  }
};
export const updateUserHash = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.updateUserHashService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at user controller: " + error,
    });
  }
};
export const deleteUser = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.deleteUserServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at user controller: " + error,
    });
  }
};
