import React from "react";
import Image from "next/image";

import Container from "@/container/Container";
import projectsDatas from "@/data/projectsdata.json";

export default function projects() {
  return (
    <Container customTitle={"Projects – Mert Samet Atalı"}>
      <div>
        {projectsDatas.map((data, idx) => {
          return (
            <div key={idx} className="flex flex-col md:flex-row justify-between">
              <Image
                layout="fixed"
                src={data.url}
                alt="github-icon"
                width={500}
                height={500}
              />
              <ul className="md:mt-28 flex flex-row md:flex-col flex-wrap">
                {data.tags.map((tag, index) => {
                  return (
                    <li key={index} className="mt-2">
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
