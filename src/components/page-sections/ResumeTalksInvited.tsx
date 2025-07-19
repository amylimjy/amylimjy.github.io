
import React from 'react'
import { ResumeSectionTitle } from './ResumeSectionTitle'
import jsonData from "@/../content/talks.json"

export const ResumeTalksInvited = (): React.JSX.Element => {
    return (
        <div className="flex-2 overflow-wrap">
            <ResumeSectionTitle title="TALKS GIVEN" />
            {jsonData.map((item, index) =>
                <div key={index}>
                    {item.location} | {item.mmmyyyy}
                </div>
            )}
        </div>
    )
}
