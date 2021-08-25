import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });

export const getPages = async () => {
  const pageId = process.env.NOTION_PAGE_ID || "";
  const { results } = await notion.blocks.children.list({ block_id: pageId });
  return results;
};

export const getDatabase = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID || "";
  const response_db = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        direction: "ascending",
        timestamp: "created_time",
      },
    ],
  });

  return response_db;
};
