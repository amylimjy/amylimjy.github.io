import React from "react";
import { Divider } from "@/components/layout/Divider";
import { ResumeEmployment } from "@/components/page-sections/ResumeEmployment";
import { ResumeEducation } from "@/components/page-sections/ResumeEducation";
import { ResumeTalksInvited } from "@/components/page-sections/ResumeTalksInvited";
import { ResumePublication } from "@/components/page-sections/ResumePublication";
import { ResumeAward } from "@/components/page-sections/ResumeAward";
import { ResumeConference } from "@/components/page-sections/ResumeConference";
import { ResumeLanguage } from "@/components/page-sections/ResumeLanguage";
import { ResumeMembership } from "@/components/page-sections/ResumeMembership";

export const Resume = (): React.JSX.Element => {
  return (
    <div id="resume-container" className="flex">
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="flex-1">
          <ResumeEmployment />
          <ResumeEducation />
          <ResumeAward />
          <ResumePublication />
          <ResumeConference />
        </div>
        <Divider direction="vertical" className="bg-gray-200" />
        <div className="min-w-64">
          <ResumeTalksInvited />
          <ResumeLanguage />
          <ResumeMembership />
        </div>
      </div>
    </div>
  );
};
