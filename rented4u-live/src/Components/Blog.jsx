import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="blog_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>Our Latest Blog</h2>
                        <p>It is a long established fact that a reader will be distracted by the</p>
                    </div>
                </div>
                <div className="blog_container">
                    <div className="layout_padding2-top">
                        <div className="carousel-wrap">
                            <div className="owl-carousel">
                                <div className="item">
                                    <div className="box">
                                        <div className="date-box">
                                            <h6>04 Nov 2019</h6>
                                        </div>
                                        <div className="img-box">
                                            <img src="images/b-1.jpg" alt="Vintage Car" /> {/* Added alt text */}
                                        </div>
                                        <div className="detail-box">
                                            <h5>Vintage</h5>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable The point of using Lorem
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="box">
                                        <div className="date-box">
                                            <h6>04 Nov 2019</h6>
                                        </div>
                                        <div className="img-box">
                                            <img src="images/b-2.jpg" alt="Steering Wheels" /> {/* Added alt text */}
                                        </div>
                                        <div className="detail-box">
                                            <h5>Steering wheels</h5>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable The point of using Lorem
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="box">
                                        <div className="date-box">
                                            <h6>04 Nov 2019</h6>
                                        </div>
                                        <div className="img-box">
                                            <img src="images/b-3.jpg" alt="Buick Car" /> {/* Added alt text */}
                                        </div>
                                        <div className="detail-box">
                                            <h5>Buick Car</h5>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable The point of using Lorem
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="box">
                                        <div className="date-box">
                                            <h6>04 Nov 2019</h6>
                                        </div>
                                        <div className="img-box">
                                            <img src="images/b-2.jpg" alt="Steering Wheels" /> {/* Added alt text */}
                                        </div>
                                        <div className="detail-box">
                                            <h5>Steering wheels</h5>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable The point of using Lorem
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="us_section">
                <div className="container">
                    <div className="heading_container">
                        <h2>Why choose Us</h2>
                        <p>It is a long established fact that a reader will be distracted by the</p>
                    </div>
                </div>
                <div className="us_container layout_padding2">
                    <div className="content_box">
                        <div className="box">
                            <div className="img-box">
                                <img src="images/u-1.png" alt="Low Rent" /> {/* Added alt text */}
                            </div>
                            <div className="detail-box">
                                <h5>Low Rent</h5>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/u-2.png" alt="Fast Car" /> {/* Added alt text */}
                            </div>
                            <div className="detail-box">
                                <h5>Fast Car</h5>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/u-3.png" alt="Safe Car" /> {/* Added alt text */}
                            </div>
                            <div className="detail-box">
                                <h5>Safe Car</h5>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/u-4.png" alt="Quick Support" /> {/* Added alt text */}
                            </div>
                            <div className="detail-box">
                                <h5>Quick Support</h5>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box">
                        <a href="/read-more">Read More</a> {/* Updated href */}
                    </div>
                </div>
            </section>

            <section className="client_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>What Our Customers Say</h2> {/* Corrected heading */}
                        <p>It is a long established fact that a reader will be distracted by the</p>
                    </div>
                    <div className="layout_padding2-top">
                        <div className="carousel-wrap">
                            <div className="owl-carousel">
                                <div className="item">
                                    <div className="box">
                                        <div className="detail-box">
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.
                                            </p>
                                        </div>
                                        <div className="client_id">
                                            <div className="img-box">
                                                <img src="images/client-1.png" alt="Client 1" className="img-1" />
                                                <img src="images/client-1-white.png" alt="Client 1" className="img-2" />
                                            </div>
                                            <div className="name">
                                                <h6>Established</h6>
                                                <p>by the readable</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="box">
                                        <div className="detail-box">
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.
                                            </p>
                                        </div>
                                        <div className="client_id">
                                            <div className="img-box">
                                                <img src="images/client-2.png" alt="Client 2" className="img-1" />
                                                <img src="images/client-2-white.png" alt="Client 2" className="img-2" />
                                            </div>
                                            <div className="name">
                                                <h6>Blished</h6>
                                                <p>by the readable</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="box">
                                        <div className="detail-box">
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.
                                            </p>
                                        </div>
                                        <div className="client_id">
                                            <div className="img-box">
                                                <img src="images/client-1.png" alt="Client 3" className="img-1" />
                                                <img src="images/client-1-white.png" alt="Client 3" className="img-2" />
                                            </div>
                                            <div className="name">
                                                <h6>Established</h6>
                                                <p>by the readable</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="box">
                                        <div className="detail-box">
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.
                                            </p>
                                        </div>
                                        <div className="client_id">
                                            <div className="img-box">
                                                <img src="images/client-1.png" alt="Client 4" className="img-1" />
                                                <img src="images/client-1-white.png" alt="Client 4" className="img-2" />
                                            </div>
                                            <div className="name">
                                                <h6>Established</h6>
                                                <p>by the readable</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
