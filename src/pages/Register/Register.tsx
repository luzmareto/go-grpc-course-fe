import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="login-wrap p-4">
                            <h2 className="section-title text-center mb-5">Register</h2>
                            <form action="#" className="login-form">
                                <div className="form-group mb-4">
                                    <input type="text" className="form-control" placeholder="Full name" required />
                                </div>
                                <div className="form-group mb-4">
                                    <input type="email" className="form-control" placeholder="Email address" required />
                                </div>
                                <div className="form-group mb-4">
                                    <input type="password" className="form-control" placeholder="Password" required />
                                </div>
                                <div className="form-group mb-4">
                                    <input type="password" className="form-control" placeholder="Confirm password" required />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Create Account</button>
                                </div>
                                <div className="text-center mt-4">
                                    <p>Already have an account? <Link to="/login" className="text-primary">Login here</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
