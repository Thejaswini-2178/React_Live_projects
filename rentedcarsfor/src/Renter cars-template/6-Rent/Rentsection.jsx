import React from 'react';
import data from './rentSectionData.json';

const Rentsection = () => {
    const { rentSection } = data;
    const { container } = rentSection;
    const { rentContainer, seeMoreButton } = container;

    return (
        <div>
            <section className={rentSection.className}>
                <div className="container">
                    <div className="rent_container">
                        {rentContainer.map((item, index) => (
                            <div key={index} className="box">
                                <div className="img-box">
                                    <img src={item.image.src} alt={item.image.alt} />
                                </div>
                                <div className="price">
                                    <a href={item.linkHref}>{item.price}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="btn-box">
                        <a href={seeMoreButton.href}>{seeMoreButton.text}</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Rentsection;
