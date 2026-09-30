import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


import logo from '@/app/Assets/logo.png';
import { HeroShowcase } from '@/components/Showcase';

const fields = [
  { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Jamie Davis', autoComplete: 'name' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'designer@example.com', autoComplete: 'email' },
  { id: 'password', label: 'Password', type: 'password', placeholder: '••••••••', autoComplete: 'new-password' },
];

const SignUpPage = () => (
  <main className="unic_background font-sans min-h-screen w-full relative overflow-hidden px-8 py-10 md:px-12 text-white">
    <div className="w-full max-w-6xl mx-auto">
      <Link href="/" className="inline-block">
        <Image src={logo} alt="ByteSpace logo" width={36} height={36} className="object-contain" />
      </Link>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,500px)] gap-8 items-start">
        <HeroShowcase  title="Sign up and come in" 
          description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost." 
        />

        <section className="flex justify-center lg:justify-end">
          <div className="bg-white text-gray-900 rounded-2xl px-10 py-12 w-full max-w-[500px] lg:min-h-[680px] shadow-2xl flex flex-col justify-between">
            <div>
              <p className="text-lg font-light secendery__font  text-[#0D52FF]">Create an Account</p>
              <h2 className="text-4xl titles__font font-bold tracking-tight mt-2 mb-8 leading-tight">
                Welcome to <br /> ByteSpace
              </h2>

              <form className="space-y-5">
                {fields.map(({ id, label, ...input }) => (
                  <div key={id} className="space-y-2">
                    <Label htmlFor={id} className="text-sm secendery__font font-medium text-gray-700">{label}</Label>
                    <Input id={id} name={id} required {...input} className="rounded-2xl border-gray-200 bg-gray-50/50 h-12 focus-visible:ring-blue-500 text-sm px-4"/>
                  </div>
                ))}

                <div className="flex justify-end pt-3">
                  <Button type="submit"  className="bg-[#CCFF00] secendery__font hover:bg-[#b8e600] text-black  rounded-full px-9 h-11 text-lg  shadow-none">
                    Continue
                  </Button>
                </div>
              </form>
            </div>

            <p className="text-center secendery__font text-base  text-gray-500 pt-8">
              Already have an account?{' '}
              <Link href="/login" className="text-[#0D52FF] hover:underline">Login</Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  </main>
);

export default SignUpPage;