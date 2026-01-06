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
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// Platform Menu Data Configuration
const PLATFORM_MENU_DATA = {
    Engagement: {
        description: "Get real-time insights with pulse surveys.",
        icon: <TrendingUp className="h-5 w-5 text-blue-500" />,
        items: [
            { name: "Survey", icon: <FileText className="h-4 w-4 text-slate-500" /> },
            { name: "Post", icon: <Megaphone className="h-4 w-4 text-slate-500" /> },
            { name: "Insights", icon: <BarChart className="h-4 w-4 text-slate-500" /> },
            { name: "Recognition", icon: <Medal className="h-4 w-4 text-slate-500" /> },
            { name: "Feed", icon: <Rss className="h-4 w-4 text-slate-500" /> },
        ],
    },
    Voice: {
        description: "Empower your employees to speak up safely.",
        icon: <MessageCircle className="h-5 w-5 text-indigo-500" />,
        items: [
            { name: "Whistle Blow", icon: <AlertTriangle className="h-4 w-4 text-slate-500" /> },
            { name: "Pulse", icon: <Activity className="h-4 w-4 text-slate-500" /> },
            { name: "Chat", icon: <MessageSquare className="h-4 w-4 text-slate-500" /> },
            { name: "Feedback", icon: <MessageCircle className="h-4 w-4 text-slate-500" /> },
        ],
    },
    Growth: {
        description: "Align around goals and support personal growth.",
        icon: <Zap className="h-5 w-5 text-yellow-500" />,
        items: [
            { name: "1:1", icon: <Users className="h-4 w-4 text-slate-500" /> },
            { name: "360", icon: <RefreshCcw className="h-4 w-4 text-slate-500" /> },
            { name: "Feedback", icon: <MessageSquare className="h-4 w-4 text-slate-500" /> },
        ],
    },
    Performance: {
        description: "Track progress and optimize performance.",
        icon: <Target className="h-5 w-5 text-red-500" />,
        items: [
            { name: "Goal", icon: <Target className="h-4 w-4 text-slate-500" /> },
            { name: "Task", icon: <CheckSquare className="h-4 w-4 text-slate-500" /> },
            { name: "Manager Hub", icon: <Briefcase className="h-4 w-4 text-slate-500" /> },
            { name: "Reports", icon: <FileBarChart className="h-4 w-4 text-slate-500" /> },
        ],
    },
    Achievement: {
        description: "Celebrate wins and build a culture of appreciation.",
        icon: <Trophy className="h-5 w-5 text-amber-500" />,
        items: [
            { name: "Award", icon: <Award className="h-4 w-4 text-slate-500" /> },
            { name: "Profile", icon: <User className="h-4 w-4 text-slate-500" /> },
            { name: "Forte", icon: <Hexagon className="h-4 w-4 text-slate-500" /> },
            { name: "Badges", icon: <Medal className="h-4 w-4 text-slate-500" /> },
        ],
    },
};

