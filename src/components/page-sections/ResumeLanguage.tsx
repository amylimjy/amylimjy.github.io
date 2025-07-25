
import React from 'react'
import { ResumeSectionTitle } from './ResumeSectionTitle'
import jsonData from "@/../content/language.json"

export const ResumeLanguage = (): React.JSX.Element => {
    return (
        <div className="mb-8">
            <ResumeSectionTitle title="LANGUAGE" />
            {jsonData.map((item, index) =>
                <div key={index} className="ml-4 mb-2">
                    {item.language}
                </div>
            )}
        </div>
    )
}
