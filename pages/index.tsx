import React, { Fragment } from "react";
import Image from "next/image";
import { GetStaticProps, GetStaticPropsContext } from "next";

import { Notion, tagColor } from "@/interfaces/interface";
import { getPages, getDatabase } from "@/lib/notion";
import Container from "@/container/Container";
import NotionPageSvg from "@/public/svg/notionpage.svg";

const tagColorObject: tagColor = {
  framework: {
    bg: "bg-indigo-200",
    text: "text-indigo-600"
  },
  blog: {
    bg: "bg-green-200",
    text: "text-green-600"
  },
  library:  {
    bg: "bg-yellow-200",
    text: "text-yellow-600"
  },
};

export default function notionpage({
  response_page,
  response_db,
}: Notion): JSX.Element {
  return (
    <Container>
      <div>
        <div>
          <Image
            src={NotionPageSvg}
            alt="Notion page icon"
            width={78}
            height={78}
          />
        </div>
        <div className="mt-7">
          <h1 className="text-5xl">
            {response_page.results[0].heading_1.text[0].plain_text}
          </h1>
          <div className="py-5 text-xl">
            <p>{response_page.results[1].paragraph.text[0].plain_text}</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl">
            {response_page.results[2].heading_2.text[0].plain_text}
          </h2>
          <div className="py-5 text-xl">
            <p>{response_page.results[3].paragraph.text[0].plain_text}</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl">Example Database</h2>
          <div className="w-full shadow-md rounded my-6">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="sm:px-6 py-3 px-3 text-left">Name</th>
                  <th className="sm:px-6 py-3 px-3 text-left">Tags</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light">
                {response_db.results.map((result, idx) => {
                  return (
                    <Fragment key={idx}>
                      <tr className="border-b border-gray-200 dark:hover:bg-gray-500 hover:bg-gray-100">
                        <td className="sm:px-6 py-3 px-3">
                          <span className="font-medium">
                            {result.properties.Name.title[0].text.content}
                          </span>
                        </td>
                        <td className="sm:px-6 py-3 px-3">
                          {result.properties.Tags.multi_select.map((select) => {
                            return (
                              <span
                                key={select.name}
                                className={`${tagColorObject[select.name].bg} ${tagColorObject[select.name].text} py-1 px-3 mr-1 rounded-full text-xs`}
                              >
                                {select.name}
                              </span>
                            );
                          })}
                        </td>
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const response_page = await getPages();
  const response_db = await getDatabase();

  return {
    props: {
      response_page,
      response_db,
    },
    revalidate: 1,
  };
};
