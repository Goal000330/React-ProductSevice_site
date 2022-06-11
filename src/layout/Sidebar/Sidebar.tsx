/** @format */

import { SidebarStyles } from "./SidebarStyles";
import LogoImg from "../../assets/images/logo.webp";
import avatar from "../../assets/images/avatar.png";
import banner from "../../assets/images/banner.png";
import { SidbarData } from "config/constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const classes = SidebarStyles();
  const [rightPanel, setRightPanel] = useState(false);
  const [rightRouters, setRightRouters] = useState<any>();
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/");
  };

  const handleAccount = () => {
    navigate("/account");
  };

  const handleRighPanel = (e: any) => {
    if (!e.show) {
      setRightPanel(false);
      navigate(e.link);
    } else {
      setRightPanel(true);
      setRightRouters(e.routers);
    }
  };

  const handleLink = (e: any) => {
    setRightPanel(false);
    navigate(e);
  };

  return (
    <>
      <div className={classes.root}>
        <img
          src={LogoImg}
          className={classes.logoImg}
          alt='logo'
          onClick={() => handleLogo()}
        />
        <div className={classes.avatarRoot} onClick={() => handleAccount()}>
          <img src={avatar} className={classes.avatarImg} />
          <div className={classes.avatarName}>しさく くらら</div>
          <div className={classes.avatarJob}>合同会社施策ぱっと</div>
        </div>
        <div className={classes.sidebarContent}>
          {SidbarData.map((item: any, key: any) => {
            return (
              <div
                className={classes.sidebarItem}
                key={key}
                onClick={() => handleRighPanel(item.router)}>
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
      <div className={classes.studyLink}>
        <img src={banner} className={classes.banner}></img>
      </div>
      {rightPanel ? (
        <div className={classes.sidebarRight}>
          <div className={classes.rightHeader}>
            <div
              className={classes.closeIcon}
              onClick={() => setRightPanel(false)}>
              <i className='fal fa-times'></i>
            </div>
          </div>
          <div className={classes.rightContont}>
            {rightRouters?.map((item: any, key: any) => {
              return (
                <div
                  className={classes.rightItem}
                  key={key}
                  onClick={() => handleLink(item?.link)}>
                  <div className={classes.rightArrow}>
                    <i className='far fa-arrow-right'></i>
                  </div>
                  <div className={classes.rightItemContent}>{item?.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
