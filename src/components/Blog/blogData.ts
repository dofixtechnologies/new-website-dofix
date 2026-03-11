export interface BlogItemType {
  slug: string
  date: string
  views: number
  title: string
  img: string
  content: string
}

const blogData: BlogItemType[] = [
  {
    slug: "split-ac-vs-window-ac",
    date: "Mar 27, 2022",
    views: 300000,
    title: "Split AC vs Window AC – Which Is Best for Delhi Homes?",
    img: "/images/blog/blog-01.jpg",
    content:
      "Split AC and Window AC are the two most common air conditioners used in homes..."
  },
  {
    slug: "ac-service-guide",
    date: "Mar 28, 2022",
    views: 250000,
    title: "Complete Guide to AC Service and Maintenance",
    img: "/images/blog/blog-02.jpg",
    content:
      "Regular AC service is essential to maintain cooling performance..."
  },
  {
    slug: "ac-not-cooling",
    date: "Mar 29, 2022",
    views: 180000,
    title: "Why Your AC Is Not Cooling Properly",
    img: "/images/blog/blog-03.jpg",
    content:
      "If your AC is not cooling properly there can be multiple reasons..."
  }
]

export default blogData;