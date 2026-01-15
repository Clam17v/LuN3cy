import { Project } from '../../types';

export const DESIGN_DATA: Project[] = [
  {
    id: 'd1',
    common: {
      category: 'Graphics & UI',
      image: '/kongzhi.jpg', 
      modalImage: '/kongzhi1.jpg',
      gallery: [
        'https://picsum.photos/800/600?random=11',
        'https://picsum.photos/800/600?random=12',
        'https://picsum.photos/800/600?random=13'
      ]
    },
    zh: {
      title: '复杂人物姿势控制',
      subtitle: '视觉设计',
      description: '使用SD Contro Net精确控制人物姿势。',
      role: 'UI 设计师',
      tags: ['汽车', 'HMI', 'Figma'],
      awards: ["课程设计优秀作品"],
      concept: "Open Pose权重：1 Depth权重:0.7在控制姿势的同时保持人物设计的特点。",
      roleDetail: "独立完成从中控大屏到仪表盘的整套UI绘制与交互逻辑设计。"
    },
    en: {
      title: 'Journey HMI System',
      subtitle: 'UI/UX Design',
      description: 'HMI design for New Energy Vehicles (NEV). A "Visual Weight Reduction" system featuring glassmorphism and soft gradients.',
      role: 'UI Designer',
      tags: ['Automotive', 'HMI', 'Figma'],
      awards: ["Course Design Excellence Award"],
      concept: "I designed a 'Visual Weight Reduction' system: clearer information, fresher colors, improving driver comfort. I believed that in a car environment emphasizing immediate feedback, the interface needed strong visual feedback. Thus, glassmorphism and light skeuomorphism became my choice.",
      roleDetail: "Independently completed the entire UI drawing and interaction logic from the central screen to the dashboard."
    }
  },
  {
    id: 'd2',
    common: {
      category: 'Graphics & UI',
      image: '/kv1.jpg', 
      modalImage: '/KV.jpg',
      gallery: [
        'https://picsum.photos/800/600?random=11',
        'https://picsum.photos/800/600?random=12',
        'https://picsum.photos/800/600?random=13'
      ]
    },
    zh: {
      title: 'Tranquil | 品牌视觉',
      subtitle: '视觉设计',
      description: 'The silent power of nature, restoring your balance.',
      role: 'UI 设计师',
      tags: ['汽车', 'HMI', 'Figma'],
      awards: ["课程设计优秀作品"],
      concept: "Tranquil 诞生于对自然本源的深切向往。在喧嚣的现代生活中，我们坚信植物拥有抚平感官、净化心灵的静默力量。Tranquil 探索全球纯净秘境，甄选最具活力的天然草本，以尊崇自然的萃取工艺，完整保留每一片叶、每一朵花中蕴含的治愈能量。我们不仅是植物的搬运工，更是身心平衡的守护者。每一次接触 Tranquil，都是一次回归丛林、深呼吸的静谧旅程。让肌肤与心灵，在草木的香气中，重获新生的宁静。",
      roleDetail: "独立完成从中控大屏到仪表盘的整套UI绘制与交互逻辑设计。"
    },
    en: {
      title: 'Journey HMI System',
      subtitle: 'UI/UX Design',
      description: 'HMI design for New Energy Vehicles (NEV). A "Visual Weight Reduction" system featuring glassmorphism and soft gradients.',
      role: 'UI Designer',
      tags: ['Automotive', 'HMI', 'Figma'],
      awards: ["Course Design Excellence Award"],
      concept: "I designed a 'Visual Weight Reduction' system: clearer information, fresher colors, improving driver comfort. I believed that in a car environment emphasizing immediate feedback, the interface needed strong visual feedback. Thus, glassmorphism and light skeuomorphism became my choice.",
      roleDetail: "Independently completed the entire UI drawing and interaction logic from the central screen to the dashboard."
    }
  },
];
