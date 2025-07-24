import React from "react";
import { ResumeSectionTitle } from "./ResumeSectionTitle";
import jsonData from "@/../content/publication.json";

export const ResumePublication = (): React.JSX.Element => {

  const isLastItem = (array: string[], index: number) => {
    return index === array.length - 1;
  }

  const isTheOnlyItem = (array: string[]) => {
    return array.length === 1;
  }

  const hasMoreAuthor = (array: string[], index: number) => {
    return index < array.length - 1;
  }

  const isSecondLastItem = (array: string[], index: number) => {
    return index === array.length - 2;
  }

  const constructAuthorsString = (author: string, array: string[], index: number) => {
    return (<>
      {isLastItem(array, index) && !isTheOnlyItem(array) && <span> & </span>}
      {author === "Lim, A. J." ? <span className="font-bold">{author}</span> : <span>{author}</span>}
      {hasMoreAuthor(array, index) && !isSecondLastItem(array, index) && <span>, </span>}
    </>)
  }

  return (
    <div className="flex-1 mb-8">
      <ResumeSectionTitle title="PUBLICATIONS" />
      {jsonData.map((item, index) => (
        <div key={index} className="my-2">
          <div className="mx-4">
            {item.authors.map((author, index) => constructAuthorsString(author, item.authors, index))} ({item.year}) {item.title}. {item.link && <a href={item.link} target="_blank">[Paper]</a>}
          </div>
        </div>
      ))}
    </div>
  );
};
