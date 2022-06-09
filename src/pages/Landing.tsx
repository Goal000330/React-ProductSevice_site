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
            <i className={clsx("fas fa-crown", classes.kingIcon)}></i>
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
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
      {/* /// */}
      <div className={classes.popularRankingRoot}>
        <div className={classes.popularRankingTitleContainer}>
          <div className={classes.popularRankingLeft}>
            <i className={clsx("fas fa-bell", classes.kingIcon)}></i>
            <div className={classes.popularRankingTitleLetter}>
              新着ニュース
            </div>
          </div>
          <div className={classes.seeMoreContainer}>
            <span className={classes.seeMoreLetter}>もっと見る k</span>
            <i className={clsx("fas fa-chevron-right", classes.moreIcon)}></i>
          </div>
        </div>
        <div className={classes.CardContainer}>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </>
  );
};
