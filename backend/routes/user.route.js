import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";


const router = express.Router();

router.route('/register').post(singleUpload,register);
router.route('/login').post(login);
<<<<<<< HEAD
router.route('/profile/update').post(isAuthenticated,updateProfile);
router.route('/logout').get(logout);
=======
router.route("/logout").get(logout);
router.route('/profile/update').post(isAuthenticated,singleUpload,updateProfile);
>>>>>>> 2c76cc3acaa7e4114facc6b88591f14f62e4b5ef


export default router;