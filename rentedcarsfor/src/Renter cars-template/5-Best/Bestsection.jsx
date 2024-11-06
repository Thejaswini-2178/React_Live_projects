import React from 'react';
import data from './bestSectionData.json';

const Bestsection = () => {
    const { bestSection } = data;
    const { container } = bestSection;
    const { bookNow } = container;

    return (
        <div>
            <section className={bestSection.className}>
                <div className="container">
                    <div className="book_now">
                        <div className="detail-box">
                            <h2>{bookNow.detail.title}</h2>
                            <p>{bookNow.detail.description}</p>
                        </div>
                        <div className="btn-box">
                            <a href={bookNow.button.href}>{bookNow.button.text}</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bestsection;
