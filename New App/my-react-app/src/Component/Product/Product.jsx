import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css'
import { Link } from 'react-router-dom';
const Product = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    async function fetchData() {
        const apiurl = "http://localhost:3002/data";
        try {
            const responce = await axios.get(apiurl)
            setProductData(responce.data)
        } catch (error) {
            console.error("Error feching product data:", error);
        }
    }
    return (
        <>
            <div className="container products mt-3">
                <div className="row">
                    {productData.map((item, index) => (
                        <div key={index} className="col-12 col-sm-6 col-lg-3 mb-3 ">
                            <div className="card p-1" style={{ cursor: "pointer" }}>
                                <Link to={`/Product/${item.id}`} >

                                    <div className="product_img mt-2 text-center">
                                        <img src={item.src} alt="" className='img-fluid' style={{ height: "270px" }} />
                                    </div>

                                    <div className="card-body">

                                        <div className="product_title card-title" style={{ color: "grey", fontSize: "14px", msTextOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{item.title}</div>

                                        <div className="product_price fs-5 fw-bold" style={{ color: "rgb(99, 97, 97)" }}>{item.price}</div>

                                        <div className="product_description card-text rounded-pill px-2 my-1" style={{ width: "max-content", backgroundColor: "rgb(241, 241, 241)", fontSize: "14px", color: "rgb(66, 66, 74)" }}>{item.delivery}</div>

                                        <div className="ratings d-flex align-items-center">

                                            <div className="product_description rounded-pill bg-success my-2 px-2 d-flex align-items-center">
                                                <span className="pe-1 text-light" style={{ fontSize: "15px", fontWeight: "bold" }}>{item.rating}</span>
                                                <i className="fa-solid fa-star" style={{ color: "#fafafa", fontSize: "10px" }}></i>
                                            </div>

                                            <div className="rating-count ps-1" style={{ color: "rgb(97, 97, 115)", fontSize: "14px" }}>
                                                {item.reviews} Reviews
                                            </div>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Product;
