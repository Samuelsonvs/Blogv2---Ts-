import { GetStaticProps, GetStaticPropsContext } from 'next';
import Image from "next/image";
import React from 'react'
import { getBlockPages } from '@/lib/notionBlogPages';

export default function Try({response_page}: any) {
    console.log(response_page)
    return (
        <div>
            ssadsad
        </div>
    )
}


export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
  ) => {
    const response_page = await getBlockPages();
  
    return {
      props: {
        response_page,
      },
      revalidate: 60,
    };
  };