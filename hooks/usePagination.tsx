import React, { useState } from "react";

const usePagination = (articleLength: number) => {
  const [state, setState] = useState<number>(articleLength);

  return { state };
};

export default usePagination;
