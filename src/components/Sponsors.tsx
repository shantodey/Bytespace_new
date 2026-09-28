import Image from 'next/image';

import BrandLogo1 from '@/app/Assets/Brand_logo.png';
import BrandLogo2 from '@/app/Assets/Brand_logo2.png';
import BrandLogo3 from '@/app/Assets/Brand_logo3.png';
import BrandLogo4 from '@/app/Assets/Brand_logo4.png';
import BrandLogo5 from '@/app/Assets/Brand_logo5.png';


const sponsorsList = [
    { id: 1, name: "Brand 1", src: BrandLogo1 },
    { id: 2, name: "Brand 2", src: BrandLogo2 },
    { id: 3, name: "Brand 3", src: BrandLogo3 },
    { id: 4, name: "Brand 4", src: BrandLogo4 },
    { id: 5, name: "Brand 5", src: BrandLogo5 },
];

const Sponsors = () => {
    return (
        <section className="w-full bg-[#f5f5f6] px-10 md:py-14">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-20">
                    {sponsorsList.map((sponsor) => (
                        <div key={sponsor.id} className="relative h-8 w-28 sm:h-10 sm:w-36 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                            <Image src={sponsor.src} alt={sponsor.name} fill className="object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;