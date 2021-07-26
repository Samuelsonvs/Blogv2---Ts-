import React, { useState } from "react";

const usePagination = (articleLength: number, itemPerPage: number) => {
  const [state, setState] = useState(articleLength);
  const totalPage = Math.ceil(articleLength / itemPerPage);
  const arr = [];
  for (let i = 0; i < totalPage; i++) {
    arr.push("button");
  }
  return { arr };
};

export default usePagination;
