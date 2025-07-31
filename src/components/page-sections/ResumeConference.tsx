import React from "react";
import { ResumeSectionTitle } from "./ResumeSectionTitle";
import jsonData from "@/../content/conference.json";
import { constructAuthorsString } from "@/utils/StringUtils";

interface ConferenceEntry {
  collaborators: string[];
  title: string;
  organization: string;
  location?: string;
  date: string;
}

export const ResumeConference = (): React.JSX.Element => {

  const conferences: ConferenceEntry[] = jsonData;

  return (
    <div className="flex-1 mb-8">
      <ResumeSectionTitle title="CONFERENCE" />
      {conferences.map((item, index) => (
        <div key={index} className="my-4">
          <div className="mx-4">
            {item.collaborators.map((author, index) => constructAuthorsString(author, item.collaborators, index))} {item.title} {item.date && `(${item.date}).`} {`${item.organization} ${item.location}`}
          </div>
        </div>
      ))}
    </div>
  );
};
