import { Link, useNavigate } from "react-router-dom";
import Navbar from "../SharedSections/Navbar/Navbar";
import Footer from "../SharedSections/Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {

  const [registerError, setRegisterError] = useState('');
  
  const {createUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoLink = form.get("photoLink");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photoLink);

    setRegisterError('');

    if(password.length < 6){
      setRegisterError('Password should be in 6 character!');
      return;
    }
    else if(!/[A-Z]/.test(password)){
      setRegisterError('Your password should have at least one upper case character!');
      return;
    }
    else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
      setRegisterError('Your password should have at least one special character!');
      return;
    }

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset();
        updateProfile(result.user, {
          displayName: name, photoURL: photoLink
        })
          .then(result => {
            console.log(result.user);
          })
          .catch(error =>{
            console.error(error);
          })
        navigate('/');
        Swal.fire(
          'Good job!',
          'You have been registered..',
          'success'
        );
      })
      .catch(error => {
        console.error(error);
        setRegisterError(error.message);
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
                <h3 className="text-lg font-semibold mt-4">Photo Link</h3>
                <input
                  className="py-4 px-5 mt-3 w-[280px] md:w-[550px] bg-[#F3F3F3]"
                  type="photoLink"
                  name="photoLink"
                  id="photoLink"
                  placeholder="Enter your photo link address"
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
            {
              registerError && <p className="text-red-600 font-semibold text-center">{registerError}</p>
            }
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
