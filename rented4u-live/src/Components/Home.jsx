import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section className="slider_section position-relative">
                <div className="slider_container">
                    <div className="img-box">
                        <img src="images/hero-img.jpg" alt="Hero Image" />
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
                                        <Link to="/contact">
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="detail-box">
                                        <h1>
                                            Rent Car <br />
                                            Experts <br />
                                            Service
                                        </h1>
                                        <Link to="/contact">
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="detail-box">
                                        <h1>
                                            Rent Car <br />
                                            Experts <br />
                                            Service
                                        </h1>
                                        <Link to="/contact">
                                            Contact Us
                                        </Link>
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

            <section className="book_section">
                <div className="form_container">
                    <form action="#">
                        <div className="form-row">
                            <div className="col-lg-8">
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <label htmlFor="parkingName">Pick Up Location</label>
                                        <input type="text" className="form-control" placeholder="Enter pickup location" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="parkingNumber">Drop Location</label>
                                        <input type="text" className="form-control" placeholder="Enter drop location" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <label htmlFor="parkingName">Pick Up Date</label>
                                        <input type="text" className="form-control" placeholder="MM/DD/YYYY" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="parkingNumber">Return Date</label>
                                        <input type="text" className="form-control" placeholder="MM/DD/YYYY" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="btn-container">
                                    <button type="submit" className="btn btn-primary">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="img-box">
                    <img src="images/book-car.png" alt="Car Booking" />
                </div>
            </section>
        </div>
    );
};

export default Home;
