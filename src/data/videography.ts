import { Project } from '../../types';

export const VIDEOGRAPHY_DATA: Project[] = [
  {
    id: 'v1',
    common: {
      category: 'Videography',
      image: '/daguangrongtu.jpg',
      modalImage: '/daguang.jpg',
      bilibiliId: 'BV1KD2iYBEjF'
    },
    zh: {
      title: '产品溶图打光',
      subtitle: '平面设计',
      description: '在保持产品一致性的情况下进行产品与背景的融合并匹配光照。',
      role: '导演、摄影、剪辑',
      tags: ['纪录片', '建筑', '文化'],
      awards: ["第17届中国大学生计算机设计大赛全国一等奖"],
      concept: "运用 confyui完成香水产品电商详情页风格优化从视觉呈现到转化逻辑实现全链路升级。前期先基干产品核心卖点与目标客群偏好通过 AI 的风格迁移功能，确定“简约质感 + 强视觉焦点!”的设计方向",
      roleDetail: "负责前期策划、分镜绘制、现场拍摄调度以及后期剪辑调色。特别是对于古建筑光影的捕捉，采用了自然光与补光结合的方式。"
    },
    en: {
      title: 'Round & Square',
      subtitle: 'Documentary',
      description: 'A documentary exploring the "Magical Ratio" in ancient Chinese architecture. Won 1st Prize in the 17th National Computer Design Competition.',
      role: 'Director, Cinematographer, Editor',
      tags: ['Documentary', 'Architecture', 'Culture'],
      awards: ["1st Prize, 17th National Computer Design Competition"],
      concept: "For the cinematography, I selected scenes with natural wood textures and used large, single-source lighting to highlight details while maintaining a rustic, natural feel. Visually, I referenced ancient seal and scroll designs, using kraft paper textures as a base to ensure stylistic unity while retaining historical charm.",
      roleDetail: "Responsible for planning, storyboarding, on-site shooting direction, editing, and color grading."
    }
  },
  {
    id: 'v2',
    common: {
      category: 'Videography',
      image: '/motetihuan.jpg',
      modalImage: '/tihuan.jpg',
      bilibiliId: 'BV1U24y1T7DP'
    },
    zh: {
      title: '模特产品替换',
      subtitle: '平面设计',
      description: '在保持模特表情姿势不变的情况下替换产品。',
      role: '摄影、剪辑、调色',
      tags: ['中医', '摄影'],
      awards: ["中南赛区一等奖"],
      concept: "初步选出替换区域进行遮罩，运用 confyui进行局部重绘完成产品的替换的同时。保持图片原本的特点要素",
      roleDetail: "负责全片摄影构图、MG动画制作，以及后期剪辑与调色工作。"
    },
    en: {
      title: 'Checks and Balances',
      subtitle: 'Documentary',
      description: 'Visualizing the philosophy of Traditional Chinese Medicine (TCM). Focus on lighting and fixed lens composition.',
      role: 'Cinematographer, Editor, Colorist',
      tags: ['TCM', 'Cinematography'],
      awards: ["1st Prize (Central South Region)"],
      concept: "As the primary cinematographer, I aimed to mimic professional documentary techniques, pursuing stable and standardized compositions. I extensively used side lighting and three-point lighting to create depth, utilizing warm tones as the main light source.",
      roleDetail: "Cinematography, Animation, Editing, Color Grading."
    }
  },
  {
    id: 'v3',
    common: {
      category: 'Videography',
      image: '/shijiao1.jpg',
      modalImage: '/shijiao.jpg',
      bilibiliId: 'BV1We41117v8'
    },
    zh: {
      title: '多角度切换',
      subtitle: '平面设计',
      description: '多视角切换更好展示产品特点，也可用于洗图及AIGC视频首尾帧',
      role: '摄影、剪辑',
      tags: ['剧情', '家庭'],
      awards: ['马栏山青年创作大赛微电影单元最佳作品',"NCDA省级二等奖"],
      concept: "AIGC可帮助企业节省85%以上的拍摄与3D建模成本，实现同一模特场景光影环境下快速切换多视角，解决传统摄影中模特档期、场地租赁等高成本痛点。",
      roleDetail: "负责现场摄影调度、后期剪辑及影片调色。重点在于镜头语言的情绪表达。"
    },
    en: {
      title: 'Oh, Behave',
      subtitle: 'Micro Film',
      description: 'A narrative film about family conflict and personal growth. Used cool tones to express the protagonist\'s inner world.',
      role: 'Cinematographer, Editor',
      tags: ['Narrative', 'Drama'],
      awards: ['Best Work - Short Film Category of the Malanshan Youth Creation Competition', "Second Prize - the Provincial Level of NCDA"],
      concept: "This is a realistic narrative. I needed to restore real-life scenes as much as possible to avoid the 'amateurish' feel often seen in student works. The film uses simple cool and warm tones to imply the protagonist's state of mind.",
      roleDetail: "Cinematography, Editing, Color Grading. Focused on emotional expression through lens language."
    }
  },
  {
    id: 'v4',
    common: {
      category: 'Videography',
      image: '/ipsheji.jpg',
      modalImage: '/ipsheji1.jpg',
    },
    zh: {
      title: '星际探险家IP设计',
      subtitle: '平面设计',
      description: '“当浩瀚宇宙遇上稚嫩好奇，孤独便化作了彩色的糖衣。”',
      role: '摄影、调色',
      tags: ['微电影', '青春', '文旅'],
      awards: ["暂无获奖"],
      concept: "灵感最初源于对“安全感”的视觉化探索。宇宙通常是冰冷深邃的（蓝紫色调），而设计特意选用了高饱和度的**“暖绒黄” (Dandelion Yellow)** 作为宇航服主色。这就像是在无尽的黑夜里点亮了一盏行走的小夜灯，象征着童心是抵御未知的最强铠甲。",
      roleDetail: "独立完成全片摄影与后期调色工作。"
    },
    en: {
      title: 'Miss You',
      subtitle: 'Micro Film',
      description: 'A youth drama micro-film, primarily showcasing the beautiful scenery of Wuhan city.',
      role: 'Cinematographer, Colorist',
      tags: ['Micro Film', 'Youth', 'Cultural Tourism'],
      awards: ["None"],
      concept: "The core of this film lies in the 'interaction between people and the environment', aiming to showcase the scenery of Wuhan. The challenge was how to naturally express the beauty of the environment without making it feel like a 'landmark tour'. I used a larger aperture lens for stronger bokeh to separate subjects from the background, while the 50mm focal length maintained realistic perspective. Natural light was used throughout for natural emotional expression, and the color grading mimics film tones.",
      roleDetail: "Independently completed the entire cinematography and post-production color grading."
    }
  },
  {
    id: 'v5',
    common: {
      category: 'Videography',
      image: '/shengdankv.jpg', 
      modalImage: '/shengdankv1.jpg',
      bilibiliId: 'BV1WZ2xBaEjC'
    },
    zh: {
      title: '淘宝天猫圣诞节大促',
      subtitle: '平面设计',
      description: '圣诞节电商海报 。',
      role: '导演、摄影、剪辑',
      tags: ['广告', '大广赛'],
      awards: ["大广赛省一等奖"],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'Instant Slide',
      subtitle: 'Commercial Short',
      description: 'Provincial 1st Prize, National Advertising Art Competition.',
      role: 'Director, Cinematographer, Editor',
      tags: ['Commercial', 'Competition'],
      awards: ["Provincial 1st Prize - College Student Advertising Art Competition"],
      concept: "",
      roleDetail: ""
    }
  },
  {
    id: 'v6',
    common: {
      category: 'Videography',
      image: '/jingmian.jpg', 
      modalImage: '/3dlei.jpg',
      bilibiliId: 'BV1J5S7B6ECM'
    },
    zh: {
      title: '3D建模',
      subtitle: 'c4d',
      description: '',
      role: '视频制作',
      tags: ['毕业晚会', '串场视频'],
      awards: [],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'CCNU 2021 Broadcasting Graduation Gala Interlude',
      subtitle: 'Interlude Video',
      description: 'Interlude video for the graduation gala of the 2021 Broadcasting and Hosting Art major at Central China Normal University.',
      role: 'Video Production',
      tags: ['Graduation', 'Gala'],
      awards: [],
      concept: "",
      roleDetail: ""
    }
  },
];
