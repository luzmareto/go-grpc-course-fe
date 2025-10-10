import { Link } from 'react-router-dom';
import useGrpcApi from '../../hooks/useGrpcApi';
import { useEffect, useState } from 'react';
import { getProductClient } from '../../api/grpc/client';
import { formatToIDR } from '../../utils/number';

interface Product {
    id: string
    name: string
    price: number;
    imageUrl: string;
}

interface ProductHighlightSectionProps {
    beforeFooter?: boolean;
}

function ProductHighlightSection(props: ProductHighlightSectionProps) {
    const [items, setItems] = useState<Product[]>([]);

    const productApi = useGrpcApi();

    useEffect (() => {
        const fetchData = async () => {
            const res = await productApi.callApi(getProductClient().highlightProducts({})); 
        
            setItems(res.response.data.map(d => ({
                id: d.id,
                imageUrl: d.imageUrl,
                name: d.name,
                price: d.price,
            })))
        }

        fetchData();
    }, [])
    return (
        <div className={`product-section ${props.beforeFooter ? 'before-footer-section' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">Dibuat dengan material terbaik.</h2>
                        <p className="mb-4">Rasakan perpaduan sempurna antara keahlian dan daya tahan. Furnitur kami dibuat dengan material premium untuk meningkatkan estetika dan kenyamanan ruang Anda.</p>
                        <p><Link to="/shop" className="btn">Jelajahi</Link></p>
                    </div>

                    {/* Product Items */}
                    {items.map(item => (
                        <div key={item.id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <Link className="product-item" to="/cart">
                                <img src={item.imageUrl}className="img-fluid product-thumbnail" alt="product_image" />
                                <h3 className="product-title">{item.name}</h3>
                                <strong className="product-price">{formatToIDR(item.price)}</strong>
                                <span className="icon-cross">
                                    <img src="/images/cross.svg" className="img-fluid" alt="Cross" />
                                </span>
                            </Link>
                        </div>

                    ))}

                    {/* <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <Link className="product-item" to="cart.html">
                            <img src="images/product-2.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Kruzo Aero Chair</h3>
                            <strong className="product-price">Rp1.170.000</strong>

                            <span className="icon-cross">
                                <img src="images/cross.svg" className="img-fluid" />
                            </span>
                        </Link>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <Link className="product-item" to="cart.html">
                            <img src="images/product-3.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Ergonomic Chair</h3>
                            <strong className="product-price">Rp645.000</strong>

                            <span className="icon-cross">
                                <img src="images/cross.svg" className="img-fluid" />
                            </span>
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ProductHighlightSection;
