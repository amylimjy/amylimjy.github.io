import React from 'react'
import { Divider } from '../layout/Divider'

interface ResumeSectionTitleProps extends React.ComponentPropsWithRef<"div"> {
    title: string
}

export const ResumeSectionTitle = ({ title }: ResumeSectionTitleProps): React.JSX.Element => {
    return (
        <div className="flex flex-row">
            <Divider direction="vertical" className="w-1 bg-blue-800"/>
            <div className="text-h5 text-blue-800 font-bold">{title}</div>
        </div>
    )
}
