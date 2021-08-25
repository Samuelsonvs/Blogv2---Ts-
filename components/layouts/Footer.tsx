import React from "react";
import Link from "next/link";
import Image from "next/image";

import Github from "@/public/svg/github.svg";
import Twitter from "@/public/svg/twitter.svg";

const SocialMediaLink = {
  Twitter: "https://twitter.com/samuelsonvs",
  Github: "https://github.com/Samuelsonvs",
};

export default function Footer() {
  return (
    <>
      <div className="mt-10 px-3 mx-auto max-w-3xl">
        <ul className="flex justify-evenly items-center text-gray-500 dark:text-gray-200">
          <li className="hover:bg-gray-200 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="hover:bg-gray-200 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="hover:bg-gray-200 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
            <Link href="/devto/item?page=1">
              <a>Dev.to Reading List</a>
            </Link>
          </li>
          <li className="hover:bg-gray-200 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <ul className="flex justify-center">
          <li className="mr-5">
            <a href={SocialMediaLink.Github}>
              <Image
                layout="fixed"
                src={Github}
                alt="github-icon"
                width={25}
                height={25}
              />
            </a>
          </li>
          <li>
            <a href={SocialMediaLink.Twitter}>
              <Image
                layout="fixed"
                src={Twitter}
                alt="twitter-icon"
                width={26}
                height={26}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center mt-5 text-gray-500 dark:text-gray-200">
        <p>&copy; Mert Samet Atalı. All rights reserved.</p>
      </div>
    </>
  );
}
