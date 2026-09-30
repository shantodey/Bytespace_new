import Image from "next/image";
import { Star, BarChart2, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import boyImg from "@/app/Assets/Hero_main_img.png";
import girlImg from "@/app/Assets/Hero_secend_img.png";
import Color_spring from "@/app/Assets/Shape_spring.png";
import cardone from '@/app/Assets/card_img.png'

const course = {
  imageSrc: cardone, title: "Learn Figma from Basic", author: "purepearl studio",
  rating: 4.5, level: "Beginner", price: "$25", period: "lifetime",
  lessons: "17 Lessons", duration: "2 hours 16 mins", comments: "59 Comments",
};

const avatars = [
  { src: "https://avatars.githubusercontent.com/u/126257294?v=4", fallback: "SD" },
  { src: "https://avatars.githubusercontent.com/u/132531341?v=4", fallback: "EC" },
  { src: "https://avatars.githubusercontent.com/u/243631677?s=130&v=4", fallback: "CN" },
  { src: "https://avatars.githubusercontent.com/u/188943289?s=130&v=4", fallback: "CN" },
];

const stats = [["12K", "Students"], ["70+", "Courses"], ["16", "Creators"]];
const perks = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

const Avatars = ({ extra }: { extra?: React.ReactNode }) => (
  <div className="flex items-center -space-x-2">
    {avatars.map((a, i) => (
      <Avatar key={i} className="w-6 h-6 border-2 border-white">
        <AvatarImage src={a.src} />
        <AvatarFallback className="text-[9px]">{a.fallback}</AvatarFallback>
      </Avatar>
    ))}
    <div className="w-6 h-6 rounded-full primery_colour border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-900 z-10">
      {extra}
    </div>
  </div>
);

const CourseCard = () => (
  <Card className="w-93.25 h-96 rounded-3xl p-4 bg-white border border-slate-200 shadow-sm select-none">
    <CardContent className="p-0 flex flex-col h-full justify-between">
      <div className="relative w-85.25 h-48.75 rounded-2xl overflow-hidden">
        <Image src={course.imageSrc} alt={course.title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-1 mt-3 px-1">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-base line-clamp-1">{course.title}</h3>
          <span className="flex items-center gap-1 text-slate-400 text-sm font-medium">
            {course.rating.toFixed(1)} <Star className="w-4 h-4 fill-slate-300 text-slate-300" />
          </span>
        </div>
        <p className="text-xs text-slate-400">by <span className="text-blue-600 font-medium">{course.author}</span></p>
        <div className="flex items-center gap-3 my-1">
          <Badge variant="outline" className="bg-slate-100 text-slate-600 border-none font-normal text-xs px-2.5 py-0.5 rounded-full gap-1.5">
            <BarChart2 className="w-3.5 h-3.5 text-slate-500" /> {course.level}
          </Badge>
          <Avatars extra="26+" />
        </div>
        <div className="flex items-baseline gap-0.5">
          <span className="text-lg font-extrabold text-blue-600">{course.price}</span>
          <span className="text-xs text-slate-400">/{course.period}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

const bg = [
  "radial-gradient(700px circle at 20% 0%, rgba(190,255,0,.45), transparent 70%)",
  "radial-gradient(700px circle at 0% 100%, rgba(190,255,0,.5), transparent 70%)",
  "radial-gradient(650px circle at 100% 55%, rgba(120,140,255,.3), transparent 70%)",
  "radial-gradient(600px circle at 95% 100%, rgba(120,140,255,.35), transparent 70%)",
  "radial-gradient(450px circle at 0% 45%, rgba(150,180,255,.25), transparent 70%)",
  "#fff",
].join(",");

export default function CoursesShowcase() {
  return (
    <section className="overflow-hidden" style={{ background: bg }}>



      <div className="max-w-7xl mx-auto px-16 py-24 space-y-32">
        {/* Row 1: text left, boy + course card right */}
        <div className="grid lg:grid-cols-[1fr_auto] items-center gap-10">
          <div>
            <h2 className="titles__font text-4xl font-semibold text-slate-900 leading-tight">
              Your Path to Professional <br /> Growth Starts Here!
            </h2>
            <p className="mt-10 text-lg font-light secendery__font leading-7 text-slate-500 max-w-md">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="flex gap-8 mt-10">
              {stats.map(([n, l]) => (
                <div key={l}>
                  <p className="text-4xl font-semibold titles__font  text-blue-700">{n}</p>
                  <p className="text-lg secendery__font text-slate-500">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-[577px] h-[540px]">
            <div className="absolute top-0 left-0"><CourseCard /></div>
            <Image src={boyImg} alt="Student with laptop" width={577} height={540} className="absolute top-0 left-0 w-[577px] h-[540px]" />
            <Image src={Color_spring} alt="" width={216} height={216} className="absolute top-[58px] left-[384px] w-[216px] h-[216px]" />
            <div className="absolute left-[334px] top-[210px] w-[220px] rounded-2xl bg-white p-4 shadow-lg">
              <p className="text-sm text-slate-500">Learning Progress</p>
              <p className="text-5xl font-bold text-slate-900">55%</p>
              <div className="mt-1 h-2 rounded-full bg-slate-200"><div className="h-full w-[55%] rounded-full primery_colour" /></div>
            </div>
          </div>
        </div>

        {/* Row 2: girl + stat cards left, text right */}
        <div className="grid lg:grid-cols-[auto_1fr] items-center gap-10">
          <div className="relative w-[540px] h-[596px]">
            <Image src={girlImg} alt="Instructor with tablet" width={435} height={596} className="absolute top-0 left-[70px] w-[435px] h-[596px]" />
            <Image src={Color_spring} alt="" width={216} height={216} className="absolute top-[72px] left-[312px] w-[216px] h-[216px]" />
            <div className="absolute top-[3px] left-0 w-[170px] rounded-2xl bg-blue-700 p-4 text-white">
              <p className="text-sm">Total Revenue</p>
              <p className="text-[10px] opacity-70">July 1-28</p>
              <p className="text-2xl font-bold">$120.29</p>
              <div className="mt-2 h-2 rounded-full bg-white/20"><div className="h-full w-3/4 rounded-full primery_colour" /></div>
            </div>
            <div className="absolute top-[150px] left-0 w-[134px] rounded-2xl bg-blue-700 p-4 text-white">
              <p className="text-sm">Year to Date</p>
              <p className="text-[10px] opacity-70">2021</p>
              <p className="text-xl font-bold">$1,200.38</p>
              <span className="mt-2 inline-block rounded-full primery_colour px-3 py-0.5 text-xs font-bold text-slate-900">+125</span>
            </div>
            <div className="absolute top-[372px] left-[284px] w-[256px] rounded-2xl bg-white p-4 shadow-lg">
              <p className="text-sm text-slate-700">Happy Students</p>
              <p className="mb-1 text-xs text-slate-400">4.5 ⭐</p>
              <Avatars extra="2K+" />
            </div>
          </div>

          <div>
            <h2 className="titles__font text-4xl font-semibold text-slate-900 leading-tight">
              Create &amp; Manage <br /> Courses Easily.
            </h2>
            <p className="mt-6 text-sm leading-7 text-lg font-light secendery__font text-slate-500 max-w-md">
              <b className="text-slate-800 font-bold">ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="mt-6 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex text-base font-medium secendery__font items-center gap-3  text-slate-700">
                  <CheckCircle2 className="w-5 h-5 fill-blue-600 text-white" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}