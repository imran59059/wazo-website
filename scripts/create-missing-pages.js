const fs = require('fs');
const path = require('path');

const pages = [
    // Why Wazo
    { path: 'src/app/the-wazo-effect/page.tsx', category: 'Why Wazo?', title: 'The Wazo Effect', desc: 'Developing organisations and individuals in parallel.' },
    { path: 'src/app/our-story/page.tsx', category: 'Why Wazo?', title: 'Our Story', desc: 'Founded by engineers and psychologists.' },
    { path: 'src/app/scientific-foundation/page.tsx', category: 'Why Wazo?', title: 'Scientific Foundation', desc: 'Research-backed employee engagement.' },
    { path: 'src/app/webinar/page.tsx', category: 'Why Wazo?', title: 'Webinars', desc: 'Learn how Wazo can boost engagement.' },

    // Customers
    { path: 'src/app/customer-success/page.tsx', category: 'Customers', title: 'Customer Success', desc: 'Expert help building world-class programs.' },
    { path: 'src/app/academy/page.tsx', category: 'Customers', title: 'Wazo Academy', desc: 'Learn to make the most of the Wazo platform.' },
    { path: 'src/app/change-management/page.tsx', category: 'Customers', title: 'Change Management', desc: 'Drive adoption of Wazo in your organisation.' },
    { path: 'src/app/customer-stories/page.tsx', category: 'Customers', title: 'Customer Stories', desc: 'See how others succeed with Wazo.' },
    { path: 'src/app/certification/page.tsx', category: 'Customers', title: 'Wazo Certification', desc: 'Showcase your commitment to EX.' },

    // General
    { path: 'src/app/pricing/page.tsx', category: 'Wazo AI', title: 'Pricing', desc: 'Simple, transparent pricing for every stage.' },
    { path: 'src/app/signin/page.tsx', category: 'Account', title: 'Sign In', desc: 'Access your Wazo dashboard.' },
    { path: 'src/app/contact/page.tsx', category: 'Contact', title: 'Contact Sales', desc: 'Get in touch with our team.' },
    { path: 'src/app/resources/page.tsx', category: 'Resources', title: 'Blogs & Resources', desc: 'Insights on culture and performance.' },
    { path: 'src/app/platform/page.tsx', category: 'Platform', title: 'Wazo Platform', desc: 'The complete employee engagement solution.' },
];

const template = (category, title, desc) => `"use client";

import React from "react";
import { FeatureHero } from "@/components/sections/FeatureHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col">
            <FeatureHero 
                category="${category}"
                title="${title}"
                description="${desc}"
            />
            <SectionWrapper>
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-serif text-primary mb-6">${title} Coming Soon</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We are currently building this page to bring you the best experience.
                            ${desc}
                        </p>
                    </div>
                </section>
            </SectionWrapper>
        </main>
    );
}
`;

pages.forEach(page => {
    const fullPath = path.join(process.cwd(), page.path);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    // Only write if file doesn't exist to avoid overwriting custom work if any
    if (!fs.existsSync(fullPath)) {
        fs.writeFileSync(fullPath, template(page.category, page.title, page.desc));
        console.log(`Created ${page.path}`);
    } else {
        console.log(`Skipped ${page.path} (already exists)`);
    }
});
