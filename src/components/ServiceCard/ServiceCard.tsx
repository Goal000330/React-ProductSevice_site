import { slideImg } from "config/utils";
import Reveal from "react-awesome-reveal";
import backImg from "./../../assets/images/2.png";
import { ServiceCardStyles } from "./ServiceCardStyles";

export default function ServiceCard() {
  const classes = ServiceCardStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imgRoot}>
        <Reveal keyframes={slideImg} className={classes.slideRoot} triggerOnce>
          <div></div>
        </Reveal>
        <img src={backImg} className={classes.cardImg} />
      </div>
      <div className={classes.cardDes}>
        〜150,000円｜本格ホームページ・サービスページ制作
      </div>
      <div className={classes.cardFooter}>
        <i className='fas fa-pen-nib'></i>WEB制作
      </div>
    </div>
  );
}
