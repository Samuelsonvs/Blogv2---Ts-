import { Client } from "@notionhq/client";
import PagesID from "@/data/notionPagesID.json";

const notion = new Client({ auth: process.env.NOTION_KEY });

export const getBlockPages = async () => {
    const response_block_pages = Promise.all(PagesID.map(async(page) => {
        return await notion.blocks.children.list({block_id: page["key"]})
    }))
  return response_block_pages;
};