type PlatformCategory = keyof typeof PLATFORM_MENU_DATA;

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeCategory, setActiveCategory] = React.useState<PlatformCategory>("Engagement");

    return (
        <header className="sticky w-full mx-auto border bg-background/80 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-background/60">
            <div className="px-6 flex h-20 items-center justify-between">
                {/* Logo */}
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="flex items-center text-xl font-bold text-[#1e1e4b]">
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
                                <NavigationMenuTrigger className="text-base font-medium text-[#1e1e4b] bg-transparent hover:bg-slate-100">
                                    Platform
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="fixed top-20 left-0 w-full bg-white shadow-xl border-b z-50"
                                    >
                                        <div className="container mx-auto grid grid-cols-12 gap-0 min-h-[400px]">
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
                                                                    ? "bg-white shadow-sm ring-1 ring-slate-200 text-[#1e1e4b]"
                                                                    : "text-slate-600 hover:bg-slate-200/50 hover:text-[#1e1e4b]"
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
                                                                {activeCategory === category && (
                                                                    <span className="block text-xs text-slate-500 font-normal mt-0.5 animate-in fade-in slide-in-from-left-1 duration-300">
                                                                        {PLATFORM_MENU_DATA[category].description}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            {activeCategory === category && (
                                                                <ArrowRight className="h-4 w-4 text-blue-500 animate-in fade-in slide-in-from-left-2" />
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>

                                                <div className="mt-6 pt-4 border-t border-slate-200">
                                                    <Link
                                                        href="/platform"
                                                        className="group flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
                                                    >
                                                        <LayoutGrid className="mr-2 h-4 w-4" />
                                                        See all features
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* Middle Column: Dynamic Sub-items */}
                                            <div className="col-span-6 p-8 bg-white flex flex-col justify-center">
                                                <div className="animate-in fade-in zoom-in-95 duration-200" key={activeCategory}>
                                                    <h4 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#1e1e4b]">
                                                        {PLATFORM_MENU_DATA[activeCategory].icon}
                                                        <span>{activeCategory} Features</span>
                                                    </h4>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {PLATFORM_MENU_DATA[activeCategory].items.map((item) => (
                                                            <Link href="#" key={item.name} className="flex items-center gap-3 rounded-lg border border-slate-100 p-3 hover:border-blue-100 hover:bg-blue-50/50 transition-colors group">
                                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 group-hover:bg-blue-100 transition-colors">
                                                                    {/* Cloning icon to apply hover color logic if needed, currently passing simpler icons */}
                                                                    {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, {
                                                                        className: "h-5 w-5 text-slate-500 group-hover:text-blue-600 transition-colors"
                                                                    })}
                                                                </div>
                                                                <div className="flex-1">
                                                                    <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">{item.name}</span>
                                                                </div>
                                                                <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Column: Featured (Static or Contextual) */}
                                            <div className="col-span-3 bg-gradient-to-b from-slate-50 to-white p-6 border-l border-slate-100 flex flex-col justify-between">
                                                <div>
                                                    <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                                        Recommended
                                                    </h4>
                                                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                                        <div className="mb-3 h-24 w-full rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center overflow-hidden relative">
                                                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                                                            <Trophy className="text-white/80 h-10 w-10" />
                                                        </div>
                                                        <h5 className="font-semibold text-[#1e1e4b]">Boost Engagement</h5>
                                                        <p className="mt-1 text-xs text-slate-500">
                                                            Learn how 500+ companies improved their eNPS scores.
                                                        </p>
                                                        <Button size="sm" variant="secondary" className="mt-3 w-full text-xs">
                                                            Read Case Study
                                                        </Button>
                                                    </div>
                                                </div>

                                                <div className="text-center p-4 bg-blue-50 rounded-lg">
                                                    <p className="text-xs font-medium text-blue-800 mb-2">Ready to start?</p>
                                                    <Button className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-white">Get a Demo</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/why-eletive" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-transparent hover:bg-slate-100"}>
                                        Why Eletive?
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/customers" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-transparent hover:bg-slate-100"}>
                                        Customers
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/resources" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-transparent hover:bg-slate-100"}>
                                        Resources
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/pricing" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-transparent hover:bg-slate-100"}>
                                        Pricing
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Desktop Right Actions */}
                <div className="hidden lg:flex items-center space-x-4">
                    <Link href="/signin" className="flex items-center text-sm font-medium text-[#1e1e4b] hover:text-blue-600">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Sign in
                    </Link>
                    <Button variant="ghost" size="icon" className="text-[#1e1e4b]">
                        <Globe className="h-5 w-5" />
                    </Button>
                    <Button className="bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold">
                        Contact sales
                    </Button>
                </div>

                {/* Mobile Menu Trigger */}
                <div className="lg:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetContent side="right">
                            <nav className="flex flex-col space-y-4 mt-8">
                                <Link href="/platform" className="text-lg font-semibold">Platform</Link>
                                <Link href="/why-eletive" className="text-lg font-semibold">Why Eletive?</Link>
                                <Link href="/customers" className="text-lg font-semibold">Customers</Link>
                                <Link href="/pricing" className="text-lg font-semibold">Pricing</Link>
                            </nav>
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
