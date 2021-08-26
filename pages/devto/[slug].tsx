import React, { useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

import { getReadingList } from "@/lib/devto";
import Container from "@/container/Container";
import { ArticleDevTo } from "@/interfaces/interface";
import Pagination from "@/components/Pagination";
import DevtoCard from "@/components/DevtoCard";

export default function Blog({ articles }: ArticleDevTo): JSX.Element {
  const router = useRouter();
  const perPage = 3;

  const articlesLength = articles.length;
  const totalPage = Math.ceil(articlesLength / perPage);

  const routerNum: number = Number(router.query.page);
  const filteredRouterNum =
    routerNum <= totalPage && 0 < routerNum ? routerNum : 1;

  const [pageInfo, setPageInfo] = useState({
    pageNow: filteredRouterNum,
    articlesFirstNum: (filteredRouterNum - 1) * perPage,
    articlesLastNum: filteredRouterNum * perPage,
  });

  return (
    <Container customTitle={"Dev.to – Mert Samet Atalı"}>
      <section>
        <div>
          <h2 className="text-3xl sm:text-4xl">
            <span>My&nbsp;</span>
            <a
              href="https://dev.to"
              target="_blank"
              rel="noopener noreferrer"
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-purple-600"
            >
              Dev.to
            </a>
            <span>&nbsp;reading list</span>
          </h2>
        </div>
        <div className="min-h-75">
          {articles
            .slice(pageInfo.articlesFirstNum, pageInfo.articlesLastNum)
            .map((article, idx) => {
              return <DevtoCard key={idx} article={article} />;
            })}
        </div>
        <div className="flex justify-center mt-6 md:mt-3">
          {totalPage > 1 && (
            <Pagination
              pageInfo={pageInfo}
              setPageInfo={setPageInfo}
              totalPage={totalPage}
              perPage={perPage}
              filteredRouterNum={filteredRouterNum}
            />
          )}
        </div>
      </section>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const articles = await getReadingList();

  return {
    props: {
      articles,
    },
  };
};
