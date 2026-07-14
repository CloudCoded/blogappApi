import express from "express";
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import usersRoutes from "./routes/users.js"
import cookieParser from "cookie-parser"

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/posts", postRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);


app.listen(8000, () => {
    console.log("Server is running on port 8000");
})