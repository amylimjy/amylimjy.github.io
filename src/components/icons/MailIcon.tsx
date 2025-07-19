import React from 'react'

interface MailIconProps extends React.ComponentPropsWithoutRef<"svg"> { }

export const MailIcon = ({ className = "" }: MailIconProps): React.JSX.Element => {
    return (
        <svg className={`${className}`} width="20" height="20" viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"></path>
            </g>
        </svg>
    )
}
