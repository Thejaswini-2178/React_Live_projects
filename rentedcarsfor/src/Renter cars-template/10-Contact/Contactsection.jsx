import React from 'react';
import contactData from './contactSectionData.json';

const Contactsection = () => {
    const { contactSection } = contactData;
    const { heading, form, contactItems, socialLinks } = contactSection;

    return (
        <div>
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>{heading.title}</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="form_container">
                                <form>
                                    <div className="form-row">
                                        {form.fields.map((field, index) => (
                                            <div className={`form-group col-md-${field.type === "text" ? "6" : "12"}`} key={index}>
                                                <input 
                                                    type={field.type} 
                                                    className="form-control" 
                                                    id={field.id} 
                                                    placeholder={field.placeholder} 
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-primary">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="contact_items">
                        {contactItems.map((item, index) => (
                            <a href="#" key={index}>
                                <div className="img-box">
                                    <img src={item.icon} alt="Contact Info" />
                                </div>
                                <h6>{item.info}</h6>
                            </a>
                        ))}
                    </div>
                    <div className="social_container">
                        <div className="social-box">
                            {socialLinks.map((link, index) => (
                                <div key={index}>
                                    <a href={link.link}>
                                        <img src={link.icon} alt="Social Icon" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contactsection;