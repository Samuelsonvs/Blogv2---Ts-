import React from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { getPostsFromDatabase, getPostsFromSlug, getPages } from '@/lib/notionBlogPages';
import NotionElementGenerator from "@/components/NotionElementGenerator";
import Container from '@/container/Container';


interface NotionElementGeneratorTypes {
  [key: string]: any;
    variable: {
      text : [
        {
          text: {
            content: string
          }
        }
      ]
    };
    image: {
      file : {
        url: string
      }
    };
    type: string
}

export default function Post({ post }:any) { 
  return (
      <Container>
          <div>
            {post.map((section:NotionElementGeneratorTypes, idx:number) => {
              return (
                <div key={idx}>
                  {NotionElementGenerator(section)}
                </div>
              )
            })} 
          </div>
        </Container>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const database = await getPostsFromDatabase();
    return {
        paths: database.map((page:any) => ({ params: { slug: page.properties.Slug.rich_text[0].text.content}})),
        fallback: false,
    };
}


export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
  ) => {
    const { slug }:any  = context.params;

    const postID = await getPostsFromSlug(slug)
    const post = await getPages(postID)
    return {
      props: {
        post
      },
      revalidate: 60,
    };
  };