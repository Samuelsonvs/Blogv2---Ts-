import { NotionDB, tagColor } from "@/interfaces/interface";
import React, { Fragment } from "react";

const tagColorObject: tagColor = {
  framework: {
    bg: "bg-indigo-100",
    text: "text-indigo-800",
  },
  blog: {
    bg: "bg-green-100",
    text: "text-green-800",
  },
  library: {
    bg: "bg-yellow-100",
    text: "text-yellow-800",
  },
};

export default function NotionDb({ response_db }: NotionDB) {
  return (
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
                        className={`${tagColorObject[select.name].bg} ${
                          tagColorObject[select.name].text
                        } py-1 px-3 mr-1 rounded-full text-xs`}
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
  );
}
