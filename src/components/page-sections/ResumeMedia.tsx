import React from "react";
import { ResumeSectionTitle } from "../labels/ResumeSectionTitle";
import jsonData from "@/../content/media.json";
import { ResumeSectionSubtitle } from "../labels/ResumeSectionSubtitle";
import { constructAuthorsString } from "@/utils/StringUtils";

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

export const ResumeMedia = (): React.JSX.Element => {
  const { media }: MediaData = jsonData;

  return (
    <div className="flex-1 mb-8">
      <ResumeSectionTitle title="MEDIA" />
      {media.length > 0 && <ResumeSectionSubtitle subtitle="Articles"/>}
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
