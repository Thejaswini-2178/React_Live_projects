import React from 'react';

const Contact = () => {
    return (
        <div>
            {/* contact section */}
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>Request A Call Back</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="form_container">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" id="inputName4" placeholder="Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" id="inputSubject4" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email id" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="inputMessage" placeholder="Message" />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-primary">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="contact_items">
                        <a href="#">
                            <div className="img-box">
                                <img src="images/location.png" alt="Location Icon" />
                            </div>
                            <h6>Loram Ipusum ari lo elisant na</h6>
                        </a>
                        <a href="tel:+121234456789">
                            <div className="img-box">
                                <img src="images/call.png" alt="Call Icon" />
                            </div>
                            <h6>(+12 1234456789)</h6>
                        </a>
                        <a href="mailto:demo@gmail.com">
                            <div className="img-box">
                                <img src="images/mail.png" alt="Mail Icon" />
                            </div>
                            <h6>demo@gmail.com</h6>
                        </a>
                    </div>
                    <div className="social_container">
                        <div className="social-box">
                            <div>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src="images/fb.png" alt="Facebook" />
                                </a>
                            </div>
                            <div>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <img src="images/twitter.png" alt="Twitter" />
                                </a>
                            </div>
                            <div>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img src="images/linkedin.png" alt="LinkedIn" />
                                </a>
                            </div>
                            <div>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img src="images/insta.png" alt="Instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* map section */}
            <section className="map_section">
                <div className="map_container">
                    <div className="map-responsive">
                        <iframe 
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" 
                            width={600} 
                            height={300} 
                            frameBorder={0} 
                            style={{ border: 0, width: '100%', height: '100%' }} 
                            allowFullScreen 
                            title="Map"
                        />
                    </div>
                </div>
            </section>
            {/* end map section */}
        </div>
    );
};

export default Contact;
