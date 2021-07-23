import React from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";

import { getReadingList } from "@/lib/devto";

interface ArticleDevTo {
  articles: [
    {
      article: {
        canonical_url: string;
        comments_count: number;
        created_at: string;
        description: string;
        title: string;
      };
    }
  ];
}

export default function blog({ articles }: ArticleDevTo): JSX.Element {
  console.log(articles);
  return <div>sss</div>;
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const articles = await getReadingList();

  return {
    props: {
      articles,
    },
    revalidate: 1,
  };
};
