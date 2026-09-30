import CoursesShowcase from "@/components/CoursesShowcase";
import CreatorBanner from "@/components/CreatorBanner";
import DiscoverYourSkills from "@/components/DiscoverYourSkills";
import ExploreLearningPaths from "@/components/ExploreLearningPaths";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navber from "@/components/Navber";
import Sponsors from "@/components/Sponsors";
import Testimonials from "@/components/Testimonials";


const page = () => {
    return (
        <>
            <header className="unic_background" >
                <Navber />
                <Hero />
            </header>
            <main>
                <Sponsors />
                <DiscoverYourSkills />
                <ExploreLearningPaths />
                <CoursesShowcase />
                <CreatorBanner />
                <Testimonials />
            </main>

            <Footer />

        </>
    );
};

export default page;