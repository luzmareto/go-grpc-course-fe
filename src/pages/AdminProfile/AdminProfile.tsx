import { Link, Outlet, useLocation } from 'react-router-dom';
import PlainHeroSection from '../../components/PlainHeroSection/PlainHeroSection';

function AdminProfile() {
    const location = useLocation();

    return (
        <>
            <PlainHeroSection title='My Profile' />

            <div className="untree_co-section before-footer-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="p-4 p-lg-5 border bg-white">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="text-black">Full Name</label>
                                            <div className="form-control-plaintext">John Doe</div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="text-black">Email Address</label>
                                            <div className="form-control-plaintext">john.doe@example.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <div className="nav flex-column nav-pills">
                                <Link
                                    to="/admin/profile/change-password"
                                    className={`nav-link ${location.pathname === '/admin/profile/change-password' ? 'active' : ''}`}
                                >
                                    Change Password
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminProfile;
