import React from 'react'
import { Divider } from '../layout/Divider';

export const Headline = (): React.JSX.Element => {

  const createClass = () => "text-black hover:text-blue-500 text-xs";

  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div>
        <div className="text-h2 text-blue-800">Amy J. Lim</div>
        <div className="text-h5">Evolutionary and Social Psychologist</div>
      </div>
      <div className="flex flex-row">
        <Divider direction="vertical" shade="lighter" className="hidden md:block"/>
        <ul>
          <li className="my-2"><a href="mailto:amy.lim@murdoch.edu.au" className={createClass()}>amy.lim@murdoch.edu.au</a></li>
          <li className="my-2"><a href="https://orcid.org/0000-0001-6454-2472" className={createClass()} target="_blank">0000-0001-6454-2472</a></li>
          <li className="my-2"><a href="https://scholar.google.com.sg/citations?user=DsDrHlkAAAAJ&hl=en" className={createClass()} target="_blank">Google Scholar</a></li>
        </ul>
      </div>

    </div>
  )
}
