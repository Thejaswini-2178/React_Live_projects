import React from 'react';
import data from './blogSectionData.json';

const BlogSection = () => {
    const { blogSection } = data;
    const { container } = blogSection;
    const { heading, blogs } = container;

    return (
        <div>
            <section className={blogSection.className}>
                <div className="container">
                    <div className="heading_container">
                        <h2>{heading.title}</h2>
                        <p>{heading.description}</p>
                    </div>
                </div>
                <div className="blog_container">
                    <div className="layout_padding2-top">
                        <div className="carousel-wrap">
                            <div className="owl-carousel">
                                {blogs.map((blog, index) => (
                                    <div key={index} className="item">
                                        <div className="box">
                                            <div className="date-box">
                                                <h6>{blog.date}</h6>
                                            </div>
                                            <div className="img-box">
                                                <img src={blog.image.src} alt={blog.image.alt} />
                                            </div>
                                            <div className="detail-box">
                                                <h5>{blog.title}</h5>
                                                <p>{blog.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogSection;
