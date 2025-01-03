import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
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
        <div className="p-5 rounded-lg bg-[#0088540c] flex flex-col">
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
                                className="bg-[#00885428] text-sm px-2 py-1 rounded font-semibold text-[#008854]"
                            >
                                {truncatedText}
                            </p>
                        );
                    })}
                </div>
            </div>
            {/* Description area end */}

            {/* Footer area */}
            <div className="flex items-center justify-between mt-4 gap-2">
                <div className="w-1/2">
                    <h1 className="btn btn-success border-none text-md w-full font-bold flex items-center text-white">
                        {salaryRange.min}-{salaryRange.max}{" "}
                        {salaryRange?.currency.toUpperCase()}
                    </h1>
                </div>
                <div className="w-1/2">
                    <Link
                        to={`/jobs/${_id}`}
                        className="btn btn-success w-full border-none font-bold text-white"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
            {/* Footer area end */}
        </div>
    );
};

export default HotJobCard;
