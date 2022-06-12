/** @format */

import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const SidebarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      textAlign: "center",
      width: "300px",
      boxSizing: "border-box",
      background: "#fff",
      padding: "48px 12px 48px 12px",
      height: "100%",
      zIndex: 2,
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      [theme.breakpoints.down(840)]: {
        display: "none",
        width: "50%",
      },
    },
    logoImg: {
      width: "167px",
      height: "44px",
      cursor: "pointer",
      "&:hover": {
        opacity: 0.5,
      },
      [theme.breakpoints.down(400)]: {
        width: "100px",
        height: "25px",
      },
    },
    avatarRoot: {
      marginTop: "24px",
      marginBottom: "72px",
      textAlign: "center",
      cursor: "pointer",
      "&:hover": {
        opacity: 0.5,
      },
    },
    avatarImg: {
      width: "64px",
      height: "64px",
      borderRadius: "50px",
      marginBottom: "12px",
    },
    avatarName: {
      color: "#333333",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      height: "16px",
    },
    avatarJob: {
      color: "#9ab0bc",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      height: "16px",
      marginTop: "12px",
    },
    sidebarContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    sidebarItem: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "71px",
      borderBottom: "1px solid #eeeeee",
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      margin: "0 12px",
      cursor: "pointer",
      "&:hover": {
        opacity: 0.5,
      },
    },
    itemImg: {
      background: "rgba(0,0,0,0.0)",
      borderRadius: "12px",
      marginRight: "12px",
      width: "40px",
      height: "40px",
      minWidth: "40px",
      [theme.breakpoints.down(500)]: {
        margin: 0,
      },
    },
    itemContent: {
      color: "#9ab0bc",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "16px",
      fontWeight: 600,
      height: "auto",
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      padding: "0 12px",
      minWidth: "171.2px",
      boxSizing: "border-box",
      textAlign: "start",
      [theme.breakpoints.down(500)]: {
        minWidth: "133px",
      },
      [theme.breakpoints.down(400)]: {
        minWidth: "80px",
        fontSize: "12px",
      },
    },
    itemBtn: {
      "& i": {
        color: "#9ab0bc",
        fontSize: "24px",
        height: "20px",
        width: "16px",
      },
    },
    studyLink: {
      position: "fixed",
      bottom: "20px",
      left: "20px",
      width: "auto",
      height: "28px",
      borderRadius: "4px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgb(0 0 0 / 14%)",
      zIndex: 2000,
      perspective: "300px",
      transition: "0s linear",
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 12px",
    },
    banner: {
      width: "97px",
      height: "19px",
    },
    sidebarRight: {
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      zIndex: 2,
      position: "fixed",
      left: 300,
      top: 0,
      width: "300px",
      height: "100%",
      background: "#364750",
      boxShadow: "0px 6px 15px 0px rgb(0 0 0 / 20%)",
      [theme.breakpoints.down(840)]: {
        left: "50%",
        width: "50%",
      },
    },
    rightHeader: {
      height: "96px",
      background: "#475b69",
      display: "flex",
      alignItems: "center",
      justifyContent: "right",
      padding: "0 16px",
      cursor: "pointer",
    },
    closeIcon: {
      "& i": {
        fontSize: "30px",
        lineHeight: "30px",
        color: "#fff",
      },
    },
    rightContont: {
      padding: "0 12px",
    },
    rightItem: {
      height: "72px",
      display: "flex",
      alignItems: "center",
      padding: "0 12px",
      borderBottom: "1px solid #475b69",
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      cursor: "pointer",
      "&:hover": {
        opacity: 0.5,
      },
    },
    rightArrow: {
      "& i": {
        color: "#9ab0bc",
        fontSize: "20px",
        margin: "0px 12px 0px 0px",
      },
    },
    rightItemContent: {
      color: "#ffffff",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "16px",
      fontWeight: 600,
      height: "auto",
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      padding: "0 12px",
    },
    closePart: {
      display: "none",
      [theme.breakpoints.down(840)]: {
        left: "50%",
        width: "50%",
        position: "fixed",
        top: 0,
        height: "100%",
        display: "flex",
        justifyContent: "right",
        padding: "30px",
        zIndex: 2,
        backgroundColor: "rgb(0, 0, 0, 0.2)",
        boxSizing: "border-box",
      },
    },
    closeRootIcon: {
      cursor: "pointer",
      "& i": {
        color: "#fff",
        fontSize: "35px",
        lineHeight: "35px",
      },
    },
    closeRightPart: {
      position: "fixed",
      top: 0,
      left: 600,
      width: "calc(100% - 600px)",
      height: "100%",
      display: "flex",
      justifyContent: "right",
      padding: "30px",
      zIndex: 2,
      backgroundColor: "rgb(0, 0, 0, 0.2)",
      boxSizing: "border-box",
      [theme.breakpoints.down(840)]: {
        display: "none",
      },
    },
    closeRightRootIcon: {
      cursor: "pointer",
      "& i": {
        color: "#000",
        fontSize: "35px",
        lineHeight: "35px",
      },
    },
    displayNone: {
      display: "none",
    },
    displayShow: {
      display: "unset",
    },
  })
);
