"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FeatureHeroProps {
    category: string;
    title: string;
    description: string;
}

export function FeatureHero({ category, title, description }: FeatureHeroProps) {
    return (
        <section className="relative w-full overflow-hidden bg-primary pt-32 pb-20 lg:pt-48 lg:pb-32">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-indigo-400/20 blur-[128px]" />
            <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-[128px]" />

            <div className="container relative mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center space-y-8"
                >
                    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-xl">
                        {category}
                    </div>

                    <h1 className="max-w-4xl font-serif text-5xl font-medium tracking-tight text-white sm:text-6xl md:text-7xl">
                        {title}
                    </h1>

                    <p className="mx-auto max-w-[700px] text-lg text-slate-200 font-light md:text-xl leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-col gap-4 min-[400px]:flex-row pt-4">
                        <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-semibold h-12 px-8 rounded-full">
                            Book a demo
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 text-white bg-white/10 hover:bg-white/20 hover:text-white h-12 px-8 rounded-full">
                            Explore features
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
