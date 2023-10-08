import { useLoaderData } from "react-router-dom";
import Navbar from "../SharedSections/Navbar/Navbar";
import SingleService from "./SingleService/SingleService";
import Footer from "../SharedSections/Footer/Footer";

const AllServices = () => {

    const services = useLoaderData();

    return (
        <div>
            <div className="bg-gray-300" style={{background: 'url(https://i.ibb.co/wr09QTG/yoga-and-fitness.jpg), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))', backgroundSize: 'cover', backgroundBlendMode: 'overlay',}}>
               <Navbar></Navbar>
               <div className="h-[53vh] flex items-center justify-center text-white">
                <div className="text-center pb-10">
                   <h1 className="text-xl md:text-4xl font-semibold">Services</h1>
                   <p className="text-xs md:text-base font-semibold mt-5 w-[300px] md:w-[650px]">Welcome to WellnessWorld Services. Explore our diverse offerings in health, fitness, and mindfulness. Choose the path to your well-being journey with us.</p>
                </div>
               </div>
            </div>
            <div className="my-10 py-10 bg-[#F3F3F3]">
                <h2 className="text-3xl font-semibold text-center">Our All Services</h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 w-max mx-auto py-10">
                    {
                        services.map(service => <SingleService key={service.id} service={service}></SingleService>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllServices;