import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {

    const { id } = useParams();

    const [product, setproduct] = useState([]);
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);

        fetch(`http://localhost:3002/data/${id}`)
            .then(res => res.json())
            .then(json => setproduct(json))
    }, [id])

    const addToCart = (product) => {
        const updatedCartItems = [...cartItems, product];
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };


    if (!product) {
        return <div>Product not found</div>;
    }


    return (

        <>
            <div className="container p-3">
                <div className="row">
                    <div className="mainimg col-12 col-lg-6">
                        <img src={product.src} alt={product.title} />
                        <div className='buttons mt-4' style={{ fontSize: "12px" }}>
                            <a href="/AddCart">
                                <button onClick={() => addToCart(product)} className='rounded me-2 px-5 py-2' style={{ border: "1px solid rgb(159, 32, 137)", color: "rgb(159, 32, 137)", fontWeight: "bold", background: "white" }}>
                                    <i class="fas fa-shopping-cart me-2" style={{ color: "rgb(159, 32, 137)" }}></i>
                                    Add to Cart
                                </button>
                            </a>

                            <button className='rounded px-5 py-2' style={{ border: "1px solid rgb(159, 32, 137)", color: "white", fontWeight: "bold", background: "rgb(159, 32, 137)" }}>
                                <i class="fas fa-angle-double-right me-2" style={{ color: "white" }}></i>
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div className="alldetails col-12 col-lg-6">

                        <div className="maindetail py-2 px-4" style={{ border: "1px solid rgb(210, 210, 210)", borderRadius: "7px" }}>
                            <div style={{ fontSize: "14px", fontWeight: "bold", color: "rgb(139, 139, 163)" }}>{product.productdetail?.Name}</div>

                            <div className='mt-1' style={{ color: "black", fontSize: "24px" }}>₹{product.price}/-</div>

                            <div className="ratings d-flex align-items-center">

                                <div className="product_description rounded-pill bg-success my-2 px-2 d-flex align-items-center">
                                    <span className="pe-1 text-light" style={{ fontSize: "15px", fontWeight: "bold" }}>{product.rating}</span>
                                    <i className="fa-solid fa-star" style={{ color: "#fafafa", fontSize: "10px" }}></i>
                                </div>

                                <div className="rating-count ps-1" style={{ color: "rgb(97, 97, 115)", fontSize: "14px" }}>
                                    {product.reviews} Reviews
                                </div>

                            </div>

                            <div className="product_description card-text rounded-pill px-2 my-1" style={{ width: "max-content", backgroundColor: "rgb(241, 241, 241)", fontSize: "14px", color: "rgb(66, 66, 74)" }}>{product.delivery}</div>
                        </div>

                        <div className='size py-2 px-4 mt-2' style={{ border: "1px solid rgb(210, 210, 210)", borderRadius: "7px" }}>
                            <p className='fw-bold' style={{ color: "black" }}>Select Size</p>
                            <div className=" card-text rounded-pill px-3 my-1 pt-1" style={{ width: "max-content", backgroundColor: "rgb(255, 231, 251)", fontSize: "14px", color: "rgb(159, 32, 137)", fontWeight: "bold", border: "1px solid rgb(159, 32, 137)", cursor: "pointer" }}>{product.productdetail?.Size}</div>
                        </div>

                        <div className='productdetail py-2 px-4 mt-2' style={{ border: "1px solid rgb(210, 210, 210)", borderRadius: "7px" }}>

                            <p className='fw-bold' style={{ color: "black" }}>Product Detail</p>

                            <div style={{ fontSize: "12px" }}>
                                <span>Name:{product.productdetail?.Name}</span><br />
                                <span>Material:{product.productdetail?.Material}</span><br />
                                <span>Net Quantity:{product.productdetail?.Net}</span><br />
                                <span>{product.productdetail?.About}</span><br /><br />
                                <span>Country of Origin :{product.productdetail?.CfO}</span><br />
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
