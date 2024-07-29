import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connentMongoDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json()); // parsing req.body
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`server is up and running on port ${PORT}`);
    connectMongoDB();
});