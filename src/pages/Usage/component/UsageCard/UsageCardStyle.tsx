/** @format */

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import serviceBackground1 from "assets/images/service1.png";
import serviceBackground2 from "assets/images/service2.png";
import landBackground from "assets/images/landing-background.png";

export const UsageCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "30px 40px 30px rgb(0 0 0 / 10%)",
      padding: "48px",
      boxSizing: "border-box",
      margin: "0 24px 48px 24px",
    },
    title: {
      textAlign: "left",
      color: "#1e5a9f",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "28px",
      fontWeight: 700,
      height: "auto",
      letterSpacing: "0.15em",
      lineHeight: 1,
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      marginBottom: "12px",
    },
    des: {
      marginTop: "12px",
      textAlign: "left",
      color: "#000",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "16px",
      fontWeight: 700,
      height: "auto",
      letterSpacing: "0.05em",
      lineHeight: 1.4,
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
    },
  })
);
