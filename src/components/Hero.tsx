import Image from "next/image";
import { Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import heroImg from "@/app/Assets/Hero_main_img.png";
import Color_spring from "@/app/Assets/Shape_spring.png";
import White_spring from "@/app/Assets/Shape_spring_white.png";
import White_Circle from "@/app/Assets/Shape_ring_white.png";
import Color_cylinder from "@/app/Assets/Shape_cilender.png";
import White_cone from "@/app/Assets/Shapte_Cone.png";
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "./ui/avatar";

const Hero = () => {
    const avatars = [
        { src: "https://avatars.githubusercontent.com/u/126257294?v=4", fallback: "SD" },
        { src: "https://avatars.githubusercontent.com/u/132531341?v=4", fallback: "EC" },
        { src: "https://avatars.githubusercontent.com/u/243631677?s=130&v=4", fallback: "CN" },
        { src: "https://avatars.githubusercontent.com/u/188943289?s=130&v=4", fallback: "CN" },
        { src: "https://avatars.githubusercontent.com/u/109307621?s=130&v=4", fallback: "CN" },
        { src: "https://github.com/shadcn.png", fallback: "CN" },
        { src: "https://github.com/maxleiter.png", fallback: "LR" },
        { src: "https://github.com/evilrabbit.png", fallback: "ER" },
    ];

    return (
        <section className="relative w-full text-white min-h-screen lg:h-screen lg:max-h-screen pt-16 sm:pt-20 md:pt-24 pb-0 overflow-hidden ">

            {/* Top Left Lime Spiral */}
            <div className="hidden lg:block pointer-events-none select-none absolute left-[clamp(-112px,-8vw,-48px)] top-[10%] sm:top-[12%] md:top-[14%] lg:top-[14%] z-0">
                <Image src={Color_spring} height={380} width={380} alt="Lime spiral shape" className="object-contain w-[clamp(110px,24vw,320px)] -rotate-12" priority />
            </div>

            {/* Middle Left Small White Spring */}
            <div className="hidden lg:block pointer-events-none select-none absolute left-[clamp(-8px,10vw,30%)] top-[39%] sm:top-[40%] md:top-[42%] lg:top-[46%] z-40">
                <Image src={White_spring} alt="White spring shape" height={175} width={175} className="object-contain w-[clamp(70px,13vw,175px)] h-auto" />
            </div>

            {/* Bottom Left White Donut / Torus */}
            <div className="hidden lg:block pointer-events-none select-none absolute left-[clamp(-48px,30vw,19%)] bottom-[2%] sm:bottom-[3%] md:bottom-[4%] lg:bottom-[4%] z-40">
                <Image src={White_Circle} alt="White ring shape" height={300} width={300} className="object-contain w-[clamp(90px,18vw,240px)] h-auto rotate-15" />
            </div>

            {/* Top Right Lime Cylinder */}
            <div className="hidden lg:block pointer-events-none select-none absolute right-[clamp(-42px,-1vw,-8px)] top-[7%] sm:top-[10%] md:top-[12%] lg:top-[12%] z-20">
                <Image src={Color_cylinder} alt="Lime cylinder shape" height={260} width={260} className="object-contain w-[clamp(75px,16vw,200px)] h-auto rotate-10" priority />
            </div>

            {/* Middle Right White Cone */}
            <div className="hidden lg:block pointer-events-none select-none absolute right-[clamp(-4px,10vw,30%)] top-[39%] sm:top-[36%] md:top-[38%] lg:top-[50%] z-40">
                <Image src={White_cone} alt="White cone shape" height={160} width={160} className="object-contain w-[clamp(65px,11vw,160px)] h-auto" />
            </div>

            {/* Bottom Right Large White Spring */}
            <div className="hidden lg:block pointer-events-none select-none absolute right-[clamp(-32px,18vw,50%)] bottom-[2%] sm:bottom-[3%] md:bottom-[4%] lg:bottom-[4%] rotate-150 z-20">
                <Image src={White_spring} alt="White spring shape" height={330} width={330} className="object-contain w-[clamp(80px,17vw,230px)] h-auto rotate-25" />
            </div>

            {/* Top Heading & Search Section */}
            <div className="text-center container mx-auto  px-4 z-10 flex-1 flex flex-col justify-start lg:justify-between items-center w-full">

                <div className="w-full">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight titles__font leading-[1.12] text-white drop-shadow-sm">
                        Get Access to Hundreds <br />
                        Courses Available
                    </h1>

                    <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-blue-100/90 font-light max-w-2xl mx-auto px-2">
                        Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                    </p>

                    {/* Search Bar */}
                    <div className="mt-4 sm:mt-5 flex items-center bg-white rounded-full p-1.5 sm:p-2 w-full max-w-85 sm:max-w-md md:max-w-lg mx-auto shadow-2xl">
                        <div className="flex items-center pl-3 sm:pl-4 pr-2 text-gray-400 w-full min-w-0">
                            <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0 text-gray-400" />

                            <Input    type="search"    placeholder="Course, topic, creator"    className="border-none shadow-none focus-visible:ring-0 text-gray-800 placeholder:text-gray-400 text-xs sm:text-sm h-8 sm:h-9 p-0 bg-transparent min-w-0"
                            />
                        </div>

                        <Button className="bg-[#CBFC01] hover:bg-[#bbf000] text-black font-semibold rounded-full px-4 sm:px-7 h-8 sm:h-10 text-xs sm:text-sm transition-colors shrink-0 shadow-sm cursor-pointer">
                            Search
                        </Button>
                    </div>
                </div>

                {/* Hero Image Area */}
                <div className="relative mt-4 sm:mt-6 md:mt-8 lg:mt-1 flex justify-center items-end w-full min-h-[clamp(280px,45vw,520px)]">

                    {/* Lime Arch */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[clamp(260px,60%,900px)] aspect-2/1 bg-[#CBFC01] rounded-[50%_50%_0_0_/_100%_100%_0_0] z-0 pointer-events-none " />

                    {/* Central Hero Person Image */}
                    <div className="relative z-10 w-[clamp(260px,55vw,700px)] aspect-700/620 flex items-end justify-center pointer-events-none">
                        <Image src={heroImg} alt="Student with laptop" fill priority className="object-contain object-bottom select-none" />
                    </div>

                    {/* Floating Overlay Cards */}

                    {/* Card 1: UI/UX Design */}
                    <div className="absolute left-[0%] sm:left-[5%] md:left-[7%] lg:left-[25%] top-[34%] sm:top-[26%] md:top-[40%] lg:top-[40%] z-20 bg-white text-black rounded-xl sm:rounded-2xl p-2 sm:p-3.5 shadow-xl border border-gray-100 text-left">
                        <h4 className="font-bold text-[10px] sm:text-sm text-gray-900 tracking-tight">UI/UX Design</h4>
                        <p className="text-[8px] sm:text-xs text-gray-400 mt-0.5 whitespace-nowrap">200 Courses • 1000+ Students</p>
                    </div>

                    {/* Card 2: Learning Progress */}
                    <div className="absolute right-[0%] sm:right-[5%] md:right-[7%] lg:right-[30%] top-[29%] sm:top-[28%] md:top-[30%] lg:top-[30%] z-20 bg-white text-black rounded-xl sm:rounded-2xl p-2 sm:p-3.5 shadow-xl border border-gray-100 min-w-26.25 sm:min-w-37.5 md:min-w-45 text-left">
                        <p className="text-[8px] sm:text-xs font-semibold text-gray-500">Learning Progress</p>

                        <p className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-gray-900 mt-0.5 titles__font">
                            55%
                        </p>

                        <div className="w-full bg-gray-100 h-1 sm:h-2 rounded-full mt-1.5 sm:mt-2.5 overflow-hidden">
                            <div className="bg-[#CBFC01] h-full w-[55%] rounded-full" />
                        </div>
                    </div>

                    {/* Card 3: Happy Students */}
                    <div className="absolute left-[0%] sm:left-[3%] md:left-[5%] lg:left-[25%] bottom-[4%] sm:bottom-[7%] md:bottom-[8%] lg:bottom-[8%] z-20 bg-white text-black rounded-xl sm:rounded-2xl p-1.5 sm:p-3 shadow-xl border border-gray-100 text-left">
                        <div className="flex items-center gap-1 sm:gap-1.5">
                            <span className="font-bold text-[10px] sm:text-sm text-gray-900">Happy Students</span>
                            <span className="text-[9px] sm:text-[11px] font-semibold text-gray-600 ml-0.5 sm:ml-1">4.5</span>
                            <span className="text-[8px] sm:text-[10px] text-gray-400">(240)</span>
                            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-yellow-400 text-yellow-400 ml-0.5" />
                        </div>

                        {/* Avatar Group */}
                        <div className="flex items-center -space-x-1.5 sm:-space-x-2 mt-1.5 sm:mt-2">
                            <AvatarGroup>
                                {avatars.slice(0, 5).map(({ src, fallback }) => (
                                    <Avatar key={src} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 border border-white sm:border-2">
                                        <AvatarImage src={src} alt={fallback} />
                                        <AvatarFallback>{fallback}</AvatarFallback>
                                    </Avatar>
                                ))}

                                <AvatarGroupCount className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[9px] sm:text-xs bg-[#CBFC01] text-black font-bold border border-white sm:border-2">
                                    2K+
                                </AvatarGroupCount>
                            </AvatarGroup>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;