import Hero from "@/components/Hero";
import Navber from "@/components/Navber";
import Sponsors from "@/components/Sponsors";


const page = () => {
    return (
        <>
            <header className="unic_background" >
                <Navber />
                <Hero/>
            </header>
            <main>
                <Sponsors/>
            </main>
        </>
    );
};

export default page;