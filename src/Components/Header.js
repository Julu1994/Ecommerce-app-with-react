import React from "react";
import { Fragment } from "react";
import "./App.css";
import CartButton from "./CartButton";

const Header = () => {
    
    return (
        <Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                    <span className="logo">Jewel</span>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <div className="input-group">
                        <input
                            type="text"
                            id="search_field"
                            className="form-control"
                            placeholder="Enter Product Name ..."
                        />
                        <div className="input-group-append">
                            <button id="search_btn" className="btn">
                                <i className="fa fa-search" aria-hidden="true">search</i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <button className="btn" id="login_btn">
                        Login
                    </button>

                    {/* <button id="cart" className="ml-3">
                        Cart
                    </button>
                    <span className="ml-1" id="cart_count">
                        2
                    </span> */}
                    <CartButton />
                </div>
            </nav>
        </Fragment>
    );
};

export default Header;
