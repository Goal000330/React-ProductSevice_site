/** @format */

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const HeathlyStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#ebeff2",
      padding: "48px",
      boxSizing: "border-box",
      transitionDelay: "400ms",
      transitionDuration: "1200ms",
    },
    header: {
      display: "flex",
      justifyContent: "flex-start",
      height: "96px",
      alignItems: "center",
      padding: "0 12px",
      boxSizing: "border-box",
    },
    headerTitle: {
      textAlign: "left",
      color: "#55727e",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "28px",
      fontWeight: 600,
      height: "auto",
      letterSpacing: "0.15em",
      lineHeight: 1,
      minWidth: "236px",
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
    },
    smallTitle: {
      color: "#55727e",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "16px",
      fontWeight: 980,
      height: "auto",
      lineHeight: 1.2,
      borderBottom: "2px solid #55727e",
      padding: "0 0 12px 0",
      marginRight: "48px",
      minWidth: "100px",
      textAlign: "center",
    },
    categoryRoot: {
      display: "flex",
      flexFlow: "wrap",
    },
    categoryTitle: {
      textAlign: "left",
      color: "#55727e",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "16px",
      fontWeight: 980,
      height: "auto",
      lineHeight: 1.2,
      marginRight: "48px",
    },
  })
);
