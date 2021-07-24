import React from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { format } from "date-fns";

import { getReadingList } from "@/lib/devto";
import Container from "@/container/Container";
import { ArticleDevTo } from "@/interfaces/interface";

export default function blog({ articles }: ArticleDevTo): JSX.Element {
  console.log(articles);
  return (
    <Container>
      <div>
        {articles.map((article, idx) => {
          return (
            <div key={idx}>
              <div>{article.article.title}</div>
              <div>
                {format(
                  new Date(article.article.created_at),
                  "d MMM yyyy 'at' h:mm bb"
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
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
