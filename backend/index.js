import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 4000;
const URI = process.env.mongodbURI;

// connect to mongodb
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

// defining routes
app.use("/api/book", bookRoute);
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
