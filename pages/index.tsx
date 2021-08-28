import React, { useState } from "react";
import Image from "next/image";
import { GetStaticProps, GetStaticPropsContext } from "next";
import prisma from "@/lib/prisma";

import { NotionPrisma } from "@/interfaces/interface";
import { getPages, getDatabase } from "@/lib/notion";
import Container from "@/container/Container";
import NotionPageSvg from "@/public/svg/notionpage.svg";
import Newsletter from "@/components/Newsletter";
import NotionDb from "@/components/NotionDb";
import NotionElementGenerator from "@/components/NotionElementGenerator";

export default function Notionpage({
  page,
  totalCount,
  response_db,
}: NotionPrisma): JSX.Element {
  const [totalEmail, setTotalEmail] = useState(totalCount._count.email);
  return (
    <Container>
      <div>
        <div>
          <Image
            src={NotionPageSvg}
            alt="Notion page icon"
            width={78}
            height={78}
          />
        </div>
        <div className="mt-7">
          {page.map((section: any, idx: number) => {
            return <div key={idx}>{NotionElementGenerator(section)}</div>;
          })}
        </div>
        <div>
          <h2 className="text-3xl">Database example from Notion</h2>
          <div className="w-full shadow-md rounded my-6">
            <NotionDb response_db={response_db} />
          </div>
        </div>
        <Newsletter totalEmail={totalEmail} setTotalEmail={setTotalEmail} />
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const totalCount = await prisma.contact.aggregate({
    _count: {
      email: true,
    },
  });
  const page = await getPages();
  const response_db = await getDatabase();

  return {
    props: {
      page,
      response_db,
      totalCount,
    },
    revalidate: 60,
  };
};
