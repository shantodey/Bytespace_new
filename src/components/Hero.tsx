import Image from "next/image"
import { Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import heroImg from '@/app/Assets/Hero_main_img.png'
import Color_spring from '@/app/Assets/Shape_spring.png'
import White_spring from '@/app/Assets/Shape_spring_white.png'
import White_Circle from '@/app/Assets/Shape_ring_white.png'

import Color_cylinder from '@/app/Assets/Shape_cilender.png'
import White_cone from '@/app/Assets/Shapte_Cone.png'
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "./ui/avatar"

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


const shapes = [
    { src: Color_spring,   cls: '-left-20 top-30 size-92' },       
    { src: White_spring,   cls: 'left-60 top-99 size-43.75' },      
    { src: White_Circle,   cls: 'left-60 -bottom-1 size-85.5' },   
    { src: Color_cylinder, cls: '-right-20 top-16 size-92.5' },     
    { src: White_cone,     cls: 'right-35 top-87.5 size-47' },     
    { src: White_spring,   cls: 'right-60 bottom-12 size-82.5' },  
];

const Hero = () => {
    return (
        <section className="relative w-full text-white pt-16 md:pt-24 pb-0 overflow-hidden flex flex-col items-center justify-between">

            {shapes.map(({ src, cls }, i) => (
                <div key={i} className={`hidden min-[1400px]:block absolute z-10 pointer-events-none ${cls}`}>
                    <Image src={src} alt="" fill className="object-contain" />
                </div>
            ))}

            {/* Lime circle: scaled from its bottom edge together with the stage below */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-360 origin-bottom scale-60 md:scale-70 lg:scale-100 z-0">
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-[749px] w-[1175px] h-[1175px] rounded-full bg-[#CBFC01]" />
            </div>

            <div className="text-center container mx-auto px-4 z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight titles__font leading-tight">
                    Get Access to Hundreds <br className="hidden sm:inline" />
                    Courses Available
                </h1>
                <p className="pt-4 md:pt-8 text-sm sm:text-base secendery__font text-white max-w-xl mx-auto font-light">
                    Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                </p>

                <div className="mt-8 md:mt-14 flex items-center bg-white rounded-full p-1.5 max-w-md mx-auto shadow-lg">
                    <div className="flex items-center pl-3 pr-2 text-gray-400 w-full">
                        <Search className="w-5 h-5 mr-2 shrink-0" />
                        <Input type="search" placeholder="Course, topic, creator"
                            className="border-none shadow-none focus-visible:ring-0 text-gray-800 placeholder:text-gray-400 text-sm h-9 p-0 bg-transparent" />
                    </div>
                    <Button className="bg-[#CBFC01] secendery__font hover:bg-[#bbf000] text-black font-semibold rounded-full px-6 h-10 transition-colors">
                        Search
                    </Button>
                </div>
            </div>


            <div className="relative w-256 shrink-0 h-125 origin-bottom scale-60 md:scale-70 lg:scale-100 -mt-50 md:-mt-37.5 lg:mt-0">

                <Image src={heroImg} alt="Student with laptop" width={577} height={540} priority
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 max-w-none" />

                {/* UI/UX Design */}
                <div className="hidden md:block absolute left-[202px] bottom-[308px] z-20 bg-white text-black rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100">
                    <h4 className="font-bold text-xs sm:text-sm text-gray-900 secendery__font">UI/UX Design</h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 secendery__font">200 Courses • 1000+ Students</p>
                </div>

                {/* Happy Students */}
                <div className="hidden md:block absolute left-[132px] bottom-[82px] z-20 bg-white text-black rounded-2xl p-3 shadow-xl border border-gray-100">
                    <span className="block font-bold text-xs sm:text-sm text-gray-900 secendery__font">Happy Students</span>
                    <div className="flex items-center gap-1 mt-1">
                        <span className="text-[11px] font-semibold text-gray-600 secendery__font">4.5</span>
                        <span className="text-[10px] text-gray-400 secendery__font">(240)</span>
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 ml-0.5" />
                    </div>
                    <AvatarGroup className="mt-2">
                        {avatars.map(({ src, fallback }) => (
                            <Avatar key={src}>
                                <AvatarImage src={src} alt={fallback} />
                                <AvatarFallback>{fallback}</AvatarFallback>
                            </Avatar>
                        ))}
                        <AvatarGroupCount className="secendery__font">+2k</AvatarGroupCount>
                    </AvatarGroup>
                </div>


                <div className="hidden md:block absolute left-[644px] bottom-[235px] z-20 bg-white text-black rounded-2xl p-4 shadow-xl border border-gray-100 h-[131px] w-[232px]">
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-600 secendery__font">Learning Progress</p>
                    <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1 titles__font">55%</p>
                    <div className="w-full bg-gray-100 h-2 rounded-full mt-3 overflow-hidden">
                        <div className="bg-[#CBFC01] h-full w-[55%] rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero