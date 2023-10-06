import Navbar from "../SharedSections/Navbar/Navbar";
import HomeBanner from "./HomeBanner/HomeBanner";

const Home = () => {
    return (
        <div>
            <div className="" style={{background: 'url(https://i.ibb.co/vkpHBZ0/banner-image.jpg), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))', backgroundSize: 'cover', backgroundBlendMode: 'overlay',}}>
                <Navbar></Navbar>
                <HomeBanner></HomeBanner>
            </div>
        </div>
    );
};

export default Home;