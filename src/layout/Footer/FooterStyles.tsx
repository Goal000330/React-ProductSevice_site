/** @format */

import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const FooterStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      position: "relative",
      background: "#192225",
      margin: "0px 0px 0px 0px",
      zIndex: 3,
      maxWidth: "100%",
      padding: "24px 60px",
      justifyContent: "space-between",
    },
    link: {
      color: "#55727e",
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: 600,
      height: "auto",
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      "& i": {
        color: "#55727e",
      },
    },
    imLink: {
      "& p": {
        color: "#55727e",
        fontFamily: "Josefin Sans",
        fontSize: "14px",
        fontWeight: 600,
        letterSpacing: "0.15em",
        lineHeight: "1.4",
        margin: 0,
      },
      height: "50px",
      display: "flex",
      alignItems: "flex-end",
    },
  })
);
