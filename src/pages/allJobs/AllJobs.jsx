import { useLoaderData } from "react-router-dom";
import HotJobCard from "../home/HotJobCard";

const AllJobs = () => {
    const data = useLoaderData();

    return (
        <div className="px-5 my-10">
            <h1 className="text-3xl font-bold text-center text-success my-5 pb-5">
                All Jobs
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((job) => (
                    <HotJobCard key={job._id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default AllJobs;
