import React from 'react';
import pic1 from '../images/pic-1.png'
import pic2 from '../images/pic-2.png'
import pic3 from '../images/pic-3.png'
import pic4 from '../images/pic-4.png'

const Review = () => {
    return (
        <div>
            <section className="review" id="review">

                <h1 className="heading"> client's <span>review</span> </h1>

                <div className="swiper-container review-slider" data-aos="zoom-in">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide slide">
                            <img src={pic1} alt=""/>
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sunt eligendi est, dicta maiores amet nihil perferendis, incidunt maxime aspernatur exercitationem laboriosam odio dolores magnam ratione atque, quasi odit. Hic!</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <img src={pic2} alt=""/>
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sunt eligendi est, dicta maiores amet nihil perferendis, incidunt maxime aspernatur exercitationem laboriosam odio dolores magnam ratione atque, quasi odit. Hic!</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <img src={pic3} alt=""/>
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sunt eligendi est, dicta maiores amet nihil perferendis, incidunt maxime aspernatur exercitationem laboriosam odio dolores magnam ratione atque, quasi odit. Hic!</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <img src={pic4} alt=""/>
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sunt eligendi est, dicta maiores amet nihil perferendis, incidunt maxime aspernatur exercitationem laboriosam odio dolores magnam ratione atque, quasi odit. Hic!</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                    </div>

                    <div className="swiper-pagination"></div>

                </div>

            </section>

        </div>
    );
}

export default Review;
