import React, { Component } from 'react'

 class Footer extends Component {
  render() {
    return (
  <div> 
     {/* end blog section */}
  {/* us section */}
  <section className="us_section">
    <div className="container">
      <div className="heading_container">
        <h2>
          Why choose Us
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
        </p>
      </div>
    </div>
    <div className="us_container layout_padding2">
      <div className="content_box">
        <div className="box">
          <div className="img-box">
            <img src="images/u-1.png" alt />
          </div>
          <div className="detail-box">
            <h5>
              Low Rent
            </h5>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src="images/u-2.png" alt />
          </div>
          <div className="detail-box">
            <h5>
              Fast Car
            </h5>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src="images/u-3.png" alt />
          </div>
          <div className="detail-box">
            <h5>
              Safe Car
            </h5>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src="images/u-4.png" alt />
          </div>
          <div className="detail-box">
            <h5>
              Quick Support
            </h5>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href>
          Read More
        </a>
      </div>
    </div>
  </section>
  {/* end us section */}
  {/* client section */}
  <section className="client_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          What Is say Customer
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
        </p>
      </div>
      <div className="layout_padding2-top">
        <div className="carousel-wrap ">
          <div className="owl-carousel">
            <div className="item">
              <div className="box">
                <div className="detail-box">
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
                  </p>
                </div>
                <div className="client_id">
                  <div className="img-box">
                    <img src="images/client-1.png" alt className="img-1" />
                    <img src="images/client-1-white.png" alt className="img-2" />
                  </div>
                  <div className="name">
                    <h6>
                      Established
                    </h6>
                    <p>
                      by the readable
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="detail-box">
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
                  </p>
                </div>
                <div className="client_id">
                  <div className="img-box">
                    <img src="images/client-2.png" alt className="img-1" />
                    <img src="images/client-2-white.png" alt className="img-2" />
                  </div>
                  <div className="name">
                    <h6>
                      Blished
                    </h6>
                    <p>
                      by the readable
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="detail-box">
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
                  </p>
                </div>
                <div className="client_id">
                  <div className="img-box">
                    <img src="images/client-1.png" alt className="img-1" />
                    <img src="images/client-1-white.png" alt className="img-2" />
                  </div>
                  <div className="name">
                    <h6>
                      Establi
                    </h6>
                    <p>
                      by the readable
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="detail-box">
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
                  </p>
                </div>
                <div className="client_id">
                  <div className="img-box">
                    <img src="images/client-1.png" alt className="img-1" />
                    <img src="images/client-1-white.png" alt className="img-2" />
                  </div>
                  <div className="name">
                    <h6>
                      Establi
                    </h6>
                    <p>
                      by the readable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end client section */}
  {/* contact section */}
  <section className="contact_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Request A call back
        </h2>
      </div>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="form_container">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" id="inputName4" placeholder="Name " />
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
                <button type="submit" className>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contact_items">
        <a href>
          <div className="img-box">
            <img src="images/location.png" alt />
          </div>
          <h6>
            Loram Ipusum ari
            lo elisant na
          </h6>
        </a>
        <a href>
          <div className="img-box">
            <img src="images/call.png" alt />
          </div>
          <h6>
            (+12 1234456789)
          </h6>
        </a>
        <a href>
          <div className="img-box">
            <img src="images/mail.png" alt />
          </div>
          <h6>
            demo@gmail.com
          </h6>
        </a>
      </div>
      <div className="social_container">
        <div className="social-box">
          <div>
            <a href>
              <img src="images/fb.png" alt />
            </a>
          </div>
          <div>
            <a href>
              <img src="images/twitter.png" alt />
            </a>
          </div>
          <div>
            <a href>
              <img src="images/linkedin.png" alt />
            </a>
          </div>
          <div>
            <a href>
              <img src="images/insta.png" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end contact section */}
  {/* map section */}
  <section className="map_section">
    {/* map section */}
    <div className="map_container">
      <div className="map-responsive">
        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={300} frameBorder={0} style={{border: 0, width: '100%', height: '100%'}} allowFullScreen />
      </div>
    </div>
    {/* end map section */}
  </section>
  {/* end map section */}
  {/* footer section */}
  <footer className="container-fluid footer_section">
    <p>
      Copyright © 2020 All Rights Reserved. Design by
      <a href="https://html.design/">Free Html Templates</a>
    </p>
  </footer>
  {/* footer section */}
</div>

    )
  }
}
export default Footer
