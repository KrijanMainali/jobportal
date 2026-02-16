export default function TemplateOne({ resumeData }) {
  if (!resumeData) return null;

  return (
    <div
      id="resume-preview"
      className="p-8 pt-15 bg-white w-198.5 min-h-280.75 mx-auto text-black"
    >
      <div className="text-center">
        {resumeData.photo && (
          <img
            src={resumeData.photo}
            className="w-24 h-24 rounded-full mx-auto mb-4"
            alt="Profile"
          />
        )}
        <h1 className="text-3xl font-bold">{resumeData.fullName}</h1>
        <p className="text-sm mt-1">
          {resumeData.email} | {resumeData.phone}
        </p>
        <p className="text-sm">{resumeData.address}</p>
      </div>

      <hr className="my-4 border-gray-300" />

      <h2 className="font-semibold text-lg">Summary</h2>
      <p>{resumeData.summary}</p>

      <h2 className="font-semibold text-lg mt-4">Education</h2>
      {resumeData.education?.map((edu, i) => (
        <p key={i}>
          <strong>{edu.degree}</strong>, {edu.institute} ({edu.year})
        </p>
      ))}

      <h2 className="font-semibold text-lg mt-4">Experience</h2>
      {resumeData.experience?.map((exp, i) => (
        <p key={i}>
          <strong>{exp.role}</strong> - {exp.company} ({exp.duration})
        </p>
      ))}

      <h2 className="font-semibold text-lg mt-4">Skills</h2>
      <p>{resumeData.skills}</p>
    </div>
  );
}
