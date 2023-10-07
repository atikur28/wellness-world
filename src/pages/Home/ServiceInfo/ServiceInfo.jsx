import { useEffect, useState } from "react";
import ServiceCards from "./ServiceCards/ServiceCards";

const ServiceInfo = () => {

    const [serviceInfo, setServiceInfo] = useState([]);

    useEffect(() => {
        fetch('/services.json')
          .then(res => res.json())
          .then(data => setServiceInfo(data))
    },[])

    return (
        <div className="mt-20 px-2 bg-[#F3F3F3] py-10">
            <h2 className="w-max mx-auto text-2xl md:text-5xl font-semibold md:font-medium border-b-2 pb-1 border-green-600">Services</h2>
            <p className="md:w-2/3 mx-auto text-justify md:text-justify lg:text-center text-gray-600 font-medium mt-5">Explore our diverse range of health and wellness services at WellnessWorld. From revitalizing Yoga and Fitness Retreats to informative Nutrition Seminars, we offer a variety of experiences to nurture your mind, body, and soul. Discover inner peace at our Mindfulness Retreats, explore the latest trends at our Wellness Expos, and embark on a journey of self-discovery with our Meditation Workshops. Join us on the path to well-being and embrace a healthier, happier you with our carefully curated services.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 my-10">
                {
                    serviceInfo.map(data => <ServiceCards key={data.id} data={data}></ServiceCards>)
                }
            </div>
        </div>
    );
};

export default ServiceInfo;