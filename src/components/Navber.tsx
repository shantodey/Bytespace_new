"use client"
import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import Image from 'next/image';
import logo from '@/app/Assets/logo.png'
import Link from 'next/link';


const Navber = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navLinks = [
        { label: "Home", href: "#" },
        { label: "Courses", href: "#" },
        { label: "Creators", href: "#" },
    ];
    const routeLinks = [
        { label: " Sign In", href: "/login" },
        { label: "Join Us", href: "/register" },
    ];

    return (
        <div className="w-full bg-[#0042FF] text-white font-sans antialiased">
            <header className="relative w-full border-b border-[#1A52FF] overflow-hidden">
                { }
                <div className="absolute inset-0 pointer-events-none opacity-25" style={{
                    backgroundImage: `      linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)    `,
                    backgroundSize: '80px 100%'
                }}
                />

                { }
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">

                        { }
                        <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
                            <Image src={logo} alt='logo' />
                            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                                ByteSpace
                            </span>
                        </div>


                        <nav className="hidden md:flex items-center space-x-8 sm:space-x-10 text-sm font-normal text-white/90">
                            {navLinks.map((link) => (
                                <Link key={link.label} href={link.href} className="hover:text-white transition-colors duration-150">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        { }
                        <div className="hidden md:flex items-center space-x-6 text-sm">
                            {routeLinks.map((link) => (
                                <Link key={link.label} href={link.href} className="text-white/90 hover:text-white transition-colors duration-150">
                                    {link.label}
                                </Link>
                            ))}
                            <button type="button" aria-label="Shopping Cart" className="text-white hover:opacity-80 transition-opacity p-1">
                                <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
                            </button>
                        </div>

                        { }
                        <div className="flex items-center space-x-4 md:hidden">
                            <button type="button" aria-label="Shopping Cart" className="text-white p-1">
                                <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
                            </button>

                            <button type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Mobile Menu" className="text-white p-1 focus:outline-none">
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>

                    </div>
                </div>

                { }
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-[#003ADB] border-t border-white/10 px-4 pt-4 pb-6 space-y-4">
                        <nav className="flex flex-col space-y-3 text-base">
                            {navLinks.map((link) => (
                                <Link key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-white/90 hover:text-white py-1 border-b border-white/5">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="pt-2 flex items-center space-x-6 text-sm border-t border-white/10">
                            {routeLinks.map((link) => (
                                <Link key={link.label} href={link.href}  onClick={() => setIsMobileMenuOpen(false)} className="text-white/90 hover:text-white">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Navber;


