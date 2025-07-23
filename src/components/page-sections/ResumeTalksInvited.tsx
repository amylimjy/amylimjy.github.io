
import React from 'react'
import { ResumeSectionTitle } from './ResumeSectionTitle'
import jsonData from "@/../content/talks.json"

export const ResumeTalksInvited = (): React.JSX.Element => {
    return (
        <div className="overflow-wrap mb-8">
            <ResumeSectionTitle title="TALKS GIVEN" />
            {jsonData.map((item, index) =>
                <div key={index} className="ml-4">
                    {item.location} | {item.mmmyyyy}
                </div>
            )}
        </div>
    )
}
