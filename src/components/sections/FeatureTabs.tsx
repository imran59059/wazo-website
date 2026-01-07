"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
    {
        id: "leaders",
        label: "For Leaders",
        title: "Drive strategy with data-backed insights",
        description: "Get a clear view of your organization's health. Identify high-performing teams, predict turnover, and understand what drives engagement across the company.",
        features: ["Executive Dashboard", "Predictive Analytics", "Benchmark Comparisons"],
        icon: <BarChart3 className="h-5 w-5" />,
        color: "text-primary",
        imageColor: "bg-indigo-50"
    },
    {
        id: "managers",
        label: "For Managers",
        title: "Empower your managers to take action",
        description: "Give managers the tools they need to support their teams. Automated action plans, conversation starters, and real-time feedback help managers become better leaders.",
        features: ["Team Action Plans", "1-on-1 Templates", "Real-time Feedback"],
        icon: <Users className="h-5 w-5" />,
        color: "text-primary",
        imageColor: "bg-blue-50"
    },
    {
        id: "employees",
        label: "For Employees",
        title: "Make every voice heard",
        description: "Create a safe space for employees to share feedback. With anonymous surveys and a confidential whistleblower channel, everyone can contribute to a better workplace.",
        features: ["Anonymous Surveys", "Peer Recognition", "Personal Growth"],
        icon: <Zap className="h-5 w-5" />,
        color: "text-primary",
        imageColor: "bg-indigo-50"
    }
];

export function FeatureTabs() {
    const [activeTab, setActiveTab] = useState(TABS[0].id);

    return (
        <section className="bg-slate-50 py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 text-center">
                    <h2 className="font-serif text-3xl font-medium text-[#1e1e4b] md:text-5xl">
                        Designed for everyone
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Tailored experiences for every role in your organization.
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="mb-12 flex flex-wrap justify-center gap-4">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all",
                                activeTab === tab.id
                                    ? "bg-[#1e1e4b] text-white shadow-lg ring-2 ring-[#1e1e4b] ring-offset-2"
                                    : "bg-white text-slate-600 hover:bg-slate-100"
                            )}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl">
                    <AnimatePresence mode="wait">
                        {TABS.map((tab) => (
                            tab.id === activeTab && (
                                <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="grid gap-8 p-8 lg:grid-cols-2 lg:p-16 items-center"
                                >
                                    {/* Text Content */}
                                    <div className="space-y-6">
                                        <div className={cn("inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider", tab.color)}>
                                            {tab.icon}
                                            {tab.label}
                                        </div>
                                        <h3 className="font-serif text-3xl font-medium text-[#1e1e4b] lg:text-4xl">
                                            {tab.title}
                                        </h3>
                                        <p className="text-lg text-slate-600 leading-relaxed">
                                            {tab.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {tab.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-3 text-slate-700 font-medium">
                                                    <div className={cn("flex h-6 w-6 items-center justify-center rounded-full bg-slate-100", tab.color)}>
                                                        <ArrowRight className="h-3 w-3" />
                                                    </div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button className="mt-4 bg-[#1e1e4b] text-white hover:bg-primary">
                                            Learn more about {tab.label}
                                        </Button>
                                    </div>

                                    {/* Visual Content */}
                                    <div className={cn("relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-inner", tab.imageColor)}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {/* Placeholder for detailed UI mockup */}
                                            <div className="text-center p-8">
                                                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-white/50 backdrop-blur flex items-center justify-center shadow-lg">
                                                    {React.cloneElement(tab.icon as React.ReactElement<{ className?: string }>, { className: "h-10 w-10 " + tab.color })}
                                                </div>
                                                <p className="text-slate-500 font-medium">UI Mockup for {tab.label}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
