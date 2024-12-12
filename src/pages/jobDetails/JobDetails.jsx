import { div } from "motion/react-client";
import { useEffect, useState } from "react";
import { BiSolidWatch } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FiWatch } from "react-icons/fi";
import { GrLocation, GrUserExpert } from "react-icons/gr";
import { LuBadgeDollarSign } from "react-icons/lu";
import {
    MdOutlineManageAccounts,
    MdOutlineTypeSpecimen,
    MdOutlineUpdate,
} from "react-icons/md";
import { PiBagBold, PiBuildingOfficeFill } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const data = useLoaderData();
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
        hr_email,
    } = data;

    const [similarJobs, setSimilarJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/jobs`)
            .then((res) => res.json())
            .then((data) => {
                // Randomly shuffle the jobs and select 5
                const randomJobs = data
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 5);
                setSimilarJobs(randomJobs);
            })
            .catch((error) => console.error("Error fetching jobs:", error));
    }, []);

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
                            {title} - {category}
                        </h1>
                        <div className="flex gap-2 font-semibold text-[#000000ab]">
                            <span className="flex items-center gap-2">
                                <PiBagBold className="text-[#008854]" />
                                {jobType}
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
                <div className="col-span-1 md:col-span-2">
                    <div className=" border p-4 rounded-lg h-max">
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
                                {company}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-4 text-[#000000ab]">
                                    <LuBadgeDollarSign className="text-[#008854]" />
                                    Salary:
                                </span>
                                {salaryRange.min} - {salaryRange.max}
                                {salaryRange.currency.toUpperCase()}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-4 text-[#000000ab]">
                                    <MdOutlineTypeSpecimen className="text-[#008854]" />
                                    Job Type:
                                </span>
                                {jobType}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-4 text-[#000000ab]">
                                    <MdOutlineUpdate className="text-[#008854]" />
                                    Updated:
                                </span>
                                {status}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-4 text-[#000000ab]">
                                    <MdOutlineManageAccounts className="text-[#008854]" />
                                    Job Level:
                                </span>
                                Experienced C.G
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-4 text-[#000000ab]">
                                    <GrUserExpert className="text-[#008854]" />
                                    Experience:
                                </span>
                                1 - 2 years.C.G
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-4 text-[#000000ab]">
                                    <FiWatch className="text-[#008854]" />
                                    Deadline:
                                </span>
                                {applicationDeadline}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-4 text-[#000000ab]">
                                    <GrLocation className="text-[#008854]" />
                                    Location:
                                </span>
                                {location}
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-lg p-4 mt-4">
                        <div>
                            <h1 className="text-xl font-bold mb-2">
                                Welcome to Job Lagbe
                            </h1>
                            <p className="text-[#000000ab]">
                                Job Lagbe is a modern and user-friendly job
                                portal designed to create a reliable connection
                                between job seekers and employers. It offers
                                users the ability to explore job opportunities
                                across various industries, apply with ease, and
                                manage their job applications efficiently.
                                Employers can post job listings, review
                                applications, and find the ideal candidates for
                                their requirements.
                            </p>
                        </div>
                        <div className="mt-4">
                            <h1 className="text-xl font-bold mb-2">
                                Essential Knowledge, Skills, and Experience
                            </h1>
                            <ul className="list-disc list-inside text-[#000000ab]">
                                <li>
                                    A portfolio demonstrating
                                    well-thought-through and polished end-to-end
                                    customer journeys
                                </li>
                                <li>
                                    5+ years of industry experience in
                                    interactive design and/or visual design
                                </li>
                                <li>Excellent interpersonal skills</li>
                                <li>
                                    Aware of trends in mobile, communications,
                                    and collaboration
                                </li>
                                <li>
                                    Ability to create highly polished design
                                    prototypes, mockups, and other communication
                                    artifacts
                                </li>
                                <li>
                                    The ability to scope and estimate efforts
                                    accurately and prioritize tasks and goals
                                    independently
                                </li>
                                <li>
                                    History of impacting shipping products with
                                    your work
                                </li>
                                <li>
                                    A Bachelor's Degree in Design (or related
                                    field) or equivalent professional experience
                                </li>
                                <li>
                                    Proficiency in a variety of design tools
                                    such as Figma, Photoshop, Illustrator, and
                                    Sketch
                                </li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <h1 className="text-xl font-bold">
                                Preferred Experience
                            </h1>
                            <ul className="list-disc list-inside text-[#000000ab]">
                                <li>
                                    Designing user experiences for enterprise
                                    software/services
                                </li>
                                <li>
                                    Creating and applying established design
                                    principles and interaction patterns
                                </li>
                                <li>
                                    Aligning or influencing design thinking with
                                    teams working in other geographies
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="border p-4 rounded-lg h-max">
                        {/* Header area */}
                        <div className="flex gap-2 border-b pb-2">
                            <div className="w-[50px] h-[50px] border rounded-lg flex justify-center items-center p-1">
                                <img src={company_logo} alt="" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">{company}</h1>
                                <p className="text-[#000000ab] flex items-center font-semibold">
                                    <GrLocation />
                                    {location}
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
                                <li>{location}</li>
                                <li>Phone:(123) 456-7890 C.G</li>
                                <li>Email: {hr_email}</li>
                            </ul>
                        </div>
                        {/* Address area end */}
                    </div>

                    <div className="border rounded-lg p-4 mt-4">
                        <h1 className="text-xl font-bold border-b pb-2">
                            Similar Jobs
                        </h1>
                        <div className="flex flex-col gap-2 mt-4">
                            {similarJobs.map((job) => (
                                <div className="flex justify-between items-center gap-2 border p-2 rounded-lg">
                                    <div className="flex gap-2 items-center">
                                        <div className="w-[50px] h-[50px] border p-1 rounded-lg">
                                            <img
                                                className="w-full h-full"
                                                src={job.company_logo}
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <h1 className="text-lg font-bold">
                                                {job.title}
                                            </h1>
                                            <p className="text-[#000000ab] flex items-center font-semibold">
                                                <GrLocation />
                                                {job.location}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link
                                            to={`/jobs/${job._id}`}
                                            className="btn btn-success text-white font-bold"
                                        >
                                            Apply
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Job description area end */}
        </div>
    );
};

export default JobDetails;
