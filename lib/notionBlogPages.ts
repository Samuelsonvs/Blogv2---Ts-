import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });

export const getPostsFromDatabase = async () => {
  const databaseId = process.env.NOTION_POSTS_DATABASE_ID || "";
  const { results } = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        direction: "ascending",
        timestamp: "created_time",
      },
    ],
  });

  return results;
};

export const getPages = async (id: any) => {
  const pageId = id;
  const { results } = await notion.blocks.children.list({ block_id: pageId });
  return results;
};

export const getPostsFromSlug = async (slug: any) => {
  const databaseId = process.env.NOTION_POSTS_DATABASE_ID || "";
  const { results } = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Slug",
      text: {
        contains: slug
      }
    },
  });

  return results;
};