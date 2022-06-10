/** @format */

import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const ServiceCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0px 2px 20px rgb(0 0 0 / 10%)",
      borderBottom: "solid 1px #eeeeee",
      padding: "24px",
      margin: "0 12px 24px 12px",
      cursor: "pointer",
      "&:hover": {
        boxShadow: "0px 0px 0px rgb(0 0 0 / 10%)",
        transform: "translate(6px, 12px)",
        transitionDuration: "800ms",
      },
    },
    cardImg: {
      borderRadius: "20px",
      height: "180px",
      transitionDelay: "300ms",
      transitionDuration: "3000ms",
      width: "100%",
      marginBottom: "20px",
    },
    cardDes: {
      color: "#000000",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "14px",
      fontWeight: 700,
      height: "auto",
      letterSpacing: "0.15em",
      lineHeight: "1.6",
      marginBottom: "12px",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      zIndex: 1,
    },
    cardFooter: {
      display: "flex",
      alignItems: "center",
      color: "#55727e",
      fontFamily: "Montserrat",
      fontSize: "12px",
      fontWeight: 700,
      height: "auto",
      letterSpacing: "0.05em",
      lineHeight: "1",
      padding: "0 6px",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      "& i": {
        color: "#55727e",
        marginRight: "6px",
      },
    },
  })
);
