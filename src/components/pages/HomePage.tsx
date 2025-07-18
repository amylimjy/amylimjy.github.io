import React from 'react'
import { BasePage } from '@/components/layout/BasePage';
import { Headline } from '@/components/page-sections/Headline';
import { Profile } from '@/components/page-sections/Profile';

export const HomePage = (): React.JSX.Element => {
    return (
        <BasePage>
            <div className="text-black">
                <div id="resume-container" className="flex flex-col">
                    <Headline />
                    <Profile />
                </div>
            </div>
        </BasePage>
    )
}