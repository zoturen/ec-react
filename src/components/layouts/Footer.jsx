import FooterLines from "../../assets/images/footer-lines.svg"
import Logotype from "../../assets/images/logotype-white.svg"

const Footer = () => {
    return (
        <footer>
            <section className="top-footer">
                <img className="lines" src={FooterLines} alt="" />
                <div className="container">
                    <div className="footer-item">
                        <img src={Logotype} alt="crito logotype" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                    </div>
                    <div className="footer-item">
                        <h4>Company</h4>
                        <a href="#">About</a>
                        <a href="#">Features</a>
                        <a href="#">Works</a>
                        <a href="#">Career</a>
                    </div>
                    <div className="footer-item">
                        <h4>Help</h4>
                        <a href="#">Customer Support</a>
                        <a href="#">Delivery Details</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="footer-item">
                        <h4>Resources</h4>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">YouTube Playlist</a>
                    </div>
                    <div className="footer-item">
                        <h4>Link</h4>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">YouTube Playlist</a>
                    </div>
                </div>
            </section>
            <section className="bottom-footer container">
                <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                <div className="social">
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </section>
        </footer>
    )
}

export default Footer