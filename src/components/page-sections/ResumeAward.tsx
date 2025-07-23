import React from "react";
import { ResumeSectionTitle } from "./ResumeSectionTitle";
import jsonData from "@/../content/award.json";

export const ResumeAward = (): React.JSX.Element => {
  return (
    <div className="flex-1 mb-8">
      <ResumeSectionTitle title="AWARD & HONOR" />
      {jsonData.map((item, index) => (
        <div key={index} className="flex justify-between mb-2">
          <div className={`flex-1 mx-4`}>
            {item.name}, {item.by}
          </div>
          <div className={`text-left max-w-48 mx-4`}>
            {item.year}
          </div>
        </div>
      ))}
    </div>
  );
};
