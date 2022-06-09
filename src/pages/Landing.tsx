import React from "react";
import { LandingStyle } from "./LandingStyle";
import clsx from "clsx";
import ServiceCard from "components/ServiceCard/ServiceCard";
export const Landing = () => {
  const classes = LandingStyle();
  return (
    <>
      hi ! Nice meet you
      <div className={classes.popularRankingRoot}>
        <div className={classes.popularRankingTitleContainer}>
          <div className={classes.popularRankingLeft}>
            <img
              className={classes.kingIcon}
              src="https://storage.googleapis.com/studio-design-asset…56_webp_3853ca4a-b820-40b2-a329-1e8d376a46da.webp"
            />
            <div className={classes.popularRankingTitleLetter}>
              人気ランキング
            </div>
          </div>
          <div className={classes.seeMoreContainer}>
            <span className={classes.seeMoreLetter}>もっと見る k</span>
            <i className={clsx("fas fa-chevron-right", classes.moreIcon)}></i>
          </div>
        </div>
        <div className={classes.CardContainer}>
          <ServiceCard />
        </div>
      </div>
    </>
  );
};
