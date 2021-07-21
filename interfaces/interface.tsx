export interface ContainerProps {
  children: JSX.Element;
  customMeta?: [string];
}

export interface ThemeController {
  themeFunc: (theme: string) => void;
  mounted: boolean;
  resolvedTheme: string | undefined;
}

export interface SvgInfo {
  ariaLabel: string;
  children: JSX.Element;
}
