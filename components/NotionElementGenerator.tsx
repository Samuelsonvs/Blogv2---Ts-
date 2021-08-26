import React from 'react';
import Image from "next/image";
import { shimmer, toBase64 } from '@/util/toBase64Blur';

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
      },
      caption?: [
        {
          text: {
            content: string
          }
        }
      ]
    };
    type: string
}

const NotionElementGenerator = (element : NotionElementGeneratorTypes) =>  {
    const type = element.type
    const content = element.type === "unsupported" ? "unsupported" : element.type === "image" ? "image" : element[type]?.text[0]?.text?.content
    const sizes = element.image?.caption?.[0] ? element.image.caption[0].text.content.split(",") : ["400","500"]
    switch (type) {
        case "paragraph":
          return (
            <div className="py-3 text-xl">
              <p>
                {content}
              </p>
            </div>
          );
        case "image":
            return (
              <div className="py-3">
                <Image src={element[type].file.url} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(500, 334))}`} width={sizes[0]} height={sizes[1]} alt={"notion-image"} /> 
              </div>
            )
        case "heading_1":
          return (
            <div className="text-5xl py-3">
              <h1>
                {content}
              </h1>
            </div>
          );
        case "heading_2":
          return (
            <div className="text-3xl py-3">
              <h2>
                {content}
              </h2>
            </div>
          );
        case "heading_3":
          return (
            <div className="text-2xl py-3">
              <h3>
                {content}
              </h3>
            </div>
          );
        case "bulleted_list_item":
        case "numbered_list_item":
          return (
            <ul className="py-3">
              <li>
                {content}
              </li>
            </ul>
          );
        case "to_do":
          return (
            <div>
              <input type="checkbox" className="mr-2" id={element.id} defaultChecked={element[type]?.checked} />
              <label htmlFor={element.id}>
              {content}
              </label>
            </div>
          );
        default:
          return (
            <div className="py-3">
              {
                `❌ Unsupported block (${
                      type === "unsupported" ? "unsupported by Notion API" : type
                })`
              }
            </div>
          )
    }
                
   
    
}      

export default NotionElementGenerator