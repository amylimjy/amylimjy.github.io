import React from 'react'

export const Headline = (): React.JSX.Element => {
  return (
    <div className="flex flex-row justify-between">
        <div className="text-h3 text-blue-800">Amy J. Lim</div>
        <ul>
            <li><a href="mailto:amy.lim@murdoch.edu.au">amy.lim@murdoch.edu.au</a></li>
            <li><a href="https://orcid.org/0000-0001-6454-2472" target="_blank">0000-0001-6454-2472</a></li>
            <li><a href="https://scholar.google.com.sg/citations?user=DsDrHlkAAAAJ&hl=en" target="_blank">Google Scholar</a></li>
        </ul>
    </div>
  )
}
