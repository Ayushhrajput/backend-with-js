import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
export const app = express();


const allowedOrigins = [
    "https://yt-app-taupe.vercel.app/",
    "http://localhost:8000"
]
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}))
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use(express.static("public"))

import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);
