import React from "react";
import { ResumeSectionTitle } from "./ResumeSectionTitle";
import jsonData from "@/../content/award.json";

export const ResumeAward = (): React.JSX.Element => {
  return (
    <div className="flex-1 mb-8">
      <ResumeSectionTitle title="AWARD & HONOR" />
      {jsonData.map((item, index) => (
        <div key={index} className="grid grid-cols-4">
          <div className={`col-span-3 col-start-1 text-left ml-4`}>
            {item.name}, {item.by}
          </div>
          <div className={`col-start-4 text-right mr-4 text-xs`}>
            {item.year}
          </div>
        </div>
      ))}
    </div>
  );
};
