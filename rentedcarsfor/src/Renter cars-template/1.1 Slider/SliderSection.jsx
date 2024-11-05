import React, { Component } from 'react'

class SliderSection extends Component {
    render() {
        return (
            <section className=" slider_section position-relative">
                <div className="slider_container">
                    <div className="img-box">
                        <img src="images/hero-img.jpg" alt />
                    </div>
                    <div className="detail_container">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="detail-box">
                                        <h1>
                                            Rent Car <br />
                                            Experts <br />
                                            Service
                                        </h1>
                                        <a href>
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="detail-box">
                                        <h1>
                                            Rent Car <br />
                                            Experts <br />
                                            Service
                                        </h1>
                                        <a href>
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="detail-box">
                                        <h1>
                                            Rent Car <br />
                                            Experts <br />
                                            Service
                                        </h1>
                                        <a href>
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default SliderSection