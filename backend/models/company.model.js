import mongoose from "mongoose";

const comapnySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    website: {
        type: String
    },
    logo: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    location: {
        type: String
    }
}, { timestamps: true });

const Company = mongoose.model("Company", comapnySchema);

export default Company;