/** @format */

import clsx from "clsx";
import ActionButton from "components/ActionButton/ActionButton";
import { useState } from "react";
import { AccountSettingStyles } from "./AccountSettingStyle";

export const AccountSetting = () => {
  const classes = AccountSettingStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.accountSettingTitle}>アカウント設定</div>
        <div className={classes.name}>
          <div
            className={clsx(classes.accountSettingForm, classes.marginRight24)}>
            <div className={classes.formTitle}>
              姓 <span className={classes.symbol}>*</span>
            </div>
            <input
              className={classes.formInput}
              value={name}
              placeholder='こちらのフォームより承っております'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={classes.accountSettingForm}>
            <div className={classes.formTitle}>
              名 <span className={classes.symbol}>*</span>
            </div>
            <input
              className={classes.formInput}
              value={email}
              placeholder='こちらのフォームより承っております'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.accountSettingForm}>
          <div className={classes.formTitle}>
            日中連絡がとれる電話番号 <span className={classes.symbol}>*</span>
          </div>
          <input
            className={classes.formInput}
            value={name}
            placeholder='0X0-1234-5678'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.accountSettingForm}>
          <div className={classes.formTitle}>
            会社で使うメールアドレス <span className={classes.symbol}>*</span>
          </div>
          <input
            className={classes.formInput}
            value={email}
            placeholder='example@shisaku-pad.co.jp'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.accountSettingForm}>
          <div className={classes.formTitle}>
            個人で使うメールアドレス <span className={classes.symbol}>*</span>
          </div>
          <input
            className={classes.formInput}
            value={email}
            placeholder='example@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.accountSettingForm}>
          <div className={classes.formTitle}>
            パスワード <span className={classes.symbol}>*</span>
          </div>
          <input
            className={classes.formInput}
            value={email}
            placeholder='example@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.accountSettingForm}>
          <div className={classes.formTitle}>
            プロフィール写真 <span className={classes.symbol}>*</span>
          </div>
          <input
            className={classes.formInput}
            value={email}
            placeholder='example@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.policy}>
          <input type='checkbox' className={classes.checkbox} />
          個人情報保護方針に同意する
        </div>
        <ActionButton
          type='dark'
          content='設定する'
          className={classes.formBtn}
        />
      </div>
    </div>
  );
};
