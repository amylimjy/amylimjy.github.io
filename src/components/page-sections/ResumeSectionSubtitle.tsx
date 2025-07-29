import React from 'react'

interface ResumeSectionSubtitleProps extends React.ComponentPropsWithRef<"div"> {
    subtitle: string
}

export const ResumeSectionSubtitle = ({ subtitle }: ResumeSectionSubtitleProps): React.JSX.Element => {
    return (
        <div className="flex flex-row my-4 mx-4">
            <div className="text-h6 text-gray-800 font-bold">{subtitle}</div>
        </div>
    )
}
