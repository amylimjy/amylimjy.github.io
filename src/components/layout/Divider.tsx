import React from 'react'

interface DividerProps extends React.ComponentPropsWithRef<"div"> {
    direction?: "horizontal" | "vertical",
    className?: string
}

export const Divider = ({direction = "horizontal", className = ""}: DividerProps ): React.JSX.Element => {
    return (
        direction === "horizontal" 
        ? <hr className={`my-4 h-0.5 ${className}`} /> 
        : <div className={`mx-4 w-0.5 self-stretch ${className}`}></div>
    )
}
