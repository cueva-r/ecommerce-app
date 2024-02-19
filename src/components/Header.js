import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>Envío gratis a partir de s/. 100 y devoluciones gratis</p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white mb-0'>Llamar:
                                <a className='text-white' href='tel: +51 924 575 577'>+51 924 575 577</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <header className='header-upper py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-2 align-items-center'>
                            <h2>
                                <Link className='text-white'>Dev rico's</Link>
                            </h2>
                        </div>
                        <div className='col-5'>
                            <div className='input-group'>
                                <input
                                    type='text'
                                    className='form-control py-2'
                                    placeholder='Buscar productos aquí...'
                                    aria-label='Buscar productos aquí...'
                                    aria-describedby='basic-addon2'
                                />
                                <span className='input-group-text p-3' id='basic-addon2'>
                                    <BsSearch className='fs-6' />
                                </span>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-items-center justify-content-between'>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='images/compare.svg' alt='Comparar' />
                                        <p className='mb-0'>Comparar <br /> productos</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='images/wishlist.svg' alt='Lista de deseos' />
                                        <p className='mb-0'>Lista de <br /> deseos</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='images/user.svg' alt='Usuario' />
                                        <p className='mb-0'>Entrar a <br /> mi cuenta</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='images/cart.svg' alt='Carrito' />
                                        <div className='d-flex flex-column gap-10'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0'>s/. 0.00</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='col-12'>
                        <div className='menu-bottom d-flex align-items-center gap-30'>
                            <div>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <img src='images/menu.svg' alt='Menú' />
                                        <span className='me-5 d-inline-block'>Categorías</span>
                                    </button>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <Link className="dropdown-item text-white" to="#">Action</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item text-white" to="#">Another action</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item text-white" to="#">Something else here</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='menu-links'>
                                <div className='d-flex align-items-center gap-15'>
                                    <NavLink to="/">Inicio</NavLink>
                                    <NavLink to="/">Nuestra tienda</NavLink>
                                    <NavLink to="/">Blogs</NavLink>
                                    <NavLink to="/contact">Contáctenos</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header