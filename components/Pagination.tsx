import React, { createElement } from "react";
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
      pageFirstNum: pageNum === 1 ? 0 : 0 + (pageNum - 1) * perPage,
      pageLastNum: pageNum * perPage,
    });
  };

  const prevHandler = () => {
    console.log("prev");
  };

  const nextHandler = () => {
    console.log("next");
  };

  return (
    <>
      <button onClick={prevHandler} className="mr-4">
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
      <button onClick={nextHandler} className="ml-3">
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
