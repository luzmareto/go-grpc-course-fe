import { useState } from 'react';
import { Link } from 'react-router-dom';
import SortableHeader from '../../components/SortableHeader/SortableHeader';
import useSortableHeader from '../../hooks/useSortableHeader';
import Pagination from '../../components/Pagination/Pagination';

function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('products');

    return (
        <div className="admin-dashboard py-5">
            <div className="container">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-3">
                        <div className="nav flex-column nav-pills">
                            <button
                                className={`nav-link ${activeTab === 'products' ? 'active' : ''}`}
                                onClick={() => setActiveTab('products')}
                            >
                                Products
                            </button>
                            <button
                                className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}
                                onClick={() => setActiveTab('orders')}
                            >
                                Order
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-md-9">
                        <div className="bg-white p-4 rounded-3">
                            {activeTab === 'products' ? (
                                <ProductsPanel />
                            ) : (
                                <OrdersPanel />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProductsPanel() {
    const { handleSort, sortConfig } = useSortableHeader();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="section-title">Produk</h2>
                <button className="btn btn-primary">Tambah Produk</button>
            </div>
            <div className="table-responsive">
                <table className="table site-blocks-table">
                    <thead>
                        <tr>
                            <th>Gambar</th>
                            <SortableHeader
                                label="Nama Produk"
                                sortKey="name"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <SortableHeader
                                label="Harga"
                                sortKey="price"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <SortableHeader
                                label="Stok"
                                sortKey="stock"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src="/images/product-1.png" width="50" alt="Produk" />
                            </td>
                            <td>Kursi Nordic</td>
                            <td>Rp775.000</td>
                            <td>15</td>
                            <td>
                                <button className="btn btn-secondary me-2">Edit</button>
                                <button className="btn">Hapus</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

        </div>
    );
}

function OrdersPanel() {
    const { handleSort, sortConfig } = useSortableHeader();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="section-title">Order</h2>
            </div>
            <div className="table-responsive">
                <table className="table site-blocks-table">
                    <thead>
                        <tr>
                            <th>Nomor Order</th>
                            <SortableHeader
                                label="Pelanggan"
                                sortKey="customer"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <SortableHeader
                                label="Total"
                                sortKey="total"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <th>Item</th>
                            <SortableHeader
                                label="Status"
                                sortKey="status"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <SortableHeader
                                label="Tanggal"
                                sortKey="date"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#ORD-2025000001</td>
                            <td>Sari</td>
                            <td>$150.00</td>
                            <td>
                                <div>Produk 1 x 1</div>
                                <div>Produk 2 x 1</div>
                            </td>
                            <td>
                                <span className="badge bg-warning">Diproses</span>
                            </td>
                            <td>Jan 15, 2025</td>
                            <td>
                                {/* TODO: add order link */}
                                <Link to="/admin/order">
                                    <button className="btn">
                                        Lihat Detail
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default AdminDashboard;
