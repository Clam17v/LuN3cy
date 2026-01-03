import { Project } from '../../types';

export const DESIGN_DATA: Project[] = [
  {
    id: 'd1',
    common: {
      category: 'Graphics & UI',
      image: '/kongzhi.png', 
      modalImage: '/kongzhi1.png',
      gallery: [
        'https://picsum.photos/800/600?random=11',
        'https://picsum.photos/800/600?random=12',
        'https://picsum.photos/800/600?random=13'
      ]
    },
    zh: {
      title: '复杂人物姿势控制',
      subtitle: '人物设计',
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
  
];
