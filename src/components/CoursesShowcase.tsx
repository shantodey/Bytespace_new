import Image from "next/image";
import { Star, CheckCircle2, Signal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar";

import boyImg from "@/app/Assets/Hero_main_img.png";
import girlImg from "@/app/Assets/Hero_secend_img.png";
import Color_spring from "@/app/Assets/Shape_spring.png";
import cardone from "@/app/Assets/card_img.png";

const course = {
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
};

const avatars = [
  { src: "https://avatars.githubusercontent.com/u/126257294?v=4", fallback: "SD", },
  { src: "https://avatars.githubusercontent.com/u/132531341?v=4", fallback: "EC", },
  { src: "https://avatars.githubusercontent.com/u/243631677?s=130&v=4", fallback: "CN", },
  { src: "https://avatars.githubusercontent.com/u/188943289?s=130&v=4", fallback: "CN", },
  { src: "https://avatars.githubusercontent.com/u/109307621?s=130&v=4", fallback: "CN", },
  { src: "https://github.com/shadcn.png", fallback: "CN", },
  { src: "https://github.com/maxleiter.png", fallback: "LR", },
  { src: "https://github.com/evilrabbit.png", fallback: "ER", },
];

const stats = [
  ["12K", "Students"],
  ["70+", "Courses"],
  ["16", "Creators"],
];

const perks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const bg = [
  "radial-gradient(700px circle at 20% 0%, rgba(190,255,0,.45), transparent 70%)",
  "radial-gradient(700px circle at 0% 100%, rgba(190,255,0,.5), transparent 70%)",
  "radial-gradient(650px circle at 100% 55%, rgba(120,140,255,.3), transparent 70%)",
  "radial-gradient(600px circle at 95% 100%, rgba(120,140,255,.35), transparent 70%)",
  "radial-gradient(450px circle at 0% 45%, rgba(150,180,255,.25), transparent 70%)",
  "#fff",
].join(",");

const CourseCard = () => (
  <Card className="  w-[clamp(270px,65%,373px)]  aspect-378/384  rounded-[clamp(1rem,2vw,1.5rem)]  p-[clamp(.65rem,1.5vw,1rem)]  bg-white  border border-slate-200  shadow-sm  flex flex-col  select-none">
    <CardContent className="p-0 flex flex-col h-full gap-2 sm:gap-3">
      <div className="relative w-full aspect-341/195 rounded-xl sm:rounded-2xl overflow-hidden group shrink-0">
        <Image src={course.imageSrc} alt={course.title} fill sizes="(max-width: 640px) 75vw, (max-width: 1024px) 40vw, 373px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>

      <div className="flex flex-col gap-1 px-0.5 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-slate-900 text-[clamp(.85rem,2vw,1.25rem)] leading-tight truncate">
            {course.title}
          </h3>

          <div className="flex items-center gap-0.5 text-slate-400 text-xs sm:text-sm font-medium shrink-0">
            <span>{course.rating.toFixed(1)}</span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-slate-300 text-slate-300" />
          </div>
        </div>

        <p className="text-[clamp(.6rem,1.2vw,.75rem)] text-slate-400 secendery__font truncate">
          by{" "}<span className="text-blue-600">  {course.author}</span>
        </p>

        <div className="flex items-center gap-2 sm:gap-3 my-0.5 sm:my-1">
          <Badge
            variant="outline"
            className="
              bg-slate-100
              font-medium
              text-slate-600
              border-none
              secendery__font
              text-[clamp(.6rem,1.1vw,.75rem)]
              px-2 sm:px-2.5
              py-0.5
              rounded-full
              flex items-center
              gap-1
              shrink-0
            "
          >
            <Signal className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500" />
            {course.level}
          </Badge>

          <div className="flex items-center -space-x-2 min-w-0">
            {avatars.slice(0, 2).map((avatar, index) => (
              <Avatar
                key={index}
                className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white"
              >
                <AvatarImage src={avatar.src} />
                <AvatarFallback className="text-[8px] sm:text-[9px]">
                  {avatar.fallback}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>

        <div className="flex items-baseline gap-0.5">
          <span className="titles__font font-semibold text-[clamp(1rem,2.4vw,1.25rem)] text-blue-600">  {course.price}</span>
          <span className="secendery__font text-[clamp(.55rem,1vw,.75rem)] text-slate-400">  /{course.period} </span>
        </div>
      </div>
    </CardContent>
  </Card>
);

const FirstVisual = () => (
  <div className="relative w-full max-w-144.25 mx-auto aspect-577/540">
    <div className="absolute inset-0 pointer-events-none">
      <Image src={boyImg} alt="Student with laptop" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 577px, 577px" className="object-contain z-20" />
    </div>

    <div className="absolute left-0 top-[1%] z-10">
      <CourseCard />
    </div>

    <Image src={Color_spring} alt="" width={216} height={216} className="  absolute  z-23  top-[10%]  right-[3%]  w-[clamp(100px,37%,216px)]  h-auto  rotate-125" />

    <div className="  absolute  z-30  left-[58%]  top-[39%]  w-[clamp(155px,38%,220px)]  rounded-xl sm:rounded-2xl  bg-white  p-3 sm:p-4  shadow-lg">
      <p className="text-[clamp(.65rem,1.4vw,.875rem)] text-slate-500">  Learning Progress</p>
      <p className="text-[clamp(1.75rem,4vw,3rem)] leading-none font-bold text-slate-900 mt-1">  55%</p>
      <div className="mt-2 h-1.5 sm:h-2 rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full w-[55%] rounded-full primery_colour" />
      </div>
    </div>
  </div>
);

const SecondVisual = () => (
  <div className="relative w-full max-w-135 mx-auto aspect-540/596">
    <Image src={girlImg} alt="Instructor with tablet" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 540px, 540px" className=" absolute  z-20 object-contain object-[center_top]" />

    <Image src={Color_spring} alt="" width={216} height={216} className="  absolute  top-[12%]  right-[3%]  z-30  w-[clamp(100px,40%,216px)]  h-auto" />

    <div className="  absolute  top-[7%]  left-0  z-10  w-[clamp(175px,43%,232px)]  rounded-xl sm:rounded-2xl  bg-blue-700  p-3 sm:p-4   text-white">
      <p className="text-[clamp(.75rem,1.6vw,1rem)] font-medium secendery__font">Total Revenue</p>

      <p className="text-[clamp(.55rem,1.1vw,.75rem)] opacity-70 secendery__font">July 1-28</p>

      <p className="titles__font text-[clamp(1.1rem,2.5vw,1.5rem)] font-semibold pt-1 sm:pt-2"> $120.29</p>

      <div className="mt-2 h-1.5 sm:h-2 rounded-full bg-white/20 overflow-hidden">
        <div className="h-full w-3/4 rounded-full primery_colour" />
      </div>
    </div>

    <div className="  absolute  top-[30%]  left-0  z-10  w-[clamp(120px,25%,135px)]  aspect-square  rounded-xl sm:rounded-2xl  bg-blue-700  p-3 sm:p-4  text-white ">
      <p className="text-[clamp(.7rem,1.5vw,1rem)] font-medium secendery__font">  Year to Date</p>
      <p className="text-[clamp(.55rem,1vw,.75rem)] opacity-70 secendery__font">  2021 </p>
      <p className="titles__font text-[clamp(.95rem,2vw,1.5rem)] font-semibold pt-1 sm:pt-2">  $1,200.38</p>
      <span className="mt-1 sm:mt-2 inline-block rounded-full primery_colour px-2 sm:px-3 py-0.5 text-[clamp(.5rem,1vw,.75rem)] font-bold text-slate-900">+12$ </span>
    </div>

    <div className="  absolute  top-[62%]  right-0  z-30  w-[clamp(175px,47%,256px)]  rounded-xl sm:rounded-2xl   bg-white  p-2.5 sm:p-3 shadow-xl border border-gray-100 ">
      <span className="block font-normal text-[clamp(.6rem,1.3vw,.875rem)] text-gray-900 secendery__font"> Happy Students</span>

      <div className="flex items-center gap-1 mt-1">
        <span className="text-[clamp(.55rem,1vw,.7rem)] font-semibold text-gray-600 secendery__font">  4.5 </span>
        <span className="text-[clamp(.5rem,.9vw,.625rem)] text-gray-400 secendery__font">  (240)</span>
        <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-yellow-400 text-yellow-400 ml-0.5" />
      </div>

      <AvatarGroup className="mt-1.5 sm:mt-2">
        {avatars.map(({ src, fallback }) => (
          <Avatar key={src} className="w-6 h-6 sm:w-7 sm:h-7">
            <AvatarImage src={src} alt={fallback} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount className="secendery__font text-[10px] sm:text-xs">  +2k</AvatarGroupCount>
      </AvatarGroup>
    </div>
  </div>
);

export default function CoursesShowcase() {
  return (
    <section className="overflow-hidden" style={{ background: bg }}>
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-14 sm:py-18 md:py-20 lg:py-24">
        <div className="space-y-20 sm:space-y-24 lg:space-y-32">
          {/* SECTION ONE */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,577px)] items-center gap-12 lg:gap-16 xl:gap-20">
            <div className="max-w-2xl">
              <h2 className="titles__font text-[clamp(2rem,5vw,3rem)] font-semibold text-slate-900 leading-[1.1]">
                Your Path to Professional{" "}
                <br className="hidden sm:block" />
                Growth Starts Here!
              </h2>

              <p className="mt-6 sm:mt-8 lg:mt-10 text-[clamp(.95rem,2vw,1.125rem)] font-light secendery__font leading-7 text-slate-500 max-w-xl">
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have
                the resources you need.
              </p>

              <div className="flex flex-wrap gap-x-7 gap-y-5 sm:gap-x-10 mt-7 sm:mt-10">
                {stats.map(([number, label]) => (
                  <div key={label}>
                    <p className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold titles__font text-blue-700">
                      {number}
                    </p>

                    <p className="text-sm sm:text-base lg:text-lg secendery__font text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <FirstVisual />
          </div>

          {/* SECTION TWO */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,540px)_minmax(0,1fr)] items-center gap-12 lg:gap-16 xl:gap-20">
            <SecondVisual />

            <div className="max-w-2xl">
              <h2 className="titles__font text-[clamp(2rem,5vw,3rem)] font-semibold text-slate-900 leading-[1.1]">
                Create &amp; Manage{" "}
                <br className="hidden sm:block" />
                Courses Easily.
              </h2>

              <p className="mt-5 sm:mt-6 text-[clamp(.95rem,2vw,1.125rem)] leading-7 font-light secendery__font text-slate-500 max-w-xl">
                <b className="text-slate-800 font-bold">ByteSpace</b>{" "}
                supports individuals or entities in the creation, publication,
                and administration of educational courses.
              </p>

              <ul className="mt-6 space-y-3">
                {perks.map((perk) => (
                  <li key={perk} className="flex text-sm sm:text-base font-medium secendery__font items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 fill-blue-600 text-white shrink-0" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}