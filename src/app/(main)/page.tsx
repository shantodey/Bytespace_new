import Hero from "@/components/Hero";
import Navber from "@/components/Navber";


const page = () => {
    return (
        <>
            <header className="unic_background" >
                <Navber />
                <Hero/>
            </header>
        </>
    );
};

export default page;