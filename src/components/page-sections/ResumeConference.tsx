import React from "react";
import { ResumeSectionTitle } from "./ResumeSectionTitle";
import jsonData from "@/../content/conference.json";

export const ResumeConference = (): React.JSX.Element => {
  return (
    <div className="flex-1">
      <ResumeSectionTitle title="CONFERENCE" />
      {jsonData.map((item, index) => (
        <div key={index} className="flex justify-between mb-2">
          <div className={`flex-1 mx-4`}>
            {item.speakers}, {item.title}
          </div>
          <div className={`text-left max-w-48 mx-4`}>
            {item.year}
          </div>
        </div>
      ))}
    </div>
  );
};
