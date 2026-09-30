"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Imports as requested
import Color_spring from "@/app/Assets/Shape_spring.png";
import White_spring from "@/app/Assets/Shape_spring_white.png";
import White_Circle from "@/app/Assets/Shape_ring_white.png";
import Color_cylinder from "@/app/Assets/Shape_cilender.png";
import White_cone from "@/app/Assets/Shapte_Cone.png";

export default function CreatorBanner() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 overflow-hidden flex flex-col unic_background items-center justify-center text-center">
      
      
      {/* Top Left: Lime Spring Shape */}
      <div className="absolute -top-6 -left-8 w-36 sm:w-48 md:w-60 pointer-events-none select-none z-10">
        <Image  src={Color_spring}  alt="Color Spring"  width={240}  height={240}  className="object-contain"  priority/>
      </div>

      {/* Top Left-Center: White Spring Shape */}
      <div className="absolute top-4 left-[15%] w-20 sm:w-28 md:w-36 pointer-events-none select-none z-10">
        <Image src={White_spring} alt="White Spring" width={150} height={150} className="object-contain"/>
      </div>

      {/* Bottom Left: White Cone Shape */}
      <div className="absolute -bottom-4 left-0 w-24 sm:w-32 md:w-40 pointer-events-none select-none z-10">
        <Image  src={White_cone}  alt="White Cone"  width={160}  height={160}  className="object-contain"/>
      </div>

      {/* Bottom Left-Center: Lime Ring Shape */}
      <div className="absolute -bottom-12 left-[8%] w-44 sm:w-56 md:w-72 pointer-events-none select-none z-10">
        <Image src={White_Circle} alt="Lime Ring Shape" width={280} height={280} className="object-contain"/>
      </div>

      {/* Top Right: Yellow Cone/Pyramid Shape */}
      <div className="absolute top-4 right-[16%] w-24 sm:w-32 md:w-40 pointer-events-none select-none z-10">
        <Image src={Color_cylinder} alt="Yellow Pyramid Shape" width={160} height={160} className="object-contain"
        />
      </div>

      {/* Top Right Corner: White Cylinder/Pill Shape */}
      <div className="absolute -top-8 -right-8 w-40 sm:w-56 md:w-72 pointer-events-none select-none z-10">
        <Image
          src={White_cone}
          alt="White Pill Shape"
          width={280}
          height={280}
          className="object-contain rotate-12"
        />
      </div>

      {/* Bottom Right: Lime Spring Shape */}
      <div className="absolute -bottom-10 -right-6 w-36 sm:w-48 md:w-60 pointer-events-none select-none z-10">
        <Image
          src={Color_spring}
          alt="Color Spring Bottom"
          width={240}
          height={240}
          className="object-contain -rotate-45"
        />
      </div>

      {/* Central Content */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center gap-6 my-6">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        {/* Subtitle */}
        <p className="text-white/80 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        {/* Action Button */}
        <div className="mt-2">
          <Link href="/join-creator">
            <Button className="bg-[#d4fb20] hover:bg-[#b8e600] text-slate-900 font-semibold px-8 py-6 rounded-full text-sm transition-transform active:scale-95 shadow-md">
              Join as Creator
            </Button>
          </Link>
        </div>
      </div>

    </section>
  );
}