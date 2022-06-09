/** @format */

import { LandingStyle } from "./LandingStyle";
import clsx from "clsx";
import ServiceCard from "components/ServiceCard/ServiceCard";
import LinkLetter from "components/LinkLetter/LinkLetter";
import landBackground from "assets/images/landing-background.png";
import landLetter from "assets/images/landing-letter.webp";
import { Grid } from "@material-ui/core";

export const Landing = () => {
  const classes = LandingStyle();
  return (
    <>
      <div className={classes.landingImgRoot}>
        <img src={landBackground} className={classes.landingImg}></img>
        <img src={landLetter} className={classes.landingLetter}></img>
      </div>
      <div className={classes.popularRankingRoot}>
        <div className={classes.popularRankingTitleContainer}>
          <div className={classes.popularRankingLeft}>
            <i className={clsx("fas fa-crown", classes.kingIcon)}></i>
            <div className={classes.popularRankingTitleLetter}>
              人気ランキング
            </div>
          </div>
          <LinkLetter />
        </div>
        <div className={classes.CardContainer}>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
      <div className={classes.popularRankingRoot}>
        <div className={classes.popularRankingTitleContainer}>
          <div className={classes.popularRankingLeft}>
            <i className={clsx("fas fa-bell", classes.kingIcon)}></i>
            <div className={classes.popularRankingTitleLetter}>
              新着ニュース
            </div>
          </div>
          <LinkLetter />
        </div>
        <div className={classes.CardContainer}>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
      <div className={classes.serviceRoot}>
        <Grid container spacing={3} className={classes.services}>
          <Grid item md={6} sm={6} xs={6}>
            <div className={classes.service1}>
              <div className={classes.serviceTitle}>
                運営への<br></br> お問い合わせ
              </div>
              <div className={classes.serviceBtn}>
                <p className={classes.btnLetter}>利用方法</p>
                <i className='fas fa-chevron-right'></i>
              </div>
            </div>
          </Grid>
          <Grid item md={6} sm={6} xs={6}>
            <div className={classes.service2}>
              <div className={classes.serviceTitle}>
                運営への<br></br> お問い合わせ
              </div>
              <div className={classes.serviceBtn}>
                <p className={classes.btnLetter}>お問い合わせ</p>
                <i className='fas fa-chevron-right'></i>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
