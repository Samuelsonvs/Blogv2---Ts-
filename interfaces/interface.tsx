export interface Children {
  children: JSX.Element;
}

export interface ContainerProps extends Children {
  customMeta?: [string];
}

export interface SvgInfo extends Children {
  ariaLabel: string;
}

export interface ThemeController {
  themeFunc: (theme: string) => void;
  mounted: boolean;
  resolvedTheme: string | undefined;
}

export interface Notion {
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
}

export interface tagColor {
  [key: string]: string | number;
  framework: string;
  blog: string;
  library: string;
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

export interface tagName {
  [key: string]: string | number;
  javascript: string;
  typescript: string;
  webdev: string;
  tutorial: string;
  html: string;
  css: string;
}
