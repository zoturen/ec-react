import Adeolu from "../../assets/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg"
import Marek from "../../assets/images/marek-levak-zANXcXyByos-unsplash.jpg"
import Oli from "../../assets/images/oli-dale-xjSkI_seiZY-unsplash.jpg"
import Carlos from "../../assets/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg"

const Projects = () => {
    return (
        <section className="projects container">
            <h6>Project & Case Studies</h6>
            <h2>Let's Looks Our Global Projects</h2>
            <div className="project-items">
                <div className="project-item">
                    <a href="#">
                        <img src={Adeolu} alt="man holding a paper" />
                        <h4>Grow Your business</h4>
                        <div><p>Read More <i className="fa-solid fa-arrow-right"></i></p></div>
                    </a>
                </div>

                <div className="project-item">
                    <a href="#">
                        <img src={Marek} alt="man holding a paper" />
                        <h4>Why your client needs a responsive website</h4>
                        <div><p>Read More <i className="fa-solid fa-arrow-right"></i></p></div>
                    </a>
                </div>

                <div className="project-item">
                    <a href="#">
                        <img src={Oli} alt="man holding a paper" />
                        <h4>Educate your employees to get better results</h4>
                        <div><p>Read More <i className="fa-solid fa-arrow-right"></i></p></div>
                    </a>
                </div>

                <div className="project-item">
                    <a href="#">
                        <img src={Carlos} alt="man holding a paper" />
                        <h4>Business Insights is a important piece of your business</h4>
                        <div><p>Read More <i className="fa-solid fa-arrow-right"></i></p></div>
                    </a>
                </div>
            </div>
            <div>
                <a className="button button-black" href="#">All Recent Projects <i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </section>
    )
}

export default Projects