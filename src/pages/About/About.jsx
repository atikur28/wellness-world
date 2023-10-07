import Footer from "../SharedSections/Footer/Footer";
import Navbar from "../SharedSections/Navbar/Navbar";

const About = () => {
    return (
        <div>
            <div className="bg-gray-300" style={{background: 'url(https://i.ibb.co/hm5gF9Q/mindfullness-retreats.jpg), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))', backgroundSize: 'cover', backgroundBlendMode: 'overlay',}}>
               <Navbar></Navbar>
               <div className="h-[60vh] flex items-center justify-center text-white">
                <div className="text-center pb-10">
                   <h1 className="text-xl md:text-4xl font-semibold">About Us</h1>
                   <p className="text-xs md:text-base font-semibold mt-5 w-[300px] md:w-[650px]">At WellnessWorld, our mission is to empower individuals on their journey to holistic health and wellness. We believe that well-being is a combination of physical, mental, and emotional balance, and we are committed to providing the resources and support needed to achieve it.</p>
                </div>
               </div>
            </div>
            <div className="my-10 px-2">
                <h2 className="text-2xl font-semibold">Our Vision</h2>
                <p className="text-gray-500 w-[300px] md:w-[600px] font-medium mt-3">Our vision is to create a global community where individuals can access the tools and knowledge to live their best, healthiest lives. We envision a world where well-being is a top priority, and people are inspired to make positive changes in their lives.</p>
            </div>
            <div className="my-10 px-2 md:ml-32">
                <h2 className="text-2xl font-semibold">Our Team</h2>
                <p className="text-gray-500 w-[300px] md:w-[600px] font-medium mt-3">Our dedicated team consists of health enthusiasts, wellness experts, event organizers, and content creators who are passionate about spreading the message of well-being. We work tirelessly to curate the best health and wellness events, create informative content, and provide exceptional user experiences.</p>
            </div>
            <div className="my-10 px-2">
                <h2 className="text-2xl font-semibold">Get in Touch</h2>
                <p className="text-gray-500 w-[300px] md:w-[600px] font-medium mt-3">Have questions, feedback, or suggestions? We would love to hear from you! Feel free to reach out to us through our contact form, and connect with us on social media for the latest updates and inspiration on your wellness journey.</p>
            </div>
            <div className="my-10 px-2 md:ml-32">
                <h2 className="text-2xl font-semibold">Join Us</h2>
                <p className="text-gray-500 w-[300px] md:w-[600px] font-medium mt-3">Join the WellnessWorld community today and embark on a path to improved health, greater mindfulness, and a more balanced life. Together, we can make wellness a way of life.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;