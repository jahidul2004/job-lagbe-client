import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { user } = useAuth();

    const handleJobApply = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const linkedInURL = form.linkedIn.value;
        const githubURL = form.github.value;
        const resumeURL = form.resume.value;

        const jobApplication = {
            jobId: id,
            applicantEmail: user.email,
            name,
            linkedInURL,
            githubURL,
            resumeURL,
        };

        fetch("http://localhost:5000/job-application", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(jobApplication),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.acknowledged) {
                    Swal.fire({
                        title: "Success!",
                        text: "You successfully apply for this job.",
                        icon: "success",
                        confirmButtonText: "Close",
                    });
                    form.reset();
                    navigate("/myApplication");
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Job Apply Failed",
                        icon: "error",
                        confirmButtonText: "Close",
                    });
                }
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-full md:w-1/2 border rounded-lg p-4">
                    <h1>Hello</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ducimus eveniet doloribus dolorum tempore
                        similique totam veritatis. Quas placeat iure laborum!
                    </p>
                </div>
                <div className="my-10 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl md:w-1/2">
                    <form onSubmit={handleJobApply} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Linked URL</span>
                            </label>
                            <input
                                name="linkedIn"
                                type="url"
                                placeholder="Enter linkedin url"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Github URL</span>
                            </label>
                            <input
                                name="github"
                                type="url"
                                placeholder="Enter github url"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume URL</span>
                            </label>
                            <input
                                name="resume"
                                type="url"
                                placeholder="Enter resume url"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white font-bold">
                                Apply
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;
