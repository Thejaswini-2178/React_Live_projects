import React from 'react';
import data from './carSectionData.json';

const Carsection = () => {
    const { carSection } = data;
    const { container } = carSection;
    const { heading, carContainer } = container;

    return (
        <div>
            <section className={carSection.className}>
                <div className="container">
                    <div className="heading_container">
                        <h2>{heading.title}</h2>
                        <p>{heading.description}</p>
                    </div>
                    <div className="car_container">
                        {carContainer.map((car, index) => (
                            <div key={index} className="box">
                                <div className="img-box">
                                    <img src={car.image.src} alt={car.image.alt} />
                                </div>
                                <div className="detail-box">
                                    <h5>{car.details.title}</h5>
                                    <p>{car.details.description}</p>
                                    <a href={car.details.linkHref}>{car.details.linkText}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Carsection;
