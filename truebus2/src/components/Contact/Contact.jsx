import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="contact" id="contact">

                <h1 className="heading"> <span>contact</span> us </h1>

                <form action="" data-aos="zoom">

                    <div className="inputBox">
                        <input type="text" placeholder="name" data-aos="fade-up"/>
                        <input type="email" placeholder="email" data-aos="fade-up"/>
                    </div>

                    <div className="inputBox">
                        <input type="number" placeholder="number" data-aos="fade-up"/>
                        <input type="text" placeholder="subject" data-aos="fade-up"/>
                    </div>

                    <textarea name="" placeholder="your message" id="" cols="30" rows="10" data-aos="fade-up"></textarea>
    
                    <input type="submit" value="send message" className="btn"/>

                </form>

            </section>
        </div>
    );
}

export default Contact;
