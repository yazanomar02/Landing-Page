import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Partners from "../components/Partners";
import Courses from "../components/Courses";
import CTA from "../components/CTA";
import Graduated from "../components/Graduated";
import Testimonial from "../components/Testimonial";

function Home() {
    return (
        <div>
            <Hero />
            <Partners />
            <AboutUs />
            <Courses />
            <CTA />
            <Graduated />
            <Testimonial />
        </div>
    );
}

export default Home;