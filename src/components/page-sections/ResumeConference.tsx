import React from "react";
import { ResumeSectionTitle } from "./ResumeSectionTitle";
import jsonData from "@/../content/conference.json";
import { constructAuthorsString } from "@/utils/StringUtils";

interface ConferenceEntry {
  speakers: string[];
  title: string;
  organization: string;
  location?: string;
  date: string;
}

export const ResumeConference = (): React.JSX.Element => {

  const conferences: ConferenceEntry[] = jsonData;

  return (
    <div className="flex-1">
      <ResumeSectionTitle title="CONFERENCE" />
      {conferences.map((item, index) => (
        <div key={index} className="my-4">
          <div className="mx-4">
            {item.speakers.map((author, index) => constructAuthorsString(author, item.speakers, index))} {item.title} {item.date && `(${item.date}).`} {`${item.organization} ${item.location}`}
          </div>
        </div>
      ))}
    </div>
  );
};
