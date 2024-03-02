import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
// import newsletter from "../images/newsletter.png";
const Footer = () => {
    return (
        <>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src="images/newsletter.png" alt="newsletter" />
                                <h2 className="mb-0 text-white">Suscríbete al boletín</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Ingresa tu correo electrónico..."
                                    aria-label="Ingresa tu correo electrónico..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-2" id="basic-addon2">
                                    Confirmar
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Contactenos</h4>
                            <div>
                                <address className="text-white fs-6">
                                    Salamanca, <br /> Lima <br />
                                    Perú
                                </address>
                                <a
                                    href="tel:+51 924 575 577"
                                    className="mt-3 d-block mb-1 text-white"
                                >
                                    +51 924 575 577
                                </a>
                                <a
                                    href="ricoabraham879@mail.com"
                                    className="mt-2 d-block mb-0 text-white"
                                >
                                    ricoabraham879@mail.com
                                </a>
                                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                                    <a className="text-white" href="https://www.linkedin.com/in/abrahamrico/">
                                        <BsLinkedin className="fs-4" />
                                    </a>
                                    <a className="text-white" href="https://www.instagram.com/a.rico_20/">
                                        <BsInstagram className="fs-4" />
                                    </a>
                                    <a className="text-white" href="https://github.com/cueva-r">
                                        <BsGithub className="fs-4" />
                                    </a>
                                    <a className="text-white" href="https://github.com/cueva-r">
                                        <BsYoutube className="fs-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Información</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                                    política de privacidad
                                </Link>
                                <Link to="/refund-policy" className="text-white py-2 mb-1">
                                    Politica de reembolso
                                </Link>
                                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                                    Politica de envios
                                </Link>
                                <Link to="/term-conditions" className="text-white py-2 mb-1">
                                    Términos y condiciones
                                </Link>
                                <Link className="text-white py-2 mb-1">Blogs</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Cuenta</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Sobre nosotors</Link>
                                <Link className="text-white py-2 mb-1">Faq</Link>
                                <Link className="text-white py-2 mb-1">Contacto</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Laptops</Link>
                                <Link className="text-white py-2 mb-1">Headphones</Link>
                                <Link className="text-white py-2 mb-1">Tablets</Link>
                                <Link className="text-white py-2 mb-1">Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()}: Abraham rico
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;