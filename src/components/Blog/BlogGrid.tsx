import blogData from "./blogData"
import BlogItem from "./BlogItem"

const BlogGrid = () => {

  return (
    <section className= "pt-55 bg-gray-100">

      <div className="max-w-[1170px] mx-auto px-4">

        <h2 className="text-3xl font-bold mb-10">
          Our Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogData.map((blog, index) => (
            <BlogItem key={index} blog={blog} />
          ))}

        </div>

      </div>

    </section>
  )
}

export default BlogGrid;