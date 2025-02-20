function OrderHistorySection() {
    return (
        <div className="p-4 p-lg-5 border bg-white">
            <h2 className="h3 mb-3 text-black">Riwayat Pesanan</h2>
            <div className="table-responsive">
                <table className="table site-block-order-table mb-5">
                    <thead>
                        <tr>
                            <th>Nomor Pesanan</th>
                            <th>Tanggal</th>
                            <th>Barang</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#ORD-2025000001</td>
                            <td>15 Jan 2025</td>
                            <td>
                                <div>Kaos Top Up x 1</div>
                                <div>Kemeja Polo x 1</div>
                            </td>
                            <td>Rp5.500.000</td>
                            <td><span className="badge bg-success">Dikirim</span></td>
                        </tr>
                        <tr>
                            <td>#ORD-2025000002</td>
                            <td>20 Jan 2025</td>
                            <td>
                                <div>Kursi Nordic x 2</div>
                            </td>
                            <td>Rp7.800.000</td>
                            <td><span className="badge bg-warning">Sedang Diproses</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="row">
                <div className="col-12">
                    <nav aria-label="Navigasi riwayat pesanan">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Sebelumnya">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Berikutnya">
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

export default OrderHistorySection;
