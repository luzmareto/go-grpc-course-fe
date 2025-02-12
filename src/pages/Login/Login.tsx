import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="login-wrap p-4">
                            <h2 className="section-title text-center mb-5">Login</h2>
                            <form action="#" className="login-form">
                                <div className="form-group mb-4">
                                    <input type="email" className="form-control" placeholder="Email address" required />
                                </div>
                                <div className="form-group mb-4
                            ">
                                    <input type="password" className="form-control" placeholder="Password" required />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                </div>
                                <div className="text-center mt-4">
                                    <p>Don't have an account? <Link to="/register" className="text-primary">Register here</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
