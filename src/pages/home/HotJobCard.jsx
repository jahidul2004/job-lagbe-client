import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { PiBagSimpleLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const HotJobCard = (job) => {
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        status,
        company_logo,
    } = job.job;
    console.log(job);

    return (
        <div className="relative border p-5 rounded-lg bg-[#0088540c] flex flex-col">
            {/* Charge icon */}
            <div className="absolute top-3 right-3">
                <BsFillLightningChargeFill className="text-[#008854] text-xl" />
            </div>
            {/* Charge icon end */}
            {/* Header area */}
            <div className="flex gap-2">
                <div className="w-[60px] h-[60px]">
                    <img className="w-full h-full" src={company_logo} alt="" />
                </div>
                <div>
                    <h1 className="text-xl font-bold">{company}</h1>
                    <p className="font-semibold">{location}</p>
                </div>
            </div>
            {/* Header area end */}

            {/* Description area */}
            <div className="flex-grow">
                <div>
                    <h1 className="text-xl font-bold mt-3 mb-1">{title}</h1>
                    <div className="flex gap-2 font-semibold text-[#000000ab]">
                        <p className="flex items-center gap-1">
                            <PiBagSimpleLight />
                            {jobType}
                        </p>
                        <p className="flex items-center gap-1">
                            <FaRegClock />
                            {applicationDeadline}
                        </p>
                    </div>
                </div>
                <div className="my-4">
                    <p className="font-semibold text-[#000000ab] text-sm">
                        {description}
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-1 text-center cursor-pointer">
                    {requirements.map((requirement, index) => {
                        const words = requirement.split(" ");
                        const truncatedText =
                            words.length > 2
                                ? `${words.slice(0, 1).join(" ")}...`
                                : requirement;

                        return (
                            <p
                                key={index}
                                title={requirement}
                                className="bg-[#00885428] text-sm px-2 py-1 rounded font-semibold text-[#000000ab]"
                            >
                                {truncatedText}
                            </p>
                        );
                    })}
                </div>
            </div>
            {/* Description area end */}

            {/* Footer area */}
            <div className="flex flex-col items-center justify-between mt-5 gap-2">
                <div className="btn bg-[#c9e4db] w-full">
                    <h1 className="text-lg font-bold flex items-center text-[#008854]">
                        {salaryRange.min}-{salaryRange.max} {salaryRange?.currency.toUpperCase()}
                    </h1>
                </div>
                <div className="w-full">
                    <Link to={`/jobs/${_id}`} className="btn font-bold w-full bg-[#0088542c] text-[#008854]">
                        Apply Now
                    </Link>
                </div>
            </div>
            {/* Footer area end */}
        </div>
    );
};

export default HotJobCard;
