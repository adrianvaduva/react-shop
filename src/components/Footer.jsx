import React from 'react';
import '../utils/utility-classes.css'
import {ReactComponent as Phone} from '../assets/icons/phone.svg';
import {ReactComponent as Mail} from '../assets/icons/mail.svg';
import {ReactComponent as GitHub} from '../assets/icons/github.svg';
import {ReactComponent as LinkedIn} from '../assets/icons/linkedin.svg';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="container-fluid container-min-max-width bg-light">
            <div className=" d-flex justify-content-between text-dark ">
                <div className="d-flex flex-column">
                    <h3 className="h5">Links:</h3>
                    <Link to='/about'>About</Link>
                    <Link to='/terms-and-conditions'>Terms and conditions</Link>
                </div>
                <div className="footer-group"><h3 className="h5">Contact:</h3>
                    <p className="m-0">
                        <a href="mailto:adrianvaduva11@gmail.com" className="text-dark">
                            <Mail className="mr-1 mb-1 footer-icon"/>
                            adrianvaduva11@gmail.com
                        </a>
                    </p>
                    <p className="m-0">
                        <Phone className="mr-1 footer-icon"/>
                        +40760128988
                    </p>
                </div>
                <div className="footer-group"><h3 className="h5">Contact:</h3>
                    <p className="m-0">
                        <a href="https://github.com/adrianvaduva" className="text-dark">
                            <GitHub className="mr-1 mb-1 footer-icon"/>
                            adrianvaduva
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="https://www.linkedin.com/in/adrian-vaduva-61670948/" className="text-dark">
                            <LinkedIn className="mr-1 footer-icon"/>
                            adrianvaduva</a></p>
                </div>
            </div>
            <div className="text-center py-3">© Adrian Vaduva, 2020</div>
        </div>
    );
}

export default Footer;