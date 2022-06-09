/** @format */

import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import serviceBackground1 from "assets/images/service1.png";
import serviceBackground2 from "assets/images/service2.png";

export const LandingStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#282E4E",
    },
    landingImgRoot: {
      position: "relative",
    },
    landingImg: {
      width: "100%",
      height: "534px",
    },
    landingLetter: {
      position: "absolute",
      right: "48px",
      bottom: "96px",
      width: "368px",
      height: "150px",
    },
    popularRankingRoot: {
      padding: "48px",
    },
    popularRankingTitleContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "48px",
    },
    popularRankingLeft: {
      display: "flex",
      alignItems: "center",
    },
    kingIcon: {
      fontSize: "24px",
      marginLeft: "12px",
    },
    popularRankingTitleLetter: {
      cursor: "pointer",
      color: "#000000",
      fontFamily: "Montserrat",
      fontSize: "32px",
      fontWeight: 600,
      height: "auto",
      lineHeight: 1,
      margin: "0px 0px 0px 0px",
      padding: "0px 0px 0px 12px",
      textAlign: "left",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      width: "auto",
      maxWidth: "100%",
      justifyContent: "flex-start",
      "&:hover": {
        color: "#767879 !important",
      },
    },
    CardContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    serviceRoot: {
      padding: "48px",
      background: "#9ab0bc",
    },
    services: {
      width: "100%",
    },
    service1: {
      borderRadius: "10px",
      boxShadow: "40px 50px 30px rgb(0 0 0 / 10%)",
      height: "400px",
      overflow: "hidden",
      "&::before": {
        backgroundImage: `url(${serviceBackground1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.9)",
      },
      "&:hover": {
        transition: ".3s cubic-bezier(.4,.4,0,1)",
        transform: "translate(0px, 0px) scale(1.05, 1.05)",
        transitionDelay: "200ms",
        transitionDuration: "200ms",
      },
    },
    service2: {
      borderRadius: "10px",
      boxShadow: "40px 50px 30px rgb(0 0 0 / 10%)",
      height: "400px",
      overflow: "hidden",
      backgroundImage: `url(${serviceBackground2})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      "&:hover": {},
    },
    serviceTitle: {
      marginTop: "48px",
      color: "#fff",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "40px",
      fontWeight: 600,
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      marginBottom: "96px",
      padding: "0 24px",
    },
    serviceBtn: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      background: "#ebeff2",
      width: "170px",
      height: "50px",
      borderBottom: "0px solid #000",
      borderLeft: "0px solid #000",
      borderRadius: "10px",
      borderRight: "0px solid #000",
      borderTop: "0px solid #000",
      boxShadow: "20px 20px 30px rgb(0 0 0 / 20%)",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "center",
      margin: "0px 0px 0px 24px",
      // padding: "12px 48px 12px",
      transitionDelay: "0ms",
      transitionDuration: "600ms",
      "& i": {
        marginLeft: "5px",
        fontSize: "13px",
        lineHeight: "16px",
        color: "#000",
      },
    },
    btnLetter: {
      color: "#000",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "14px",
      fontWeight: 700,
      letterSpacing: "0.05em",
      lineHeight: "1.9",
      margin: 0,
    },
  })
);
