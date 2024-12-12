import { BiSolidWatch } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FiWatch } from "react-icons/fi";
import { GrUserExpert } from "react-icons/gr";
import { LuBadgeDollarSign } from "react-icons/lu";
import {
    MdOutlineManageAccounts,
    MdOutlineTypeSpecimen,
    MdOutlineUpdate,
} from "react-icons/md";
import { PiBagBold, PiBuildingOfficeFill } from "react-icons/pi";

const JobDetails = () => {
    return (
        <div className="container px-4 md:mx-auto my-10">
            {/* Header area */}
            <div className="border-b-2 pb-6">
                <div className="h-[200px] md:h-[400px] rounded-lg w-full mb-8">
                    <img
                        className="w-full h-full rounded-lg object-cover"
                        src="https://i.ibb.co.com/q9410gr/thumb.png"
                        alt=""
                    />
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">
                            Senior Full Stack Engineer, Creator Success Full
                            Time
                        </h1>
                        <div className="flex gap-2 font-semibold text-[#000000ab]">
                            <span className="flex items-center gap-2">
                                <PiBagBold className="text-[#008854]" />
                                Remote
                            </span>
                            <span className="flex items-center gap-2">
                                <BiSolidWatch className="text-[#008854]" />3 min
                                ago
                            </span>
                        </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                        <button className="btn btn-success text-white font-bold">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
            {/* Header area end */}

            {/* Job description area */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="col-span-1 md:col-span-2 border p-4 rounded-lg h-max">
                    <div className="border-b py-4">
                        <h1 className="text-xl font-bold">
                            Employment Information
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 text-lg font-semibold gap-6 py-4">
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-4 text-[#000000ab]">
                                <PiBuildingOfficeFill className="text-[#008854]" />
                                Industry:
                            </span>
                            Mechanical / Auto / Automotive, Civil / Construction
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-4 text-[#000000ab]">
                                <LuBadgeDollarSign className="text-[#008854]" />
                                Salary:
                            </span>
                            $800 - $1000
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-4 text-[#000000ab]">
                                <MdOutlineTypeSpecimen className="text-[#008854]" />
                                Job Type:
                            </span>
                            Permanent
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-4 text-[#000000ab]">
                                <MdOutlineUpdate className="text-[#008854]" />
                                Updated:
                            </span>
                            10/07/2022
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-4 text-[#000000ab]">
                                <MdOutlineManageAccounts className="text-[#008854]" />
                                Job Level:
                            </span>
                            Experienced (Non - Manager)
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-4 text-[#000000ab]">
                                <GrUserExpert className="text-[#008854]" />
                                Experience:
                            </span>
                            1 - 2 years
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-4 text-[#000000ab]">
                                <FiWatch className="text-[#008854]" />
                                Deadline:
                            </span>
                            10/08/2022
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-4 text-[#000000ab]">
                                <CiLocationOn className="text-[#008854]" />
                                Location:
                            </span>
                            Khilgaon,Dhaka
                        </div>
                    </div>
                </div>

                <div className="col-span-1 border p-4 rounded-lg">
                    {/* Header area */}
                    <div className="flex gap-2 border-b pb-2">
                        <div className="w-[50px] h-[50px] border rounded-lg flex justify-center items-center p-1">
                            <img
                                src="https://i.ibb.co/MhsV6wz/microsoft.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Company Name</h1>
                            <p className="text-[#000000ab] flex items-center">
                                <CiLocationOn />
                                Address
                            </p>
                        </div>
                    </div>
                    {/* Header area end */}

                    {/* Maps area */}
                    <div>
                        <iframe
                            className="w-full h-[200px] mt-4 rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29216.091936364286!2d90.4200192!3d23.746969599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1734015779418!5m2!1sen!2sbd"
                            width="600"
                            height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    {/* Maps area end */}

                    {/* Address area */}
                    <div className="mt-5">
                        <ul className="list-inside list-disc font-semibold text-[#000000ab]">
                            <li>
                                205 North Michigan Avenue, Suite 810 Chicago,
                                60601, USA
                            </li>
                            <li>Phone:(123) 456-7890</li>
                            <li>Email: contact@Evara.com</li>
                        </ul>
                    </div>
                    {/* Address area end */}
                </div>
            </div>
            {/* Job description area end */}
        </div>
    );
};

export default JobDetails;
