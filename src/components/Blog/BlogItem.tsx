import Image from "next/image"
import Link from "next/link"
import { BlogItemType } from "./blogData"

const BlogItem = ({ blog }: { blog: BlogItemType }) => {

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">

      <Image
        src={blog.img}
        alt={blog.title}
        width={400}
        height={250}
        className="w-full"
      />

      <div className="p-5">

        <span className="text-sm text-gray-500">
          {blog.date} • {blog.views} views
        </span>

        <h3 className="mt-2 font-semibold text-lg">
          {blog.title}
        </h3>

        <Link
          href={`/blog/${blog.slug}`}
          className="text-[#3683ab] mt-3 inline-block"
        >
          Read More →
        </Link>

      </div>

    </div>
  )
}

export default BlogItem;