import { useState } from "react";
import ResumeForm from "@/components/resume/ResumeForm";
import ResumePreview from "@/components/resume/ResumePreview";

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    photo: null,
    education: [],
    experience: [],
    skills: "",
    template: "one"
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
      <ResumePreview resumeData={resumeData} />
    </div>
  );
}
