import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'

const Home = () => {
    return (
        <>
            <section className='home-wrapper-1 p-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-banner position-relative'>
                                <img
                                    className='img-fluid rounded-3'
                                    src='images/main-banner-1.jpg'
                                    alt='main banner'
                                />
                                <div className='main-banner-content position-absolute'>
                                    <h4>Airdrops profesionales</h4>
                                    <h5>iPad S13+ PRO</h5>
                                    <p>Desde s/. 7899.00 o 7799.00/mes</p>
                                    <Link className='button'>Comprar ahora</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                                <div className='small-banner position-relative'>
                                    <img
                                        className='img-fluid rounded-3'
                                        src='images/catbanner-01.jpg'
                                        alt='main banner'
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>Laptops</h4>
                                        <h5>iPad S13+ PRO</h5>
                                        <p>Desde s/. 7899.00 o <br /> 7799.00/mes</p>
                                    </div>
                                </div>

                                <div className='small-banner position-relative'>
                                    <img
                                        className='img-fluid rounded-3'
                                        src='images/catbanner-02.jpg'
                                        alt='main banner'
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>Relojes</h4>
                                        <h5>iPad S13+ PRO</h5>
                                        <p>Desde s/. 7899.00 o <br /> 7799.00/mes</p>
                                    </div>
                                </div>

                                <div className='small-banner position-relative'>
                                    <img
                                        className='img-fluid rounded-3'
                                        src='images/catbanner-03.jpg'
                                        alt='main banner'
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>Tablets</h4>
                                        <h5>iPad S13+ PRO</h5>
                                        <p>Desde s/. 7899.00 o <br /> 7799.00/mes</p>
                                    </div>
                                </div>

                                <div className='small-banner position-relative'>
                                    <img
                                        className='img-fluid rounded-3'
                                        src='images/catbanner-04.jpg'
                                        alt='main banner'
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>Audífonos</h4>
                                        <h5>iPad S13+ PRO</h5>
                                        <p>Desde s/. 7899.00 o <br /> 7799.00/mes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='home-wrapper-2 p-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='services d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service.png' alt='services' />
                                    <div>
                                        <h6>Envíos gratis</h6>
                                        <p className='mb-0'>Desde ordenes de s/. 500.00</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service-02.png' alt='services' />
                                    <div>
                                        <h6>Ofertas sorprendentes</h6>
                                        <p className='mb-0'>Ahorra hasta un 25% de descuento</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service-03.png' alt='services' />
                                    <div>
                                        <h6>Soporte 24/7</h6>
                                        <p className='mb-0'>Compra con un experto</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service-04.png' alt='services' />
                                    <div>
                                        <h6>Precios cómodos</h6>
                                        <p className='mb-0'>Obtener precio predeterminado de fábrica</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service-05.png' alt='services' />
                                    <div>
                                        <h6>Pago seguro</h6>
                                        <p className='mb-0'>100% protegido</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='home-wrapper-2 p-5'>
                <div className='contanier-xxl'>
                    <div className='col-12'>
                        <div className='categories d-flex justify-content-between flex-wrap align-items-center rounded-3'>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Cámaras</h6>
                                    <p>10 unidades</p>
                                </div>
                                <img src='images/camera.jpg' alt='camara' />
                            </div>

                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Samrt tv</h6>
                                    <p>10 unidades</p>
                                </div>
                                <img src='images/tv.jpg' alt='camara' />
                            </div>

                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Smart watches</h6>
                                    <p>10 unidades</p>
                                </div>
                                <img src='images/headphone.jpg' alt='camara' />
                            </div>

                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Music & gaming</h6>
                                    <p>10 unidades</p>
                                </div>
                                <img src='images/headphone.jpg' alt='camara' />
                            </div>

                            {/* columna 2 */}

                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Cámaras</h6>
                                    <p>10 unidades</p>
                                </div>
                                <img src='images/camera.jpg' alt='camara' />
                            </div>

                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Samrt tv</h6>
                                    <p>10 unidades</p>
                                </div>
                                <img src='images/tv.jpg' alt='camara' />
                            </div>

                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Smart watches</h6>
                                    <p>10 unidades</p>
                                </div>
                                <img src='images/headphone.jpg' alt='camara' />
                            </div>

                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Music & gaming</h6>
                                    <p>10 unidades</p>
                                </div>
                                <img src='images/headphone.jpg' alt='camara' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='featured-wrapper p-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Colección destacada</h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>

            <section className='famous-wrapper p-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/famous-1.webp' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5>Big screen</h5>
                                    <h6>Smart watch series 7</h6>
                                    <p>Desde solo s/. 300</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/famous-2.webp' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5 className='text-dark'>Big screen</h5>
                                    <h6 className='text-dark'>Smart watch series 7</h6>
                                    <p className='text-dark'>Desde solo s/. 300</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/famous-3.webp' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5 className='text-dark'>Big screen</h5>
                                    <h6 className='text-dark'>Smart watch series 7</h6>
                                    <p className='text-dark'>Desde solo s/. 300</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/famous-4.webp' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5 className='text-dark'>Big screen</h5>
                                    <h6 className='text-dark'>Smart watch series 7</h6>
                                    <p className='text-dark'>Desde solo s/. 300</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='special-wrapper p-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Productos especiales</h3>
                        </div>
                    </div>

                    <div className='row'>
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                    </div>
                </div>
            </section>

            <section className='popular-wrapper p-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Produtos populares</h3>
                        </div>
                    </div>

                    <div className='row'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>

            <section className='marque-wrapper p-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='marquee-inner-wrapper card-wrapper'>
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-01.png' alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-02.png' alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-03.png' alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-04.png' alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-05.png' alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-06.png' alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-07.png' alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-08.png' alt='brand' />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='blog-wrapper p-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Nuestro blog</h3>
                        </div>
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home