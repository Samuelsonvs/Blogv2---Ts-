import React from 'react';
import { notionElementStyle } from "@/data/notionElements";
import Image from "next/image";

const NotionElementGenerator = (element:any) =>  {
    const type = element.type
    const content = element[type]?.text[0]?.text.content
    switch (type) {
        case "paragraph":
          return (
            <p className={`${notionElementStyle[type]}`}>
              {content}
            </p>
          );
        case "image":
            return (
                <Image src={element[type].file.url} layout="fill" alt={"notion-image"} /> 
            )
        case "heading_1":
          return (
            <h1 className="text-5xl">
              {content}
            </h1>
          );
        case "heading_2":
          return (
            <h2 className={`${notionElementStyle[type]}`}>
              {content}
            </h2>
          );
        case "heading_3":
          return (
            <h3 className={`${notionElementStyle[type]}`}>
              {content}
            </h3>
          );
        case "bulleted_list_item":
        case "numbered_list_item":
          return (
            <li className={`${notionElementStyle[type]}`}>
              {content}
            </li>
          );
        case "to_do":
          return (
            <div>
              <label htmlFor={element.id}>
                <input type="checkbox" id={element.id} defaultChecked={element[type]?.checked} />
                {content}
              </label>
            </div>
          );
        default:
          return `❌ Unsupported block (${
            type === "unsupported" ? "unsupported by Notion API" : type
          })`;
    }
                
   
    
}      

export default NotionElementGenerator