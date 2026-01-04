import { Project } from '../../types';

export const DEV_DATA: Project[] = [
  {
    // 🔴 关键修改 1：改一个唯一的 ID，绝对不能和上面的 v5 重复
    id: 'design_christmas_promo', 
    common: {
      // 🔴 关键修改 2：如果是平面设计，建议 Category 改为 Design 或保持 Videography
      category: 'Development', 
      image: '/qiche.png', 
      modalImage: '/qiche1.png',
      // 如果不是视频，可以去掉 bilibiliId，或者保留留空
      bilibiliId: '' 
    },
    zh: {
      title: '路特斯Emira短片',
      subtitle: '视频制作',
      description: '',
      role: '导演、摄影、剪辑',
      tags: ['广告', '大广赛'],
      awards: ["大广赛省一等奖"],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'Christmas Promotion',
      subtitle: 'Graphic Design',
      description: 'E-commerce posters for Christmas campaign.',
      role: 'Director, Photographer, Editor',
      tags: ['Commercial', 'Competition'],
      awards: ["Provincial 1st Prize"],
      concept: "",
      roleDetail: ""
    }
  }, // ⬅️ 🔴 关键修改 3：千万别忘了这个逗号！
];
