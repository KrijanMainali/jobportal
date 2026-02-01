import Job from "../models/job.model.js";
import User from "../models/user.model.js";

export const recommendJobs = async (req, res) => {
  try {
    const userId = req.id;

    const user = await User.findById(userId);
    if (!user || user.role !== "student") {
      return res.status(400).json({
        success: false,
        message: "Only students can get job recommendations"
      });
    }

    const jobs = await Job.find().populate("company");

    const recommendations = jobs.map(job => {
      let score = 0;


      //  SKILL MATCHING

      const matchedSkills = user.profile.skills.filter(skill =>
        job.requirements.includes(skill)
      );
      score += matchedSkills.length * 10;

      //  EXPERIENCE MATCH

      const userExp = user.experience;
      const jobExp = job.experienceLevel;

      if (userExp >= jobExp) {
        score += 20;
      } else if (jobExp - userExp <= 1) {
        score += 10;
      }

      // overqualified penalty
      if (userExp >= jobExp + 3) {
        score -= 5;
      }


      // JOB TYPE BONUS

      if (job.jobType) {
        score += 3;
      }

      //   SALARY BONUS

      if (job.salary && job.salary >0) {
        score += 2;
      }

      //position

      if (job.position && job.position > 10) {
        score += 5;
      }

      if (job.salary && job.salary>= user.expectedSalary){
        score +=10;
      }

      if (job.salary && job.salary < user.expectedSalary){
        score -=5;
      }

      return {
        job,
        score,
        matchedSkills
      };
    });

    // Sort by highest score
    recommendations.sort((a, b) => b.score - a.score);

    res.status(200).json({
      success: true,
      recommendations
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Job recommendation failed"
    });
  }
};
