import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT || 3000,
  SECRET_KEY: process.env.SECRET_KEY,
  MONGO_URI: process.env.MONGO_URI,
  CLOUD_NAME:process.env.CLOUD_NAME,
  API_KEY:process.env.API_KEY,
  API_SECRET:process.env.API_KEY

};

export default config;
