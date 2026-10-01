import Footer from '@/components/Footer';
import Navber from '@/components/Navber';
import { Button } from '@base-ui/react';
import Link from 'next/link';


const notfound = () => {
  return (
    <>
    <Navber/>
    <div className="flex unic_background flex-col items-center justify-center min-h-[80vh] px-4 text-center select-none overflow-hidden my-auto py-12">


      <div className="relative flex items-center justify-center">
        <h1 className="text-[clamp(120px,25vw,280px)] font-black tracking-tighter titles__font text-transparent bg-clip-text bg-gradient-to-b from-[#CBFC01] to-[#CBFC01]/40 leading-none select-none drop-shadow-lg">
          404
        </h1>
      </div>


      <div className="relative z-10 -mt-6 sm:-mt-10 md:-mt-14 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white titles__font max-w-xl leading-tight">
          The page you are looking <br className="hidden sm:inline" /> for doesn’t exist
        </h2>

        <p className="mt-3 text-xs sm:text-sm text-blue-100/80 secendery__font font-light max-w-md">
          Try to use a correct url or go back to homepage to start again </p>

        <div className="mt-6 sm:mt-8">
          <Link href="/">
            <Button className="primery_colour hover:opacity-90 text-slate-950 font-semibold rounded-full px-6 sm:px-8 h-10 sm:h-11 text-xs sm:text-sm transition-all shadow-md cursor-pointer">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default notfound;