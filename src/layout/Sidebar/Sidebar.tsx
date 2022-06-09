/** @format */

import { SidebarStyles } from "./SidebarStyles";
import LogoImg from "../../assets/images/logo.webp";
import avatar from "../../assets/images/avatar.png";
import { SidbarData } from "config/constant";

export default function Sidebar() {
  const classes = SidebarStyles();

  return (
    <div className={classes.root}>
      <img src={LogoImg} className={classes.logoImg} alt='logo' />
      <div className={classes.avatarRoot}>
        <img src={avatar} className={classes.avatarImg} />
        <div className={classes.avatarName}>しさく くらら</div>
        <div className={classes.avatarJob}>合同会社施策ぱっと</div>
      </div>
      <div className={classes.sidebarContent}>
        {SidbarData.map((item: any, key: any) => {
          return (
            <div className={classes.sidebarItem} key={key}>
              <img
                src={item.img}
                className={classes.itemImg}
                alt='sidebar-icon'
              />
              <div className={classes.itemContent}>{item.content}</div>
              <div className={classes.itemBtn}>
                <i className='fas fa-caret-right'></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
