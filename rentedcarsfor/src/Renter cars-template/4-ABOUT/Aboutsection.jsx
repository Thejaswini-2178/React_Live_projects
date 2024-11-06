import React from 'react';
import data from './aboutSectionData.json';

const Aboutsection = () => {
    const { aboutSection } = data;
    const { container } = aboutSection;
    const { image, details } = container;

    return (
        <section className={aboutSection.className}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7 px-0">
                        <div className="img-box">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <div className="detail-box">
                            <h2>{details.title}</h2>
                            <p>{details.description}</p>
                            <a href={details.linkHref}>{details.linkText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutsection;
