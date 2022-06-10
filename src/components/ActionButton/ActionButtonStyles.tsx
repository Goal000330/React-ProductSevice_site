/** @format */

import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const ActionButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    darkRoot: {
      display: "flex",
      flexWrap: "nowrap",
      width: "fit-content",
      justifyContent: "center",
      alignItems: "center",
      background: "#000000",
      borderRadius: "10px",
      boxShadow: "20px 20px 30px rgb(0 0 0 / 20%)",
      transitionDelay: "0ms",
      transitionDuration: "600ms",
      padding: "12px 48px",
      "& i": {
        marginLeft: "5px",
        fontSize: "13px",
        lineHeight: "16px",
        color: "#000",
      },
      "&:hover": {
        boxShadow: "0px 0px 0px rgb(0 0 0 / 20%)",
        transform: "translate(10px, 10px)",
      },
    },
    lightRoot: {
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "center",
      width: "fit-content",
      alignItems: "center",
      background: "#ebeff2",
      borderRadius: "10px",
      boxShadow: "20px 20px 30px rgb(0 0 0 / 20%)",
      transitionDelay: "0ms",
      padding: "12px 48px",
      transitionDuration: "600ms",
      "& i": {
        marginLeft: "5px",
        fontSize: "13px",
        lineHeight: "16px",
        color: "#000",
      },
      "&:hover": {
        boxShadow: "0px 0px 0px rgb(0 0 0 / 20%)",
        transform: "translate(10px, 10px)",
      },
    },
    darkDes: {
      color: "#000",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "14px",
      fontWeight: 700,
      letterSpacing: "0.05em",
      lineHeight: "1.9",
      margin: 0,
      wordBreak: "keep-all",
    },
    lightDes: {
      color: "#fff",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "14px",
      fontWeight: 700,
      letterSpacing: "0.05em",
      lineHeight: "1.9",
      margin: 0,
      wordBreak: "keep-all",
    },
  })
);
