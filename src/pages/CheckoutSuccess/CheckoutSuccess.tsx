import PlainHeroSection from '../../components/PlainHeroSection/PlainHeroSection'
import { Link } from 'react-router-dom'

function CheckoutSuccess() {
    return (
        <>
            <PlainHeroSection title='Order Confirmed' />

            <div className="untree_co-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="p-4 p-lg-5 border bg-white">
                                <div className="text-center mb-4">
                                    <span className="display-3 thankyou-icon mb-4">
                                        <i className="bi bi-check-circle-fill"></i>
                                    </span>
                                    <h2 className="text-black">Thank you for your order!</h2>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-12">
                                        <div className="border-bottom pb-2">
                                            <div className="d-flex justify-content-between">
                                                <span className="text-black">Order Number:</span>
                                                <strong className="text-black">#ORD-2025000001</strong>
                                            </div>
                                        </div>
                                        <div className="border-bottom py-2">
                                            <div className="d-flex justify-content-between">
                                                <span className="text-black">Total to be paid:</span>
                                                <strong className="text-black">$350.00</strong>
                                            </div>
                                        </div>
                                        <div className="py-2 border-bottom">
                                            <div className="d-flex justify-content-between">
                                                <span className="text-black">Payment due by:</span>
                                                <strong className="text-black">November 30, 2023 23:59</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-black mb-3">Bank Transfer Details</h4>
                                    <div className="border p-3">
                                        <p className="mb-2"><strong>Bank Name:</strong> Bank Intelektual</p>
                                        <p className="mb-2"><strong>Account Name:</strong> Furni Store Inc</p>
                                        <p className="mb-2"><strong>Account Number:</strong> 1234-5678-9012-3456</p>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <Link to="/shop" className="btn btn-secondary me-2">Continue Shopping</Link>
                                    <Link to="/profile/orders" className="btn btn-primary">View Order History</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutSuccess
