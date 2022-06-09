/** @format */

import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const LayoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      background: "#ebeff2",
      width: "calc(100% - 300px)",
      marginLeft: "300px",
      minHeight: "calc(100vh - 163px)",
    },
    footer: {},
  })
);
