function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container relative">
                <div className="sofa-img">
                    <img src="/images/sofa.png" alt="Sofa" className="img-fluid" />
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="subscription-form">
                            <h3 className="d-flex align-items-center">
                                <span className="me-1">
                                    <img src="/images/envelope-outline.svg" alt="Envelope" className="img-fluid" />
                                </span>
                                <span>Subscribe to Newsletter</span>
                            </h3>

                            <form className="row g-3">
                                <div className="col-auto">
                                    <input type="text" className="form-control" placeholder="Enter your name" />
                                </div>
                                <div className="col-auto">
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary">
                                        <span className="fa fa-paper-plane"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="border-top copyright">
                    <div className="row pt-4">
                        <div className="col-lg-6">
                            <p className="mb-2 text-center text-lg-start">
                                Copyright &copy;{currentYear}. All Rights Reserved. &mdash; Designed with love by
                                <a href="https://untree.co"> Untree.co</a> Distributed By
                                <a href="https://themewagon.com"> ThemeWagon</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer