import React from 'react'
import {Link} from 'react-router-dom';
import '../../Assets/Styles/Footer.css';

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div>2022 &copy; VAtech Software Pvt. Ltd.</div>
                <div>Cookies Policy | Privacy Policy</div>
                <div className="social-media-footer">
                    {/* <Link href="#" className="social-footer-icon" id="Footer-btn">Facebook
                    </Link>
                    |
                    <Link href="#" className="social-footer-icon" id="Footer-btn">
                        Instagram
                    </Link>
                    |
                    <Link href="#" className="social-footer-icon" id="Footer-btn">
                        Twitter
                    </Link>
                    |
                    <Link href="#" className="social-footer-icon" id="Footer-btn">
                        YouTube
                    </Link> */}
                    |
                    <Link href="https://www.linkedin.com/company/vatech-solutions/?viewAsMember=true" className="social-footer-icon" id="Footer-btn"> LinkedIn
                    </Link>
                </div>
            </div>
        </>
    );
}
