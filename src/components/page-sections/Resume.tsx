import React from 'react'
import { ResumeEmployment } from '@/components/page-sections/ResumeEmployment'
import { ResumeTalksInvited } from './ResumeTalksInvited'

export const Resume = (): React.JSX.Element => {
  return (
    <div id="resume-container" className="flex">
      <div className="flex flex-col md:flex-row flex-1">
        <ResumeEmployment />
        <ResumeTalksInvited />
      </div>
    </div>
  )
}
