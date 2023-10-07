import { Link } from "react-router-dom";
import Navbar from "../SharedSections/Navbar/Navbar";
import Footer from "../SharedSections/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  
  const {createUser} = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);

    createUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      })
  };

  return (
    <div>
      <div className="bg-green-500">
        <Navbar></Navbar>
      </div>
      <div className="bg-green-50">
        <div className="flex justify-center pt-20 px-2 pb-16">
          <div className="border border-[#ABABAB] rounded-md p-3 md:p-8 bg-white">
            <h2 className="text-2xl font-bold">Register</h2>
            <form onSubmit={handleRegister} className="my-10 w-max">
              <div>
                <h3 className="text-lg font-semibold">Name</h3>
                <input
                  className="py-4 px-5 mt-3 w-[280px] md:w-[550px] bg-[#F3F3F3]"
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mt-4">Email address</h3>
                <input
                  className="py-4 px-5 mt-3 w-[280px] md:w-[550px] bg-[#F3F3F3]"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mt-4">Password</h3>
                <input
                  className="py-4 px-5 mt-3 w-[280px] md:w-[550px] bg-[#F3F3F3]"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button className="bg-green-600 hover:bg-green-700 font-semibold text-white py-3 w-full rounded-md mt-5">
                Register
              </button>
            </form>
            <p className="text-[#706F6F] font-semibold text-center my-3">
              Already Have An Account ?{" "}
              <Link to="/login" className="text-green-600">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
