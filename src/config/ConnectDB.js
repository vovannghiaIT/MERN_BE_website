const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin1234@clusterexemple.zwvahzj.mongodb.net/webthuongmai?retryWrites=true&w=majority"
    );
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connectDatabase;
