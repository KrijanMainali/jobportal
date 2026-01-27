import Application from "../models/application.model.js";
import Job from "../models/job.model.js";

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId  = req.params.id;
        if (!jobId) {
            return res.status(400).json({
                message: "job Id is required",
                success: false
            })
        };
        //check if the user has already applied for the job

        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });

        if (existingApplication) {
            return res.status(400).json({
                message: "The job has already been applied",
                success: false
            })
        };

        //check if the job exist or not    
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "the job was not found",
                success: false
            })
        };

        //create job application
        const newApplication = await Application.create({
            job:jobId,
            applicant:userId
        });

        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message : "job applied successfully",
            success : true
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}



export const getAppliedJobs = async(req,res)=>{
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt : -1}).populate({
            path : 'job',
            options :{sort:{createdAt : -1}},
            populate:{
                path :'company',
                options : {sort:{cretedAt: -1}}
            }
        })
        if(!application){
            return res.status(404).json({
                message : "no appliaction was found",
                success : false
            })
        };
        return res.status(200).json({
            message : "Application was found",
            application,
            success : true
        })

    } catch (error) {
        return res.status(500).json({
            message : error.message,
            success : false
        })
    }
}


export const getApplicants = async(req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: 'applications',
            options : {sort :{createdAt : -1}},
            populate :{
                path : 'applicant'
            }
        });
        if(!job){
            return res.status(404).json({
                message : "job was not found",
                success : false
            })
        };
        return res.status(200).json({
            job,
            success : true
        })

    } catch (error) {
        return res.status(500).json({
            message : error.message,
            success : false
        })
    }
}



export const updateStatus = async(req,res)=>{
    try {
        const {status}=req.body;
        const applicationId = req.params.id;
        if(!status){
            return res.status(404).json({
                message : "status is required",
                success : false
            });
        };

        //application by applicant id
        const application = await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                message : "Appllication not found",
                success : false
            });
        };

        //updating the status
        application.status = status.toLowerCase();
        await application.save();

        return res.status(201).json({
            message : "status updated successfully",
            success : true
        })       
    } catch (error) {
        return res.status(500).json({
            message : error.message,
            success : false
        })
    }
}