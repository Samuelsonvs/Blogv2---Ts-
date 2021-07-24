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

export interface ArticleDevTo {
  articles: [
    {
      article: {
        canonical_url: string;
        comments_count: number;
        created_at: string;
        description: string;
        title: string;
      };
    }
  ];
}
