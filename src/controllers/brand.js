import * as services from "../services/brand";

export const getBrandAll = async (req, res) => {
  // const { id } = req.user;
  try {
    const response = await services.getBrandAllService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at brand controller: " + error,
    });
  }
};
export const insertBrand = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.insertBrandService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at brand controller: " + error,
    });
  }
};
export const updateBrands = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.updateBrandService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at brand controller: " + error,
    });
  }
};
export const deleteBrand = async (req, res) => {
  try {
    // const user = req.body;
    // console.log(req.body);
    const response = await services.deleteBrandServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at brand controller: " + error,
    });
  }
};
