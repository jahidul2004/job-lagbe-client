import Lottie from "lottie-react";
import registerLottie from "../../assets/lottie/register.json";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state || { pathname: "/" };
    console.log(from);

    const { registerUser, setUser, signInWithGoogle } = useContext(AuthContext);
    const handleRegister = (event) => {
        event.preventDefault();

        // Get form data
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const username = form.username.value;
        const password = form.password.value;
        const terms = form.terms.checked;

        console.log({ name, email, username, password, terms });

        // Password validation
        function validatePassword(password) {
            const regex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;

            if (regex.test(password)) {
                return true;
            } else {
                return false;
            }
        }

        if (validatePassword(password) && terms) {
            registerUser(email, password)
                .then((data) => {
                    // Token related to the user
                    const user = { email: email };
                    axios
                        .post("http://localhost:5000/jwt", user, {
                            withCredentials: true,
                        })
                        .then((data) => {
                            console.log(data.data);
                            // localStorage.setItem("token", data.data.token);
                        });
                    navigate(from);
                    if (data.user) {
                        Swal.fire({
                            title: "Success!",
                            text: "You have successfully registered",
                            icon: "success",
                            confirmButtonText: "Close",
                            confirmButtonColor: "#008854",
                        });
                        form.reset();
                        setUser(data.user);
                    }
                })
                .catch((error) => {
                    console.log(error);

                    Swal.fire({
                        title: "Oops!",
                        text: error.message,
                        icon: "error",
                        confirmButtonText: "Close",
                        confirmButtonColor: "#008854",
                    });
                    form.reset();
                });
        } else {
            Swal.fire({
                title: "Oops!",
                text: "Password must contain at least 6 characters, including uppercase, lowercase, numbers and special characters and terms must be agreed",
                icon: "error",
                confirmButtonText: "Close",
                confirmButtonColor: "#008854",
            });
        }
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((data) => {
                console.log(data);
                setUser(data.user);
                // Token related to the user
                const user = { email: data.user.email };
                axios
                    .post("http://localhost:5000/jwt", user, {
                        withCredentials: true,
                    })
                    .then((data) => {
                        console.log(data.data);
                        // localStorage.setItem("token", data.data.token);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-full md:w-[50%]">
                    <Lottie animationData={registerLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-10 pt-5 mx-auto">
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-[#008854] font-bold text-center">
                        Please register
                    </h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Full Name"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input
                                name="username"
                                type="text"
                                placeholder="User Name"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />

                            <div className="form-control my-3">
                                <label className="cursor-pointer items-center flex gap-2 justify-left">
                                    <input
                                        name="terms"
                                        type="checkbox"
                                        className="checkbox checkbox-success"
                                    />
                                    <span className="text-sm md:text-md">
                                        Agree terms and policy
                                    </span>
                                    <Link className="text-[#008854] font-bold text-sm md:text-md">
                                        More
                                    </Link>
                                </label>
                            </div>

                            <label className="label">
                                <a
                                    href="#"
                                    className="font-semibold label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#008854] text-white font-bold">
                                Register
                            </button>
                        </div>

                        <p>
                            Have an account? please{" "}
                            <Link to={"/signIn"} className="font-bold">
                                Login
                            </Link>
                        </p>

                        <p className="text-center my-3 text-[#008854]">
                            ------------Or------------
                        </p>
                        <div className="w-full flex justify-center">
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                className="w-full btn border-[#008854]"
                            >
                                <FcGoogle />
                                Login With Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
