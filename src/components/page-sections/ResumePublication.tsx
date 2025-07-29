import React from "react";
import { ResumeSectionTitle } from "./ResumeSectionTitle";
import jsonData from "@/../content/publication.json";
import { ResumeSectionSubtitle } from "./ResumeSectionSubtitle";

interface JournalEntry {
  authors: string[];
  title: string;
  year: string;
  journal: string;
  link: string;
}

interface JournalData {
  journal: JournalEntry[];
}

interface ChapterEntry {
  authors: string[];
  title: string;
  year: string;
}

interface ChapterData {
  chapters: ChapterEntry[];
}

export const ResumePublication = (): React.JSX.Element => {

  const { journal }: JournalData = jsonData;
  const { chapters }: ChapterData = jsonData;
  
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
      {journal.length > 0 && <ResumeSectionSubtitle subtitle="Journal"/>}
      {journal.map((item, index) => (
        <div key={index} className="my-2">
          <div className="mx-4">
            {item.authors.map((author, index) => constructAuthorsString(author, item.authors, index))} ({item.year}) {item.title}. {item.link && <a href={item.link} target="_blank">[Paper]</a>}
          </div>
        </div>
      ))}
      {chapters.length > 0 && <ResumeSectionSubtitle subtitle="Chapters"/>}
      {chapters.map((item, index) => (
        <div key={index} className="my-2">
          <div className="mx-4">
            {item.authors.map((author, index) => constructAuthorsString(author, item.authors, index))} ({item.year}) {item.title}.
          </div>
        </div>
      ))}
    </div>
  );
};
