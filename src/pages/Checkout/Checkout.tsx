import PlainHeroSection from '../../components/PlainHeroSection/PlainHeroSection'

function Checkout() {
    return (
        <>
            <PlainHeroSection title='Checkout' />

            <div className="untree_co-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-5 mb-md-0">
                            <h2 className="h3 mb-3 text-black">Billing Details</h2>
                            <div className="p-3 p-lg-5 border bg-white">
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <label htmlFor="c_fname" className="text-black">Full Name <span
                                            className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="c_fname" name="c_fname" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <label htmlFor="c_address" className="text-black">Address <span
                                            className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="c_address" name="c_address"
                                            placeholder="Street address" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <label htmlFor="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="c_phone" name="c_phone"
                                            placeholder="Phone Number" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="c_order_notes" className="text-black">Order Notes</label>
                                    <textarea name="c_order_notes" id="c_order_notes" cols={30} rows={5} className="form-control"
                                        placeholder="Write your notes here..."></textarea>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="row mb-5">
                                <div className="col-md-12">
                                    <h2 className="h3 mb-3 text-black">Your Order</h2>
                                    <div className="p-3 p-lg-5 border bg-white">
                                        <table className="table site-block-order-table mb-5">
                                            <thead>
                                                <th>Product</th>
                                                <th>Total</th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Top Up T-Shirt <strong className="mx-2">x</strong> 1</td>
                                                    <td>$250.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Polo Shirt <strong className="mx-2">x</strong> 1</td>
                                                    <td>$100.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                                                    <td className="text-black">$350.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                                                    <td className="text-black font-weight-bold"><strong>$350.00</strong></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="form-group">
                                            <button className="btn btn-black btn-lg py-3 btn-block">Place Order</button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;
