import React from 'react';
import img from '../images/home-img.svg'
const Land = () => {
    return (
        <div>
            <section className="home" id="home">

                <div className="image" data-aos="fade-down">
                    <img src={img} alt=""/>
                </div>

                <div className="content" data-aos="fade-up">
                    <h3>adventure is worthwhile</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis explicabo eius inventore reprehenderit alias eos facilis, ipsa est asperiores repellendus!</p>
                    <a href=" " className="btn">explore now</a>
                </div>

            </section>
        </div>
    );
}

export default Land;
