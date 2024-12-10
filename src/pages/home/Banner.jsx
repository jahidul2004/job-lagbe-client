import bannerImg3 from "../../assets/banner_asset/banner3.jpg";
import bannerImg4 from "../../assets/banner_asset/banner4.jpg";
import { motion, easeInOut } from "framer-motion";

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full md:w-1/2">
                    <motion.img
                        animate={{ y: [30, 60, 30] }}
                        transition={{
                            ease: easeInOut,
                            duration: 10,
                            repeat: Infinity,
                        }}
                        src={bannerImg3}
                        className="border-l-[6px] border-b-[6px] border-[#008854] max-w-sm rounded-lg shadow-2xl"
                    />
                    <motion.img
                        animate={{ x: [50, 80, 50] }}
                        transition={{
                            ease: easeInOut,
                            duration: 10,
                            repeat: Infinity,
                        }}
                        src={bannerImg4}
                        className="hidden md:block border-l-[6px] border-b-[6px] border-[#008854] max-w-sm rounded-lg shadow-2xl"
                    />
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
                            placeholder="job@lagbe.com"
                            className="w-max input border-[#008854] join-item"
                        />
                        <button className="btn border hover:text-[#008854] border-[#008854] bg-[#008854] text-white join-item">
                            Subscribe
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
