import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceData = ({service}) => {
 
    const {image, name, price, description} = service || {};

    return (
        <div className="py-20 bg-green-50 my-10">
            <div className="bg-white w-max mx-auto border-2 rounded-md border-gray-300 p-2 md:p-5" data-aos="fade-down-right">
                <img className="w-[300px] md:w-[600px] mx-auto" src={image} alt="" />
                <h2 className="text-lg md:text-2xl font-semibold mt-3">{name}</h2>
                <p className="text-slate-500 font-medium mt-1">Price: {price}</p>
                <p className="text-slate-800 font-semibold my-3 w-[300px] md:w-[600px]">{description}</p>
                <Link><button className="btn font-bold">Join Event</button></Link>
            </div>
        </div>
    );
};

ServiceData.propTypes = {
    service: PropTypes.object.isRequired,
}

export default ServiceData;