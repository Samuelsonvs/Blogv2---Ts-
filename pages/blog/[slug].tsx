import React, { Fragment } from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import {
  getPostsFromDatabase,
  getPostsFromSlug,
  getPages,
} from "@/lib/notionBlogPages";
import NotionElementGenerator from "@/components/NotionElementGenerator";
import { NotionElementGeneratorTypes } from "@/interfaces/interface";
import Container from "@/container/Container";

export default function Post({ post }: any) {
  return (
    <Container>
      <article>
        {post.map((section: NotionElementGeneratorTypes, idx: number) => {
          return (
            <Fragment key={idx}>{NotionElementGenerator(section)}</Fragment>
          );
        })}
      </article>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const database = await getPostsFromDatabase();
  return {
    paths: database.map((page: any) => ({
      params: { slug: page.properties.Slug.rich_text[0].plain_text },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { slug }:any = context.params;

  const postObject:any = await getPostsFromSlug(slug);
  const postID = postObject[0].properties.PageID.title[0].plain_text
  const post = await getPages(postID);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
