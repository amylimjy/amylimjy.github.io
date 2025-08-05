import React from "react";

export const Introduction = (): React.JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="py-4 md:py-0 px-0 md:px-4 hidden" aria-label="profile photo"></div>
      <div className="text-justify">
        As an academic researcher specializing in evolutionary social psychology, I have been deeply committed to understanding and addressing critical issues in human behaviour and social dynamics through the lens of evolutionary principles.
      </div>
    </div>
  );
};
