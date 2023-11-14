import Hero from "../components/home/Hero.jsx";
import Organizations from "../components/home/Organizations.jsx";
import Features from "../components/home/Features.jsx";
import Company from "../components/home/Company.jsx";
import Services from "../components/home/Services.jsx";
import ChooseUs from "../components/home/ChooseUs.jsx";
import Projects from "../components/home/Projects.jsx";
import Team from "../components/home/Team.jsx";
import News from "../components/News.jsx";
import Subscribe from "../components/Subscribe.jsx";

const Home = () => {
    return (
        <main>
            <Hero />
            <Organizations />
            <Features />
            <Company />
            <Services />
            <ChooseUs />
            <Projects />
            <Team />
            <News />
            <Subscribe />
        </main>
    )
}

export default Home