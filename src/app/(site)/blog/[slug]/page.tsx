import blogData from "@/components/Blog/blogData"
import Image from "next/image"
import { notFound } from "next/navigation"

export default function BlogDetails({ params }: { params: { slug: string } }) {

  const blog = blogData.find(
    (item) => item.slug === params.slug
  )

  if (!blog) return notFound()

  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-[800px] mx-auto px-4">

        <Image
          src={blog.img}
          alt={blog.title}
          width={800}
          height={450}
          className="rounded-lg mb-6"
        />

        <span className="text-gray-500">
          {blog.date} • {blog.views} views
        </span>

        <h1 className="text-3xl font-bold mt-3 mb-6">
          {blog.title}
        </h1>

        <p className="text-gray-700 leading-relaxed">
          {blog.content}
        </p>

      </div>

    </section>
  )
}