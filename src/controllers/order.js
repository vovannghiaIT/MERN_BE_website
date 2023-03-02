import * as services from "../services/order";

export const getOrderAll = async (req, res) => {
  // const { id } = req.user;
  try {
    const response = await services.getOrdersAllService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at order controller: " + error,
    });
  }
};
export const insertOrder = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.insertOrdersService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at order controller: " + error,
    });
  }
};
export const updateOrder = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.updateOrdersService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at order controller: " + error,
    });
  }
};
export const deleteOrder = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.deleteOrdersServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at order controller: " + error,
    });
  }
};
