import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

import logo from '@/app/Assets/logo.png';
import { HeroShowcase } from '@/components/Showcase';

const fields = [
    { id: 'email', label: 'Email', type: 'email', placeholder: 'designer@example.com', autoComplete: 'email' },
    { id: 'password', label: 'Password', type: 'password', placeholder: '********', autoComplete: 'current-password' },
];

const socials = [
    { label: 'Facebook', d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { label: 'Google', d: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z' },
];

const page = () => {
    return (
        <main className="unic_background font-sans min-h-screen w-full relative overflow-hidden px-8 py-10 md:px-12 text-white">
            <div className="w-full max-w-6xl mx-auto">
                <Link href="/" className="inline-block">
                    <Image src={logo} alt="ByteSpace logo" width={36} height={36} className="object-contain" />
                </Link>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,579px)] gap-8 items-start">
                    <HeroShowcase title="Sign up and come in" description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."/>

                    <section className="flex justify-center lg:justify-end">
                        {/* 579x784, padding 60 63 40 63 */}
                        <div className="bg-white text-gray-900 rounded-3xl pt-15 pr-15.75 pb-10 pl-15.75 w-full max-w-144.75 lg:h-196 shadow-2xl flex flex-col">
                            <p className="text-lg text-[#0D52FF]">Sign In</p>
                            <h2 className="text-5xl titles__font font-bold tracking-tight mt-1 mb-12 leading-tight">Welcome Back</h2>

                            <form className="space-y-6">
                                {fields.map(({ id, label, ...input }) => (
                                    <div key={id} className="space-y-2">
                                        <Label htmlFor={id} className="text-sm font-normal text-gray-900">{label}</Label>
                                        <Input id={id} name={id} required {...input} className="rounded-2xl border-gray-200 bg-white h-13 focus-visible:ring-blue-500 text-base px-6 placeholder:text-gray-400" />
                                    </div>
                                ))}

                                <div className="flex justify-end pt-1">
                                    <Button type="submit" className="primery_colour hover:bg-[#b8e600] text-black font-normal rounded-full px-9 h-11.5 text-lg shadow-none">
                                        Sign In
                                    </Button>
                                </div>
                            </form>

                            <div className="mt-20 flex items-center gap-4 text-lg text-gray-400">
                                <Separator className="flex-1" /> or <Separator className="flex-1" />
                            </div>

                            <div className="mt-14 flex justify-center gap-4">
                                {socials.map(({ label, d }) => (
                                    <Button key={label} type="button" variant="outline" aria-label={`Continue with ${label}`} className="size-18 rounded-2xl border-gray-300 shadow-none">
                                        <svg viewBox="0 0 24 24" className="size-8" fill="currentColor"><path d={d} /></svg>
                                    </Button>
                                ))}
                            </div>

                            <p className="mt-auto text-center text-base text-gray-400">
                                New user?{' '}
                                <Link href="/register" className="text-[#0D52FF] hover:underline">Create an account</Link>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default page;