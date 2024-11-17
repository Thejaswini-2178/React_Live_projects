import React from 'react';

const About = () => {
    return (
        <div>
            <section className="about_section layout_padding2-top layout_padding-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7 px-0">
                            <div className="img-box">
                                <img src="images/about-img.png" alt="About Our Cars" /> {/* Added descriptive alt text */}
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="detail-box">
                                <h2>About Our Cars</h2>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.
                                </p>
                                <a href="/about" className="read-more-link"> {/* Corrected href */}
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
