export type Data = {
  name: string
  director?: string
  date: string
  review: string
  rating: number
  link?: string
  image: string
}

export type ReviewData = {
  snacks: Data[]
  media: Data[]
  movies: Data[]
}

export const reviewed: ReviewData = {
  snacks: [
    {
      name: 'QUAKER - Chocolate Rice Crips',
      date: '2024/03/30',
      review: 'the more you eat, the sweeter it gets.',
      rating: 3.5,
      image: 'quaker-choco-rice-crisps.webp',
    },
  ],
  media: [
    {
      name: 'Node.js: The Documentary | An origin story',
      date: '2024/03/23',
      review: "I didn't know there were so many dramas behind node.js.",
      link: 'https://youtu.be/LB8KwiiUGy0?si=4Fe4CRKDmB_VJqEm',
      rating: 5,
      image: 'honeypot.webp',
    },
  ],
  movies: [
    {
      name: 'Murder on the Orient Express',
      director: 'Kenneth Branagh',
      date: '2024/04/20 | Delta Air',
      review: '살인에 정의가 있는가',
      rating: 4,
      image: 'murder-on-the-orient-express.webp',
    },
    {
      name: 'Insidious: The Red Door',
      director: 'Patrick Wilson',
      date: '2024/04/20 | Delta Air',
      review: '현실과 또 다른 세상~ 환상의 디지털 세상~',
      rating: 2.5,
      image: 'insidious-the-red-door.webp',
    },
    {
      name: 'Talk To Me',
      director: 'Danny Philippou, Michael Philippou',
      date: '2024/04/20 | Delta Air',
      review: '오늘 우리 귀신 보러 갈까?',
      rating: 2,
      image: 'talktome.webp',
    },
    {
      name: 'M3GAN',
      director: 'Gerald Johnstone',
      date: '2024/04/01 | KY',
      review:
        'a glimpse into potential dystopian future resulting from technological singularity.',
      rating: 4,
      image: 'm3gan.webp',
    },
    {
      name: "Five Nights at Freddy's",
      director: 'Emma Tammi',
      date: '2024/03/30 | KY',
      review: 'Alphonse Elric brainwashed by the yellow bunny to harm others.',
      rating: 3,
      image: '5nights_at_freddys.webp',
    },
  ],
}
