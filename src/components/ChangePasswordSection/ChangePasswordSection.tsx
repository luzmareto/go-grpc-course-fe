function ChangePasswordSection() {
    return (
        <div className="p-4 p-lg-5 border bg-white">
            <h2 className="h3 mb-3 text-black">Change Password</h2>
            <div className="form-group">
                <label className="text-black" htmlFor="current_password">Current Password</label>
                <input type="password" className="form-control" id="current_password" />
            </div>
            <div className="form-group">
                <label className="text-black" htmlFor="new_password">New Password</label>
                <input type="password" className="form-control" id="new_password" />
            </div>
            <div className="form-group mb-3">
                <label className="text-black" htmlFor="confirm_password">Confirm New Password</label>
                <input type="password" className="form-control" id="confirm_password" />
            </div>
            <button className="btn btn-primary">Update Password</button>
        </div>
    )
}

export default ChangePasswordSection;
