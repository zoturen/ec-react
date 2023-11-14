import Adeolu from "../../assets/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg"
import Marek from "../../assets/images/marek-levak-zANXcXyByos-unsplash.jpg"
import Oli from "../../assets/images/oli-dale-xjSkI_seiZY-unsplash.jpg"
import Carlos from "../../assets/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg"
import ProjectItem from "./ProjectItem.jsx";

const Projects = () => {
    return (
        <section className="projects container">
            <h6>Project & Case Studies</h6>
            <h2>Let's Looks Our Global Projects</h2>
            <div className="project-items">

                <ProjectItem image={Adeolu} title="Grow Your business" />
                <ProjectItem image={Marek} title="Why your client needs a responsive website" />
                <ProjectItem image={Oli} title="Educate your employees to get better results" />
                <ProjectItem image={Carlos} title="Business Insights is a important piece of your business" />
            </div>
            <div>
                <a className="button button-black" href="#">All Recent Projects <i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </section>
    )
}

export default Projects