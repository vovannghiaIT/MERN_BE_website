import userRouter from "./user";
import brandRouter from "./brand";
import categoryRouter from "./category";
import operaRouter from "./opera";
import orderRouter from "./order";
import orderdetailRouter from "./orderdetail";
import productRouter from "./product";
import authRouter from "./auth";
import currentRouter from "./current";
import searchRouter from "./search";

const initRouters = (app) => {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/current", currentRouter);
  app.use("/api/v1/category", categoryRouter);
  app.use("/api/v1/opera", operaRouter);
  app.use("/api/v1/order", orderRouter);
  app.use("/api/v1/orderdetail", orderdetailRouter);
  app.use("/api/v1/product", productRouter);
  app.use("/api/v1/brand", brandRouter);
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1", searchRouter);
  return app.use("/", (req, res) => {
    res.send("sever on...");
  });
};

export default initRouters;
