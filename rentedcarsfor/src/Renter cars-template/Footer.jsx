import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                {/* footer section */}

                <footer class="container-fluid footer_section">
                    <p>
                        Copyright &copy; 2020 All Rights Reserved. Design by
                        <a href="https://html.design/">Free Html Templates</a>
                    </p>
                </footer>
                {/* footer section */}
                <script src="js/jquery-3.4.1.min.js"></script>
                <script src="js/bootstrap.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
                </script>
                <script src="js/custom.js"></script>
            </div>
        )
    }
}

export default Footer