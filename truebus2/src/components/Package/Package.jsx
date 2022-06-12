import React from 'react';
import p1 from '../images/p-1.jpg'
import p2 from '../images/p-2.jpg'
import p3 from '../images/p-3.jpg'
import p4 from '../images/p-4.jpg'
import p5 from '../images/p-5.jpg'
import p6 from '../images/p-6.jpg'

const Package = () => {
    return (
        <div>
            <section className="packages" id="packages">

                <h1 className="heading"> our <span>packages</span> </h1>

                <div className="box-container">

                    <div className="box" data-aos="fade-up">
                        <div className="image">
                            <img src={p1} alt=""/>
                            <h3> <i className="fas fa-map-marker-alt"></i> mumbai </h3>
                        </div>
                        <div className="content">
                            <div className="price"> 290.99 <span>350.99</span> </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
                            <a href="#" className="btn"> book now</a>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <div className="image">
                            <img src={p2} alt=""/>
                            <h3> <i className="fas fa-map-marker-alt"></i> hawaii </h3>
                        </div>
                        <div className="content">
                            <div className="price"> 290.99 <span>350.99</span> </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
                            <a href="#" className="btn"> book now</a>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <div className="image">
                            <img src={p3} alt=""/>
                            <h3> <i className="fas fa-map-marker-alt"></i> sydney </h3>
                        </div>
                        <div className="content">
                            <div className="price"> 290.99 <span>350.99</span> </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
                            <a href="#" className="btn"> book now</a>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <div className="image">
                            <img src={p4} alt=""/>
                            <h3> <i className="fas fa-map-marker-alt"></i> paris </h3>
                        </div>
                        <div className="content">
                            <div className="price"> 290.99 <span>350.99</span> </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
                            <a href="#" class="btn"> book now</a>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <div className="image">
                            <img src={p5} alt=""/>
                            <h3> <i class="fas fa-map-marker-alt"></i> tokyo </h3>
                        </div>
                        <div className="content">
                            <div className="price"> 290.99 <span>350.99</span> </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
                                <a href="#" className="btn"> book now</a>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <div className="image">
                            <img src={p6} alt=""/>
                            <h3> <i className="fas fa-map-marker-alt"></i> egypt </h3>
                        </div>
                        <div className="content">
                            <div className="price"> 290.99 <span>350.99</span> </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
                                <a href="#" className="btn"> book now</a>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
}

export default Package;
