import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { FaGithub } from "react-icons/fa";
import { fetchBlogs } from "@/function/blog";
import { CiGlobe } from "react-icons/ci";
import Link from "next/link";


export default async function Home() {
  const blogs = await fetchBlogs();
  console.log('blogs', blogs);
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 bg-slate-300 min-h-screen">
        <Hero />
        <div className="w-full bg-white border rounded-xl  mt-4 py-4 shadow-sm">
          <h1 className="text-2xl mx-3 capitalize">deploy projects</h1>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {
              blogs.map((blog, index) => (
                <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden" key={index}>
                  <div className="bg-gradient-to-r from-[#efeded] to-[#e4dede] px-4 py-2">
                    <h1 className="text-2xl font-bold text-[#424343] capitalize">
                      {blog.attributes.achieve_title}
                    </h1>
                  </div>
                  <div className="p-6 px-6 py-6 flex items-center justify-center">
                    <button className="btn btn-circle glass">
                      <Link href={blog.attributes.achieve_repo}>
                        <FaGithub className="h-5 w-5" />
                      </Link>
                    </button>
                    <button className="btn btn-circle mx-3 glass">
                      <Link href={blog.attributes.achieve_demo}>
                        <CiGlobe className="h-5 w-5" />
                      </Link>
                    </button>
                  </div>
                </div>
              ))

            }
          </div>
        </div>

      </div>
    </>
  );
}
