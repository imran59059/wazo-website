import React from "react";
import Image from "next/image";

const testimonials = [
    {
        quote:
            "We see Eletive not just as a tool, but as a partner in our ongoing journey to enhance employee engagement",
        author: "Isabell Gerber",
        role: "People & Org Dev Manager, Xella Group",
        image: "/avatars/avatar-1.png", // Placeholder path
        logo: "/logos/xella.png", // Placeholder path
        company: "Xella",
    },
    {
        quote:
            "With Eletive we have a modern, agile and data-driven way of working with employee engagement.",
        author: "Christina Hagdahl",
        role: "HR Business Partner, Dole",
        image: "/avatars/avatar-2.png", // Placeholder path
        logo: "/logos/dole.png", // Placeholder path
        company: "Dole",
    },
];

export function Testimonials() {
    return (
        <section className="w-full py-12 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {testimonials.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 items-start">


                            <div className="flex flex-col space-y-4">
                                <blockquote className="text-xl font-bold text-[#1e1e4b] leading-tight">
                                    “{item.quote}”
                                </blockquote>
                                <div>
                                    <div className="font-bold text-[#1e1e4b]">{item.author}</div>
                                    <div className="text-sm text-slate-600">{item.role}</div>
                                </div>
                                {/* Logo Placeholder */}
                                <div className="h-8 lg:h-10 w-24 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                                    {item.company}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
