import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);

    const { user } = useAuth();

    console.log(user.email);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/jobs?email=${user.email}`,{
                withCredentials: true,
            })
            .then((res) => {
                console.log(res.data);
                setJobs(res.data);
            });
    }, []);
    return (
        <div className="my-5 w-[95%] md:container mx-auto">
            <h1 className="text-3xl font-bold text-success text-center my-5">
                My Posted Jobs
            </h1>
            <div className="flex flex-col gap-4">
                {jobs.map((job) => (
                    <div
                        className="flex flex-col md:flex-row md:justify-between items-center gap-4 border p-4 rounded-lg"
                        key={job._id}
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-[50px] h-[50px] border rounded-lg p-1">
                                <img
                                    className="w-full h-full"
                                    src={job.company_logo}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">
                                    {job.title}
                                </h1>
                                <p className="font-bold text-[#000000ab]">
                                    {job.location}
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Salary</h1>
                            <p className="font-bold text-[#000000ab]">
                                {job.salaryRange.min}-{job.salaryRange.max}
                            </p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Status</h1>
                            <p className="font-bold ">
                                {job.status === "active" ? (
                                    <span className="text-success">
                                        {job.status}
                                    </span>
                                ) : (
                                    <span className="text-error">
                                        {job.status}
                                    </span>
                                )}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-2">
                            <button className="btn btn-error">
                                <MdDeleteForever className="text-xl text-white" />
                            </button>
                            <button className="btn btn-success text-white">
                                Edit job
                            </button>
                            <Link
                                to={`/viewApplications/${job._id}`}
                                className="btn col-span-2 md:col-span-1 btn-success text-white"
                            >
                                View Applications
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyPostedJobs;
