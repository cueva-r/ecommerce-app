import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <div className='col-3'>
            <div className='blog-card'>
                <div className='card-image'>
                    <img src='images/blog-1.jpg' className='img-fluid' alt='blog' />
                </div>
                <div className='blog-content'>
                    <p className='date'>11 junio 2022</p>
                    <h5 className='title'>Un bonito domingo</h5>
                    <p className='desc'>Lorem ipsum dolor sit amet consectetur adipiscing elit diam non.</p>
                    <Link to="/" className='button'>Ver más</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard