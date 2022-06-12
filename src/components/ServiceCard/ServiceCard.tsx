import backImg from "./../../assets/images/2.png";
import { ServiceCardStyles } from "./ServiceCardStyles";

export default function ServiceCard() {
  const classes = ServiceCardStyles();

  return (
    <>
      <div className={classes.root}>
        <img src={backImg} className={classes.cardImg} />
        <div className={classes.cardDes}>
          〜150,000円｜本格ホームページ・サービスページ制作
        </div>
        <div className={classes.cardFooter}>
          <i className='fas fa-pen-nib'></i>WEB制作
        </div>
      </div>
    </>
  );
}
