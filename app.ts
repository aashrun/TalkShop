import express from "express"
import dotenv from "dotenv"
import postRoutes from "./routes/postRoutes.ts"
import analysisRoutes from "./routes/analysisRoutes.ts"
dotenv.config()
import apiLimiter from "./helpers/rateLimit.ts"

const app = express();
app.use(express.json());



app.use("/api/v1/posts", apiLimiter, postRoutes);
app.use("/api/v1/postAnalysis", apiLimiter, analysisRoutes);


app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});