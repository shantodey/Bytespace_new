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
        <section className="relative w-full text-white pt-12 pb-0 overflow-hidden flex flex-col items-center justify-between">
            {/* --- TOP HEADING SECTION --- */}
            <div className="text-center max-w-3xl mx-auto px-4 z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                    Get Access to Hundreds <br className="hidden sm:inline" />
                    Courses Available
                </h1>
                <p className="mt-4 text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-light">
                    Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                </p>

                {/* SEARCH INPUT FIELD */}
                <div className="mt-8 flex items-center bg-white rounded-full p-1.5 max-w-md mx-auto shadow-lg">
                    <div className="flex items-center pl-3 pr-2 text-gray-400 w-full">
                        <Search className="w-5 h-5 mr-2 shrink-0" />
                        <Input
                            type="search"
                            placeholder="Course, topic, creator"
                            className="border-none shadow-none focus-visible:ring-0 text-gray-800 placeholder:text-gray-400 text-sm h-9 p-0 bg-transparent"
                        />
                    </div>
                    <Button className="bg-[#CBFC01] hover:bg-[#bbf000] text-black font-semibold rounded-full px-6 h-10 transition-colors">
                        Search
                    </Button>
                </div>
            </div>

            {/* --- MIDDLE & BOTTOM GRAPHICS / SHAPES SECTION --- */}
            <div className="relative w-full max-w-5xl mt-12 flex justify-center items-end min-h-[420px] sm:min-h-[500px]">

                {/* 1. CSS HALF CIRCLE (GREEN/LIME BACKGROUND) */}
                <div className="absolute bottom-0 w-[320px] h-[160px] sm:w-[550px] sm:h-[275px] md:w-[650px] md:h-[325px] bg-[#CBFC01] rounded-t-full z-0 transform translate-y-2 sm:translate-y-4" />
                <div className="relative z-10 w-[280px] sm:w-[420px] md:w-[480px] h-[350px] sm:h-[480px] md:h-[520px]">
                    <Image src={heroImg} alt="Student with laptop" fill priority className="object-contain object-bottom" />
                </div>

                {/* --- 3D FLOATING DECORATION SHAPES (NEXT/IMAGE) --- */}
                {/* Top Left Lime Spiral */}
                <div className="absolute left-0 top-0 sm:left-4 sm:top-2 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 z-0">
                    <Image src={Color_spring} alt="Shape" fill className="object-contain" />
                </div>

                {/* Middle Left White Zigzag */}
                <div className="absolute left-6 sm:left-16 top-1/3 w-12 sm:w-20 h-12 sm:h-20 z-0">
                    <Image src={White_spring} alt="Shape" fill className="object-contain" />
                </div>

                {/* Bottom Left Donut / Ring */}
                <div className="absolute left-2 sm:left-8 bottom-4 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 z-0">
                    <Image src={White_Circle} alt="Shape" fill className="object-contain" />
                </div>

                {/* Top Right Cylinder */}
                <div className="absolute right-0 top-0 sm:right-4 sm:top-2 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 z-0">
                    <Image src={Color_cylinder} alt="Shape" fill className="object-contain" />
                </div>

                {/* Middle Right Cone/Pyramid */}
                <div className="absolute right-12 sm:right-24 top-1/4 w-16 sm:w-24 h-16 sm:h-24 z-0">
                    <Image src={White_cone} alt="Shape" fill className="object-contain" />
                </div>

                {/* Bottom Right White Spring */}
                <div className="absolute right-2 sm:right-8 bottom-4 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 z-0">
                    <Image src={White_spring} alt="Shape" fill className="object-contain" />
                </div>


                {/* --- CSS CREATED OVERLAY CARDS (NOT IMAGES) --- */}

                {/* Card 1: UI/UX Design (Left) */}
                <div className="absolute left-4 sm:left-12 md:left-24 top-1/3 sm:top-2/5 z-20 bg-white text-black rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100 hidden sm:block">
                    <h4 className="font-bold text-xs sm:text-sm text-gray-900">UI/UX Design</h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">200 Courses • 1000+ Students</p>
                </div>

                {/* Card 2: Happy Students (Bottom Left) */}
                <div className="absolute left-6 sm:left-16 md:left-28 bottom-8 sm:bottom-12 z-20 bg-white text-black rounded-2xl p-3 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-xs sm:text-sm text-gray-900">Happy Students</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                        <span className="text-[11px] font-semibold text-gray-600">4.5</span>
                        <span className="text-[10px] text-gray-400">(240)</span>
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 ml-0.5" />
                    </div>

                    {/* Avatar Group */}
                    <div className="flex items-center -space-x-2 mt-2">
                        <AvatarGroup>
                            {avatars.map(({ src, fallback }) => (
                                <Avatar key={src}>
                                    <AvatarImage src={src} alt={fallback} />
                                    <AvatarFallback>{fallback}</AvatarFallback>
                                </Avatar>
                            ))}
                            <AvatarGroupCount>+2k</AvatarGroupCount>
                        </AvatarGroup>
                    </div>
                </div>

                {/* Card 3: Learning Progress (Right) */}
                <div className="absolute right-4 sm:right-12 md:left-[60%] top-1/3 sm:top-2/5 z-20 bg-white text-black rounded-2xl p-4 shadow-xl border border-gray-100 min-w-[150px] sm:min-w-[190px]">
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-600">Learning Progress</p>
                    <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">55%</p>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-100 h-2 rounded-full mt-3 overflow-hidden">
                        <div className="bg-[#CBFC01] h-full w-[55%] rounded-full" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
