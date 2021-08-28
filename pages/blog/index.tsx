import { GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getPostsFromDatabase } from "@/lib/notionBlogPages";
import Container from "@/container/Container";
import { shimmer, toBase64 } from "@/util/toBase64Blur";
import { PostDBType } from "@/interfaces/interface";

export default function index({ PostDB }: PostDBType) {
  return (
    <Container>
      <div>
        <h2 className="py-5 text-3xl sm:text-4xl">
          <span>My&nbsp;</span>
          <a
            href="https://www.notion.so/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-purple-600"
          >
            Notion
          </a>
          <span>&nbsp;blog posts</span>
        </h2>
        {PostDB.map((post, idx: number) => {
          const date = new Date(post.last_edited_time).toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          });
          const properties = post.properties;
          return (
            <article key={post.id} className="py-2">
              <div className="p-5 border-2 border-gray-500/50 rounded-xl">
                <Image
                  className="rounded-xl"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(640, 427)
                  )}`}
                  src={properties.Column.files[0].file.url}
                  alt={properties.Column.files[0].name}
                  width={640}
                  height={427}
                />
                <div className="opacity-70">{date}</div>
                <div className="text-center text-2xl">
                  <div>{properties.Title.rich_text[0].plain_text}</div>
                </div>
                <div className="py-3">
                  {properties.Preview.rich_text[0].plain_text}
                </div>
                <div>
                  <Link
                    href="/blog/[slug]"
                    as={`blog/${properties.Slug.rich_text[0].plain_text}`}
                  >
                    <a className="text-blue-700 text-xl hover:underline">
                      Continue reading ➞
                    </a>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const PostDB = await getPostsFromDatabase();
  return {
    props: {
      PostDB,
    },
    revalidate: 60,
  };
};
