import TemplateOne from "./TemplateOne";
import TemplateTwo from "./TemplateTwo";

const ResumePreview = ({ resumeData }) => {
  if (!resumeData) return null;

  switch (resumeData.template) {
    case "two":
      return <TemplateTwo resumeData={resumeData} />;

    case "one":
    default:
      return <TemplateOne resumeData={resumeData} />;
  }
};

export default ResumePreview;
