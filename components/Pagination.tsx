import React, { createElement } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { PageInfos } from "@/interfaces/interface";
import PaginationLeft from "@/public/svg/paginationLeft.svg";
import PaginationRight from "@/public/svg/paginationRight.svg";

export default function Pagination({
  pageInfo,
  setPageInfo,
  totalPage,
  perPage,
  filteredRouterNum,
}: PageInfos): JSX.Element {
  const router = useRouter();
  const handleClick = (e: any): any => {
    e.preventDefault();
    const pageNum = parseInt(e.target.innerText);
    router.push(`item?page=${pageNum}`, undefined, { shallow: true })
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
    router.push(`item?page=${newPage}`, undefined, { shallow: true })
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
      { totalPage === pageInfo.pageNow &&
          createElement("button", {
              children: "1",
              className: `p-3 border mr-1 ${
                1 === pageInfo.pageNow ? "text-red-500" : "text-gray-500"
              }`,
              onClick: (e: React.MouseEventHandler<HTMLButtonElement>) => {
                handleClick(e);
              },
          })
      } 
      {Array.from({ length: totalPage-1 }, (_, i) => i + 1).map((num, idx) => {
        if (totalPage < 4) {
          return createElement("button", {
            key: `${idx}`,
            children: `${num}`,
            className: `p-3 border mr-1 ${
              num === pageInfo.pageNow ? "text-red-500" : "text-gray-500"
            }`,
            onClick: (e: React.MouseEventHandler<HTMLButtonElement>) => {
              handleClick(e);
            },
          });
        } else {
          return createElement("button", {
            key: `${idx}`,
            children: `${num}`,
            className: `p-3 border mr-1 ${
              num === pageInfo.pageNow ? "text-red-500" : "text-gray-500"
            } ${
              num + 1 === filteredRouterNum ||
              filteredRouterNum === num ||
              totalPage === num
                ? "block"
                : "hidden"
            }`,
            onClick: (e: React.MouseEventHandler<HTMLButtonElement>) => {
              handleClick(e);
            },
          });
        }
      })}
      { 
        pageInfo.pageNow + 1 < totalPage &&
          createElement("button", {
              children: "...",
              disabled:true,
              className: "p-3 border mr-1",
          })
      }
      { 
          createElement("button", {
              children: "5",
              className: `p-3 border mr-1 ${
                totalPage === pageInfo.pageNow ? "text-red-500" : "text-gray-500"
              }`,
              onClick: (e: React.MouseEventHandler<HTMLButtonElement>) => {
                handleClick(e);
              },
          })
      } 
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
