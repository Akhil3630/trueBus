import React from 'react';

const Pricing = () => {
    return (
        <div>
            <section className="pricing" id="pricing">

                <h1 className="heading"> our <span>pricing</span> </h1>

                <div className="box-container">

                    <div className="box" data-aos="zoom-in-up">
                        <h3> basic plan </h3>
                        <div className="price">
                            <span>$</span>
                            <span className="amount">30</span>
                            <span>/mo</span>
                        </div>
                        <ul>
                            <li>10 days</li>
                            <li>food and drinks</li>
                            <li>safty guide</li>
                            <li>insurance</li>
                            <li>luxury hotel</li>
                        </ul>
                        <a href="#" className="btn">choose plan</a>
                    </div>

                <div className="box" data-aos="zoom-in-up">
                    <h3> standard plan </h3>
                    <div className="price">
                        <span>$</span>
                        <span className="amount">50</span>
                        <span>/mo</span>
                    </div>
                    <ul>
                        <li>20 days</li>
                        <li>food and drinks</li>
                        <li>safty guide</li>
                        <li>insurance</li>
                        <li>luxury hotel</li>
                    </ul>
                    <a href="#" className="btn">choose plan</a>
                </div>

                <div className="box" data-aos="zoom-in-up">
                    <h3> premium plan </h3>
                    <div className="price">
                        <span>$</span>
                        <span className="amount">90</span>
                        <span>/mo</span>
                    </div>
                    <ul>
                        <li>30 days</li>
                        <li>food and drinks</li>
                        <li>safty guide</li>
                        <li>insurance</li>
                        <li>luxury hotel</li>
                    </ul>
                    <a href="#" className="btn">choose plan</a>
                </div>

            </div>

        </section>

        </div>
    );
}

export default Pricing;
