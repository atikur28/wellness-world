import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCards = ({data}) => {
    const {id, name, image, price, description} = data || {};
    return (
        <div className="border bg-white">
            <img className="w-full md:h-[280px]" src={image} alt="" />
            <div className="px-2 mt-2">
                <h2 className="text-lg md:text-2xl font-semibold">{name}</h2>
                <p className="text-slate-500 font-medium mt-1">Price: {price}</p>
                {
                    description.length > 100 ? 
                    ( <p className="text-slate-800 font-semibold my-3">{description.slice(0, 103)}...</p> )
                    :
                    ( <p className="text-slate-800 font-semibold my-3">{description}</p> )
                }
                <div className="mx-5 md:mx-10 my-8">
                    <Link to={`/services/${id}`}><button className="text-sm md:text-base font-extrabold text-white bg-green-600 py-1.5 w-full mx-auto rounded-full hover:bg-green-700">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

ServiceCards.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ServiceCards;