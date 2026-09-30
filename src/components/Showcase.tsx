import Image, { StaticImageData } from 'next/image';
import { Star, BarChart, BarChart2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

import card_one from '@/app/Assets/card_img2.png';
import card_two from '@/app/Assets/card_img3.png';
import shapeDonut from '@/app/Assets/Shape_ring.png';
import shapeSpring from '@/app/Assets/Shape_spring_white.png';
import shapeCone from '@/app/Assets/Shapte_Cone_colour.png';

const avatars = [
  'https://avatars.githubusercontent.com/u/126257294?v=4',
  'https://avatars.githubusercontent.com/u/132531341?v=4',
  'https://avatars.githubusercontent.com/u/243631677?s=130&v=4',
  'https://avatars.githubusercontent.com/u/188943289?s=130&v=4',
  'https://avatars.githubusercontent.com/u/109307621?s=130&v=4',
  'https://github.com/shadcn.png',
  'https://github.com/maxleiter.png',
];

interface AvatarsProps {
  count: number;
  extra: string;
  size?: string;
}

export const Avatars = ({ count, extra, size = 'w-6 h-6' }: AvatarsProps) => (
  <div className="flex items-center -space-x-1.5">
    {avatars.slice(0, count).map((src) => (
      <div key={src} className={`relative ${size} shrink-0 rounded-full border-2 border-white overflow-hidden`}>
        <Image src={src} alt="Avatar" fill sizes="24px" className="object-cover" />
      </div>
    ))}
    <div className={`${size} shrink-0 rounded-full bg-black text-white text-[8px] font-bold flex items-center justify-center border-2 border-white`}>
      {extra}
    </div>
  </div>
);

export const Level = () => (
  <span className="bg-gray-100 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium text-gray-600">
    <BarChart className="w-3 h-3" /> Beginner
  </span>
);

export const Price = () => (
  <span className="font-bold text-base text-blue-600">
    $25<span className="text-xs text-gray-400 font-normal">/lifetime</span>
  </span>
);

export const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-white/60 text-gray-700 text-[10px] px-3 py-1 rounded-full backdrop-blur-sm whitespace-nowrap">
    {children}
  </span>
);

const shapeStyle = 'absolute pointer-events-none object-contain';

interface Course {
  imageSrc: StaticImageData;
  title: string;
  author: string;
  rating: number;
  level: string;
  price: string;
  period: string;
}

const courses: Record<'back' | 'front', Course> = {
  back: { imageSrc: card_one, title: 'Build Digital...', author: 'purepearl studio', rating: 4.5, level: 'Beginner', price: '$25', period: 'lifetime' },
  front: { imageSrc: card_two, title: 'the Power of Big Data', author: 'purepearl studio', rating: 4.5, level: 'Beginner', price: '$25', period: 'lifetime' },
};


const CourseCard = ({ course, className = '' }: { course: Course; className?: string }) => (
  <Card className={`w-93.25 h-96 rounded-3xl p-4 bg-white border border-slate-200 shadow-sm flex flex-col justify-between select-none ${className}`}>
    <CardContent className="p-0 flex flex-col h-full justify-between">
      <div className="relative w-85.25 h-48.75 rounded-2xl overflow-hidden">
        <Image src={course.imageSrc} alt="" fill sizes="341px" className="object-cover" />
      </div>

      <div className="flex flex-col gap-1 mt-3 px-1">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-base line-clamp-1">{course.title}</h3>
          <div className="flex items-center gap-1 text-slate-400 text-sm font-medium">
            <span>{course.rating.toFixed(1)}</span>
            <Star className="w-4 h-4 fill-slate-300 text-slate-300" />
          </div>
        </div>

        <p className="text-xs text-slate-400 font-normal">
          by <span className="text-blue-600 font-medium">{course.author}</span>
        </p>

        <div className="flex items-center gap-3 my-1">
          <Badge variant="outline" className="bg-slate-100 text-slate-600 border-none font-normal text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
            <BarChart2 className="w-3.5 h-3.5 text-slate-500" />
            {course.level}
          </Badge>
          <div className="flex items-center -space-x-2">
            {avatars.slice(0, 4).map((src) => (
              <Avatar key={src} className="w-8 h-8 border-2 border-white">
                <AvatarImage src={src} />
              </Avatar>
            ))}
            <div className="w-6 h-6 rounded-full primery_colour border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-900 z-10">
              26+
            </div>
          </div>
        </div>

        <div className="flex items-baseline gap-0.5">
          <span className="text-lg font-extrabold text-blue-600">{course.price}</span>
          <span className="text-xs text-slate-400">/{course.period}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

interface HeroShowcaseProps {
  title?: string;
  description?: string;
}

export const HeroShowcase = ({
  title = "Sign up and come in",
  description = "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
}: HeroShowcaseProps) => {
  return (
    <section>
      <h1 className="text-2xl sm:text-3xl titles__font font-bold">{title}</h1>
      <p className="mt-3 text-xs sm:text-sm text-blue-100/80 max-w-[380px] leading-relaxed">
        {description}
      </p>

      <div aria-hidden="true" className="relative mt-12 w-[520px] h-[440px] hidden md:block">
        <div className="absolute left-0 top-[80px]">
          <CourseCard course={courses.back} />
        </div>
        <div className="absolute left-[98px] top-0 z-10">
          <CourseCard course={courses.front} className="shadow-2xl" />
        </div>

        <Image src={shapeDonut} alt="" width={164} height={164} className={`${shapeStyle} left-[25px] top-0 z-20`} />
        <Image src={shapeCone} alt="" width={188} height={188} className={`${shapeStyle} -left-3 bottom-[-130px] z-20`} />
        <Image src={shapeSpring} alt="" width={175} height={175} className={`${shapeStyle} left-[340px] bottom-[-50px]  z-25`} />

        <div className="absolute right-[45px] bottom-[-110px] w-[258px] h-[123px] primery_colour text-black rounded-xl p-3 shadow-xl z-20">
          <span className="font-medium text-sm block">Happy Students</span>
          <div className="flex items-center gap-1 mt-0.5 text-[10px]">
            <span className="font-bold">4.5</span>
            <span className="text-gray-700">(240)</span>
            <Star className="w-3 h-3 fill-blue-600 text-blue-600" />
          </div>
          <div className="mt-1.5"><Avatars count={6} extra="2K+" size="w-10 h-10" /></div>
        </div>
      </div>
    </section>
  );
};