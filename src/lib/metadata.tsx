type Metadata = {
  owner: {
    [index: string]: any
  }
  work_exp: {
    [index: string]: any
  }
  work: {
    [index: string]: any
  }
  blog: {
    [index: string]: any
  }
  education: {
    [index: string]: any
  }
  contacts: {
    [index: string]: any
  }
}

export const metadata: Metadata = {
  owner: {
    name: 'Jii Eu',
    role: 'Front-End Engineer',
    email: 'hello@jiieu.com',
  },
  work_exp: {
    0: {
      year: '2023~',
      icon: '🧑🏻‍💻🇺🇸',
      company: 'Freelance Web Developer',
    },
    1: {
      year: '2021-2023',
      icon: '🧑🏻‍💻🇯🇵',
      company: 'Aikomi Inc.',
      link: 'https://aikomi.co.jp/',
    },
    2: {
      year: '2020-2021',
      icon: '🧑🏻‍🏫🇯🇵',
      company: 'BorderLink Inc.',
      link: 'https://www.borderlink.co.jp/alt/',
    },
    3: {
      year: 'Winter 2017',
      icon: '🧑🏻‍💻🇺🇸',
      company: 'FASTech LLC.',
    },
    4: {
      year: '2014-2016',
      icon: '🧑🏻‍💻🇺🇸',
      company: 'Riverside City College',
      link: 'https://www.rcc.edu/student-support/ccc-lab.html',
    },
  },
  work: {
    0: {
      year: '2023.08',
      project: 'Asayake Taiko Website Renewal',
      link: 'https://github.com/rolemadelen/asayake',
    },
    5: {
      year: '2023.07',
      project: 'Things I Want',
      link: 'https://github.com/rolemadelen/things-i-want',
    },
    10: {
      year: '2023.06',
      project: 'Portfolio v1.0',
      link: 'https://github.com/rolemadelen/rolemadelen.github.io',
    },
    20: {
      year: '2023.03',
      project: 'Artlog',
      link: 'https://github.com/rolemadelen/artlog',
    },
    30: {
      year: '2022.07',
      project: 'ghostvatar',
      link: 'https://github.com/rolemadelen/ghost-vatar',
    },
    40: {
      year: '2020.05',
      project: 'Baekjoon Online Judge CLI',
      link: 'https://github.com/euisblue/euisblue.github.io',
    },
    50: {
      year: '2016.04',
      project: 'TUI Chess',
      link: 'https://github.com/rolemadelen/chess',
    },
  },
  blog: {
    0: {
      year: '2023.06',
      project: 'Next.js - Minimalist Blog (current)',
      link: 'https://github.com/rolemadelen/minimalist-blog',
    },
    1: {
      year: '2023.04',
      project: 'Next.js - Zettelkasten Blog',
      link: 'https://github.com/rolemadelen/blog-v2',
    },
    2: {
      year: '2022.05',
      project: 'Next.js - Blog (Sorted by relevance)',
      link: 'https://mido-blog.vercel.app/',
    },
    3: {
      year: '2020.08',
      project: 'Vue.js - Multilingual Blog',
      link: 'https://old-vue-blog.netlify.app/',
    },
    4: {
      year: '2020.03',
      project: 'Next.js - Multilingual Blog',
      link: 'https://bluelog-b6d3ilsz3-euisblue.vercel.app/',
    },
    5: {
      year: '2019.09',
      project: 'Jekyll - Multilingual Blog (modified a theme)',
      link: 'https://euisblue.github.io/',
    },
  },
  education: {
    0: {
      year: '2019',
      school: 'UC San Diego - B.S. Human-Computer Interaction',
    },
    1: {
      year: '2016',
      school: 'Riverside City College - A.S. Computer Science',
    },
  },
  contacts: {
    youtube: {
      name: 'YouTube',
      handle: 'rolemadelen',
      link: 'https://youtube.com/@rolemadelen',
    },
    github: {
      name: 'GitHub',
      handle: 'rolemadelen',
      link: 'https://github.com/rolemadelen',
    },
    twitter: {
      name: 'Twitter',
      handle: 'rolemadelen',
      link: 'https://twitter.com/rolemadelen',
    },
    linkedin: {
      name: 'LinkedIn',
      handle: 'jiieu',
      link: 'https://www.linkedin.com/in/jiieu/',
    },
    instagram: {
      name: 'Instagram',
      handle: 'jiidraws',
      link: 'https://www.instagram.com/jiidraws',
    },
  },
}
