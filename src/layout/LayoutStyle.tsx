/** @format */

import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const LayoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    sidebar: {
      width: "300px",
      background: "#fff",
      padding: "48px 12px 48px 12px",
    },
    container: {
      flexGrow: 1,
      background: "#ebeff2",
    },
    header: {},
    footer: {},
  })
);
