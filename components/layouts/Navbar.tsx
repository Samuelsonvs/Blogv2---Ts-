import React, { Fragment, useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

import { ThemeController } from "@/interfaces/interface";
import SvgCreator from "@/components/SvgCreator";

const navList = [
  { name: "Home", route: "/" },
  { name: "Blog", route: "/blog/item?page=1" },
  { name: "Projects", route: "/projects" },
];

export default function Navbar({
  themeFunc,
  mounted,
  resolvedTheme,
}: ThemeController): JSX.Element {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <header className="sticky top-0 z-20 bg-opacity-50 transition ease-in backdrop-filter backdrop-blur-lg backdrop-saturate-150 px-3 mx-auto max-w-3xl">
      <nav
        className={`bg-white dark:bg-black ${
          !isShowing ? "dark:bg-opacity-50 bg-opacity-50" : ""
        } flex justify-between py-10`}
      >
        <div className="flex">
          <button
            aria-label="Dark-Light"
            className="px-2"
            onClick={() =>
              themeFunc(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {mounted &&
              (resolvedTheme === "dark" ? (
                <SvgCreator>
                  <path
                    strokeWidth="1"
                    d="M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0-4a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm0 20a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zM5.64 6.64a.997.997 0 0 1-.707-.293l-1.42-1.42a.999.999 0 1 1 1.414-1.414l1.42 1.42A.999.999 0 0 1 5.64 6.64zm14.139 14.139a.997.997 0 0 1-.707-.293l-1.42-1.42a.999.999 0 1 1 1.414-1.414l1.42 1.42a.999.999 0 0 1-.707 1.707zM3 13H1a1 1 0 1 1 0-2h2a1 1 0 0 1 0 2zm20 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zM4.22 20.779a.999.999 0 0 1-.707-1.707l1.42-1.42a.999.999 0 1 1 1.414 1.414l-1.42 1.42a.993.993 0 0 1-.707.293zM18.359 6.64a.999.999 0 0 1-.707-1.707l1.42-1.42a.999.999 0 1 1 1.414 1.414l-1.42 1.42a.997.997 0 0 1-.707.293z"
                  ></path>
                </SvgCreator>
              ) : (
                <SvgCreator>
                  <path d="M12.048 21.963c-.308 0-.618-.015-.93-.043-2.66-.246-5.064-1.513-6.771-3.567s-2.512-4.651-2.266-7.311a10.004 10.004 0 0 1 9.038-9.038 1 1 0 0 1 .896 1.589 6.008 6.008 0 0 0 1.258 8.392c2.078 1.536 5.055 1.536 7.133 0a1 1 0 0 1 1.591.896 9.951 9.951 0 0 1-9.949 9.082zM9.315 4.438a8.006 8.006 0 0 0-5.244 6.787 7.954 7.954 0 0 0 1.813 5.849 7.95 7.95 0 0 0 5.417 2.854 7.95 7.95 0 0 0 8.266-5.243 8.01 8.01 0 0 1-2.729.476 7.946 7.946 0 0 1-4.755-1.565C9.174 11.443 8.145 7.68 9.315 4.438z"></path>
                </SvgCreator>
              ))}
          </button>
          <Link href="/">
            <a className="text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              Mert Samet
            </a>
          </Link>
        </div>
        <div className="hidden sm:block">
          <ul className="flex">
            {navList.map((item) => (
              <li className="button-active-effect" key={item.name}>
                <Link href={item.route} passHref scroll={false}>
                  <a className="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:focus:bg-gray-900 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* mobile  */}
        <div className="sm:hidden">
          <button aria-label="Mobile Button" onClick={() => setIsShowing((isShowing) => !isShowing)}>
            {mounted &&
              (isShowing ? (
                <SvgCreator>
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </SvgCreator>
              ) : (
                <SvgCreator>
                  <path
                    strokeWidth="1"
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </SvgCreator>
              ))}
            <Transition
              className="bg-white dark:bg-black absolute top-3 right-10 left-0 bottom-0 rounded-md"
              show={isShowing}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ul className="h-full flex justify-evenly items-center">
                {navList.map((item) => (
                  <li key={item.name}>
                    <Link href={item.route} passHref scroll={false}>
                      <a className="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:focus:bg-gray-900 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Transition>
          </button>
        </div>
        {/* mobile finish  */}
      </nav>
    </header>
  );
}
