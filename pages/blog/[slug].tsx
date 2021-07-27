import React, { createElement, useEffect, useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/router";

import { getReadingList } from "@/lib/devto";
import Container from "@/container/Container";
import { ArticleDevTo, tagName } from "@/interfaces/interface";
import CommentSvg from "@/public/svg/comment.svg";
import ReactionCount from "@/public/svg/reactionCounts.svg";
import ArrowRight from "@/public/svg/arrowRight.svg";
import Pagination from "@/components/Pagination";

const tagColors: tagName = {
  javascript: "red",
  typescript: "indigo",
  webdev: "yellow",
  tutorial: "purple",
  html: "gray",
  css: "green",
};

export default function Blog({ articles }: ArticleDevTo): JSX.Element {
  const router = useRouter();
  const pageInitialInfo = {
    startPage: 0,
    perPage: 3,
  };

  const articleLength = articles.length;
  const totalPage = Math.ceil(articleLength / pageInitialInfo.perPage);

  const routerNum = router.query.page as unknown as number;
  const filteredRouterNum =
    routerNum <= totalPage && 0 < routerNum ? routerNum : null; // for type convert

  const [pageInfo, setPageInfo] = useState({
    pageNow: filteredRouterNum ? filteredRouterNum : 1,
    articlesFirstNum: filteredRouterNum
      ? (filteredRouterNum - 1) * pageInitialInfo.perPage
      : pageInitialInfo.startPage,
    articlesLastNum: filteredRouterNum
      ? filteredRouterNum * pageInitialInfo.perPage
      : pageInitialInfo.perPage,
  });

  console.log(pageInfo.pageNow);
  useEffect(() => {
    router.push(`item?page=${pageInfo.pageNow}`);
  }, [pageInfo.pageNow]);

  return (
    <Container>
      <section>
        <div className="min-h-75">
          {articles
            .slice(pageInfo.articlesFirstNum, pageInfo.articlesLastNum)
            .map((article, idx) => {
              return (
                <a
                  key={idx}
                  href={article.article.url}
                  className="block border border-gray-400 rounded-lg p-4 mt-10 transform transition ease-in-out duration-200 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex justify-between">
                    <h3 className="text-xl font-semibold">
                      {article.article.title}
                    </h3>
                    <div>
                      <Image
                        layout="fixed"
                        src={ArrowRight}
                        alt="arrow right"
                        width={22}
                        height={22}
                      />
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <span className="text-sm text-gray-500">
                      {format(
                        new Date(article.article.created_at),
                        "d MMM yyyy 'at' h:mm bb"
                      )}
                    </span>
                    <div className="flex">
                      <span className="flex">
                        <span className="px-1">
                          {article.article.positive_reactions_count}
                        </span>
                        <Image
                          layout="fixed"
                          src={ReactionCount}
                          alt="like etc reactions"
                          width={22}
                          height={22}
                        />
                      </span>
                      <span className="flex">
                        <span className="px-1">
                          {article.article.comments_count}
                        </span>
                        <Image
                          layout="fixed"
                          src={CommentSvg}
                          alt="comment number"
                          width={22}
                          height={22}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="mt-1">{article.article.description}</div>
                  <div className="mt-3 flex flex-wrap dark:text-gray-600">
                    {article.article.tags.split(",").map((tag) => {
                      const trimTag = tag.trim();
                      const selectedColor = tagColors[trimTag];
                      return (
                        <span
                          key={tag}
                          className={`py-1 px-2 mr-1 mt-1 rounded-full bg-${
                            selectedColor || "yellow"
                          }-300`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </a>
              );
            })}
        </div>
        <div className="flex justify-center">
          <Pagination
            pageInfo={pageInfo}
            setPageInfo={setPageInfo}
            totalPage={totalPage}
            perPage={pageInitialInfo.perPage}
          />
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
