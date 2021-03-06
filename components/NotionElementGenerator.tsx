import React from "react";
import Image from "next/image";
import { shimmer, toBase64 } from "@/util/toBase64Blur";
import { NotionElementGeneratorTypes } from "@/interfaces/interface";
import SyntaxHighlighter from 'react-syntax-highlighter';
import docco from "@/styles/docco";

const NotionElementGenerator = (element: NotionElementGeneratorTypes) => {
  const type = element.type;
  const content =
    element.type === "unsupported"
      ? "unsupported"
      : element.type === "image"
      ? "image"
      : element[type]?.text[0]?.text?.content;
  const sizes = element.image?.caption?.[0]
    ? element.image.caption[0].text.content.split(",")
    : ["400", "500"];
  const codeBlock =
    element.type === "numbered_list_item"
      ? element[type]?.text[0]?.text?.content.split(",,,")
      : null;
  const codeType = codeBlock && codeBlock[0].trim();
  const code = codeBlock && codeBlock[1];
  switch (type) {
    case "paragraph":
      return (
        <div className="py-3 text-xl leading-8">
          <p>{content}</p>
        </div>
      );
    case "image":
      return (
        <div className="py-3">
          <Image
            src={element[type].file.url}
            className="rounded-xl"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(640, 427)
            )}`}
            width={sizes[0]}
            height={sizes[1]}
            alt={"notion-image"}
          />
        </div>
      );
    case "heading_1":
      return (
        <div className="text-5xl py-3">
          <h1>{content}</h1>
        </div>
      );
    case "heading_2":
      return (
        <div className="text-3xl py-3">
          <h2>{content}</h2>
        </div>
      );
    case "heading_3":
      return (
        <div className="text-2xl py-3">
          <h3>{content}</h3>
        </div>
      );
    case "bulleted_list_item":
      return (
        <ul className="py-3">
          <li>• {content}</li>
        </ul>
      );
    case "numbered_list_item":
      return (
        <div>
          <SyntaxHighlighter language={codeType} style={docco} className="bg-gray-200 dark:bg-gray-400 rounded-xl">
            {code}
          </SyntaxHighlighter>
        </div>
      );
    case "to_do":
      return (
        <div>
          <input
            type="checkbox"
            className="mr-2"
            id={element.id}
            defaultChecked={element[type]?.checked}
          />
          <label htmlFor={element.id}>{content}</label>
        </div>
      );
    default:
      return (
        <div className="py-3">
          {`❌ Unsupported block (${
            type === "unsupported" ? "unsupported by Notion API" : type
          })`}
        </div>
      );
  }
};

export default NotionElementGenerator;
