import { HeaderStyles } from "./HeaderStyles";
import LogoImg from "../../assets/images/logo.webp";

interface HeaderProps {
  mobileAction: () => void;
}

export default function Header({ mobileAction }: HeaderProps) {
  const classes = HeaderStyles();

  return (
    <div className={classes.root}>
      <div className={classes.menu} onClick={mobileAction}>
        <i className='fas fa-bars'></i>
        <img src={LogoImg} className={classes.logoImg} alt='logo' />
      </div>
      <div className={classes.searchRoot}>
        <div className={classes.searchIcon}>
          <i className='far fa-search'></i>
        </div>
        <div className={classes.searchInput}>キーワードから探す</div>
      </div>
    </div>
  );
}
