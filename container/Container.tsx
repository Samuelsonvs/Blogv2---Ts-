import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Navbar from "@/components/layouts/Navbar";
import { ContainerProps } from "@/interfaces/interface";
import Footer from "@/components/layouts/Footer";

export default function Container({
  children,
  customTitle,
}: ContainerProps): JSX.Element {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const router = useRouter();
  const meta = {
    title: customTitle ? customTitle : "Mert Samet Atalı – Developer.",
    description: `Front-end developer, JavaScript enthusiast.`,
    image: "",
    type: "website",
    date: "02.02.02",
  };

  return (
    <div className="bg-white dark:bg-black dark:text-gray-300 font-sans">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://msatali.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://msatali.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Mert Samet" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar
        themeFunc={setTheme}
        mounted={mounted}
        resolvedTheme={resolvedTheme}
      />

      <main className="bg-white dark:bg-black px-7 mx-auto max-w-3xl">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
