import React, { Fragment } from "react";
import Image from "next/image";

import Container from "@/container/Container";
import projectsDatas from "@/data/projectsdata.json";

export default function projects() {
  return (
    <Container customTitle={"Projects – Mert Samet Atalı"}>
      <div>
        {projectsDatas.map((data, idx) => {
          return (
            <Fragment key={idx}>
              <div className="flex flex-col md:flex-row justify-center items-center md:justify-between">
                <div>
                  <Image
                    src={data.url}
                    alt="github-icon"
                    width={500}
                    height={500}
                  />
                </div>
                <ul className="md:mt-28 -mt-10 flex flex-row md:flex-col flex-wrap">
                  {data.tags.map((tag, index) => {
                    return (
                      <li key={index} className="mt-2 px-5">
                        {tag}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="mt-10 flex justify-center">
                <p>{data.explanation}</p>
              </div>
            </Fragment>
          );
        })}
      </div>
    </Container>
  );
}
