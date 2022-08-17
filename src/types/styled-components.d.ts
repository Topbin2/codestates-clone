import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    grayTextColor: string;
    lightGrayTextColor: string;
    backgroundColor: string;
    hoverBackgroundColor: string
  }
}
