import React from "react";
import { ResumeSectionTitle } from "./ResumeSectionTitle";
import jsonData from "@/../content/employment.json";

export const ResumeEmployment = (): React.JSX.Element => {
  return (
    <div className="flex-1 mb-8">
      <ResumeSectionTitle title="EMPLOYMENT" />
      {jsonData.map((item, index) => (
        <div key={index} className="flex justify-between mb-2">
          <div className={`flex-1 mx-4 ${item.end.toLowerCase() === "present" ? "font-bold" : ""}`}>
            {item.title}, {item.employer}
          </div>
          <div className={`text-left max-w-48 mx-4 ${item.end.toLowerCase() === "present" ? "font-bold" : ""}`}>
            {item.location} | {item.start} - {item.end}
          </div>
        </div>
      ))}
    </div>
  );
};
