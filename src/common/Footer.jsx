const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
                <img
                    className="w-[60px] h-[60px]"
                    src="https://i.ibb.co.com/hYt7z5f/logo.png"
                    alt=""
                />
                <p className="text-xl font-bold">
                    Job Lagbe?
                    <br />
                    <small className="font-normal">
                        a job finding platform since 2024
                    </small>
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <p>Subscribe for receive job notification</p>
                <div className="join">
                    <input
                        type="text"
                        placeholder="username@site.com"
                        className="input input-bordered join-item"
                    />
                    <button className="btn border hover:text-[#008854] border-[#008854] bg-[#008854] text-white join-item">
                        Subscribe
                    </button>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
