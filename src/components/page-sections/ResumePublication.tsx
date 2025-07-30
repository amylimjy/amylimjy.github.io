import React from "react";
import { ResumeSectionTitle } from "./ResumeSectionTitle";
import jsonData from "@/../content/publication.json";
import { ResumeSectionSubtitle } from "./ResumeSectionSubtitle";
import { constructAuthorsString } from "@/utils/StringUtils";

interface JournalEntry {
  authors: string[];
  title: string;
  year?: string;
  journal: string;
  link?: string;
}

interface JournalData {
  journal: JournalEntry[];
}

interface ChapterEntry {
  authors: string[];
  title: string;
  year?: string;
  book: string;
  publisher: string;
}

interface ChapterData {
  chapters: ChapterEntry[];
}

interface MediaEntry {
  authors: string[];
  title: string;
  paper: string;
  date: string;
  link?: string;
}

interface MediaData {
  media: MediaEntry[];
}

export const ResumePublication = (): React.JSX.Element => {
  const { journal }: JournalData = jsonData;
  const { chapters }: ChapterData = jsonData;
  const { media }: MediaData = jsonData;

  return (
    <div className="flex-1 mb-8">
      <ResumeSectionTitle title="PUBLICATIONS" />
      {journal.length > 0 && <ResumeSectionSubtitle subtitle="Journal"/>}
      {journal.map((item, index) => (
        <div key={index} className="-indent-8 pl-2 my-2">
          <div className="pl-8 mx-4">
            {item.authors.map((author, index) => constructAuthorsString(author, item.authors, index))} {item.year && `(${item.year}).`} {item.title} {item.journal} {item.link && <a href={item.link} target="_blank">[Paper]</a>}
          </div>
        </div>
      ))}

      {chapters.length > 0 && <ResumeSectionSubtitle subtitle="Chapters"/>}
      {chapters.map((item, index) => (
        <div key={index} className="-indent-8 pl-2 my-2">
          <div className="pl-8 mx-4">
            {item.authors.map((author, index) => constructAuthorsString(author, item.authors, index))} {item.year && `(${item.year}).`} {item.title} {item.book} {item.publisher}
          </div>
        </div>
      ))}

      {media.length > 0 && <ResumeSectionSubtitle subtitle="Media Articles"/>}
      {media.map((item, index) => (
        <div key={index} className="-indent-8 pl-2 my-2">
          <div className="pl-8 mx-4">
            {item.authors.map((author, index) => constructAuthorsString(author, item.authors, index))} {item.title} {item.paper} {item.date} {item.link && <a href={item.link} target="_blank">[Link]</a>}
          </div>
        </div>
      ))}
    </div>
  );
};
