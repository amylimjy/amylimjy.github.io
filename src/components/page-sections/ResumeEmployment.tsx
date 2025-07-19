import React from 'react'
import { ResumeSectionTitle } from './ResumeSectionTitle'
import jsonData from "@/../content/employment.json"

export const ResumeEmployment = (): React.JSX.Element => {
  return (
    <div className="flex-1">
        <ResumeSectionTitle title="EMPLOYMENT HISTORY"/>
        {jsonData.map((item, index) =>
                <div key={index}>
                    {item.employer}
                </div>
            )}
    </div>
  )
}
