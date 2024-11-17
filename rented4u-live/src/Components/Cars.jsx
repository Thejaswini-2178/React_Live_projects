import React from 'react';
import { Link } from 'react-router-dom';

const Cars = () => {
    return (
        <div>
            <section className="car_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Better Way For Find Your Favourite Cars
                        </h2>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable
                        </p>
                    </div>
                    <div className="car_container">
                        <div className="box">
                            <div className="img-box">
                                <img src="images/c-1.png" alt="Car 1" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Choose Your Car
                                </h5>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when
                                </p>
                                <Link to="/car-details">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/c-2.png" alt="Car 2" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Get Your Car
                                </h5>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when
                                </p>
                                <Link to="/car-details">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/c-3.png" alt="Car 3" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Contact Your Dealer
                                </h5>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when
                                </p>
                                <Link to="/contact">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="best_section">
                <div className="container">
                    <div className="book_now">
                        <div className="detail-box">
                            <h2>
                                Our Best Cars
                            </h2>
                            <p>
                                It is a long established fact that a reader will be distracted by the
                            </p>
                        </div>
                        <div className="btn-box">
                            <Link to="/book-now">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="rent_section layout_padding">
                <div className="container">
                    <div className="rent_container">
                        <div className="box">
                            <div className="img-box">
                                <img src="images/r-1.png" alt="Rental Car 1" />
                            </div>
                            <div className="price">
                                <Link to="/car-details">
                                    Rent $200
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/r-2.png" alt="Rental Car 2" />
                            </div>
                            <div className="price">
                                <Link to="/car-details">
                                    Rent $200
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/r-3.png" alt="Rental Car 3" />
                            </div>
                            <div className="price">
                                <Link to="/car-details">
                                    Rent $200
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/r-4.png" alt="Rental Car 4" />
                            </div>
                            <div className="price">
                                <Link to="/car-details">
                                    Rent $200
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/r-5.png" alt="Rental Car 5" />
                            </div>
                            <div className="price">
                                <Link to="/car-details">
                                    Rent $200
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/r-6.png" alt="Rental Car 6" />
                            </div>
                            <div className="price">
                                <Link to="/car-details">
                                    Rent $200
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box">
                        <Link to="/cars">
                            See More
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cars;
