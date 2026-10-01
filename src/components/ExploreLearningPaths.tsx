"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { PenTool, Code2, Laptop, Building2, Megaphone, Camera, } from "lucide-react";

const LEARNING_PATHS = [
  { id: 1, title: "Design", href: "/category/design", icon: PenTool, },
  { id: 2, title: "Development", href: "/category/development", icon: Code2, },
  { id: 3, title: "IT & Software", href: "/category/it-software", icon: Laptop, },
  { id: 4, title: "Business", href: "/category/business", icon: Building2, },
  { id: 5, title: "Marketing", href: "/category/marketing", icon: Megaphone, },
  { id: 6, title: "Photography", href: "/category/photography", icon: Camera, },
];

export default function ExploreLearningPaths() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 flex flex-col items-center justify-center text-center">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl titles__font font-semibold tracking-tight text-slate-900 leading-tight">
          Explore Diverse Learning Paths at Bytespace
        </h2>

        <p className="secendery__font mt-4 text-lg md:text-base text-slate-500 max-w-4xl leading-relaxed">
          At Bytespace, we believe in empowering individuals through knowledge. Our
          diverse range of courses spans various fields, ensuring there's
          something for everyone. Unleash your potential and explore our carefully
          curated categories.
        </p>

        {/* Cards Container with 40px gap */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
          {LEARNING_PATHS.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.id} href={item.href} className="w-full sm:w-auto flex justify-center">
                <Card className="w-full sm:w-[167px] h-40 sm:h-41.75 rounded-2xl bg-white border border-slate-200/80 shadow-none hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center p-4 sm:p-0 cursor-pointer group">
                  <CardContent className="p-0 flex flex-col items-center justify-center gap-3 text-center">
                    <div className="w-12 h-12 rounded-full primery_colour flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5 text-slate-900 stroke-[2.2]" />
                    </div>

                    {/* Category Title */}
                    <span className="secendery__font text-base sm:text-xl font-medium text-slate-800 group-hover:text-slate-950">
                      {item.title}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}