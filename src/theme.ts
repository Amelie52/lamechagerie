import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    PRIMARY_COLOR: "#8BC34A",
    LIGHT_PRIMARY_COLOR: "#DCEDC8",
    PRIMARY_TEXT: "#212121",
    SECONDARY_TEXT: "#757575",
    LIGHT_GREY: "#F7F7F7",
  },
  text: {
    FONT_SIZE_XSMALL: "1.2rem", // 12px
    FONT_SIZE_SMALL: "1.4rem", // 14px
    FONT_SIZE_MEDIUM: "1.6rem", // 16px
    LINE_HEIGHT: "1.5",
  },
  // breakpoints doesn't take html font-size
  breakpoints: {
    XX_SMALL: "26.25rem", // 420px
    X_SMALL: "36.25rem", // 580px
    SMALL: "46.875rem", // 750px
  },
  RADIUS: "2rem",
  BOX_SHADOW: "0px 0.125rem 0.8125rem 0.125rem rgba(196, 196, 196, 0.2)",
};
