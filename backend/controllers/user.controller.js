import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "some value is missing",
                success: false
            });
        };

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                message: "user already exists with the submitted email.",
                success: false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role
        });

        return res.status(201).json({
            message: "Account registered successfully",
            success: true
        })
    }
    catch (error) {
        console.log(error);
    }
}



export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!fullname || !email || !role) {
            res.status(400).json({
                message: "some value is missing",
                success: false
            });

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({
                    message: "incorrect credentials",
                    success: false
                })
            }

            const isPasswordMatch = await bcrypt.compare(password, user.password);

            if (!isPasswordMatch) {
                res.status(400).json({
                    message: "incorrect credentials",
                    success: false
                })
            }

            if (role !== user.role) {
                return res.status(400).json({
                    message: "account doesnot exists with current role",
                    success: false
                })
            }

            const tokenData = {
                userId: user._id
            }
            const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1D' });

            user = {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
                phoneNumber: user.phoneNumber,
                role: user.role,
                profile: user.profile
            }

            return res.status(200).cookies("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, samesite: 'strict' }).json({
                message: `welcome back ${user.fullname}`,
                user,
                success: true
            })
        }
    } catch (error) {

        console.log(error);

    }
}



export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "user logged out successfully",
            success: true
        });

    } catch (error) {
        console.log(error);
    }
}



export const updateProfile = async (req, res) => {

    try {
        const { fullname, phoneNumber, bio, skills, email } = req.body;
        const file = req.file;
        if (!fullname || !phoneNumber || !email || !bio || !skills) {
            return res.status(400).json({
                message: "some value is missing",
                success: false
            });
        };

        const skillsArray = skills.split(",");
        const userId = req.id;   // from middleware auth
        let user = await User.findById(userId);

        if (!user) {

            return res.status(400).json({
                message: "user not found",
                success: false
            })
        }

        // updated user data

        user.fullname = fullname,
            user.email = email,
            user.phoneNumber = phoneNumber,
            user.profile.bio = bio,
            user.profile.skills = skillsArray


        await user.save();

         user = {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
                phoneNumber: user.phoneNumber,
                role: user.role,
                profile: user.profile
            }

        return res.status(200).json({
            message : "useer profile updated successfully",
            success : true,
            user
        })
    } catch (error) {
        console.log(error);
    }
}