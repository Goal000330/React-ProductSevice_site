import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

export const LandingStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#282E4E",
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

    seeMoreContainer: {
      alignContent: "center",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "center",
      padding: "0px",
      transitionDelay: "300ms",
      transitionDuration: "800ms",
      display: "flex",
      cursor: "pointer",
    },
    seeMoreLetter: {
      color: "000000",
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: 600,
      height: "auto",
      lineHeight: 1.4,
      textAlign: "left",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      width: "auto",
      maxWidth: "100%",
      justifyContent: "flex-start",
      marginRight: "5px",
      "&:hover": {
        color: "#9ab0bc !important",
      },
    },
    moreIcon: {
      //   width: "48px",
      //   height: "48px",
    },
    CardContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
  })
);
