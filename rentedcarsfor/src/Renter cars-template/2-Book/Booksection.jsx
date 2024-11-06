import React from 'react';
import data from './bookSectionData.json';

const Booksection = () => {
    const { bookSection } = data;
    const { formContainer, imgBox } = bookSection;

    return (
        <div>
            <section className={bookSection.className}>
                <div className="form_container">
                    <form action={formContainer.formAction}>
                        <div className="form-row">
                            <div className="col-lg-8">
                                <div className="form-row">
                                    {formContainer.formRows.map((row, index) => (
                                        <div key={index} className={row.colClass}>
                                            <label>{row.label}</label>
                                            <input
                                                type={row.input.type}
                                                className={row.input.className}
                                                placeholder={row.input.placeholder}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="btn-container">
                                    <button type={formContainer.button.type}>
                                        {formContainer.button.text}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="img-box">
                    <img src={imgBox.src} alt={imgBox.alt} />
                </div>
            </section>
        </div>
    );
};

export default Booksection;
