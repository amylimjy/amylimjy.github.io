import React from 'react'
import { ResumeSectionTitle } from './ResumeSectionTitle'
import jsonData from "@/../content/education.json";

export const ResumeEducation = (): React.JSX.Element => {
  return (
    <div className="flex-1 mb-8">
      <ResumeSectionTitle title="EDUCATION" />
      {jsonData.map((item, index) => (
        <div key={index} className="grid grid-cols-4 my-2">
          <div className={`col-span-3 col-start-1 text-left ml-4 ${item.end.toLowerCase() === "present" ? "font-bold" : ""}`}>
            {item.program}, {item.school}
          </div>
          <div className={`col-start-4 text-right mr-4 text-xs ${item.end.toLowerCase() === "present" ? "font-bold" : ""}`}>
            {item.location} | {item.start} - {item.end}
          </div>
        </div>
      ))}
    </div>
  )
}
