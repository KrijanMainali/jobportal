import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT : process.env.PORT || 3000 ,
  SECRET_KEY : process.env.SECRET_KEY,
  MONGO_URI :   process.env.MONGO_URI

};

export default config;
