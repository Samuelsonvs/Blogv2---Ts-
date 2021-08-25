import { GetStaticProps, GetStaticPropsContext } from 'next';
import Image from "next/image";
import Link from "next/link";
import React from 'react'
import { getPostsFromDatabase } from '@/lib/notionBlogPages';
import Container from '@/container/Container';

export default function index({PostDB}: any) {
    return (
        <Container>
            {PostDB.map((post:any,idx:number) => {
                const date = new Date(post.last_edited_time).toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                );
                const properties = post.properties
                return (
                    <article key={post.id} className="py-2 flex flex-col items-center">
                        <div className="p-5 border-2 border-gray-500/50 rounded-xl">
                            <Image className="rounded-xl" src={properties.Column.files[0].file.url} alt={properties.Column.files[0].name} width={500} height={334} />
                            <div className="opacity-70">
                                {date}
                            </div>
                            <div className="text-center text-2xl">
                                <div>
                                    {properties.Title.rich_text[0].text.content}
                                </div>
                            </div>
                            <div className="py-3"> 
                                {properties.Description.rich_text[0].text.content}
                            </div>
                            <div>
                                <Link href={`blog/${properties.Slug.rich_text[0].text.content}`}>
                                    <a className="text-blue-700 text-xl hover:underline">
                                        Continue reading ➞
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </article>
                )
            })}
        </Container>
    )
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