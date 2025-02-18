import { useState } from 'react';
import { Link } from 'react-router-dom';
import SortableHeader from '../../components/SortableHeader/SortableHeader';
import useSortableHeader from '../../hooks/useSortableHeader';

interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    image: string;
}

interface Order {
    id: string;
    customerName: string;
    total: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered';
    date: string;
}

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

function Pagination({
    currentPage,
    totalPages,
    onPageChange
}: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}) {
    const getPageNumbers = () => {
        if (totalPages <= 3) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage <= 2) return [1, 2, 3];
        if (currentPage >= totalPages - 1) return [totalPages - 2, totalPages - 1, totalPages];

        return [currentPage - 1, currentPage, currentPage + 1];
    };

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        aria-label="Previous"
                        onClick={() => onPageChange(currentPage - 1)}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>

                {getPageNumbers().map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => onPageChange(number)}
                        >
                            {number}
                        </button>
                    </li>
                ))}

                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        aria-label="Next"
                        onClick={() => onPageChange(currentPage + 1)}
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
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
                <h2 className="section-title">Products</h2>
                <button className="btn btn-primary">Add Product</button>
            </div>
            <div className="table-responsive">
                <table className="table site-blocks-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <SortableHeader
                                label="Product Name"
                                sortKey="name"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <SortableHeader
                                label="Price"
                                sortKey="price"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <SortableHeader
                                label="Stock"
                                sortKey="stock"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src="/images/product-1.png" width="50" alt="Product" />
                            </td>
                            <td>Nordic Chair</td>
                            <td>$50.00</td>
                            <td>15</td>
                            <td>
                                <button className="btn btn-secondary me-2">Edit</button>
                                <button className="btn">Delete</button>
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
                                label="Customer"
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
                                <div>Top Up T-Shirt x 1</div>
                                <div>Polo Shirt x 1</div>
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
