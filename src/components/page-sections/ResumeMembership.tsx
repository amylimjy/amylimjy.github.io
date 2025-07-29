import React from 'react'
import { ResumeSectionTitle } from '@/components/page-sections/ResumeSectionTitle'
import jsonData from "@/../content/membership.json"

export const ResumeMembership = (): React.JSX.Element => {
  return (
    <div className="mb-8">
            <ResumeSectionTitle title="MEMBERSHIP" />
            {jsonData.map((item, index) =>
                <div key={index} className="mx-4 mb-2">
                    {item}
                </div>
            )}
        </div>
  )
}
