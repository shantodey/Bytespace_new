"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Color_spring from "@/app/Assets/Shape_spring.png";
import _spring from "@/app/Assets/3dShape_spring.png";
import White_spring from "@/app/Assets/Shape_spring_white.png";
import White_Circle from "@/app/Assets/Shape_ring.png";
import Color_cylinder from "@/app/Assets/Shape_cilender.png";
import White_cone from "@/app/Assets/Shapte_Cone_colour.png";

export default function CreatorBanner() {
  return (
    <section className="relative w-full py-16 sm:py-20 px-5 sm:px-8 md:px-12 overflow-hidden flex flex-col unic_background items-center justify-center text-center">

      {/* Top Left: Color Spring */}
      <div className="absolute -top-16 -left-16 sm:-top-20 sm:-left-20 md:-top-24 md:-left-24 lg:-top-27 lg:-left-27 pointer-events-none select-none z-10">
        <Image src={Color_spring} alt="Color Spring" width={385} height={385} className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[385px] lg:h-[385px] object-contain" priority />
      </div>

      {/* Top Left: White Spring */}
      <div className="absolute top-12 left-[3%] sm:top-16 sm:left-[6%] md:top-20 md:left-[9%] lg:left-[11%] pointer-events-none select-none z-10">
        <Image src={White_spring} alt="White Spring" width={175} height={175} className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-[175px] lg:h-[175px] object-contain" />
      </div>

      {/* Bottom Left: White Cone */}
      <div className="absolute bottom-10 -left-8 sm:bottom-14 sm:-left-6 md:bottom-16 md:-left-4 lg:bottom-20 lg:-left-10 rotate-90 pointer-events-none select-none z-10">
        <Image src={White_cone} alt="White Cone" width={188} height={188} className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-[188px] lg:h-[188px] object-contain" />
      </div>

      {/* Bottom Left-Center: Lime Ring Shape */}
      <div className="absolute -bottom-16 left-[2%] sm:-bottom-20 sm:left-[5%] md:-bottom-24 md:left-[7%] lg:-bottom-30 lg:left-[8%] pointer-events-none select-none z-10">
        <Image src={White_Circle} alt="Lime Ring Shape" width={280} height={280} className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-[280px] lg:h-[280px] object-contain" />
      </div>

      {/* Top Right: Yellow Cylinder */}
      <div className="absolute top-[clamp(8px,1vw,16px)] right-[clamp(-35px,-2.2vw,0px)] pointer-events-none select-none z-10">
        <Image src={Color_cylinder} alt="Yellow Pyramid Shape" width={160} height={160} className="w-[clamp(96px,11vw,160px)] h-[clamp(96px,11vw,160px)] object-contain" />
      </div>

      {/* Top Right: White Cone */}
      <div className="absolute top-[clamp(8px,1vw,32px)] right-[clamp(16px,10vw,188px)] pointer-events-none select-none z-10">
        <Image src={White_cone} alt="White Pill Shape" width={188} height={188} className="w-[clamp(100px,13vw,188px)] h-[clamp(100px,13vw,188px)] object-contain rotate-12" />
      </div>

      {/* Bottom Right: Lime Spring */}
      <div className="absolute bottom-[clamp(-66px,-5vw,0px)] right-[clamp(-24px,-1vw,-6px)] rotate-45 pointer-events-none select-none z-10">
        <Image src={_spring} alt="Color Spring Bottom" width={330} height={330} className="w-[clamp(180px,24vw,330px)] h-[clamp(180px,24vw,330px)] object-contain -rotate-45" />
      </div>

      {/* Central Content */}
      <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center gap-5 sm:gap-6 my-6">

        <h2 className="titles__font text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
          Unlock Your Potential as a <br className="hidden sm:inline" />  Creator with ByteSpace</h2>
        <p className="max-w-3xl text-white/80 secendery__font text-base sm:text-lg font-light leading-relaxed">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <div className="mt-1 sm:mt-2">
          <Link href="/">
            <Button className="bg-[#d4fb20] secendery__font font-normal hover:bg-[#b8e600] text-slate-900 text-base sm:text-lg px-7 sm:px-8 py-5 sm:py-6 rounded-full transition-transform active:scale-95 shadow-md">
              Join as Creator
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}