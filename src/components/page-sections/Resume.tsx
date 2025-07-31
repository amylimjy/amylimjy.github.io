import React from "react";
import { Divider } from "@/components/layout/Divider";
import { ResumeEmployment } from "@/components/page-sections/ResumeEmployment";
import { ResumeEducation } from "@/components/page-sections/ResumeEducation";
import { ResumeGuestLecture } from "@/components/page-sections/ResumeGuestLecture";
import { ResumePublication } from "@/components/page-sections/ResumePublication";
import { ResumeGrants } from "@/components/page-sections/ResumeGrants";
import { ResumeConference } from "@/components/page-sections/ResumeConference";
import { ResumeLanguage } from "@/components/page-sections/ResumeLanguage";
import { ResumeMembership } from "@/components/page-sections/ResumeMembership";
import { ResumeMedia } from "@/components/page-sections/ResumeMedia";
import { ResumeCertification } from "@/components/page-sections/ResumeCertification";
import { ResumeJournalService } from "@/components/page-sections/ResumeJournalService";
import { ResumeConsultancyService } from "@/components/page-sections/ResumeConsultancyService";
import { ResumeTeachingAssistantship } from "@/components/page-sections/ResumeTeachingAssistantship";

export const Resume = (): React.JSX.Element => {
  return (
    <div id="resume-container" className="flex">
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="flex-1">
          <ResumeEmployment />
          <ResumeEducation />
          <ResumePublication />
          <ResumeConference />
          <ResumeGuestLecture />
          <ResumeGrants />
          <ResumeMedia />
        </div>
        <Divider direction="vertical" className="bg-gray-200" />
        <div className="min-w-64">
          <ResumeLanguage />
          <ResumeCertification />
          <ResumeMembership />
          <ResumeJournalService />
          <ResumeConsultancyService />
          <ResumeTeachingAssistantship />
        </div>
      </div>
    </div>
  );
};
