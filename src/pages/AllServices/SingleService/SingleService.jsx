import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleService = ({service}) => {

    const {image, name, price, description} = service || {};

    return (
        <div className="border rounded-md bg-white p-1 md:p-5 py-2 md:py-5">
            <img className="h-[200px] md:h-[250px] 2xl:h-[350px] w-[290px] md:w-[450px] 2xl:w-[600px] " src={image} alt="" />
            <h1 className="text-base md:text-2xl font-semibold mt-3">{name}</h1>
            <p className="text-xs md:text-base font-medium text-gray-500 mt-1">Price: {price}</p>
            <p className="w-[290px] md:w-[450px] 2xl:w-[600px] text-justify mt-3 font-medium">{description}</p>
            <Link><button className="text-sm md:text-lg font-bold text-white py-2 px-5 rounded-full bg-green-600 hover:bg-green-700 mt-3">Join Event</button></Link>
        </div>
    );
};

SingleService.propTypes = {
    service: PropTypes.object,
}

export default SingleService;