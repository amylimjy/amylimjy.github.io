import React from 'react'
import { Divider } from '../layout/Divider';

export const Headline = (): React.JSX.Element => {

  const createClass = () => "text-black";

  return (
    <div className="flex flex-row justify-between">
      <div className="text-h3 text-blue-800">Amy J. Lim</div>
      <div className="flex flex-row">
        <Divider direction="vertical"/>
        <ul>
          <li><a href="mailto:amy.lim@murdoch.edu.au" className={createClass()}>amy.lim@murdoch.edu.au</a></li>
          <li><a href="https://orcid.org/0000-0001-6454-2472" className={createClass()} target="_blank">0000-0001-6454-2472</a></li>
          <li><a href="https://scholar.google.com.sg/citations?user=DsDrHlkAAAAJ&hl=en" className={createClass()} target="_blank">Google Scholar</a></li>
        </ul>
      </div>

    </div>
  )
}
