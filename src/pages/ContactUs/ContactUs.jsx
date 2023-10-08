import Navbar from "../SharedSections/Navbar/Navbar";
import { BsBuilding } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail, MdBusinessCenter } from "react-icons/md";
import Footer from "../SharedSections/Footer/Footer";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-sky-400">
        <Navbar></Navbar>
      </div>
      <div className="py-10 md:py-20 bg-sky-50 px-2">
        <h1 className="text-3xl md:text-5xl text-center font-semibold w-max mx-auto border-b-2 border-green-600 pb-4">
          Get In Touch
        </h1>
        <p className=" mt-5 w-[300px] md:w-[600px] mx-auto text-center font-medium text-gray-500 ">
          Have a question, feedback, or just want to say hello? We would love to
          hear from you! Reach out to us through the following channels, and we
          will get back to you as soon as possible. Your wellness journey is
          important to us, and we are here to assist you every step of the way.
        </p>
      </div>
      <div className="my-10 md:my-20">
        <h2 className="text-2xl md:text-5xl font-medium border-b-2 border-green-600 w-max mx-auto pb-3">
          Feel Free to Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 md:px-16 mt-10 py-10 bg-green-50">
          <div className="border rounded-md  py-4 bg-white">
            <div className="flex justify-center">
              <BsBuilding className="text-green-600 text-4xl"></BsBuilding>
            </div>
            <h3 className="text-xl font-semibold text-center mt-3">Address</h3>
            <p className="font-semibold text-center mt-2">123 Wellness Street<br />Wellness City, WL 12345<br />United States</p>
          </div>
          <div className="border rounded-md py-4 bg-white">
            <div className="flex justify-center">
              <AiFillPhone className="text-green-600 text-4xl"></AiFillPhone>
            </div>
            <h3 className="text-xl font-semibold text-center mt-3">Phone</h3>
            <p className="font-semibold text-center mt-2">Main Office: (555) 123-4567<br />Customer Support: (555) 987-6543</p>
          </div>
          <div className="border rounded-md py-4 bg-white">
            <div className="flex justify-center">
              <MdEmail className="text-green-600 text-4xl"></MdEmail>
            </div>
            <h3 className="text-xl font-semibold text-center mt-3">Email</h3>
            <p className="font-semibold text-center mt-2">General Inquiries: atikur45683@gmail.com<br />Customer Support: md4853795@gmail.com</p>
          </div>
          <div className="border rounded-md py-4 bg-white">
            <div className="flex justify-center">
              <MdBusinessCenter className="text-green-600 text-4xl"></MdBusinessCenter>
            </div>
            <h3 className="text-xl font-semibold text-center mt-3">Business Hours</h3>
            <p className="font-semibold text-center mt-2">Monday - Friday: 9:00 AM - 6:00 PM (EST)<br />Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
