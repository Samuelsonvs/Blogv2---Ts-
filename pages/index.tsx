import Image from "next/image";
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { Client } from "@notionhq/client";

import Container from "@/container/Container";
export interface Props {
  response: {
    results: [
      {
        properties: {
          Name: { title: [{ plain_text: string }] };
          Position: { multi_select: [{ name: string }] };
          Salary: { rich_text: [{ plain_text: number }] };
        };
      }
    ];
  };
}

export default function Home({ response }: Props): JSX.Element {
  const { results } = response;
  console.log(results);
  return (
    <Container>
      <div>
        <ul>
          {results.map((data, idx) => {
            return console.log(
              data.properties.Name.title[0].plain_text,
              data.properties.Position.multi_select[0].name,
              data.properties.Salary.rich_text[0].plain_text
            );
            // <li key={idx}>{JSON.stringify(data.properties)}</li>
          })}
        </ul>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const notion = new Client({ auth: process.env.NOTION_KEY });

  const databaseId = "cbf921e90a004babb0f09c9144961c5a";
  const response = await notion.databases.query({ database_id: databaseId });

  return {
    props: {
      response,
    },
    revalidate: 1,
  };
};
