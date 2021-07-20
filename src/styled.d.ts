import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      PRIMARY_COLOR: string;
      LIGHT_PRIMARY_COLOR: string;
      PRIMARY_TEXT: string;
      SECONDARY_TEXT: string;
      LIGHT_GREY: string;
    };
    text: {
      FONT_SIZE_XSMALL: string;
      FONT_SIZE_SMALL: string;
      FONT_SIZE_MEDIUM: string;
      LINE_HEIGHT: string;
    };
    breakpoints: {
      XX_SMALL: string;
      X_SMALL: string;
      SMALL: string;
    };
    RADIUS: string;
    BOX_SHADOW: string;
  }
}
