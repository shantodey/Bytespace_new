import Image from 'next/image';
import { Star, BarChart } from 'lucide-react';

import card_one from '@/app/Assets/card_img2.png';
import card_two from '@/app/Assets/card_img3.png';
import shapeDonut from '@/app/Assets/Shape_ring.png';
import shapeSpring from '@/app/Assets/Shape_spring.png';
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
        <div className="absolute left-0 top-[130px] w-[312px] h-[280px] bg-white text-black rounded-2xl p-3 shadow-lg z-0 flex flex-col">
          <div className="relative w-full h-[125px] rounded-xl overflow-hidden bg-gray-300">
            <Image src={card_one} alt="" fill sizes="312px" className="object-cover" />
            <span className="absolute bottom-1.5 left-1.5"><Pill>17 Lessons</Pill></span>
          </div>
          <h3 className="mt-3 font-bold text-base text-gray-900 truncate titles__font">Build Digital...</h3>
          <p className="text-[11px] text-gray-400">by purepearl studio</p>
          <div className="mt-2 flex items-center justify-between">
            <Level />
            <Avatars count={4} extra="26+" />
          </div>
          <div className="mt-auto pt-1"><Price /></div>
        </div>
        <div className="absolute left-[98px] top-0 w-[312px] rounded-2xl p-3 pb-3 bg-white text-black shadow-2xl z-10 border border-gray-100">
          <div className="relative w-full h-[135px] rounded-xl overflow-hidden">
            <Image src={card_two} alt="" fill sizes="312px" className="object-cover" />
            <div className="absolute bottom-1.5 left-1.5 flex gap-1">
              <Pill>17 Lessons</Pill>
              <Pill>2 hours 16 mins</Pill>
              <Pill>59 Comments</Pill>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-start">
            <div>
              <h3 className="font-bold text-base text-gray-900 leading-tight titles__font">the Power of Big Data</h3>
              <p className="text-[11px] text-gray-400 mt-0.5">by purepearl studio</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              4.5 <Star className="w-3.5 h-3.5 fill-[#CCFF00] text-[#CCFF00]" />
            </div>
          </div>
          <div className="mt-2.5 flex items-center justify-between">
            <Level />
            <Avatars count={4} extra="26+" />
          </div>
          <div className="mt-2"><Price /></div>
        </div>

        <Image src={shapeDonut} alt="" width={84} height={84} className={`${shapeStyle} left-[55px] top-[88px] z-20`} />
        <Image src={shapeCone} alt="" width={104} height={104} className={`${shapeStyle} -left-3 top-[332px] z-20`} />
        <Image src={shapeSpring} alt="" width={84} height={84} className={`${shapeStyle} left-[340px] top-[232px] z-20`} />

        <div className="absolute left-[136px] top-[340px] w-[221px] bg-[#CCFF00] text-black rounded-xl p-3 shadow-xl z-20">
          <span className="font-medium text-sm block">Happy Students</span>
          <div className="flex items-center gap-1 mt-0.5 text-[10px]">
            <span className="font-bold">4.5</span>
            <span className="text-gray-700">(240)</span>
            <Star className="w-3 h-3 fill-blue-600 text-blue-600" />
          </div>
          <div className="mt-1.5"><Avatars count={6} extra="2K+" size="w-7 h-7" /></div>
        </div>
      </div>
    </section>
  );
};