import { LandingStyle } from "./LandingStyle";
import clsx from "clsx";
import ServiceCard from "components/ServiceCard/ServiceCard";
import LinkLetter from "components/LinkLetter/LinkLetter";
import landLetter from "assets/images/landing-letter.webp";
import { Grid } from "@material-ui/core";
import ActionButton from "components/ActionButton/ActionButton";

export const Landing = () => {
  const classes = LandingStyle();
  return (
    <>
      <div className={classes.landingImgRoot}>
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
          <Grid container>
            <Grid item md={4} sm={6} xs={12}>
              <ServiceCard />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ServiceCard />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ServiceCard />
            </Grid>
          </Grid>
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
          <Grid container>
            <Grid item md={4} sm={6} xs={12}>
              <ServiceCard />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ServiceCard />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ServiceCard />
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.serviceRoot}>
        <Grid container spacing={3} className={classes.services}>
          <Grid item md={6} sm={6} xs={6}>
            <div className={classes.serviceWrap}>
              <div className={classes.service1}>
                <div className={classes.serviceTitle}>
                  施策ぱっとの<br></br> 使い方
                </div>
                <ActionButton
                  className={classes.serviceBtn}
                  content='利用方法'
                />
              </div>
            </div>
          </Grid>
          <Grid item md={6} sm={6} xs={6}>
            <div className={classes.serviceWrap}>
              <div className={classes.service2}>
                <div className={classes.serviceTitle}>
                  運営への<br></br> お問い合わせ
                </div>
                <ActionButton
                  className={classes.serviceBtn}
                  content='お問い合わせ'
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
