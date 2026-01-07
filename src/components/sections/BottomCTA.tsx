"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export function BottomCTA() {
    return (
        <section className="bg-white py-24 text-center">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl space-y-8">
                    <h2 className="font-serif text-4xl font-medium text-[#1e1e4b] md:text-6xl">
                        Invest in your people and create <span className="text-primary italic">impact</span>.
                    </h2>
                    <p className="text-xl text-slate-600">
                        Join 6,500+ companies building a better world of work.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 min-[400px]:flex-row">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white">
                            Book a demo
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-slate-200 text-[#1e1e4b] hover:bg-slate-50">
                            See how it works
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
