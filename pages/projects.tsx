import React, { Fragment } from "react";
import Image from "next/image";

import Container from "@/container/Container";
import projectsDatas from "@/data/projectsData.json";
import SvgIcons from "@/data/projectSvgIconsData.json";
import ExternalLink from "@/public/svg/externalLink.svg";
import Github from "@/public/svg/github.svg";

export default function projects() {
  return (
    <Container customTitle={"Projects – Mert Samet Atalı"}>
      <div>
        {projectsDatas.map((data, idx) => {
          return (
            <Fragment key={idx}>
              <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between">
                <div>
                  <Image
                    src={data.url}
                    alt="github-icon"
                    width={500}
                    height={500}
                  />
                </div>
                <ul className="md:mt-24 -mt-10 flex flex-1 flex-row flex-wrap">
                  {data.tags.map((tag, index) => {
                    return (
                      <li key={index} className="mt-2 px-5">
                        <a
                          href={SvgIcons[tag as keyof typeof SvgIcons][1]}
                          className="cursor-pointer"
                          rel="noopener noreferrer"
                        >
                          <Image
                            layout="fixed"
                            src={SvgIcons[tag as keyof typeof SvgIcons][0]}
                            alt={tag}
                            title={tag}
                            width={30}
                            height={30}
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="md:-mt-10 mt-10">
                <ul className="flex justify-center md:justify-start">
                  <li className="px-5">
                    <a
                      href={data.link}
                      className="cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      <Image
                        layout="fixed"
                        src={ExternalLink}
                        alt="External-link-icon"
                        width={40}
                        height={40}
                      />
                    </a>
                  </li>
                  <li className="px-5 flex items-center">
                    <a
                      href={data.github}
                      className="cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      <Image
                        layout="fixed"
                        src={Github}
                        alt="Github-icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </li>
                </ul>
                <div className="mt-10 flex justify-center md:justify-start">
                  <p className="leading-7">{data.explanation}</p>
                </div>
              </div>
            </Fragment>
          );
        })}
        <div className="mb-20"></div>
      </div>
    </Container>
  );
}
