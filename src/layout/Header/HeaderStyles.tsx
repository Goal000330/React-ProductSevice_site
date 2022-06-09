/** @format */

import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const HeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "right",
      alignItems: "center",
      background: "#fff",
      paddingRight: "24px",
      height: "96px",
    },
    searchRoot: {
      width: "467px",
      height: "50px",
      padding: "0 24px",
      display: "flex",
      background: "#ebeff2",
      borderRadius: "25px",
      alignItems: "center",
    },
    searchIcon: {
      "& i": {
        fontSize: "21px",
        lineHeight: "28px",
        color: "#9ab0bc",
      },
    },
    searchInput: {
      color: "#9ab0bc",
      fontFamily: "ヒラギノ角ゴ W3 JIS2004",
      fontSize: "16px",
      fontWeight: 400,
      height: "auto",
      lineHeight: "1.4",
      margin: "0px 0px 0px 12px",
      textAlign: "center",
    },
  })
);
