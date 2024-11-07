import React from 'react';
import data from './contactUsData.json';

const Contactus = () => {
    const { usSection } = data;
    const { heading, contentBoxes } = usSection;

    return (
        <div>
            <section className={usSection.className}>
                <div className="container">
                    <div className="heading_container">
                        <h2>{heading.title}</h2>
                        <p>{heading.description}</p>
                    </div>
                </div>
                <div className="us_container layout_padding2">
                    <div className="content_box">
                        {contentBoxes.map((box, index) => (
                            <div key={index} className="box">
                                <div className="img-box">
                                    <img src={box.image.src} alt={box.image.alt} />
                                </div>
                                <div className="detail-box">
                                    <h5>{box.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="btn-box">
                        <a href="#">Read More</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contactus;
