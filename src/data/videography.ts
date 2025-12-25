import { Project } from '../../types';

export const VIDEOGRAPHY_DATA: Project[] = [
  {
    id: 'v1',
    common: {
      category: 'Videography',
      image: '/daguangrongtu.png',
      modalImage: '/daguang.png',
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
      image: '/motetihuan.png',
      modalImage: '/tihuan.png',
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
      image: '/shijiao1.png',
      modalImage: '/shijiao.png',
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
      image: '/ipsheji.png',
      modalImage: '/ipsheji1.png',
    },
    zh: {
      title: '星际探索家IP设计',
      subtitle: '平面设计',
      description: '“当浩瀚宇宙遇上稚嫩好奇，孤独便化作了彩色的糖衣。”。',
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
      image: '/shengdankv.png', 
      modalImage: '/shengdankv1.png',
      bilibiliId: 'BV1WZ2xBaEjC'
    },
    zh: {
      title: '淘宝天猫圣诞节大促',
      subtitle: '平面设计',
      description: '大广赛省一等奖作品，赤尾避孕套广告。',
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
      image: 'https://i0.hdslb.com/bfs/archive/486455e1c101cadcff46566384bf184275bdaafb.jpg', 
      bilibiliId: 'BV1J5S7B6ECM'
    },
    zh: {
      title: '华中师大 2021级播主毕业晚会 串场视频',
      subtitle: '串场视频',
      description: '华中师范大学2021级播音与主持艺术专业毕业晚会串场视频。',
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
  {
    id: 'v7',
    common: {
      category: 'Videography',
      image: 'https://i1.hdslb.com/bfs/archive/0adef108d563d336004fc99400e077f47233932e.jpg', 
      bilibiliId: 'BV1KszYYVE5z'
    },
    zh: {
      title: '如有神助',
      subtitle: '广告',
      description: '可画创意广告，噔噔噔~噔噔蹬蹬~蹬蹬噔噔噔~（教父主题曲）。',
      role: '摄影、剪辑',
      tags: ['广告'],
      awards: [],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'Divine Assistance',
      subtitle: 'Ad',
      description: 'Canva Creative Ads.',
      role: 'Photographer, Editor',
      tags: ['Ad'],
      awards: [],
      concept: "",
      roleDetail: ""
    }
  },
  {
    id: 'v8',
    common: {
      category: 'Videography',
      image: 'https://i2.hdslb.com/bfs/archive/9a820663d06f3c9c20837c841f2cd251d60193b9.jpg', 
      bilibiliId: 'BV14hWfecEFd'
    },
    zh: {
      title: '大计赛Vlog | “已为厦门之旅留好了伤心的底色”',
      subtitle: 'Vlog',
      description: '记录厦门之旅与大计赛参赛经历。',
      role: 'Vlogger',
      tags: ['Vlog'],
      awards: [],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'Competition Vlog | Xiamen Trip',
      subtitle: 'Vlog',
      description: 'Vlog recording the trip to Xiamen and the computer design competition.',
      role: 'Vlogger',
      tags: ['Vlog'],
      awards: [],
      concept: "",
      roleDetail: ""
    },
  },
  {
    id: 'v9',
    common: {
      category: 'Videography',
      image: 'https://i0.hdslb.com/bfs/archive/4bae1ece0532bcfcc176b108eca3fb82d52407e2.jpg', 
      bilibiliId: 'BV1Co4y1c7pH'
    },
    zh: {
      title: '透过你的屏幕我的眼—揭示显示设备上的色彩差异',
      subtitle: '科普',
      description: '探讨不同显示设备之间的色彩差异问题。',
      role: '制作人',
      tags: ['科普', '色彩科学', '显示技术'],
      awards: ['科普中国青年之星创作大赛优秀作品','新媒体课程大赛全国三等奖','华中师范大学科普短视频大赛一等奖'],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'Color Differences Across Screens',
      subtitle: 'Tech explainer',
      description: 'Exploring color differences between different display devices.',
      role: 'Producer',
      tags: ['Tech', 'Color Science', 'Display'],
      awards: ['Outstanding Works - the China Youth Star Science Popularization Creation Competition', 'National Third Prize - the New Media Course Competition', 'First Prize - CCNU Science Popularization Short Video Competition'],
      concept: "",
      roleDetail: ""
    }
  },
  {
    id: 'v10',
    common: {
      category: 'Videography',
      image: 'https://i0.hdslb.com/bfs/archive/bc8adbc78587bb1fef209d0f6bbf80ec58665c15.jpg', 
      bilibiliId: 'BV1cj411X7An'
    },
    zh: {
      title: '贴心护“胃”',
      subtitle: '广告',
      description: '大广赛作品，葵花药业广告。',
      role: '所有',
      tags: ['广告'],
      awards: [],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'Protect Your Stomach',
      subtitle: 'Ad',
      description: 'Video for ad competition, Kuihua Pharmaceutical advertisement',
      role: 'All',
      tags: ['Ad'],
      awards: [],
      concept: "",
      roleDetail: ""
    }
  },
  {
    id: 'v11',
    common: {
      category: 'Videography',
      image: 'https://i2.hdslb.com/bfs/archive/d793596fe4056168deb836bb8ade292e51a23b44.jpg', 
      bilibiliId: 'BV1rP411B7DJ'
    },
    zh: {
      title: '刀枪不入，更强防护',
      subtitle: '广告',
      description: '大广赛作品，赤尾避孕套创意展示。',
      role: '所有',
      tags: ['广告'],
      awards: ['华中师范大学“一幕光影”短视频大赛一等奖'],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'Invincible Protection',
      subtitle: 'Ad',
      description: 'Video for ad competition, Creative Display of Chiwei Condoms.',
      role: 'All',
      tags: ['Ad', 'Creative'],
      awards: ['First Prize-"A Glimpse of Light" Short Video Competition at CCNU'],
      concept: "",
      roleDetail: ""
    }
  },
  {
    id: 'v12',
    common: {
      category: 'Videography',
      image: 'https://i0.hdslb.com/bfs/archive/921e1fd1f5a55f24a08c5576c94b63abd1e05d48.jpg', 
      bilibiliId: 'BV1wp4y1u7Zc'
    },
    zh: {
      title: '华师数媒系2023瑶里写生纪念视频',
      subtitle: '纪念视频',
      description: '记录华中师范大学数媒系2023年瑶里写生之旅。',
      role: '摄影、剪辑',
      tags: ['写生', '纪念', '瑶里'],
      awards: [],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'CCNU Digital Media 2023 Yaoli Sketching Trip',
      subtitle: 'Commemorative Video',
      description: 'Recording the 2023 sketching trip to Yaoli by the Digital Media Department of CCNU.',
      role: 'Cinematographer, Editor',
      tags: ['Sketching', 'Memory', 'Yaoli'],
      awards: [],
      concept: "",
      roleDetail: ""
    }
  },
  {
    id: 'v13',
    common: {
      category: 'Videography',
      image: 'https://i0.hdslb.com/bfs/archive/397f468fd59ecef728a462d67c785a1efb0525aa.jpg', 
      bilibiliId: 'BV1vH4y1e7hk'
    },
    zh: {
      title: '海 | vol.1',
      subtitle: '风景短片',
      description: '关于大海的影像记录。',
      role: '摄影',
      tags: ['风景', '海'],
      awards: [],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'Sea | vol.1',
      subtitle: 'Landscape Short',
      description: 'Visual record of the sea.',
      role: 'Cinematographer',
      tags: ['Landscape', 'Sea'],
      awards: [],
      concept: "",
      roleDetail: ""
    }
  }
];
