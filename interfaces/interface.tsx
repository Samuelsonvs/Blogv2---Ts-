import { Dispatch, SetStateAction } from "react";
export interface Children {
  children: JSX.Element;
}

export interface ContainerProps extends Children {
  customTitle?: string;
}

export interface SvgInfo extends Children {
  ariaLabel: string;
}

export interface ThemeController {
  themeFunc: (theme: string) => void;
  mounted: boolean;
  resolvedTheme: string | undefined;
}

export interface NotionPrisma {
  response_db: {
    results: [
      {
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: string;
                };
              }
            ];
          };
          Tags: {
            multi_select: [
              {
                name: string;
              }
            ];
          };
        };
      }
    ];
  };
  response_page: {
    results: [
      {
        heading_1: {
          text: [
            {
              plain_text: string;
            }
          ];
        };
      },
      {
        paragraph: {
          text: [
            {
              plain_text: string;
            }
          ];
        };
      },
      {
        heading_2: {
          text: [
            {
              plain_text: string;
            }
          ];
        };
      },
      {
        paragraph: {
          text: [
            {
              plain_text: string;
            }
          ];
        };
      }
    ];
  };
  initialContacts: any;
  totalCount: {
    _count: {
      email: number;
    };
  };
}

export interface tagColor {
  [key: string]: any;
  framework: {
    bg: string;
    text: string;
  };
  blog: {
    bg: string;
    text: string;
  };
  library: {
    bg: string;
    text: string;
  };
}

export interface ArticleDevTo {
  articles: [
    {
      article: {
        url: string;
        comments_count: number;
        tags: string;
        positive_reactions_count: number;
        created_at: string;
        description: string;
        title: string;
      };
    }
  ];
}

export interface ArticleDevToComponent {
  article: {
    article: {
      url: string;
      comments_count: number;
      tags: string;
      positive_reactions_count: number;
      created_at: string;
      description: string;
      title: string;
  };
  }
}

export interface tagName {
  [key: string]: any;
  default: {
    bg: string;
    text: string;
  };
  javascript: {
    bg: string;
    text: string;
  };
  typescript: {
    bg: string;
    text: string;
  };
  webdev: {
    bg: string;
    text: string;
  };
  tutorial: {
    bg: string;
    text: string;
  };
  html: {
    bg: string;
    text: string;
  };
  css: {
    bg: string;
    text: string;
  };
  react: {
    bg: string;
    text: string;
  };
  nextjs: {
    bg: string;
    text: string;
  };
}

export interface PageInfos {
  pageInfo: {
    pageNow: number;
    articlesFirstNum: number;
    articlesLastNum: number;
  };
  setPageInfo: Dispatch<SetStateAction<any>>;
  totalPage: number;
  perPage: number;
  filteredRouterNum: number;
}

export interface EmailInput {
  email: string;
}

export interface contactInfo {
  totalEmail: number;
  setTotalEmail: Dispatch<SetStateAction<any>>;
}
