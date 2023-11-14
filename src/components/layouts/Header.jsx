import {NavLink} from "react-router-dom";
import logotype from "../../assets/images/logotype.svg"
const Header = () => {
    return (
        <header>
        <div className="container">
            <img src={logotype} alt="crito logotype" />
            <i className="fa-solid fa-bars burger-menu"></i>
            <div className="header-items">
                <div className="contact-section">
                    <div className="contact-items">
                        <p className="contact-item"><i className="fa-solid fa-phone-volume"></i> +46 (8) 121 470 50</p>
                        <p className="contact-item"><i className="fa-regular fa-envelope"></i> info@crito.com</p>
                        <p className="contact-item"><i className="fa-solid fa-location-dot"></i> Sveavägen 31, 111 34 STOCKHOLM</p>
                    </div>
                    <div className="social-section">
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="nav-section">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <a href="#">Service</a>
                        <NavLink to="/news">News</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>
                    <a href="#" className="button button-primary">Login <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
        </header>        
    )
}

export default Header