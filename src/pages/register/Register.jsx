import Lottie from "lottie-react";
import registerLottie from "../../assets/lottie/register.json";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = (event) => {
        event.preventDefault();

        // Get form data
        const formData = new FormData(event.target);

        const name = formData.get("name");
        const email = formData.get("email");
        const username = formData.get("username");
        const password = formData.get("password");
        const terms = formData.get("terms");

        console.log({ name, email, username, password, terms });
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
                        <div className="w-full flex justify-center">
                            <button className="w-full btn border-[#008854]">
                                <FcGoogle />
                                Login With Google
                            </button>
                        </div>
                        <p className="text-center my-3 text-[#008854]">
                            ------------Or------------
                        </p>
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
