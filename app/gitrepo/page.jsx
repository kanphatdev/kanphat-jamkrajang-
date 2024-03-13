import Diver from '@/components/Diver';
import Navbar from '@/components/Navbar';
import { fetchGit } from '@/function/git';
import Link from 'next/link';

export default async function Page() {
    const gits = await fetchGit();
    console.log(gits);
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 bg-slate-300 min-h-screen">
                <Diver />
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl my-2 capitalize text-[#424343]'>
                        repositories
                    </h1>
                </div>
                <div className='w-full bg-white border rounded-xl mt-4 py-4 shadow-sm'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-4">
                        {gits.map((blog, index) => (
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 p-4" key={index}>
                                <div className="font-bold text-sm mb-2">{blog.attributes.repo_title}</div>
                                <p className="text-gray-700 text-xs">
                                    <Link href={blog.attributes.repo_link} className="hover:underline">
                                        {blog.attributes.repo_link}
                                    </Link>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
