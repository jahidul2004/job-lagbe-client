import Lottie from "lottie-react";
import login from "../../assets/lottie/login.json";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
    const { setUser, loginUser } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((data) => {
                console.log(data);
                data.user && setUser(data.user);

                if (data.user) {
                    Swal.fire({
                        title: "Success!",
                        text: "You have successfully logged in",
                        icon: "success",
                        confirmButtonText: "Close",
                        confirmButtonColor: "#008854",
                    });
                    form.reset();
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
            });
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-full md:w-[50%]">
                    <Lottie animationData={login}></Lottie>
                </div>
                <div className="mx-auto my-10 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-xl font-bold md:text-2xl lg:text-3xl text-center pt-5 text-[#008854]">
                        Sin In!
                    </h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
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
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#008854] text-white">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
