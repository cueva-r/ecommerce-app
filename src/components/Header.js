import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
const Header = () => {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0">
                                Envío gratuito a partir de $100 y devoluciones gratuitas
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">
                                Línea:
                                <a className="text-white" href="tel:+51 924 575 577">
                                    +51 924 575 577
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link className="text-white">Dev rico's</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Buscar productos aquí..."
                                    aria-label="Buscar productos aquí..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    <BsSearch className="fs-6" />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link
                                        to="/compare-product"
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img src={compare} alt="compare" />
                                        <p className="mb-0">
                                            Comparar <br /> Productos
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to="/wishlist"
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img src={wishlist} alt="wishlist" />
                                        <p className="mb-0">
                                            Favoritos <br /> Lista deseada
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to="/login"
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img src={user} alt="user" />
                                        <p className="mb-0">
                                            Iniciar sesión <br /> Mi cuenta
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to="/cart"
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img src={cart} alt="cart" />
                                        <div className="d-flex flex-column gap-10">
                                            <span className="badge bg-white text-dark">0</span>
                                            <p className="mb-0">$ 500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img src={menu} alt="" />
                                            <span className="me-5 d-inline-block">
                                                Categorías
                                            </span>
                                        </button>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton1"
                                        >
                                            <li>
                                                <Link className="dropdown-item text-white" to="">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="">
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/">Inico</NavLink>
                                        <NavLink to="/product">Tienda</NavLink>
                                        <NavLink to="/blogs">Blogs</NavLink>
                                        <NavLink to="/contact">Contacto</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;