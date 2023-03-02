import * as services from "../services/search";

export const getSearchProduct = async (req, res) => {
  try {
    // console.log(req.query);
    const response = await services.getSearchService(req.query);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at search controller: " + error,
    });
  }
};
