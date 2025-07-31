import React from 'react'
import { ResumeSectionTitle } from '@/components/labels/ResumeSectionTitle'
import jsonData from "@/../content/teachingAssistantship.json"

export const ResumeTeachingAssistantship = (): React.JSX.Element => {
  return (
    <div className="mb-8">
            <ResumeSectionTitle title="TEACHING ASSISTANTSHIP" />
            {jsonData.map((item, index) =>
                <div key={index} className="mx-4 mb-2 md:max-w-72">
                    {item}
                </div>
            )}
        </div>
  )
}
