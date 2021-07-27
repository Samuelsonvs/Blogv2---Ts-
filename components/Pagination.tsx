import React, { createElement, useEffect } from "react";
import Image from "next/image";

import { PageInfos } from "@/interfaces/interface";
import PaginationLeft from "@/public/svg/paginationLeft.svg";
import PaginationRight from "@/public/svg/paginationRight.svg";

export default function Pagination({
  pageInfo,
  setPageInfo,
  totalPage,
  perPage,
}: PageInfos): JSX.Element {
  const handleClick = (e: any): any => {
    const pageNum = parseInt(e.target.innerText);
    setPageInfo({
      pageNow: pageNum,
      articlesFirstNum: pageNum === 1 ? 0 : 0 + (pageNum - 1) * perPage,
      articlesLastNum: pageNum * perPage,
    });
  };

  const rightLeftHandler = (param: string) => {
    const newPage =
      param === "prev" && pageInfo.pageNow > 1
        ? pageInfo.pageNow - 1
        : param === "next" && totalPage > pageInfo.pageNow
        ? pageInfo.pageNow + 1
        : null;
    if (newPage) {
      setPageInfo({
        pageNow: newPage,
        articlesFirstNum: (newPage - 1) * perPage,
        articlesLastNum: newPage * perPage,
      });
    }
  };

  return (
    <>
      <button onClick={() => rightLeftHandler("prev")} className="mr-4">
        <Image
          layout="fixed"
          src={PaginationLeft}
          alt="arrow left"
          width={22}
          height={22}
        />
      </button>
      {[...Array(totalPage).keys()].map((_, idx) => {
        return createElement("button", {
          key: `${idx}`,
          children: `${idx + 1}`,
          className: `p-3 border mr-1 ${
            idx + 1 === pageInfo.pageNow ? "text-red-500" : "text-gray-500"
          }`,
          onClick: (e: React.MouseEventHandler<HTMLButtonElement>) => {
            handleClick(e);
          },
        });
      })}

      <button onClick={() => rightLeftHandler("next")} className="ml-3">
        <Image
          layout="fixed"
          src={PaginationRight}
          alt="arrow right"
          width={22}
          height={22}
        />
      </button>
    </>
  );
}
