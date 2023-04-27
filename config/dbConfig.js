const mongoose = require("mongoose");



exports.connect = () => {
  
  mongoose
    .connect("mongodb+srv://Akash:YDPTRmixf5L5mJhg@projectapi.hco4hms.mongodb.net/ProjectApi?retryWrites=true&w=majority",
     {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
