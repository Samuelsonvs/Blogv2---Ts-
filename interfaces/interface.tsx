export interface Children {
  children: JSX.Element;
}

export interface ContainerProps extends Children {
  customMeta?: [string];
}

export interface ThemeController {
  themeFunc: (theme: string) => void;
  mounted: boolean;
  resolvedTheme: string | undefined;
}

export interface SvgInfo extends Children {
  ariaLabel: string;
}
