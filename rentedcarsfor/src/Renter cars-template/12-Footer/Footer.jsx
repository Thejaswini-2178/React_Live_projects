import React, { Component } from 'react';
import footerData from './footerData.json';  // assuming the JSON file is named footerData.json

export class Footer extends Component {
    render() {
        return (
            <div>
                {/* footer section */}
                <footer className="container-fluid footer_section">
                    <p>
                        {footerData.footer.content}
                        <a href={footerData.footer.link.href}>{footerData.footer.link.text}</a>
                    </p>
                </footer>
                {/* footer section */}
                <script src="js/jquery-3.4.1.min.js"></script>
                <script src="js/bootstrap.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
                </script>
                <script src="js/custom.js"></script>
            </div>
        );
    }
}

export default Footer;



