"use client";

import React from "react";
import { FeatureHero } from "@/components/sections/FeatureHero";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col">
            <FeatureHero 
                category="Growth"
                title="Growth Feedback"
                description="Focus on personal and professional development."
            />
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif text-primary mb-6">Detailed Features Coming Soon</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We are currently building out the detailed feature breakdown for Growth Feedback. 
                        Stay tuned for updates or book a demo to see it in action.
                    </p>
                </div>
            </section>
        </main>
    );
}
