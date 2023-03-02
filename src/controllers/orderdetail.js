import * as services from "../services/orderdetail";

export const getOrderDetailAll = async (req, res) => {
  // const { id } = req.user;
  try {
    const response = await services.getOrderdetailAllService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at OrderDetail controller: " + error,
    });
  }
};
export const insertOrderDetail = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.insertOrderdetailService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at OrderDetail controller: " + error,
    });
  }
};
export const updateOrderDetail = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.updateOrderdetailService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at OrderDetail controller: " + error,
    });
  }
};
export const deleteOrderDetail = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.deleteOrderdetailServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at OrderDetail controller: " + error,
    });
  }
};
