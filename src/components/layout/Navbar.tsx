"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    Menu,
    Globe,
    ArrowRight,
    TrendingUp,
    MessageCircle,
    Zap,
    Target,
    Trophy,
    LayoutGrid,
    FileText,
    BarChart,
    Megaphone,
    Rss,
    AlertTriangle,
    Activity,
    MessageSquare,
    Users,
    RefreshCcw,
    CheckSquare,
    Briefcase,
    FileBarChart,
    Medal,
    User,
    Hexagon,
    Award,
    Headphones,
    GraduationCap,
    ArrowLeftRight,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MobileMenu } from "./MobileMenu";
import { PLATFORM_MENU_DATA, WHY_WAZO_MENU_DATA, CUSTOMERS_MENU_DATA, PlatformCategory } from "@/lib/menu-data";



export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeCategory, setActiveCategory] = React.useState<PlatformCategory>("Engagement");

    return (
        <header className="sticky top-0 z-50 w-full mx-auto border bg-background/80 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-background/60">
            <div className="px-6 flex h-20 items-center justify-between">
                {/* Logo */}
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="flex items-center text-xl font-bold text-primary">
                            <div className="mr-2 flex h-8 w-8 items-center justify-center">
                                <Image
                                    src="/logo/wazo-logo.png"
                                    alt="WAZO Logo"
                                    width={32}
                                    height={32}
                                    priority
                                />
                            </div>
                            WAZO
                        </span>
                    </Link>
                </div>


                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:flex-1">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-base font-medium text-primary bg-transparent hover:bg-slate-100 hover:cursor-pointer">
                                    Platform
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.1, ease: "easeOut" }}
                                        className="fixed top-20 left-0 w-full bg-white shadow-xl border-b rounded-b-[2rem] z-50 origin-top max-h-[calc(100vh-5rem)] overflow-y-auto"
                                    >
                                        <div className="container mx-auto grid grid-cols-12 gap-0 min-h-[400px] pl-40">
                                            {/* Left Column: Categories */}
                                            <div className="col-span-3 p-6 border-r border-slate-100">
                                                <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                                    Platform Features
                                                </h4>
                                                <ul className="space-y-2">
                                                    {(Object.keys(PLATFORM_MENU_DATA) as PlatformCategory[]).map((category) => (
                                                        <li
                                                            key={category}
                                                            onMouseEnter={() => setActiveCategory(category)}
                                                            className={cn(
                                                                "flex cursor-pointer items-center gap-3 rounded-md p-3 transition-all duration-200",
                                                                activeCategory === category
                                                                    ? "bg-white shadow-sm ring-1 ring-slate-200 text-primary"
                                                                    : "text-slate-600 hover:bg-slate-200/50 hover:text-primary"
                                                            )}
                                                        >
                                                            <div className={cn(
                                                                "flex items-center justify-center",
                                                                activeCategory === category ? "opacity-100" : "opacity-70"
                                                            )}>
                                                                {PLATFORM_MENU_DATA[category].icon}
                                                            </div>
                                                            <div className="flex-1">
                                                                <span className="block text-sm font-semibold">{category}</span>
                                                                {/* {activeCategory === category && ( */}
                                                                <span className="pr-1.5 block text-xs text-slate-500 font-normal mt-0.5 animate-in fade-in slide-in-from-left-1 duration-300">
                                                                    {PLATFORM_MENU_DATA[category].description}
                                                                </span>
                                                                {/* )} */}
                                                            </div>
                                                            {activeCategory === category && (
                                                                <ArrowRight className="h-4 w-4 text-primary animate-in fade-in slide-in-from-left-2" />
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>

                                                <div className="mt-6 pt-4 border-t border-slate-200">
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href="/platform"
                                                            className="group flex items-center text-sm font-medium text-primary hover:text-primary hover:underline"
                                                        >
                                                            <LayoutGrid className="mr-2 h-4 w-4" />
                                                            See all features
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </div>
                                            </div>

                                            {/* Middle Column: Dynamic Sub-items */}
                                            <div className="col-span-3 p-8 bg-white flex flex-col justify-start">
                                                <div className="animate-in fade-in zoom-in-95 duration-200" key={activeCategory}>
                                                    <h4 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                                                        {PLATFORM_MENU_DATA[activeCategory].icon}
                                                        <span>{activeCategory} Features</span>
                                                    </h4>
                                                    <div className="grid grid-cols-1 gap-4">
                                                        {PLATFORM_MENU_DATA[activeCategory].items.map((item) => (
                                                            <NavigationMenuLink asChild key={item.name}>
                                                                <Link href={item.href || "#"} className="flex flex-row items-center gap-3 rounded-lg border border-slate-100 p-3 hover:border-blue-100 hover:bg-primary/10 transition-colors group">
                                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 group-hover:bg-blue-100 transition-colors">
                                                                        {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, {
                                                                            className: "h-5 w-5 text-slate-500 group-hover:text-primary transition-colors"
                                                                        })}
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <span className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">{item.name}</span>
                                                                    </div>
                                                                    <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>


                                            {/* Right Column: Featured (Static or Contextual) */}
                                            <div className="col-span-6 bg-gradient-to-b from-slate-50 to-white p-6 border-l border-slate-100 flex flex-col justify-between">
                                                <div className="animate-in fade-in slide-in-from-right-2 duration-300" key={activeCategory + "-featured"}>
                                                    <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                                        Recommended
                                                    </h4>
                                                    <div className="w-[85%] rounded-xl border border-slate-200 bg-white p-4 shadow-sm group hover:shadow-md transition-all">
                                                        <div className="mb-3 h-32 w-full rounded-lg bg-slate-200 overflow-hidden relative">
                                                            <Image
                                                                src={PLATFORM_MENU_DATA[activeCategory].featured.image}
                                                                alt={PLATFORM_MENU_DATA[activeCategory].featured.title}
                                                                fill
                                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                            />
                                                        </div>
                                                        <h5 className="font-semibold text-primary">{PLATFORM_MENU_DATA[activeCategory].featured.title}</h5>
                                                        <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                                                            {PLATFORM_MENU_DATA[activeCategory].featured.description}
                                                        </p>
                                                        <NavigationMenuLink asChild>
                                                            <Link href={PLATFORM_MENU_DATA[activeCategory].featured.href} className="inline-block mt-3 w-full">
                                                                <Button size="sm" variant="secondary" className="w-full text-xs">
                                                                    Explore {activeCategory}
                                                                </Button>
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    </div>
                                                </div>

                                                <div className="w-[85%] text-center p-4 bg-primary/5 rounded-lg border border-primary/10 mt-4">
                                                    <p className="text-xs font-medium text-primary mb-2">Ready to transform your culture?</p>
                                                    <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">Get a Demo</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-base font-medium text-[#1e1e4b] bg-transparent hover:bg-slate-100 hover:cursor-pointer">
                                    Why Wazo?
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.1, ease: "easeOut" }}
                                        className="fixed top-20 left-0 w-full bg-white shadow-xl border-b rounded-b-[2rem] z-50 origin-top max-h-[calc(100vh-5rem)] overflow-y-auto"
                                    >
                                        <div className="container mx-auto grid grid-cols-12 gap-0 min-h-[400px]">
                                            {/* Left Column: List Items */}
                                            <div className="col-span-7 p-10 bg-white pl-50">
                                                <h4 className="mb-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                                    WHY CHOOSE WAZO?
                                                </h4>
                                                <div className="grid grid-cols-1 gap-6">
                                                    {WHY_WAZO_MENU_DATA.items.map((item) => (
                                                        <Link href={item.href} key={item.title} className="flex gap-4 group">
                                                            <div className="flex-shrink-0 mt-1 h-12 w-12 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-primary/10 group-hover:border-blue-100 transition-colors">
                                                                {item.icon}
                                                            </div>
                                                            <div>
                                                                <h5 className="text-lg font-semibold text-primary group-hover:text-primary flex items-center gap-1">
                                                                    {item.title}
                                                                    <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                                                                </h5>
                                                                <p className="mt-1 text-slate-500 max-w-xl">{item.description}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right Column: Featured */}
                                            <div className="col-span-5 bg-slate-50 p-10 border-l border-slate-100">
                                                <h4 className="mb-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                                    FEATURED
                                                </h4>
                                                <div className="w-[70%] bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                                    <div className="h-40 bg-slate-200 w-full relative">
                                                        {/* Placeholder for image */}
                                                        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                                            [Image Placeholder]
                                                        </div>
                                                    </div>
                                                    <div className="p-6">
                                                        <h3 className="font-bold text-lg text-[#1e1e4b] mb-2">{WHY_WAZO_MENU_DATA.featured.title}</h3>
                                                        <p className="text-slate-500 mb-6 text-sm">
                                                            {WHY_WAZO_MENU_DATA.featured.description}
                                                        </p>
                                                        <Button variant="outline" className="w-full text-primary border-blue-200 hover:bg-primary/10">
                                                            {WHY_WAZO_MENU_DATA.featured.buttonText}
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-base font-medium text-[#1e1e4b] bg-transparent hover:bg-slate-100 hover:cursor-pointer">
                                    Customers
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.1, ease: "easeOut" }}
                                        className="fixed top-20 left-0 w-full bg-white shadow-xl border-b rounded-b-[2rem] z-50 origin-top max-h-[calc(100vh-5rem)] overflow-y-auto"
                                    >
                                        <div className="container mx-auto grid grid-cols-12 gap-0 min-h-[400px] pl-50">
                                            {/* Left Column: List Items */}
                                            <div className="col-span-7 p-10">
                                                <h4 className="mb-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                                    A PARTNER ON YOUR PEOPLE SUCCESS JOURNEY.
                                                </h4>
                                                <div className="grid grid-cols-1 gap-6">
                                                    {CUSTOMERS_MENU_DATA.items.map((item) => (
                                                        <Link href={item.href} key={item.title} className="flex gap-4 group">
                                                            <div className={`flex-shrink-0 mt-1 h-12 w-12 flex items-center justify-center rounded-lg ${item.iconBg} transition-colors opacity-90 group-hover:opacity-100`}>
                                                                {item.icon}
                                                            </div>
                                                            <div>
                                                                <h5 className="text-lg font-semibold text-primary group-hover:text-primary flex items-center gap-1">
                                                                    {item.title}
                                                                    <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                                                                </h5>
                                                                <p className="mt-1 text-slate-500 max-w-xl">{item.description}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right Column: Featured */}
                                            <div className="col-span-5 bg-slate-50 p-10 border-l border-slate-100">
                                                <h4 className="mb-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                                    FEATURED
                                                </h4>
                                                <div className="w-[70%] bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                                    <div className="h-40 bg-gradient-to-br from-primary to-indigo-600 w-full relative flex items-center justify-center">
                                                        {/* Placeholder for badge */}
                                                        <div className="bg-white p-2 rounded shadow-sm text-center">
                                                            <span className="block text-[10px] uppercase font-bold text-slate-400">Badge</span>
                                                            <div className="h-8 w-8 bg-primary rounded-full mx-auto mt-1"></div>
                                                        </div>
                                                    </div>
                                                    <div className="p-6">
                                                        <h3 className="font-bold text-lg text-primary mb-2">{CUSTOMERS_MENU_DATA.featured.title}</h3>
                                                        <p className="text-slate-500 mb-6 text-sm">
                                                            {CUSTOMERS_MENU_DATA.featured.description}
                                                        </p>
                                                        <Button variant="outline" className="w-full text-primary border-blue-200 hover:bg-primary/10">
                                                            {CUSTOMERS_MENU_DATA.featured.buttonText}
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/resources" className={navigationMenuTriggerStyle() + " bg-transparent hover:bg-slate-100 hover:cursor-pointer"}>
                                        Blogs
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/pricing" className={navigationMenuTriggerStyle() + " bg-transparent hover:bg-slate-100 hover:cursor-pointer"}>
                                        Pricing
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Desktop Right Actions */}
                <div className="hidden lg:flex items-center space-x-4">
                    <Link href="/signin" className="flex items-center text-sm font-medium text-[#1e1e4b] hover:text-primary">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Sign in
                    </Link>
                    <Button variant="ghost" size="icon" className="text-[#1e1e4b]">
                        <Globe className="h-5 w-5" />
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
                        Contact sales
                    </Button>
                </div>

                {/* Mobile Menu Trigger */}
                <div className="lg:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetContent side="right" className="p-0 w-full sm:max-w-sm border-l h-full">
                            <MobileMenu onClose={() => setIsOpen(false)} />
                        </SheetContent>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                    </Sheet>
                </div>
            </div>
        </header >
    );
}
