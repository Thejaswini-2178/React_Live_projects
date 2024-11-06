import React from 'react';
import data from './sliderData.json';

const SliderSection = () => {
    const { sliderSection } = data;
    const { imgBox, detailContainer } = sliderSection.sliderContainer;
    const { carousel } = detailContainer;

    return (
        <section className={sliderSection.className}>
            <div className="slider_container">
                <div className="img-box">
                    <img src={imgBox.src} alt={imgBox.alt} />
                </div>
                <div className="detail_container">
                    <div id={carousel.id} className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {carousel.slides.map((slide, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <div className="detail-box">
                                        <h1>{slide.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</h1>
                                        <a href={slide.linkHref}>{slide.linkText}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a className="carousel-control-prev" href={`#${carousel.id}`} role="button" data-slide="prev">
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href={`#${carousel.id}`} role="button" data-slide="next">
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SliderSection;
