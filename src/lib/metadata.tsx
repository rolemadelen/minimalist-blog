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
    role: 'Web Developer (Front-End)',
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
      year: '2023',
      project: 'Asayake Taiko Website Renewal',
      link: 'https://github.com/rolemadelen/asayake',
    },
    1: {
      year: '2023',
      project: 'Things I Want',
      link: 'https://github.com/rolemadelen/things-i-want',
    },
    2: {
      year: '2023',
      project: 'Artlog',
      link: 'https://github.com/rolemadelen/artlog',
    },
    3: {
      year: '2022',
      project: 'ghostvatar',
      link: 'https://github.com/rolemadelen/ghost-vatar',
    },
    4: {
      year: '2020',
      project: 'Baekjoon Online Judge CLI',
      link: 'https://github.com/euisblue/euisblue.github.io',
    },
    5: {
      year: '2016',
      project: 'TUI Chess',
      link: 'https://github.com/rolemadelen/chess',
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
