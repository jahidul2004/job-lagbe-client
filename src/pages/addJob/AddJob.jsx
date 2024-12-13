import Swal from "sweetalert2";

const AddJob = () => {
    const handleAddJob = (event) => {
        event.preventDefault();

        const getSalaryRange = (range) => {
            const [min, max, currency] = range
                .replace(/,/g, "")
                .split(/-|,/)
                .map((item) => item.trim());
            return {
                min: parseInt(min, 10),
                max: parseInt(max, 10),
                currency: currency || "bdt",
            };
        };

        const form = event.target;

        const title = form.title.value;
        const location = form.location.value;
        const jobType = form.jobType.value;
        const category = form.category.value;
        const applicationDeadline = form.applicationDeadline.value;
        const range = form.salaryRange.value;

        const salaryRange = getSalaryRange(range);

        const description = form.jobDescription.value;
        const company = form.companyName.value;
        const requirements = form.requirements.value
            .split(",")
            .map((item) => item.trim());

        const responsibilities = form.responsibilities.value
            .split(",")
            .map((item) => item.trim());
        const status = form.status.value;
        const hr_email = form.hrEmail.value;
        const hr_name = form.hrName.value;
        const jobImage = form.jobImage.value;
        const company_logo = form.companyLogo.value;
        const hr_phone = form.hrPhone.value;
        const jobLevel = form.jobLevel.value;
        const requiredExperience = form.requiredExperience.value;

        const newJob = {
            title,
            location,
            jobType,
            category,
            applicationDeadline,
            salaryRange,
            description,
            company,
            requirements,
            responsibilities,
            status,
            hr_email,
            hr_name,
            jobImage,
            company_logo,
            hr_phone,
            jobLevel,
            requiredExperience,
        };

        console.log(newJob);

        fetch("http://localhost:5000/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newJob),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                form.reset();

                Swal.fire({
                    title: "Success!",
                    text: "Job Added Successfully",
                    icon: "success",
                    confirmButtonText: "Close",
                });
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong",
                    icon: "error",
                    confirmButtonText: "Close",
                });
            });
    };
    return (
        <div className="my-10 mx-auto card bg-base-100 w-full max-w-4xl shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center text-success pt-5">
                Add Job
            </h1>
            <form
                onSubmit={handleAddJob}
                className="card-body grid grid-cols-1 md:grid-cols-2"
            >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Enter Job Title"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input
                        name="location"
                        type="text"
                        placeholder="Enter Location"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <input
                        name="jobType"
                        type="text"
                        placeholder="Enter Job Type"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input
                        name="category"
                        type="text"
                        placeholder="Enter Category"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Application Deadline</span>
                    </label>
                    <input
                        name="applicationDeadline"
                        type="text"
                        placeholder="Enter Application Deadline"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Salary Range</span>
                    </label>
                    <input
                        name="salaryRange"
                        type="text"
                        placeholder="Enter Salary Range (e.g. 50,000 - 60,000,bdt)"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <input
                        name="jobDescription"
                        type="text"
                        placeholder="Enter Job Description"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input
                        name="companyName"
                        type="text"
                        placeholder="Enter Company Name"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Requirements</span>
                    </label>
                    <input
                        name="requirements"
                        type="text"
                        placeholder="Enter Requirements (e.g. Javascript, React)"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Responsibilities</span>
                    </label>
                    <input
                        name="responsibilities"
                        type="text"
                        placeholder="Enter Responsibilities (e.g. Develop websites, Maintain websites)"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Status</span>
                    </label>
                    <input
                        name="status"
                        type="text"
                        placeholder="Enter Status (e.g. Active, Closed)"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input
                        name="hrEmail"
                        type="text"
                        placeholder="Enter HR Email"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input
                        name="hrName"
                        type="text"
                        placeholder="Enter HR Name"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Image</span>
                    </label>
                    <input
                        name="jobImage"
                        type="url"
                        placeholder="Enter Job Image URL"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo</span>
                    </label>
                    <input
                        name="companyLogo"
                        type="text"
                        placeholder="Enter Company Logo URL"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Phone</span>
                    </label>
                    <input
                        name="hrPhone"
                        type="text"
                        placeholder="Enter HR Phone"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Level</span>
                    </label>
                    <input
                        name="jobLevel"
                        type="text"
                        placeholder="Enter Job Level (e.g. Entry Level, Mid Level)"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Required Experience</span>
                    </label>
                    <input
                        name="requiredExperience"
                        type="text"
                        placeholder="Enter Required Experience (e.g. 1-2 years)"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control mt-6 md:col-span-2">
                    <button className="btn btn-success text-white font-bold">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;
