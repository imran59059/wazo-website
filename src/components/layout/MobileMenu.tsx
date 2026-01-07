"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { PLATFORM_MENU_DATA, WHY_WAZO_MENU_DATA, CUSTOMERS_MENU_DATA, PlatformCategory } from "@/lib/menu-data";
import { Button } from "@/components/ui/button";

// Modern Card-style Accordion Item
const AccordionItem = ({
    title,
    children,
    isOpen,
    onToggle,
    icon
}: {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    icon?: React.ReactNode;
}) => {
    return (
        <div className={`mb-3 overflow-hidden rounded-xl transition-all duration-300 ${isOpen ? "bg-white shadow-md border border-slate-100" : "bg-white/50 border border-transparent hover:bg-white hover:shadow-sm"}`}>
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between p-4 text-left font-semibold text-slate-800 transition-colors"
                style={{ WebkitTapHighlightColor: "transparent" }}
            >
                <span className="flex items-center gap-3">
                    {icon && <span className={`text-primary/80 ${isOpen ? "text-primary" : ""}`}>{icon}</span>}
                    <span className={isOpen ? "text-primary" : ""}>{title}</span>
                </span>
                <div className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 ${isOpen ? "bg-primary/10 rotate-180" : "bg-slate-50"}`}>
                    <ChevronDown className={`h-4 w-4 transition-colors ${isOpen ? "text-primary" : "text-slate-400"}`} />
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="border-t border-slate-50 px-4 pb-4 pt-2">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export function MobileMenu({ onClose }: { onClose: () => void }) {
    const [openSection, setOpenSection] = useState<string | null>("Platform"); // Default open
    const [openPlatformCategory, setOpenPlatformCategory] = useState<PlatformCategory | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const togglePlatformCategory = (category: PlatformCategory) => {
        setOpenPlatformCategory(openPlatformCategory === category ? null : category);
    };

    return (
        <div className="flex flex-col h-full w-full bg-slate-50/50">
            {/* Scrollable Content Container */}
            <div className="flex-1 overflow-y-auto min-h-0 pt-14 pb-20 px-4 scroll-smooth" style={{ WebkitOverflowScrolling: "touch" }}>

                {/* Platform Accordion */}
                <AccordionItem
                    title="Platform"
                    isOpen={openSection === "Platform"}
                    onToggle={() => toggleSection("Platform")}
                >
                    <div className="space-y-1">
                        {(Object.keys(PLATFORM_MENU_DATA) as PlatformCategory[]).map((category) => (
                            <div key={category} className="rounded-lg bg-slate-50/50">
                                <button
                                    onClick={() => togglePlatformCategory(category)}
                                    className="flex w-full items-center justify-between py-3 px-2 text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
                                >
                                    <span className="flex items-center gap-3">
                                        <span className="p-1.5 bg-white rounded-md shadow-sm text-primary">
                                            {PLATFORM_MENU_DATA[category].icon}
                                        </span>
                                        {category}
                                    </span>
                                    <ChevronDown
                                        className={`h-3 w-3 text-slate-400 transition-transform duration-200 ${openPlatformCategory === category ? "rotate-180 text-primary" : ""}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openPlatformCategory === category && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-12 pr-2 pb-3 flex flex-col gap-2">
                                                {PLATFORM_MENU_DATA[category].items.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href || "#"}
                                                        onClick={onClose}
                                                        className="flex items-center gap-3 py-2 text-sm text-slate-600 hover:text-primary transition-colors hover:translate-x-1 duration-200"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                                <Link
                                                    href={PLATFORM_MENU_DATA[category].featured.href}
                                                    onClick={onClose}
                                                    className="mt-2 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary"
                                                >
                                                    Explore {category} <ArrowRight className="h-3 w-3" />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                        <div className="pt-2">
                            <Link href="/platform" onClick={onClose} className="flex w-full items-center justify-center rounded-lg border border-primary/20 bg-primary/5 py-3 text-sm font-bold text-primary hover:bg-primary/10">
                                View All Platform Features
                            </Link>
                        </div>
                    </div>
                </AccordionItem>

                {/* Why Wazo Accordion */}
                <AccordionItem
                    title="Why Wazo?"
                    isOpen={openSection === "WhyWazo"}
                    onToggle={() => toggleSection("WhyWazo")}
                >
                    <div className="flex flex-col gap-4">
                        {WHY_WAZO_MENU_DATA.items.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                onClick={onClose}
                                className="flex items-start gap-3 group"
                            >
                                <div className="mt-0.5 text-slate-400 group-hover:text-primary transition-colors bg-white p-2 rounded-lg border border-slate-100 shadow-sm">{item.icon}</div>
                                <div>
                                    <div className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors">{item.title}</div>
                                    <div className="text-xs text-slate-500 line-clamp-2 mt-0.5">{item.description}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </AccordionItem>

                {/* Customers Accordion */}
                <AccordionItem
                    title="Customers"
                    isOpen={openSection === "Customers"}
                    onToggle={() => toggleSection("Customers")}
                >
                    <div className="grid grid-cols-1 gap-3">
                        {CUSTOMERS_MENU_DATA.items.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                onClick={onClose}
                                className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-slate-50 bg-white border border-transparent hover:border-slate-100 transition-all"
                            >
                                <div className={`p-1.5 rounded-md ${item.iconBg ? 'bg-primary/10' : 'bg-slate-100'}`}>
                                    {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: `h-4 w-4 ${item.iconBg ? 'text-primary' : 'text-slate-600'}` })}
                                </div>
                                <span className="text-sm font-semibold text-slate-700">{item.title}</span>
                            </Link>
                        ))}
                    </div>
                </AccordionItem>

                <Link href="/resources" onClick={onClose}>
                    <div className="mb-3 rounded-xl bg-white p-4 font-semibold text-slate-800 shadow-sm border border-slate-100 hover:text-primary transition-colors">
                        Blogs
                    </div>
                </Link>

                <Link href="/pricing" onClick={onClose}>
                    <div className="mb-6 rounded-xl bg-white p-4 font-semibold text-slate-800 shadow-sm border border-slate-100 hover:text-primary transition-colors">
                        Pricing
                    </div>
                </Link>

                <div className="mt-4 space-y-3">
                    <Link href="/signin" onClick={onClose}>
                        <Button variant="outline" className="w-full justify-between h-12 text-base rounded-xl border-slate-200">
                            Sign in
                            <ArrowRight className="h-4 w-4 text-slate-400" />
                        </Button>
                    </Link>
                    <Link href="/contact" onClick={onClose}>
                        <Button className="w-full h-12 text-base rounded-xl shadow-lg shadow-primary/20">
                            Contact Sales
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
