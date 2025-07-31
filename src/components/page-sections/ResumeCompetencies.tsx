
import React from 'react'
import { ResumeSectionTitle } from '../labels/ResumeSectionTitle'
import jsonData from "@/../content/competencies.json"

export const ResumeCompetencies = (): React.JSX.Element => {
    return (
        <div className="mb-8">
            <ResumeSectionTitle title="COMPETENCIES" />
            {jsonData.map((item, index) =>
                <div key={index} className="mx-4 mb-2 md:max-w-72">
                    {item}
                </div>
            )}
        </div>
    )
}
