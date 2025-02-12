function OrderHistorySection() {
    return (
        <div className="p-4 p-lg-5 border bg-white">
            <h2 className="h3 mb-3 text-black">Order History</h2>
            <div className="table-responsive">
                <table className="table site-block-order-table mb-5">
                    <thead>
                        <tr>
                            <th>Order Number</th>
                            <th>Date</th>
                            <th>Items</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#ORD-2025000001</td>
                            <td>Jan 15, 2025</td>
                            <td>
                                <div>Top Up T-Shirt x 1</div>
                                <div>Polo Shirt x 1</div>
                            </td>
                            <td>$350.00</td>
                            <td><span className="badge bg-success">Delivered</span></td>
                        </tr>
                        <tr>
                            <td>#ORD-2025000002</td>
                            <td>Jan 20, 2025</td>
                            <td>
                                <div>Nordic Chair x 2</div>
                            </td>
                            <td>$500.00</td>
                            <td><span className="badge bg-warning">Processing</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="row">
                <div className="col-12">
                    <nav aria-label="Order history pagination">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default OrderHistorySection
