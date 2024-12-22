import { Link, useLoaderData } from "react-router-dom";

const ViewApplications = () => {
    const data = useLoaderData();

    console.log("Data is:", data);

    return (
        <div className="my-10">
            <h1 className="text-3xl font-bold text-center py-3 mb-10 text-success">
                Application for this job
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2 md:mx-5">
                {data.map((job) => (
                    <div
                        key={job._id}
                        className="border-l-8 border-success p-4 mx-2 shadow-lg"
                    >
                        <div>
                            <h1 className="text-xl font-bold">{job.name}</h1>
                            <Link
                                title="Click to send email"
                                to={
                                    "https://mail.google.com/mail/u/0/#inbox?compose=new"
                                }
                                className="font-bold hover:text-success"
                            >
                                {job.applicantEmail}
                            </Link>
                        </div>
                        <div>
                            <p className="font-semibold">
                                Github URL:
                                {
                                    <Link
                                        className="hover:text-error"
                                        to={`${job.githubURL}`}
                                    >
                                        {job.githubURL}
                                    </Link>
                                }
                            </p>
                            <p className="font-semibold">
                                Linked In URL:
                                {
                                    <Link
                                        className="hover:text-error"
                                        to={`${job.linkedInURL}`}
                                    >
                                        {job.githubURL}
                                    </Link>
                                }
                            </p>
                            <p className="font-semibold">
                                Resume URL:
                                {
                                    <Link
                                        className="hover:text-error"
                                        to={`${job.resumeURL}`}
                                    >
                                        {job.githubURL}
                                    </Link>
                                }
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewApplications;
