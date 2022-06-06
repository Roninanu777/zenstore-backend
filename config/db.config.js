const mongoose = require("mongoose");

async function connect() {
  try {
    let resp = mongoose.connect(process.env.NODE_ENV_MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected...");
  } finally {
    await mongoose.connection.close();
  }
}

module.exports = { connect };
