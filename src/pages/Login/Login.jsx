import { Link } from "react-router-dom";
import Footer from "../SharedSections/Footer/Footer";
import Navbar from "../SharedSections/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

  const {logIn} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    logIn(email, password)
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
        <div className="flex justify-center pt-20 px-2">
          <div className="border border-[#ABABAB] rounded-md p-3 md:p-8 bg-white">
            <h2 className="text-2xl font-bold">Login</h2>
            <form onSubmit={handleLogin} className="my-10 w-max">
              <div>
                <h3 className="text-lg font-semibold">Email address</h3>
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
                Login
              </button>
            </form>
            <p className="text-[#706F6F] font-semibold text-center my-3">
              Dont’t Have An Account ?{" "}
              <Link to="/register" className="text-green-600">
                Create an account
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-5 pb-16">
          <p className="text-xl font-semibold  text-center">Or</p>
          <div className="w-max border mx-auto bg-white rounded-full mt-2 hover:bg-slate-100">
            <Link>
              <button className="flex items-center justify-center gap-3 font-semibold py-2 w-[300px]">
                <img
                  className="w-5"
                  src="https://i.ibb.co/Pj0MgcP/google.png"
                  alt=""
                />{" "}
                Continue with Google
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
