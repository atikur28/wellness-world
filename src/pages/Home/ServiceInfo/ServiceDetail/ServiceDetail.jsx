import { useParams } from "react-router-dom";
import Footer from "../../../SharedSections/Footer/Footer";
import Navbar from "../../../SharedSections/Navbar/Navbar";
import { useEffect, useState } from "react";
import ServiceData from "./ServiceData/ServiceData";

const ServiceDetail = () => {

    const [allData, setAllData] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        fetch('/services.json')
          .then(res => res.json())
          .then(data => setAllData(data))
    },[])

    const clickedService = allData.filter( (data) => data.id === id );

    return (
        <div>
            <div className="bg-gray-300" style={{background: 'url(https://i.ibb.co/yB5Tsw2/service-banner.jpg), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))', backgroundSize: 'cover', backgroundBlendMode: 'overlay',}}>
               <Navbar></Navbar>
               <div className="h-[60vh] flex items-center justify-center text-white">
                <div className="text-center pb-10" data-aos="flip-right">
                   <h1 className="text-xl md:text-4xl font-semibold">Service Detail</h1>
                   <p className="text-xs md:text-base font-semibold mt-5 w-[300px] md:w-[650px]">Welcome to WellnessWorld Service. Explore our diverse offerings in health, fitness, and mindfulness. Choose the path to your well-being journey with us.</p>
                </div>
               </div>
            </div>
            <div>
                {
                    clickedService.map( (service, idx) => <ServiceData key={idx} service={service} ></ServiceData> )
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetail;