import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import config from "./config/config.js";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/comapny.route.js";




const app = express();


app.use(express.json());

app.use(express.urlencoded({extended : true}));

app.use(cookieParser());

const corsOptions = {
    origin : 'http://localhost:5173',
    credentials : true
}

app.use(cors(corsOptions));

const PORT =  config.PORT;

app.use('/api/v1/user', userRoute);
app.use('/api/v1/company',companyRoute);


app.listen(PORT, ()=>{
    connectDB();
    console.log(`server is running at port ${PORT}`);
})