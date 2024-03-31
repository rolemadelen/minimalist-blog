export type Data = {
  product: string
  date: string
  review: string
  rating: number
  link?: string
  image: string
}

export type ReviewData = {
  snacks: Data[]
  media: Data[]
}

export const reviewed: ReviewData = {
  snacks: [
    {
      product: 'QUAKER - Chocolate Rice Crips',
      date: '2024/03/30',
      review: 'the more you eat, the more sweeter it gets',
      rating: 4,
      image: 'quaker-chocolate-rice-crisps.png',
    },
  ],
  media: [
    {
      product: 'Node.js: The Documentary | An origin story',
      date: '2024/03/23',
      review: "I didn't know there were so many dramas behind node.js",
      link: 'https://youtu.be/LB8KwiiUGy0?si=4Fe4CRKDmB_VJqEm',
      rating: 5,
      image: 'honeypot.jpeg',
    },
  ],
}
