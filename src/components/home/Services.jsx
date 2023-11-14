import BackgroundLines from "../../assets/images/background-lines-right.svg"

const Services = () => {
    return (
        <section className="services">
            <img id="service-lines" src={BackgroundLines} alt="background lines" />
            <div className="container">
                <h6>Our Services</h6>
                <h2>We Provide The Best <br/>Service For Consulting</h2>
                <div className="service-section">
                    <a className="service-item" href="#">
                        <div className="line"></div>
                        <h4>Business Advice</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="right">
                            <span className="button button-black"><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </a>
                    <a className="service-item" href="#">
                        <div className="line"></div>
                        <h4>Startup Business</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="right">
                            <span className="button button-black"><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </a>
                    <a className="service-item" href="#">
                        <div className="line"></div>
                        <h4>Financial Advice</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="right">
                            <span className="button button-black"><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </a>
                    <a className="service-item" href="#">
                        <div className="line"></div>
                        <h4>Risk Management</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="right">
                            <span className="button button-black"><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </a>
                </div>
                <div id="browse-button">
                    <a className="button button-inverse" href="#">Browse Services <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Services