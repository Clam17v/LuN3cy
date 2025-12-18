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
    locationValue: "广东，珠海",
    contactLabel: "取得联系",
    emailMeLabel: "邮箱",
    email: "Clam17v@126.com",
    hello: "你好 ;-)",
    intro: "欢迎探讨与合作。",
    socials: {
      wechat: "Clam17v的实验房",
      xiaohongshu: "Clam17v",
      bilibili: "Clam17v",
      px500: "Clam17v"
    },
    githubLabel: "GitHub",
    footerDesign: "Powered by Gemini 3 Pro"
  },
  en: {
    baseLabel: "BASE",
    locationValue: "Zhuhai, Guangdong",
    contactLabel: "Get in touch",
    emailMeLabel: "Email Me",
    email: "Clam17v@126.com",
    hello: "Hello ;-)",
    intro: "Welcome to discuss & cooperate.",
    socials: {
      wechat: "Clam17v's Lab",
      xiaohongshu: "Clam17v",
      bilibili: "Clam17v",
      px500: "Clam17v"
    },
    githubLabel: "GitHub",
    footerDesign: "Powered by Gemini 3 Pro"
  }
};
