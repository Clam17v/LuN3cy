import { Language } from '../../types';

export interface SocialLinks {
  wechat: string;
  xiaohongshu: string;
  bilibili: string;
  px500: string;
}

export interface ContactContent {
  baseLabel: string;
  locationValue: string;
  contactLabel: string;
  emailMeLabel: string;
  email: string;
  hello: string;
  intro: string;
  socials: SocialLinks;
  tooltip?: string;
  githubLabel: string;
  footerDesign: string;
}

export const CONTACT_DATA: Record<Language, ContactContent> = {
  zh: {
    baseLabel: "BASE",
    locationValue: "浙江，杭州",
    emailMeLabel: "邮箱",
    email: "calm17v@163.com",
    hello: "你好 ;-)",
    intro: "欢迎探讨与合作。",
    socials: {
      wechat: "",
      xiaohongshu: "",
      bilibili: "",
      px500: ""
    },
    githubLabel: "GitHub",
    footerDesign: "Powered by Gemini 3 Pro"
  },
  en: {
    baseLabel: "BASE",
    locationValue: "Zhuhai, Guangdong",
    contactLabel: "Get in touch",
    emailMeLabel: "Email Me",
    email: "Calm17v@126.com",
    hello: "Hello ;-)",
    intro: "Welcome to discuss & cooperate.",
    socials: {
      wechat: "Calm17v's Lab",
      xiaohongshu: "Calm17v",
      bilibili: "Calm17v",
      px500: "Calm17v"
    },
    githubLabel: "GitHub",
    footerDesign: "Powered by Gemini 3 Pro"
  }
};
