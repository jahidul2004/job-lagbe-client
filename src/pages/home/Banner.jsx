import bannerLottie from "../../assets/lottie/banner.json";
import Lottie from "lottie-react";

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full md:w-1/2">
                    <Lottie animationData={bannerLottie}></Lottie>
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-6xl font-bold">
                        The <span className="text-[#008854]">Easiest Way</span>
                        <br /> to Get Your New Job
                    </h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>

                    <div className="flex flex-col justify-center md:flex-row gap-2 md:join">
                        <input
                            type="text"
                            placeholder="Designer, Web, IOS, Developer"
                            className="w-full input border-[#008854] join-item"
                        />
                        <button className="btn border hover:text-[#008854] border-[#008854] bg-[#008854] text-white join-item">
                            Search
                        </button>
                    </div>
                    <p className="mt-8">
                        <span className="text-[#008854]">
                            Popular Searches:
                        </span>
                        Designer, Web, IOS, Developer
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
