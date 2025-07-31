
import React from 'react'
import { ResumeSectionTitle } from '../labels/ResumeSectionTitle'
import jsonData from "@/../content/lecture.json"

interface LectureEntry {
    topic: string;
    date: string;
}

export const ResumeGuestLecture = (): React.JSX.Element => {

    const lectures: LectureEntry[] = jsonData;

    return (
        <div className="flex-1 mb-8">
            <ResumeSectionTitle title="GUEST LECTURES/INVITED SPEAKER" />
            {lectures.map((item, index) =>
                <div key={index} className="grid grid-cols-4 my-2">
                    <div key={index} className="col-span-3 col-start-1 text-left ml-4">
                        {item.topic}
                    </div>
                    <div className="col-start-4 text-right mr-4 text-xs">
                        {item.date}
                    </div>
                </div>
            )}
        </div>
    )
}
