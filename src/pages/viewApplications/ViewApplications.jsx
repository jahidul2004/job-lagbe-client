import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
    const data = useLoaderData();

    console.log("Data is:", data);

    return (
        <div>
            <h1>{data.length}</h1>
        </div>
    );
};

export default ViewApplications;
