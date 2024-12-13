import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { MdDeleteForever } from "react-icons/md";

const MyApplication = () => {
    const { user } = useAuth();

    const [jobs, setJobs] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setJobs(data);
            });
    }, []);

    return (
        <div className="w-[95%] md:container mx-auto my-5">
            <h1 className="text-3xl font-bold text-center text-success mt-5 mb-10">
                My Applications
            </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg font-bold">
                            <th>Company Details</th>
                            <th>Job Details</th>
                            <th>User Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs?.map((job) => (
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.logo}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {job.company}
                                            </div>
                                            <div className="text-sm opacity-50">
                                                {job.location}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {job.title}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">
                                        {job.category}
                                    </span>
                                </td>
                                <td>{job.name}</td>
                                <td>
                                    <div className="flex items-center gap-2">
                                        <button className="btn btn-error">
                                            <MdDeleteForever className="text-xl" />
                                        </button>
                                        <button className="btn btn-success font-bold text-white">
                                            Details
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplication;
