import BackgroundLines from "../../assets/images/background-lines.svg"
import ShowcaseImage from "../../assets/images/showcase-image.svg"

const Hero = () => {
    return (
        <section className="hero">
            <img id="hero-lines" src={BackgroundLines} alt="lines in the bottom left corner" />
            <div className="container">
                <div className="hero-action">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <a href="#" className="button button-primary">Get Consulting <i className="fa-solid fa-arrow-right"></i></a>
                    <a href="#" className="button button-inverse">Learn More <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <img src={ShowcaseImage} alt="man looking at his ipad thinking" />
            </div>
        </section>
    )
}

export default Hero