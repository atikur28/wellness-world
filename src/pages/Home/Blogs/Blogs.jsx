import { useEffect, useState } from "react";
import Blog from "./Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('/blogs.json')
          .then(res => res.json())
          .then(data => setBlogs(data))
    },[])
    return (
        <div className="my-10">
            <h2 className="w-max mx-auto text-2xl md:text-5xl font-semibold md:font-medium pb-1">Blogs</h2>
            <p className="md:w-2/3 mx-auto text-lg text-justify md:text-justify lg:text-center text-gray-600 font-medium mt-5 px-2">Welcome to WellnessWorld  Blog! Explore a world of wellness, from yoga to nutrition, meditation to fitness. Discover tips, insights, and inspiration for a healthier, happier life. Join us on the path to holistic well-being!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-5 px-5">
                {
                    blogs.slice(0, 3).map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;