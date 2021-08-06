import React from "react";
import { Children } from "@/interfaces/interface";

export default function SvgCreator({ children }: Children): JSX.Element {
  return (
    <svg
      role="img"
      stroke="currentColor"
      className="w-7 h-7 text-gray-500 dark:text-gray-50"
      //fill="current"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}
