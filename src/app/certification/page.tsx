"use client";

import React from "react";
import { FeatureHero } from "@/components/sections/FeatureHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col">
            <FeatureHero 
                category="Customers"
                title="Wazo Certification"
                description="Showcase your commitment to EX."
            />
            <SectionWrapper>
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-serif text-primary mb-6">Wazo Certification Coming Soon</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We are currently building this page to bring you the best experience.
                            Showcase your commitment to EX.
                        </p>
                    </div>
                </section>
            </SectionWrapper>
        </main>
    );
}
