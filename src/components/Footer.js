import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-5'>
                            <div className='footer-top-data d-flex gap-30 align-items-center'>
                                <img src="images/newsletter.png" alt='newsletter' />
                                <h2 className='mb-0 text-white'>Iniciar sesión para noticias</h2>
                            </div>
                        </div>
                        <div className='col-7'>
                            <div className='input-group'>
                                <input
                                    type='text'
                                    className='form-control py-1'
                                    placeholder='Tu correo electrónico...'
                                    aria-label='Tu correo electrónico...'
                                    aria-describedby='basic-addon2'
                                />
                                <span className='input-group-text p-2' id='basic-addon2'>
                                    Suscribirse
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-4'>
                            <h4 className='text-white mb-4'>Contáctenos</h4>
                            <div className='footer-links d-flex flex-column'>
                                <address className='text-white fs-6'>Lima - Perú</address>
                                <a href='tel:+51 924 575 577' className='mt-3 d-block- mb-1 text-white'>Tel:+51 924 575 577</a>
                                <a href='mailto:ricoabraham879@gmail.com' className='mt-2 d-block- mb-0 text-white'>ricoabraham879@gmail.com</a>
                                
                                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                                    <a className='text-white' href="https://www.linkedin.com/in/abrahamrico/">
                                        <BsLinkedin className='fs-4' />
                                    </a>
                                    <a className='text-white' href="https://github.com/cueva-r">
                                        <BsGithub className='fs-4' />
                                    </a>
                                    <a className='text-white' href="https://www.instagram.com/a.rico_20/">
                                        <BsInstagram className='fs-4' />
                                    </a>
                                    <a className='text-white' href="https://www.facebook.com/ab.rico.05/?locale=es_LA">
                                        <BsFacebook className='fs-4' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='text-white mb-4'>Información</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Política y privacidad</Link>
                                <Link className='text-white py-2 mb-1'>Política de reembolso</Link>
                                <Link className='text-white py-2 mb-1'>Política de envíos</Link>
                                <Link className='text-white py-2 mb-1'>Blogs</Link>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='text-white mb-4'>Cuenta</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Sobre nosotros</Link>
                                <Link className='text-white py-2 mb-1'>FAQ</Link>
                                <Link className='text-white py-2 mb-1'>Contáctenos</Link>
                            </div>
                        </div>
                        <div className='col-2'>
                            <h4 className='text-white mb-4'>Enlaces rápidos</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Laptops</Link>
                                <Link className='text-white py-2 mb-1'>Accessorios</Link>
                                <Link className='text-white py-2 mb-1'>Audífonos</Link>
                                <Link className='text-white py-2 mb-1'>Tablets</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()} desarrollado por rico's
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer