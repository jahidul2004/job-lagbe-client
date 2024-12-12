import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";
import { TbDeviceAnalytics } from "react-icons/tb";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { CiBank } from "react-icons/ci";
import { FcBusinessman } from "react-icons/fc";
import { PiCardsBold } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/jobs")
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
            });
    }, []);
    return (
        <div>
            <div className="mb-10">
                <div className="text-center my-4">
                    <h1 className="text-4xl font-bold text-center text-[#008854]">
                        Jobs of the day
                    </h1>
                    <p className="font-semibold text-[#000000ab] mt-2">
                        Search and connect with the right <br /> candidates
                        faster.
                    </p>
                </div>
                <div className="grid grid-cols-2 mx-4 md:flex justify-center gap-2">
                    <span className="border flex w-max items-center gap-1 p-2 rounded-md font-semibold hover:text-[#008854] hover:border-[#008854] transition-all ease-in-out duration-150 cursor-pointer">
                        <TbDeviceAnalytics className="text-[#008854]" />
                        Management
                    </span>
                    <span className="border flex w-max items-center gap-1 p-2 rounded-md font-semibold hover:text-[#008854] hover:border-[#008854] transition-all ease-in-out duration-150 cursor-pointer">
                        <HiOutlineSpeakerphone className="text-[#008854]" />
                        Marketing Sales
                    </span>
                    <span className="border flex w-max items-center gap-1 p-2 rounded-md font-semibold hover:text-[#008854] hover:border-[#008854] transition-all ease-in-out duration-150 cursor-pointer">
                        <CiBank className="text-[#008854]" />
                        Finance
                    </span>
                    <span className="border flex w-max items-center gap-1 p-2 rounded-md font-semibold hover:text-[#008854] hover:border-[#008854] transition-all ease-in-out duration-150 cursor-pointer">
                        <FcBusinessman className="text-[#008854]" />
                        Human Resource
                    </span>
                    <span className="border flex w-max items-center gap-1 p-2 rounded-md font-semibold hover:text-[#008854] hover:border-[#008854] transition-all ease-in-out duration-150 cursor-pointer">
                        <PiCardsBold className="text-[#008854]" />
                        Retail Products
                    </span>
                    <span className="border flex w-max items-center gap-1 p-2 rounded-md font-semibold hover:text-[#008854] hover:border-[#008854] transition-all ease-in-out duration-150 cursor-pointer">
                        <IoDocumentTextOutline className="text-[#008854]" />
                        Content Writer
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 my-5">
                {jobs.slice(0, 6).map((job) => (
                    <HotJobCard job={job} key={job._id}></HotJobCard>
                ))}
            </div>
        </div>
    );
};

export default HotJobs;
