import { Language, Category } from '../../types';

export interface HeroItem {
  text: string;
  annotation: string;
  category: Category | null;
}

export interface HomeContent {
  heroItems: HeroItem[];
  intro: string;
  selectedWorks: string;
  years: string;
}

export const HOME_DATA: Record<Language, HomeContent> = {
  zh: {
    heroItems: [
      { text: "平面设计", annotation: "（Graphic Design）", category: Category.VIDEO },
      { text: "LORA训练", annotation: "（LORA Training）", category: Category.DESIGN },
      { text: "AI视频", annotation: "（AI video）", category: Category.DEV },
      { text: "炒粉炒饭", annotation: "（还在学）", category: null }
    ],
    intro: "设计不止于解决问题，是进一步要把问题解决的更好；|设计不至于满足需求，还需令人有更美好的满足。",
    selectedWorks: "精选作品",
    years: "[ 2025 ]"
  },
  en: {
    heroItems: [
      { text: "Videography", annotation: "(Extensive Portfolio)", category: Category.VIDEO },
      { text: "Graphic & UI", annotation: "(Main Focus & Passion)", category: Category.DESIGN },
      { text: "Development", annotation: "(Vibe Coder)", category: Category.DEV },
      { text: "Cooking", annotation: "(Still Learning)", category: null }
    ],
    intro: "A photographer who doesn't understand design is not a good product manager. | Learning by doing, living the MVP life, aiming for full-stack, but valuing actual impact above all.",
    selectedWorks: "Selected Works",
    years: "[ 2021 — 2025 ]"
  }
};
