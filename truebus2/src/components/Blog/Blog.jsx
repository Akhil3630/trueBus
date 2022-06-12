import React from 'react';
import blog1 from '../images/blog-1.svg'
import blog2 from '../images/blog-2.svg'
import blog3 from '../images/blog-3.svg'
const Blog = () => {
    return (
        <div>
            <section className="blogs" id="blogs">

                <h1 className="heading"> our <span>blogs</span> </h1>

                <div className="box-container">

                    <div className="box" data-aos="fade-up">
                        <div className="image">
                            <img src={blog1} alt=""/>
                        </div>
                        <div className="content">
                            <h3>explore the world now, adventure awaits</h3>
                            <a href="#" className="btn">read more</a>
                            <div className="icons">
                                <a href="#"> <i className="fas fa-calendar"></i> 1st jan, 2021 </a>
                                <a href="#"> <i className="fas fa-user"></i> by admin </a>
                            </div>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <div className="image">
                            <img src={blog2} alt=""/>
                        </div>
                        <div className="content">
                            <h3>explore the world now, adventure awaits</h3>
                            <a href="#" className="btn">read more</a>
                            <div className="icons">
                                <a href="#"> <i className="fas fa-calendar"></i> 1st jan, 2021 </a>
                                <a href="#"> <i className="fas fa-user"></i> by admin </a>
                            </div>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <div className="image">
                            <img src={blog3} alt=""/>
                        </div>
                        <div className="content">
                            <h3>explore the world now, adventure awaits</h3>
                            <a href="#" className="btn">read more</a>
                            <div className="icons">
                                <a href="#"> <i className="fas fa-calendar"></i> 1st jan, 2021 </a>
                                <a href="#"> <i className="fas fa-user"></i> by admin </a>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default Blog;
