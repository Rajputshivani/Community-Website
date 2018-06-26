import React from 'react';

const Footer = () => {
    return (

        <div className="footer-body">
            <div className="comp-title"> Community</div>
            <div className="social-icons">
                <ul className="icon">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>

                </ul>
            </div>
            <div className="pushlish">
                <span>&copy;</span>
                <span>2018  Community.com. All rights reserved.Powered by
                <a href="http://www.greatwits.com/">  www.greatwits.com</a>
                </span>\
            </div>
        </div>
    )
}

export default Footer;