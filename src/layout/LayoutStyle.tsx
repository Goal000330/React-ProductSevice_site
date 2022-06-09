/** @format */

import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const LayoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    container: {
      flexGrow: 1,
      background: "#ebeff2",
    },
    footer: {},
  })
);
