import React from 'react'
import { Divider } from '@/components/layout/Divider';
import { GoogleIcon } from '@/components/icons/GoogleIcon';
import { MailIcon } from '@/components/icons/MailIcon';
import { OrcidIcon } from '../icons/OrcidIcon';

export const Headline = (): React.JSX.Element => {

  const createListItemClass = () => "flex my-2 items-center";
  const createAnchorClass = () => "flex-1 text-black hover:text-blue-800 text-xs";

  return (
    <div className="flex flex-col md:flex-row justify-between mt-4">
      <div className="ml-10">
        <div className="text-h2 text-blue-800 font-bold">Amy J. Lim</div>
        <div className="text-h5 italic">Evolutionary and Social Psychologist</div>
      </div>
      <div className="ml-10 md:ml-0 flex flex-row mr-20">
        <Divider direction="vertical" className="hidden md:block bg-gray-200" />
        <ul>
          <li className={createListItemClass()}>
            <MailIcon className="mx-1"/>
            <a href="mailto:amy.lim@murdoch.edu.au" className={createAnchorClass()}>
              amy.lim@murdoch.edu.au
            </a>
          </li>
          <li className={createListItemClass()}>
            <OrcidIcon className="mx-1"/>
            <a href="https://orcid.org/0000-0001-6454-2472" className={createAnchorClass()} target="_blank">
              0000-0001-6454-2472
            </a>
          </li>
          <li className={createListItemClass()}>
            <GoogleIcon className="mx-1"/>
            <a href="https://scholar.google.com.sg/citations?user=DsDrHlkAAAAJ&hl=en" className={createAnchorClass()} target="_blank">
              Google Scholar
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
