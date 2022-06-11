/** @format */

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const ContactStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#ebeff2",
      padding: "96px 48px 96px 48px",
      boxSizing: "border-box",
    },
    container: {
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "40px 50px 30px rgb(0 0 0 / 10%)",
      padding: "96px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    contactTitle: {
      color: "#000",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "28px",
      fontWeight: 600,
      height: "auto",
      lineHeight: 1.4,
      margin: "0px 0px 48px 0px",
      textAlign: "center",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
    },
    contactForm: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100%",
      marginBottom: "24px",
    },
    formTitle: {
      color: "#333",
      fontFamily: "Lato",
      fontSize: "15px",
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: "0em",
      textAlign: "left",
      transitionDelay: "400ms",
      transitionDuration: "1000ms",
      marginBottom: "10px",
    },
    symbol: {
      color: "#f23a3c",
      fontFamily: "Lato",
      fontSize: "15px",
      fontWeight: 700,
      lineHeight: 1.4,
      marginRight: "5px",
    },
    formInput: {
      width: "100%",
      color: "#333333",
      fontFamily: "Lato",
      fontSize: "15px",
      fontWeight: 400,
      border: "1px solid #eeeeee",
      borderRadius: "4px",
      lineHeight: 1.4,
      letterSpacing: "0.05em",
      textAlign: "left",
      padding: "14px 10px",
      boxShadow: "none",
      transitionDelay: "400ms",
      transitionDuration: "1000ms",
      "&::placeholder": {
        fontFamily: "Lato",
        fontSize: "15px",
        fontWeight: 400,
        lineHeight: 1.4,
        letterSpacing: "0.05em",
        color: "#E8E8E8",
        opacity: 1 /* Firefox */,
      },
    },
    formTextarea: {
      width: "100% !important",
      color: "#333333",
      fontFamily: "Lato",
      fontSize: "15px",
      fontWeight: 400,
      border: "1px solid #eeeeee",
      borderRadius: "4px",
      lineHeight: 1.4,
      letterSpacing: "0.05em",
      textAlign: "left",
      padding: "14px 10px",
      boxShadow: "none",
      transitionDelay: "400ms",
      transitionDuration: "1000ms",
      minHeight: "130px",
      resize: "none",
      "&::placeholder": {
        fontFamily: "Lato",
        fontSize: "15px",
        fontWeight: 400,
        lineHeight: 1.4,
        letterSpacing: "0.05em",
        color: "#E8E8E8",
        opacity: 1 /* Firefox */,
      },
    },
    formBtn: {
      marginTop: "24px",
      background: "#333333",
    },
    policy: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      color: "#333333",
      fontFamily: "ヒラギノ角ゴ W3 JIS2004",
      fontSize: "14px",
      lineHeight: 1.4,
    },
    checkbox: {
      marginRight: "10px",
    },
  })
);
