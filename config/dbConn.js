const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.NODE_ENV_MONGOURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
