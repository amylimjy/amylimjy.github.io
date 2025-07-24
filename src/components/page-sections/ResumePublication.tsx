import React from "react";
import { ResumeSectionTitle } from "./ResumeSectionTitle";
import jsonData from "@/../content/publication.json";

export const ResumePublication = (): React.JSX.Element => {
  return (
    <div className="flex-1 mb-8">
      <ResumeSectionTitle title="PUBLICATIONS" />
      {jsonData.map((item, index) => (
        <div key={index} className="grid grid-cols-4">
          <div className="mx-4">
            {item.authors}, {item.title}
            {item.link &&
              <a href={item.link} target="_blank">
                [Paper]
              </a>
            }
          </div>
        </div>
      ))}
    </div>
  );
};
