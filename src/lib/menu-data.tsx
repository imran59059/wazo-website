import React from "react";
import {
    TrendingUp,
    MessageCircle,
    Zap,
    Target,
    Trophy,
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
    LayoutGrid,
    FileBarChart,
    Medal,
    User,
    Hexagon,
    Award,
    Headphones,
    GraduationCap,
    ArrowLeftRight,
} from "lucide-react";

export const PLATFORM_MENU_DATA = {
    Engagement: {
        description: "Build a high-performing culture with data-driven insights.",
        icon: <TrendingUp className="h-5 w-5 text-primary" />,
        items: [
            { name: "Survey", icon: <FileText className="h-4 w-4 text-slate-500" />, href: "/engagement/survey" },
            { name: "Post", icon: <Megaphone className="h-4 w-4 text-slate-500" />, href: "/engagement/post" },
            { name: "Insights", icon: <BarChart className="h-4 w-4 text-slate-500" />, href: "/engagement/insights" },
            { name: "Recognition", icon: <Medal className="h-4 w-4 text-slate-500" />, href: "/engagement/recognition" },
            { name: "Feed", icon: <Rss className="h-4 w-4 text-slate-500" />, href: "/engagement/feed" },
        ],
        featured: {
            title: "Engagement",
            description: "Measure what matters. Improve employee engagement with real-time feedback.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
            href: "/engagement"
        }
    },
    Voice: {
        description: "Empower your employees to speak up safely.",
        icon: <MessageCircle className="h-5 w-5 text-primary" />,
        items: [
            { name: "Whistleblow", icon: <AlertTriangle className="h-4 w-4 text-slate-500" />, href: "/voice/whistleblow" },
            { name: "Pulse", icon: <Activity className="h-4 w-4 text-slate-500" />, href: "/voice/pulse" },
            { name: "Chat", icon: <MessageSquare className="h-4 w-4 text-slate-500" />, href: "/voice/chat" },
            { name: "Feedback", icon: <MessageCircle className="h-4 w-4 text-slate-500" />, href: "/voice/feedback" },
        ],
        featured: {
            title: "Voice",
            description: "A safe space for every voice. Anonymous reporting and open dialogue.",
            image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80",
            href: "/voice"
        }
    },
    Growth: {
        description: "Develop your people and future-proof your organization.",
        icon: <Zap className="h-5 w-5 text-primary" />,
        items: [
            { name: "1:1", icon: <Users className="h-4 w-4 text-slate-500" />, href: "/growth/one-on-one" },
            { name: "360", icon: <RefreshCcw className="h-4 w-4 text-slate-500" />, href: "/growth/360" },
            { name: "Feedback", icon: <MessageSquare className="h-4 w-4 text-slate-500" />, href: "/growth/feedback" },
        ],
        featured: {
            title: "Growth",
            description: "Continuous development. Turn feedback into actionable growth plans.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
            href: "/growth"
        }
    },
    Performance: {
        description: "Align individual goals with company strategy.",
        icon: <Target className="h-5 w-5 text-primary" />,
        items: [
            { name: "Goals", icon: <CheckSquare className="h-4 w-4 text-slate-500" />, href: "/performance/goals" },
            { name: "Tasks", icon: <Briefcase className="h-4 w-4 text-slate-500" />, href: "/performance/tasks" },
            { name: "Manager Hub", icon: <LayoutGrid className="h-4 w-4 text-slate-500" />, href: "/performance/manager-hub" },
            { name: "Reports", icon: <FileBarChart className="h-4 w-4 text-slate-500" />, href: "/performance/reports" },
        ],
        featured: {
            title: "Performance",
            description: "High performance, simplified. Clear goals, continuous tracking.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            href: "/performance"
        }
    },
    Achievement: {
        description: "Celebrate success and recognize great work.",
        icon: <Trophy className="h-5 w-5 text-primary" />,
        items: [
            { name: "Awards", icon: <Medal className="h-4 w-4 text-slate-500" />, href: "/achievement/awards" },
            { name: "Profile", icon: <User className="h-4 w-4 text-slate-500" />, href: "/achievement/profile" },
            { name: "Forte", icon: <Hexagon className="h-4 w-4 text-slate-500" />, href: "/achievement/forte" },
            { name: "Badges", icon: <Award className="h-4 w-4 text-slate-500" />, href: "/achievement/badges" },
        ],
        featured: {
            title: "Achievement",
            description: "Recognize excellence. build a culture of appreciation.",
            image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80",
            href: "/achievement"
        }
    }
};

export const WHY_WAZO_MENU_DATA = {
    items: [
        {
            title: "The Wazo effect",
            description: "Wazo has a unique approach to employee engagement, developing organisations and individuals in parallel.",
            icon: <Target className="h-6 w-6 text-slate-700" />,
            href: "/the-wazo-effect"
        },
        {
            title: "Our story",
            description: "Founded by engineers and psychologists, Wazo combines the best of technology with behavioural science.",
            icon: <Users className="h-6 w-6 text-slate-700" />,
            href: "/our-story"
        },
        {
            title: "Scientific foundation",
            description: "Learn about the research behind employee engagement and the validity and reliability of the Wazo platform.",
            icon: <FileText className="h-6 w-6 text-slate-700" />,
            href: "/scientific-foundation"
        }
    ],
    featured: {
        title: "Increase engagement with Wazo",
        description: "Watch our product overview and learn how Wazo can boost employee engagement and performance.",
        buttonText: "Join webinar",
        image: "/images/webinar-preview.jpg", // Placeholder
        href: "/webinar"
    }
};

export const CUSTOMERS_MENU_DATA = {
    items: [
        {
            title: "Customer Success",
            description: "Get expert help building a world-class employee engagement program.",
            icon: <Headphones className="h-6 w-6 text-white" />,
            href: "/customer-success",
            iconBg: "bg-primary" // Dark blue background for icons
        },
        {
            title: "Wazo Academy",
            description: "Learn how to make the most of the Wazo platform.",
            icon: <GraduationCap className="h-6 w-6 text-white" />,
            href: "/academy",
            iconBg: "bg-primary"
        },
        {
            title: "Change Management",
            description: "Drive adoption of Wazo in your organisation.",
            icon: <ArrowLeftRight className="h-6 w-6 text-white" />,
            href: "/change-management",
            iconBg: "bg-primary"
        },
        {
            title: "Customer stories",
            description: "Our customers share their experiences with Wazo.",
            icon: <MessageSquare className="h-6 w-6 text-white" />,
            href: "/customer-stories",
            iconBg: "bg-primary"
        }
    ],
    featured: {
        title: "Wazo Certification",
        description: "Showcase your commitment to an exceptional employee experience with Wazo's certification badges.",
        buttonText: "Read more",
        image: "/images/certification-badge.jpg", // Placeholder
        href: "/certification"
    }
};

export type PlatformCategory = keyof typeof PLATFORM_MENU_DATA;
