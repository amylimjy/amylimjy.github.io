import React from "react";
import { ResumeSectionTitle } from "./ResumeSectionTitle";
import jsonData from "@/../content/conference.json";

export const ResumeConference = (): React.JSX.Element => {
  return (
    <div className="flex-1">
      <ResumeSectionTitle title="CONFERENCE" />
      {jsonData.map((item, index) => (
        <div key={index} className="grid grid-cols-4 my-2">
          <div className={`col-span-3 col-start-1 text-left ml-4`}>
            {item.speakers}, {item.title}
          </div>
          <div className={`col-start-4 text-right mr-4 text-xs`}>
            {item.year}
          </div>
        </div>
      ))}
    </div>
  );
};
