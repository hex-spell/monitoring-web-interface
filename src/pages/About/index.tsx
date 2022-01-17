import React from "react";
import ReactMarkdown from "react-markdown";

const markdown = `
## ModularNFT
# Hydroponics management system
[Work in progress]
- [Trello board](https://trello.com/b/9DvhFx8T/hidroponics)

Made by Agustin Favoretti
`;

export const About: React.FC = () => {
  return <ReactMarkdown children={markdown} />;
};

