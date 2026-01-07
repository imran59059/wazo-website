"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const EXPERTS = [
    {
        name: "Esther Perel",
        role: "Psychotherapist and Author",
        quote: "The quality of our relationships determines the quality of our lives. This is true at home and at work.",
        image: "/experts/esther-perel.jpg" // Placeholder path
    },
    {
        name: "Seth Godin",
        role: "Author and Entrepreneur",
        quote: "Leadership is the art of giving people a platform for spreading ideas that work.",
        image: "/experts/seth-godin.jpg" // Placeholder path
    }
];

export function ExpertInsights() {
    return (
        <section className="bg-primary py-24 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 text-center">
                    <h2 className="font-serif text-3xl font-medium md:text-5xl">
                        Learn from the best
                    </h2>
                    <p className="mt-4 text-lg text-slate-300">
                        Insights from world-renowned people leaders.
                    </p>
                </div>

                <div className="grid gap-12 md:grid-cols-2">
                    {EXPERTS.map((expert, index) => (
                        <div key={index} className="relative rounded-2xl bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors">
                            <Quote className="absolute top-8 right-8 h-8 w-8 text-primary/40" />
                            <blockquote className="font-serif text-2xl leading-relaxed text-slate-200 mb-8 relative z-10">
                                "{expert.quote}"
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-slate-700 flex-shrink-0 border-2 border-primary/20 overflow-hidden relative">
                                    {/* Placeholder for Expert Image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800" />
                                </div>
                                <div>
                                    <div className="font-bold">{expert.name}</div>
                                    <div className="text-sm text-primary">{expert.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
