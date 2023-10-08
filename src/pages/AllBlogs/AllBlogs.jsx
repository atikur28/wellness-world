import { useLoaderData } from "react-router-dom";
import Footer from "../SharedSections/Footer/Footer";
import Navbar from "../SharedSections/Navbar/Navbar";
import SingleBlog from "./SingleBlog/SingleBlog";

const AllBlogs = () => {

    const blogs = useLoaderData();

    return (
        <div>
            <div className="bg-gray-300" style={{background: 'url(https://i.ibb.co/JtyS2D1/yoga-1.jpg), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))', backgroundSize: 'cover', backgroundBlendMode: 'overlay',}}>
               <Navbar></Navbar>
               <div className="h-[53vh] flex items-center justify-center text-white">
                <div className="text-center pb-10" data-aos="fade-down-left">
                   <h1 className="text-xl md:text-4xl font-semibold">Welcome to WellnessWorld Blog</h1>
                   <p className="text-xs md:text-base font-semibold mt-5 w-[300px] md:w-[650px]">Welcome to the WellnessWorld Blog, your source for a wealth of knowledge and inspiration on your journey towards holistic health and well-being. Our blog features a diverse range of articles written by experts and enthusiasts in various fields related to wellness, mindfulness, nutrition, fitness, and personal development. Whether you are a wellness novice or a seasoned health enthusiast, our carefully curated content has something for everyone.</p>
                </div>
               </div>
            </div>
            <div className="my-5 md:my-10 py-10 bg-[#F3F3F3]">
                <h2 className="text-xl md:text-3xl font-semibold text-center" data-aos="zoom-in-right">Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-max mx-auto mt-5 md:mt-10">
                    {
                        blogs.map((data,idx) => <SingleBlog key={idx} data={data}></SingleBlog>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllBlogs;