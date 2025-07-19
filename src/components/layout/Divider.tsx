import React from 'react'

export const Divider = ({direction = "horizontal"} ): React.JSX.Element => {
    return (
        direction === "horizontal" 
        ? <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" /> 
        : <div className="mx-4 inline-block w-0.5 self-stretch bg-gray-300"></div>
    )
}
