import { Link } from "react-router-dom";

const HomeBanner = () => {
    return (
        <div className="h-[65vh] flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white">Diet Care</h1>
                <p className="md:text-2xl font-semibold text-white mt-4">Freedom from the Tedious Cycle of Dieting</p>
                <Link><button className="text-white bg-green-600 hover:bg-green-700 py-2 px-8 text-sm md:text-lg font-medium mt-8 rounded-full">Book An Appointment</button></Link>
            </div>
        </div>
    );
};

export default HomeBanner;