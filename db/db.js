const mongoose = require("mongoose");

const dbConnexion = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:dWRNLa3at0yn7qqs@cluster0.h17b0ne.mongodb.net/Profile",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
};

module.exports = dbConnexion;

// dWRNLa3at0yn7qqs
