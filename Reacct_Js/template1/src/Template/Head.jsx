import React, { Component } from 'react'

 class Head extends Component {
  render() {
    return (
      <div>
<div>
  <div className="hero_area">
    {/* header section strats */}
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="index.html">
            <span>
              Rent4u
            </span>
          </a>
          <div className="navbar-collapse" id>
            <div className="user_option">
              <a href>
                Login
              </a>
            </div>
            <div className="custom_menu-btn">
              <button onclick="openNav()">
                <span className="s-1"> </span>
                <span className="s-2"> </span>
                <span className="s-3"> </span>
              </button>
            </div>
            <div id="myNav" className="overlay">
              <div className="overlay-content">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="car.html">Cars</a>
                <a href="blog.html">Blog</a>
                <a href="contact.html">Contact Us</a>
                <a href="#">Login</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* end header section */}
    {/* slider section */}
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
    {/* end slider section */}
  </div>
  {/* book section */}
  <section className="book_section">
    <div className="form_container">
      <form action>
        <div className="form-row">
          <div className="col-lg-8">
            <div className="form-row">
              <div className="col-md-6">
                <label htmlFor="parkingName">Pick Up Locaion</label>
                <input type="text" className="form-control" placeholder="acb " />
              </div>
              <div className="col-md-6">
                <label htmlFor="parkingNumber">Drop Location</label>
                <input type="text" className="form-control" placeholder="acb " />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6">
                <label htmlFor="parkingName">Pick Up Date</label>
                <input type="text" className="form-control" placeholder="07/09/2020" />
              </div>
              <div className="col-md-6">
                <label htmlFor="parkingNumber">Return Date</label>
                <input type="text" className="form-control" placeholder="07/09/2020" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="btn-container">
              <button type="submit" className>
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div className="img-box">
      <img src="images/book-car.png" alt />
    </div>
  </section>
</div>

      </div>
    )
  }
}
export default Head