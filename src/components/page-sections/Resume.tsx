import React from "react";
import { ResumeEmployment } from "@/components/page-sections/ResumeEmployment";
import { ResumeEducation } from "@/components/page-sections/ResumeEducation";
import { ResumeTalksInvited } from "@/components/page-sections/ResumeTalksInvited";
import { Divider } from "@/components/layout/Divider";

export const Resume = (): React.JSX.Element => {
  return (
    <div id="resume-container" className="flex">
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="flex-1">
          <ResumeEmployment />
          <ResumeEducation />
        </div>
        <Divider direction="vertical" className="bg-gray-200" />
        <div className="min-w-64">
          <ResumeTalksInvited />
        </div>
      </div>
    </div>
  );
};
