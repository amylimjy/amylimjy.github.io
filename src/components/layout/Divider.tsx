import React from 'react'

interface DividerProps extends React.ComponentPropsWithRef<"div"> {
    direction?: "horizontal" | "vertical",
    shade?: "darker" | "lighter",
    className?: string
}

export const Divider = ({direction = "horizontal", shade = "darker", className = ""}: DividerProps ): React.JSX.Element => {
    return (
        direction === "horizontal" 
        ? <hr className={`my-4 h-0.5 ${shade === "darker" ? "bg-gray-400" : "bg-gray-200"} ${className}`} /> 
        : <div className={`mx-4 w-0.5 self-stretch ${shade === "darker" ? "bg-gray-400" : "bg-gray-200"} ${className}`}></div>
    )
}
