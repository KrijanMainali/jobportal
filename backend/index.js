import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"


const app = express();

dotenv.config();

app.use(express.json());

app.use(express.urlencoded({extended : true}));

app.use(cookieParser());

const corsOptions = {
    origin : 'http://localhost:5173',
    credentials : true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.use('/api/v1/user', userRoute);

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(PORT, ()=>{
    connectDB();
    console.log(`server is running at port ${PORT}`);
})