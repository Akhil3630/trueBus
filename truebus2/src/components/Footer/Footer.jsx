import React from 'react';

const Footer = () => {
    return (
        <div>
            <section className="footer">

                <div className="box-container">

                    <div className="box" data-aos="fade-up">
                        <h3>our branches</h3>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> india </a>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> russia </a>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> japan </a>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> france </a>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> canada </a>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <h3>quick links</h3>
                        <a href="#"> <i className="fas fa-chevron-right"></i> home </a>
                        <a href="#"> <i className="fas fa-chevron-right"></i> packages </a>
                        <a href="#"> <i className="fas fa-chevron-right"></i> services </a>
                        <a href="#"> <i className="fas fa-chevron-right"></i> pricing </a>
                        <a href="#"> <i className="fas fa-chevron-right"></i> review </a>
                        <a href="#"> <i className="fas fa-chevron-right"></i> contact </a>
                        <a href="#"> <i className="fas fa-chevron-right"></i> blogs </a>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <h3>contact info</h3>
                        <a href="#"> <i className="fas fa-phone"></i> +123-456-7890 </a>
                        <a href="#"> <i className="fas fa-phone"></i> +111-222-3333 </a>
                        <a href="#"> <i className="fas fa-envelop"></i> shaikhanas@gmail.com </a>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> mumbai, indai - 400104 </a>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <h3>follow us</h3>
                        <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
                        <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
                        <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
                        <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
                        <a href="#"> <i className="fab fa-pinterest"></i> pinterest </a>
                    </div>

                </div>

            </section>
        </div>
    );
}

export default Footer;
