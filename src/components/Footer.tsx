"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/app/Assets/logo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FOOTER_DATA = {
    description:"Stay Up to date with our latest features and releases by joining our newsletter.",
    consentText:"By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
    copyright: "@ 2023 ByteSpace. All rights reserved.",
    navColumns: [
        {
            id: "col-1",
            links: [
                { label: "Featured Courses", href: "/" },
                { label: "Featured Categories", href: "/" },
                { label: "Business", href: "/" },
                { label: "IT", href: "/" },
                { label: "Design", href: "/" },
            ],
        },
        {
            id: "col-2",
            links: [
                { label: "Development", href: "/" },
                { label: "Marketing", href: "/" },
                { label: "Photography", href: "/" },
                { label: "Finance", href: "/" },
                { label: "Sport", href: "/" },
            ],
        },
        {
            id: "col-3",
            links: [
                { label: "Become a Creator", href: "/" },
                { label: "Affiliate Program", href: "/" },
                { label: "Contact", href: "/" },
                { label: "Help", href: "/" },
                { label: "About", href: "/" },
            ],
        },
    ],
    legalLinks: [
        { label: "Privacy Policy", href: "/" },
        { label: "Terms of Service", href: "/" },
        { label: "Cookies Settings", href: "/" },
    ],
};

export default function Footer() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <footer className="w-full  border-t border-slate-100 py-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2 w-fit">
                            <Image src={logo} alt="ByteSpace Logo" width={28} height={28} className="object-contain" priority />
                            <h2 className="text-xl titles__font font-bold tracking-tight text-slate-900">
                                ByteSpace
                            </h2>
                        </Link>

                        <p className="text-slate-600 text-sm  secendery__font">  {FOOTER_DATA.description}</p>

                        <form onSubmit={handleSubmit} className="flex items-center gap-3 max-w-md">
                            <Input type="email" placeholder="Enter your email" className="rounded-full px-5 py-5 text-sm border-slate-300 focus-visible:ring-1 focus-visible:ring-slate-400" />
                            <Button type="submit" className="rounded-full secendery__font bg-[#ccff00] hover:bg-[#b8e600] text-slate-900 font-medium px-7 py-5" >
                                Search
                            </Button>
                        </form>

                        <p className="text-[11px] text-slate-500 max-w-md secendery__font text-xs leading-normal">
                            {FOOTER_DATA.consentText}
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm text-slate-700 font-normal pt-2">
                        {FOOTER_DATA.navColumns.map((column) => (
                            <div key={column.id} className="flex flex-col gap-4">
                                {column.links.map((link) => (
                                    <Link key={link.label} href={link.href} className="hover:text-slate-900 secendery__font text-sm transition-colors">  {link.label}</Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>{FOOTER_DATA.copyright}</p>
                    <div className="flex items-center gap-6">
                        {FOOTER_DATA.legalLinks.map((link) => (
                            <Link key={link.label} href={link.href} className="hover:text-slate-800 transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}