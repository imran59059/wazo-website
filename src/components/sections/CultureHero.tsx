"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users } from "lucide-react";

export function CultureHero() {
    return (
        <section className="relative w-full overflow-hidden bg-primary pt-32 pb-20 lg:pt-48 lg:pb-32">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[128px]" />
            <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-indigo-500/20 blur-[128px]" />

            <div className="container relative mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center space-y-8 text-center lg:text-left"
                    >
                        <div className="space-y-4">
                            <h1 className="font-serif text-5xl font-medium tracking-tight text-white sm:text-6xl xl:text-7xl">
                                Meet <span className="text-primary italic">Wazo AI</span>
                            </h1>
                            <p className="mx-auto max-w-[600px] text-lg text-slate-300 lg:mx-0 font-light">
                                Turn insight into impact. The employee experience platform that helps you build a high-performing culture.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
                            <Button size="lg" className="bg-white text-[#1e1e4b] hover:bg-slate-100 font-semibold h-12 px-8 rounded-full">
                                Book a demo
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white h-12 px-8 rounded-full">
                                Explore Wazo AI
                            </Button>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-slate-400">
                            <div className="flex items-center">
                                <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                                <span>14-day free trial</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visuals */}
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none h-[400px] lg:h-[500px]">
                        {/* Main Image Pill */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute right-0 top-10 w-[70%] h-[80%] rounded-[100px] overflow-hidden border-4 border-white/5 shadow-2xl"
                        >
                            <div className="w-full h-full bg-slate-800 relative">
                                {/* Placeholder for a person image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-slate-500">
                                    [Person Image]
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute left-0 bottom-20 w-64 bg-white rounded-2xl p-4 shadow-xl z-10"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="text-xs font-bold text-slate-500 uppercase">Engagement Score</div>
                                <TrendingUp className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="text-3xl font-bold text-[#1e1e4b] mb-1">8.4</div>
                            <div className="text-xs text-green-600 font-medium">+1.2 vs last month</div>
                        </motion.div>

                        {/* Floating Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="absolute right-10 top-0 w-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl z-20"
                        >
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Users className="h-4 w-4 text-primary" />
                                </div>
                                <div className="text-xs text-white font-medium">Team Pulse</div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[70%] bg-primary rounded-full"></div>
                                </div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[50%] bg-blue-400 rounded-full"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
