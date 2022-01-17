import React from "react";
import ReactMarkdown from "react-markdown";

const markdown = `
## Work in progress...
# Here I will display charts with hourly data`;

export const History: React.FC = () => {
  return <ReactMarkdown children={markdown} />;
};
