import BackgroundWavyLines from "../../assets/images/background-wavy-lines-white.svg"
import FounderImage from "../../assets/images/daria-pimkina-tYaccl19A3Q-unsplash.jpg"

const Company = () => {
    return (
        <section className="company container">
            <div className="founder-section">
                <img className="lines" src={BackgroundWavyLines} alt="lines at the top of the picture" />
                <img className="founder-image" src={FounderImage}
                    alt="girl walks with ipad and a happy smile" />
                <div className="founder-box">
                    <h4>
                        Samantha Brown, <span className="small-red">Founder</span>
                    </h4>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
            </div>
            <div className="about-section">
                <h6>About Company</h6>
                <h2>
                    We Are Business Consulting & Credit Repair Experts
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati?
                    Ex esse error voluptates iure vel totam eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium
                    libero provident voluptate amet</p>
                <div className="button-group">
                    <a href="#" className="button button-black">Learn More <i className="fa-solid fa-arrow-right"></i></a>
                    <a href="#" className="circle-link"> <span><i className="fa-solid fa-play"></i></span>Intro Video</a>
                </div>
            </div>
        </section>
    )
}

export default Company