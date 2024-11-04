import React, { Component } from 'react'

export class Aboutsection extends Component {
    render() {
        return (
            <div>
                {/* about section */}
                <section className="about_section layout_padding-bottom">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-7 px-0">
                                <div className="img-box">
                                    <img src="images/about-img.png" alt="aboutsetion" />
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="detail-box">
                                    <h2>
                                   {data.section.title}
                                    </h2>
                                    <p>{data.section.description}</p>
                                    <a href={data.section.linkHref}>{data.section.linkText}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end about section */}


            </div>
        )
    }
}

export default Aboutsection