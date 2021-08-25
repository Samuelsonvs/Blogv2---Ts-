import React from 'react';
import Image from "next/image";

interface NotionElementGeneratorTypes {
  [key: string]: any;
    variable: {
      text : [
        {
          text: {
            content: string
          }
        }
      ]
    };
    image: {
      file : {
        url: string
      }
    };
    type: string
}

const NotionElementGenerator = (element : NotionElementGeneratorTypes) =>  {
    const type = element.type
    const content = element.type === "unsupported" ? "unsupported" : element.type === "image" ? "image" : element[type]?.text[0]?.text?.content
    switch (type) {
        case "paragraph":
          return (
            <p className="py-5 text-xl">
              {content}
            </p>
          );
        case "image":
            return (
                <Image src={element[type].file.url} width={250} height={250} alt={"notion-image"} /> 
            )
        case "heading_1":
          return (
            <h1 className="text-5xl">
              {content}
            </h1>
          );
        case "heading_2":
          return (
            <h2 className="text-3xl">
              {content}
            </h2>
          );
        case "heading_3":
          return (
            <h3 className="text-2xl">
              {content}
            </h3>
          );
        case "bulleted_list_item":
        case "numbered_list_item":
          return (
            <li className="">
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