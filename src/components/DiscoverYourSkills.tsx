"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import cardone from '@/app/Assets/card_img.png'
import cardtwo from '@/app/Assets/card_img2.png'
import cardthree from '@/app/Assets/card_img3.png'
import cardfour from '@/app/Assets/card_img4.png'
import cardfive from '@/app/Assets/card_img5.png'
import cardsix from '@/app/Assets/card_img6.png'


const coursesData = [
    {
        id: 1,
        imageSrc: cardone,
        title: "Learn Figma from Basic",
        author: "purepearl studio",
        rating: 4.5,
        level: "Beginner",
        price: "$25",
        period: "lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
    },
    {
        id: 2,
        imageSrc: cardtwo,
        title: "Build Digital Asset",
        author: "purepearl studio",
        rating: 4.5,
        level: "Beginner",
        price: "$25",
        period: "lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
    },
    {
        id: 3,
        imageSrc: cardthree,
        title: "The Power of Big Data",
        author: "purepearl studio",
        rating: 4.5,
        level: "Beginner",
        price: "$25",
        period: "lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
    },
    {
        id: 4,
        imageSrc: cardfour,
        title: "Balancing Productivity and Self-Care",
        author: "purepearl studio",
        rating: 4.5,
        level: "Beginner",
        price: "$25",
        period: "lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
    },
    {
        id: 5,
        imageSrc: cardfive,
        title: "Mastering Money Management",
        author: "purepearl studio",
        rating: 4.5,
        level: "Beginner",
        price: "$25",
        period: "lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
    },
    {
        id: 6,
        imageSrc: cardsix,
        title: "From Idea to Startup Success",
        author: "purepearl studio",
        rating: 4.5,
        level: "Beginner",
        price: "$25",
        period: "lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
    },
];

const categories = [
    "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media",
    "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts",
    "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity",
    "Web Development", "Data Science", "Cooking",
];

const avatars = [
    { src: "https://avatars.githubusercontent.com/u/126257294?v=4", fallback: "SD" },
    { src: "https://avatars.githubusercontent.com/u/132531341?v=4", fallback: "EC" },
    { src: "https://avatars.githubusercontent.com/u/243631677?s=130&v=4", fallback: "CN" },
    { src: "https://avatars.githubusercontent.com/u/188943289?s=130&v=4", fallback: "CN" },
];

export default function DiscoverYourSkills() {
    const [selectedCategory, setSelectedCategory] = useState("Featured");

    return (
        <div className="w-full bg-white pb-20">
            <section className="w-full py-16 px-4 md:px-8 flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 max-w-2xl leading-tight"> Discover Your Passion, <br /> Build Your Skills</h1>

                <p className="mt-4 text-sm md:text-base text-slate-500 max-w-2xl leading-relaxed">
                    At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-2.5 max-w-4xl">
                    {categories.map((category) => {
                        const isSelected = selectedCategory === category;
                        return (
                            <Badge key={category} variant="outline" onClick={() => setSelectedCategory(category)}
                                className={`cursor-pointer px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 border-none ${isSelected
                                    ? "bg-[#ccff00] text-slate-900 hover:bg-[#b8e600]"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                    }`}>
                                {category}
                            </Badge>
                        );
                    })}

                    <button className="px-3 py-2 text-xs md:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                        + More
                    </button>
                </div>
            </section>

            {/* 2. Course Cards Grid Section */}
            <section className="container mx-auto px-4 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coursesData.map((course) => (
                        <Card key={course.id} className="w-[373px] h-[384px] rounded-3xl p-[16px] bg-white border border-slate-200 shadow-sm flex flex-col justify-between select-none">
                            <CardContent className="p-0 flex flex-col h-full justify-between">
                                <div className="relative w-[341px] h-[195px] rounded-2xl overflow-hidden group">
                                    <Image src={course.imageSrc} alt={course.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />

                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-[12px] w-max max-w-[90%]">
                                        <Badge variant="secondary" className="bg-white/70 backdrop-blur-md text-slate-800 text-[10px] font-normal px-2.5 py-1 rounded-full border-none shadow-none">
                                            {course.lessons}
                                        </Badge>
                                        <Badge variant="secondary" className="bg-white/70 backdrop-blur-md text-slate-800 text-[10px] font-normal px-2.5 py-1 rounded-full border-none shadow-none">
                                            {course.duration}
                                        </Badge>
                                        <Badge variant="secondary" className="bg-white/70 backdrop-blur-md text-slate-800 text-[10px] font-normal px-2.5 py-1 rounded-full border-none shadow-none">
                                            {course.comments}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Course Details */}
                                <div className="flex flex-col gap-1 mt-3 px-1">
                                    {/* Title & Rating */}
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-slate-900 text-base line-clamp-1">
                                            {course.title}
                                        </h3>
                                        <div className="flex items-center gap-1 text-slate-400 text-sm font-medium">
                                            <span>{course.rating.toFixed(1)}</span>
                                            <Star className="w-4 h-4 fill-slate-300 text-slate-300" />
                                        </div>
                                    </div>

                                    {/* Author */}
                                    <p className="text-xs text-slate-400 font-normal">
                                        by <span className="text-blue-600 font-medium">{course.author}</span>
                                    </p>

                                    {/* Level & Avatars */}
                                    <div className="flex items-center gap-3 my-1">
                                        <Badge
                                            variant="outline"
                                            className="bg-slate-100 text-slate-600 border-none font-normal text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1.5"
                                        >
                                            <BarChart2 className="w-3.5 h-3.5 text-slate-500" />
                                            {course.level}
                                        </Badge>

                                        {/* Overlapping Avatars */}
                                        <div className="flex items-center -space-x-2">
                                            {avatars.slice(0, 4).map((avatar, index) => (
                                                <Avatar key={index} className="w-6 h-6 border-2 border-white">
                                                    <AvatarImage src={avatar.src} />
                                                    <AvatarFallback className="text-[9px]">
                                                        {avatar.fallback}
                                                    </AvatarFallback>
                                                </Avatar>
                                            ))}
                                            <div className="w-6 h-6 rounded-full bg-[#ccff00] border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-900 z-10">
                                                26+
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-baseline gap-0.5">
                                        <span className="text-lg font-extrabold text-blue-600">
                                            {course.price}
                                        </span>
                                        <span className="text-xs text-slate-400">/{course.period}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}