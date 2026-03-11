import BlogGrid from "@/components/Blog/BlogGrid"
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blogs",
  description: "This is Privacy Policy",
  // other metadata
};
export default function BlogPage() {

  return (
    <>
      <BlogGrid />
    </>
  )
}