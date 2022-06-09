/** @format */

import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const SidebarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "276px",
      background: "#fff",
      padding: "48px 12px 48px 12px",
    },
    logoImg: {
      width: "167px",
      height: "44px",
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
      padding: "0 12px",
    },
    sidebarItem: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      height: "72px",
      borderBottom: "1px solid #eeeeee",
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
    },
    itemContent: {
      color: "#9ab0bc",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "16px",
      fontWeight: 600,
      height: "auto",
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      margin: "0 12px",
    },
    itemBtn: {
      "& i": {
        color: "#9ab0bc",
        fontSize: "24px",
        height: "20px",
        width: "16px",
      },
    },
  })
);
