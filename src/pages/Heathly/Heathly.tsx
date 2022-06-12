import { Grid } from "@material-ui/core";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import ServiceCard from "components/ServiceCard/ServiceCard";
import { useState } from "react";
import CategoryModal from "./CategoryModal/CategoryModal";
import { HeathlyStyles } from "./HeathlyStyle";

export const Healthy = () => {
  const classes = HeathlyStyles();

  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const handleCreateClose = () => {
    setShowCategoryModal(false);
  };

  const categoryData = [
    "すべて",
    "食事配達",
    "歯の矯正",
    "ホワイトニング",
    "脱毛",
    "育児支援",
    "ジム",
  ];

  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.headerTitle}>食事・美容</div>
          <div
            className={classes.menu}
            onClick={() => setShowCategoryModal(true)}>
            <i className='fas fa-bars'></i>
          </div>
          <div className={classes.smallTitle}> すべて</div>
          <div className={classes.categoryRoot}>
            <div className={classes.categoryTitle}>WEB制作</div>
            <div className={classes.categoryTitle}>印刷物制作</div>
            <div className={classes.categoryTitle}>動画制作</div>
            <div className={classes.categoryTitle}>写真撮影・編集</div>
            <div className={classes.categoryTitle}>資料制作・デザイン</div>
          </div>
        </div>
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
          <Grid item md={4} sm={6} xs={12}>
            <ServiceCard />
          </Grid>
        </Grid>
      </div>
      <Breadcrumbs />
      <CategoryModal
        show={showCategoryModal}
        onClose={handleCreateClose}
        category={categoryData}
      />
    </>
  );
};
