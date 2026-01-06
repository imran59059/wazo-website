import React from "react";

const stats = [
    {
        value: "21%",
        label: "greater profitability",
        color: "text-emerald-500",
    },
    {
        value: "41%",
        label: "fewer sick days",
        color: "text-primary/80",
    },
    {
        value: "59%",
        label: "lower employee turnover",
        color: "text-rose-400",
    },
    {
        value: "200%",
        label: "higher customer loyalty",
        color: "text-primary",
    },
];

export function HeroStats() {
    return (
        <section className="w-full py-12 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center rounded-xl bg-slate-50 p-8 text-center shadow-sm transition-transform hover:scale-105"
                        >
                            <span className={`text-5xl font-bold ${stat.color} mb-2`}>
                                {stat.value}
                            </span>
                            <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
