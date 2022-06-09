import "./ServiceCard.css";
import backImg from "./../../assets/images/2.png";
export default function ServiceCard() {
  // interface Props {
  //   children: React.ReactNode;
  //   color?: string;
  //   disabled?: boolean;
  //   className?: any;
  //   onClick?: () => void;
  // }

  return (
    <>
      <div className="c-root">
        <img src={backImg} className="c-imageContainer" />
        <div className="c-descContainer">
          〜150,000円｜本格ホームページ・サービスページ制作
        </div>
        <div className="c-cardFooterContainer">
          <i className="fas fa-pen-nib"></i>
          <span className="c-footerLetter">WEB制作</span>
        </div>
      </div>
    </>
  );
}
