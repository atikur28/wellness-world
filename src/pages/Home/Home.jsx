import Footer from "../SharedSections/Footer/Footer";
import Navbar from "../SharedSections/Navbar/Navbar";
import Blogs from "./Blogs/Blogs";
import HomeBanner from "./HomeBanner/HomeBanner";
import ServiceInfo from "./ServiceInfo/ServiceInfo";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <div className="" style={{background: 'url(https://i.ibb.co/mJ1m8kN/holistic-health-banner-1.jpg), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))', backgroundSize: 'cover', backgroundBlendMode: 'overlay',}}>
                <Navbar></Navbar>
                <HomeBanner></HomeBanner>
            </div>
            <ServiceInfo></ServiceInfo>
            <Blogs></Blogs>
            <div className="bg-sky-100">
                <WhyChooseUs></WhyChooseUs>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;