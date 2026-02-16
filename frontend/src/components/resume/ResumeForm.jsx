import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import NavBar from "../shared/NavBar";

export default function ResumeForm({ resumeData, setResumeData }) {
  const generateId = () => Math.random().toString(36).substr(2, 9);

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeData({ ...resumeData, photo: reader.result });
      };
      reader.readAsDataURL(file); // base64 for puppeteer
    }
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [...(resumeData.education || []), { id: generateId(), degree: "", institute: "", year: "" }],
    });
  };

  const removeEducation = (id) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((edu) => edu.id !== id),
    });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [...(resumeData.experience || []), { id: generateId(), company: "", role: "", duration: "" }],
    });
  };

  const removeExperience = (id) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter((exp) => exp.id !== id),
    });
  };

  const handleDownload = async () => {
    const element = document.getElementById("resume-preview");

    const html = `
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
          ${element.outerHTML}
        </body>
      </html>
    `;

    const response = await fetch("http://localhost:8000/api/pdf/generate-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ html }),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${resumeData.fullName || "resume"}.pdf`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar fixed at top */}
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      {/* Main content with padding to prevent overlap with navbar */}
      <div className="pt-10 flex justify-center px-4 " >
        <div className="space-y-4 bg-white p-6 rounded-xl shadow w-full max-w-3xl">
          <h1 className="text-2xl font-bold">Enter Your Details Here</h1>

          {/* Basic Info */}
          <Input name="fullName" placeholder="Full Name" value={resumeData.fullName || ""} onChange={handleChange} />
          <Input name="email" placeholder="Email" value={resumeData.email || ""} onChange={handleChange} />
          <Input name="phone" placeholder="Phone" value={resumeData.phone || ""} onChange={handleChange} />
          <Input name="address" placeholder="Address" value={resumeData.address || ""} onChange={handleChange} />
          <Textarea name="summary" placeholder="Professional Summary" value={resumeData.summary || ""} onChange={handleChange} />
          <Input type="file" accept="image/*" onChange={handlePhotoUpload} />

          {/* Education */}
          <h3 className="font-semibold">Education</h3>
          {(resumeData.education || []).map((edu) => (
            <div key={edu.id} className="space-y-2 border p-2 rounded">
              <Input
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => {
                  const updated = resumeData.education.map((item) =>
                    item.id === edu.id ? { ...item, degree: e.target.value } : item
                  );
                  setResumeData({ ...resumeData, education: updated });
                }}
              />
              <Input
                placeholder="Institute"
                value={edu.institute}
                onChange={(e) => {
                  const updated = resumeData.education.map((item) =>
                    item.id === edu.id ? { ...item, institute: e.target.value } : item
                  );
                  setResumeData({ ...resumeData, education: updated });
                }}
              />
              <Input
                placeholder="Year"
                value={edu.year}
                onChange={(e) => {
                  const updated = resumeData.education.map((item) =>
                    item.id === edu.id ? { ...item, year: e.target.value } : item
                  );
                  setResumeData({ ...resumeData, education: updated });
                }}
              />
              <Button variant="destructive" onClick={() => removeEducation(edu.id)}>Remove</Button>
            </div>
          ))}
          <Button onClick={addEducation}>Add Education</Button>

          {/* Experience */}
          <h3 className="font-semibold mt-4">Experience</h3>
          {(resumeData.experience || []).map((exp) => (
            <div key={exp.id} className="space-y-2 border p-2 rounded">
              <Input
                placeholder="Company"
                value={exp.company}
                onChange={(e) => {
                  const updated = resumeData.experience.map((item) =>
                    item.id === exp.id ? { ...item, company: e.target.value } : item
                  );
                  setResumeData({ ...resumeData, experience: updated });
                }}
              />
              <Input
                placeholder="Role"
                value={exp.role}
                onChange={(e) => {
                  const updated = resumeData.experience.map((item) =>
                    item.id === exp.id ? { ...item, role: e.target.value } : item
                  );
                  setResumeData({ ...resumeData, experience: updated });
                }}
              />
              <Input
                placeholder="Duration"
                value={exp.duration}
                onChange={(e) => {
                  const updated = resumeData.experience.map((item) =>
                    item.id === exp.id ? { ...item, duration: e.target.value } : item
                  );
                  setResumeData({ ...resumeData, experience: updated });
                }}
              />
              <Button variant="destructive" onClick={() => removeExperience(exp.id)}>Remove</Button>
            </div>
          ))}
          <Button onClick={addExperience}>Add Experience</Button>

          {/* Skills */}
          <Input name="skills" placeholder="Skills (comma separated)" value={resumeData.skills || ""} onChange={handleChange} />

          {/* Template selection */}
          <select
            className="border p-2 rounded w-full"
            value={resumeData.template || "one"}
            onChange={(e) => setResumeData({ ...resumeData, template: e.target.value })}
          >
            <option value="one">Professional Template</option>
            <option value="two">Modern Two Column</option>
          </select>

          {/* Download Button */}
          <Button className="mt-4" onClick={handleDownload}>
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
}
