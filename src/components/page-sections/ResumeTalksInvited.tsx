
import React from 'react'
import { ResumeSectionTitle } from './ResumeSectionTitle'
import jsonData from "@/../content/talks.json"

export const ResumeTalksInvited = (): React.JSX.Element => {
    return (
        <div className="mb-8">
            <ResumeSectionTitle title="TALKS GIVEN" />
            {jsonData.map((item, index) =>
                <div key={index} className="ml-4 mb-2">
                    {item.location} | {item.date}
                </div>
            )}
        </div>
    )
}
