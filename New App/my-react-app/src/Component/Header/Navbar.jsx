import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="header container d-flex align-items-center justify-content-center mt-2 justify-content-between">

                <div className="logo mt-1">
                    <h3 className="fw-bold" style={{ color: "#570d48" }}>Logo</h3>
                </div>

                <div className="search ms-3 d-none d-lg-block">
                    <div className="search-bar d-flex">
                        <div className="search-icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <input type="text" className="search-input" placeholder="Try Saree, Kurti or Search by Product Code" />
                    </div>
                </div>

                <div className="download ms-3 d-none d-lg-block">
                    <div className="appdetail">
                        <i className="fas fa-mobile-alt me-2" style={{ fontSize: "14px" }}></i>
                        <span style={{ fontSize: "14px" }}>Download App</span>
                    </div>

                    <div className="appoption p-3 rounded-bottom" style={{ border: "1px solid rgb(210, 210, 210)", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                        <h6 className="text-dark pb-2" style={{ fontSize: "14px" }}>Download From</h6>
                        <img src="https://images.meesho.com/images/pow/playstore-icon-big.png" />
                        <img src="https://images.meesho.com/images/pow/appstore-icon-big.png" />
                    </div>

                </div>

                <div className="vl d-none d-lg-block"></div>

                <div className="d-flex align-items-center d-none d-lg-block">
                    <h6 className="pt-2" style={{ fontSize: "14px" }}>Become a Supplier</h6>
                </div>

                <div className="vl d-none d-lg-block"></div>

                <div className="d-flex align-items-center d-none d-lg-block">
                    <h6 className="pt-2" style={{ fontSize: "14px" }}>Newsroom</h6>
                </div>

                <div className="vl d-none d-lg-block"></div>


                <div className="profilemenu gap-4">
                    <div className="profile " >
                        <div className="profiledetail d-flex flex-column justify-content-center align-items-center" >
                            <i className="fa-regular fa-user" style={{ fontSize: "14px" }}></i>
                            <span style={{ fontSize: "14px" }}>Profile</span>
                        </div>

                        <div className="user px-3 py-3 rounded-bottom" style={{ border: "1px solid rgb(210, 210, 210)", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                            <Link to="./Login" role='button'>
                                <h6 className="text-dark">Hello User</h6>
                                <p style={{ fontSize: "10px", fontWeight: "bold", marginBottom: "10px" }}>To access your Meesho account</p>
                                <button className='rounded w-100 py-2 border' style={{ border: "1px solid rgb(159, 32, 137)", color: "white", fontWeight: "bold", background: "rgb(159, 32, 137)", fontSize: "14px" }}>
                                    Sign In
                                </button>
                            </Link>

                            <div className="border w-100 my-2"></div>

                            <button className='rounded w-100 text-start' style={{ border: "1px solid white", background: "white", fontSize: "14px", color: "black" }}>
                                <i class="fas fa-shopping-bag me-3"></i>
                                My Orders
                            </button>

                        </div>
                    </div>

                    <div className="cart d-flex flex-column justify-content-center align-items-center me-4">
                        <i className="fa-solid fa-cart-shopping" style={{ fontSize: "14px" }}></i>
                        <span style={{ fontSize: "14px" }}>Cart</span>
                    </div>

                </div>
            </div>

            <div className="search2 container p-0 d-lg-none">
                <div className="search-bar d-flex">
                    <div className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input type="text" className="search-input" placeholder="Search for Sarees, Kurtis, cosmetics, etc." />
                </div>
            </div>

            <div className="border w-100"></div>
        </>
    );
}

export default Navbar;
