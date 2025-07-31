import React from 'react'
import { BasePage } from '@/components/layout/BasePage';
import { Headline } from '@/components/page-sections/Headline';
import { Introduction } from '@/components/page-sections/Introduction';
import { Divider } from '@/components/layout/Divider';
import { Resume } from '@/components/page-sections/Resume';
import { ScrollBackToTopButton } from '@/components/action/ScrollBackToTopButton';

export const HomePage = (): React.JSX.Element => {
    return (
        <>
            <BasePage>
                <div className="text-black">
                    <div id="resume-container" className="flex flex-col">
                        <Headline />
                        <Divider className="bg-gray-400" />
                        <Introduction />
                        <Divider className="bg-gray-400" />
                        <Resume />
                    </div>
                </div>
            </BasePage>
            <ScrollBackToTopButton />
        </>
    )
}