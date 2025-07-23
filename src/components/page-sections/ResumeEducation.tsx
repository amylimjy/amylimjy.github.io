import React from 'react'
import { ResumeSectionTitle } from './ResumeSectionTitle'
import jsonData from "@/../content/education.json";

export const ResumeEducation = (): React.JSX.Element => {
  return (
    <div className="flex-1 mb-8">
      <ResumeSectionTitle title="EDUCATION" />
      {jsonData.map((item, index) => (
        <div key={index} className="flex justify-between mb-2">
          <div className={`flex-1 mx-4 ${item.end.toLowerCase() === "present" ? "font-bold" : ""}`}>
            {item.program}, {item.school}
          </div>
          <div className={`text-left max-w-48 mx-4 ${item.end.toLowerCase() === "present" ? "font-bold" : ""}`}>
            {item.location} | {item.start} - {item.end}
          </div>
        </div>
      ))}
    </div>
  )
}
