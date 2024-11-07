import React from 'react';
import data from './clintSectionData.json';

const Clintsection = () => {
    const { clientSection } = data;
    const { heading, testimonials } = clientSection;

    return (
        <div>
            <section className={clientSection.className}>
                <div className="container">
                    <div className="heading_container">
                        <h2>{heading.title}</h2>
                        <p>{heading.description}</p>
                    </div>
                    <div className="layout_padding2-top">
                        <div className="carousel-wrap">
                            <div className="owl-carousel">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="item">
                                        <div className="box">
                                            <div className="detail-box">
                                                <p>{testimonial.text}</p>
                                            </div>
                                            <div className="client_id">
                                                <div className="img-box">
                                                    <img src={testimonial.images.img1} alt="Client" className="img-1" />
                                                    <img src={testimonial.images.img2} alt="Client" className="img-2" />
                                                </div>
                                                <div className="name">
                                                    <h6>{testimonial.name}</h6>
                                                    <p>{testimonial.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clintsection;
