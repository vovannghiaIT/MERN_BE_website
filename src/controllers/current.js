import * as services from "../services/current";

export const getCurrent = async (req, res) => {
  const { _id } = req.user;
  try {
    const response = await services.getOne(_id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at user controller: " + error,
    });
  }
};
