"use client";

import React from "react";
import { Frame } from "lucide-react";

const LOGOS = [
    { name: "Canva", icon: <Frame /> },
    { name: "Intercom", icon: <Frame /> },
    { name: "Etsy", icon: <Frame /> },
    { name: "Bombas", icon: <Frame /> },
    { name: "McDonalds", icon: <Frame /> },
    { name: "Vercel", icon: <Frame /> },
];

export function LogoStrip() {
    return (
        <section className="w-full border-b border-slate-100 bg-white py-12">
            <div className="container mx-auto px-4 md:px-6">
                <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
                    Trusted by 6,500+ people-first companies
                </p>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                    {LOGOS.map((logo) => (
                        <div key={logo.name} className="flex items-center gap-2 text-xl font-bold text-slate-800">
                            {/* Placeholder logos using Lucide icons for now */}
                            <div className="bg-slate-200 h-8 w-8 rounded flex items-center justify-center">
                                {logo.icon}
                            </div>
                            <span>{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
