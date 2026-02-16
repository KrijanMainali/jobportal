export default function TemplateTwo({ resumeData }) {
  if (!resumeData) return null;

  return (
    <div
      id="resume-preview"
      className="pt-10 flex w-198.5 min-h-280.75 mx-auto bg-white text-black border"
    >

      {/* Left Column */}
      <div className="w-1/3 bg-gray-100 p-6 flex flex-col items-center">
        {resumeData.photo && (
          <img
            src={resumeData.photo}
            className="w-32 h-32 rounded-full mb-4"
            alt="Profile"
          />
        )}
        <h2 className="font-bold text-lg">Contact</h2>
        <p className="text-sm mt-1">{resumeData.email}</p>
        <p className="text-sm">{resumeData.phone}</p>
        <p className="text-sm">{resumeData.address}</p>

        <h2 className="font-bold text-lg mt-4">Skills</h2>
        <p className="text-sm">{resumeData.skills}</p>
      </div>

      {/* Right Column */}
      <div className="w-2/3 p-6">
        <h1 className="text-3xl font-bold">{resumeData.fullName}</h1>
        <p className="mt-2 mb-4">{resumeData.summary}</p>

        <h2 className="font-semibold text-lg">Education</h2>
        {resumeData.education?.map((edu, i) => (
          <p key={i}>
            <strong>{edu.degree}</strong> - {edu.institute} ({edu.year})
          </p>
        ))}

        <h2 className="font-semibold text-lg mt-4">Experience</h2>
        {resumeData.experience?.map((exp, i) => (
          <p key={i}>
            <strong>{exp.role}</strong> - {exp.company} ({exp.duration})
          </p>
        ))}
      </div>
    </div>
  );
}
