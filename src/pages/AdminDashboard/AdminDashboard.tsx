import { useState } from 'react';
import AdminProductListSection from '../../components/AdminProductListSection/AdminProductListSection';
import AdminOrderListSection from '../../components/AdminOrderListSection/AdminOrderListSection';

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
                                Produk
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
                                <AdminProductListSection />
                            ) : (
                                <AdminOrderListSection />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
