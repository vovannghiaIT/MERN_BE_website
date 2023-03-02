import * as services from "../services/opera";

export const getOperaAll = async (req, res) => {
  // const { id } = req.user;
  try {
    const response = await services.getOperaAllService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at opera controller: " + error,
    });
  }
};
export const insertOpera = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.insertOperaService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at opera controller: " + error,
    });
  }
};
export const updateOpera = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.updateOperaService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at opera controller: " + error,
    });
  }
};
export const deleteOpera = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.deleteOperaServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at opera controller: " + error,
    });
  }
};
