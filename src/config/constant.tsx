/** @format */

import sidebar1 from "../assets/icons/sidebar-icon1.png";
import sidebar2 from "../assets/icons/sidebar-icon2.png";
import sidebar3 from "../assets/icons/sidebar-icon3.png";
import sidebar4 from "../assets/icons/sidebar-icon4.png";

export const API_URL = "https://test";
export const SidbarData = [
  {
    img: sidebar1,
    content: "個人向けサービス",
    router: [
      {
        name: "食事・美容",
        link: "/private/healthy",
      },
      {
        name: "ジム・マッサージ",
        link: "",
      },
      {
        name: "旅行・レジャー",
        link: "",
      },
      {
        name: "引越し",
        link: "",
      },
      {
        name: "家事・育児",
        link: "",
      },
      {
        name: "介護・福祉",
        link: "",
      },
      {
        name: "その他",
        link: "",
      },
    ],
  },
  {
    img: sidebar2,
    content: "会社向けサービス",
    router: [
      {
        name: "ITツール利用",
        link: "",
      },
      {
        name: "システム開発",
        link: "",
      },
      {
        name: "WEB制作",
        link: "",
      },
      {
        name: "資料作成",
        link: "",
      },
      {
        name: "士業業務代行",
        link: "",
      },
      {
        name: "健康診断",
        link: "",
      },
      {
        name: "その他",
        link: "",
      },
    ],
  },
  {
    img: sidebar3,
    content: "利用方法",
    router: [
      {
        name: "利用方法",
        link: "/usage",
      },
      {
        name: "お問い合わせ",
        link: "",
      },
    ],
  },
  {
    img: sidebar4,
    content: "アカウント",
  },
];
