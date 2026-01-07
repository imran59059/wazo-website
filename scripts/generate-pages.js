const fs = require('fs');
const path = require('path');

const pages = [
    { path: 'src/app/engagement/survey/page.tsx', category: 'Engagement', title: 'Pulse Surveys', desc: 'Real-time insights into employee sentiment.' },
    { path: 'src/app/engagement/post/page.tsx', category: 'Engagement', title: 'Post', desc: 'Share updates and keep your team aligned.' },
    { path: 'src/app/engagement/insights/page.tsx', category: 'Engagement', title: 'Deep Insights', desc: 'Analytics that drive better people decisions.' },
    { path: 'src/app/engagement/recognition/page.tsx', category: 'Engagement', title: 'Recognition', desc: 'Celebrate wins and boost morale.' },
    { path: 'src/app/engagement/feed/page.tsx', category: 'Engagement', title: 'Activity Feed', desc: 'Stay connected with what matters.' },

    { path: 'src/app/voice/whistleblow/page.tsx', category: 'Voice', title: 'Whistleblowing', desc: 'Safe, anonymous reporting channel.' },
    { path: 'src/app/voice/pulse/page.tsx', category: 'Voice', title: 'Pulse', desc: 'Frequent, lightweight feedback loops.' },
    { path: 'src/app/voice/chat/page.tsx', category: 'Voice', title: 'Chat', desc: 'Open secure communication channels.' },
    { path: 'src/app/voice/feedback/page.tsx', category: 'Voice', title: 'Feedback', desc: 'Constructive feedback for everyone.' },

    { path: 'src/app/growth/one-on-one/page.tsx', category: 'Growth', title: '1-on-1s', desc: 'Meaningful conversations between managers and employees.' },
    { path: 'src/app/growth/360/page.tsx', category: 'Growth', title: '360 Feedback', desc: 'Comprehensive feedback from all angles.' },
    { path: 'src/app/growth/feedback/page.tsx', category: 'Growth', title: 'Growth Feedback', desc: 'Focus on personal and professional development.' },

    { path: 'src/app/performance/goals/page.tsx', category: 'Performance', title: 'Goals (OKRs)', desc: 'Align individual goals with company strategy.' },
    { path: 'src/app/performance/tasks/page.tsx', category: 'Performance', title: 'Tasks', desc: 'Track daily progress and productivity.' },
    { path: 'src/app/performance/manager-hub/page.tsx', category: 'Performance', title: 'Manager Hub', desc: 'Everything managers need in one place.' },
    { path: 'src/app/performance/reports/page.tsx', category: 'Performance', title: 'Performance Reports', desc: 'Data-driven performance reviews.' },

    { path: 'src/app/achievement/awards/page.tsx', category: 'Achievement', title: 'Awards', desc: 'Recognize outstanding contributions.' },
    { path: 'src/app/achievement/profile/page.tsx', category: 'Achievement', title: 'Employee Profile', desc: 'Showcase achievements and skills.' },
    { path: 'src/app/achievement/forte/page.tsx', category: 'Achievement', title: 'Forte', desc: 'Highlight unique strengths.' },
    { path: 'src/app/achievement/badges/page.tsx', category: 'Achievement', title: 'Badges', desc: 'Gamify success with digital badges.' },
];

const template = (category, title, desc) => `"use client";

import React from "react";
import { FeatureHero } from "@/components/sections/FeatureHero";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col">
            <FeatureHero 
                category="${category}"
                title="${title}"
                description="${desc}"
            />
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif text-primary mb-6">Detailed Features Coming Soon</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We are currently building out the detailed feature breakdown for ${title}. 
                        Stay tuned for updates or book a demo to see it in action.
                    </p>
                </div>
            </section>
        </main>
    );
}
`;

pages.forEach(page => {
    const fullPath = path.join(process.cwd(), page.path);
    // Ensure directory exists just in case mkdir didn't catch everything or failed silently
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(fullPath, template(page.category, page.title, page.desc));
    console.log(`Created ${page.path}`);
});
