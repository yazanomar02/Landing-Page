import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Partners from "./Partners";
import Courses from "./Courses";
import CTA from "./CTA";
import Graduated from "./Graduated";
import Testimonial from "./Testimonial";

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