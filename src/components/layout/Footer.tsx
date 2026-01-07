"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, ShieldCheck, Globe } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">

                    {/* Column 1: Logo */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="flex h-8 w-8 items-center justify-center bg-transparent">
                                <Image
                                    src="/logo/wazo-logo.png"
                                    alt="WAZO Logo"
                                    width={32}
                                    height={32}
                                    className="invert brightness-0"
                                />
                            </div>
                            <span className="text-2xl font-bold">Wazo</span>
                        </Link>
                    </div>

                    {/* Column 2: Platform */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Platform</h4>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li><Link href="/engagement" className="hover:text-white transition-colors">Employee Engagement</Link></li>
                            <li><Link href="/performance" className="hover:text-white transition-colors">Performance Management</Link></li>
                            <li><Link href="/self-leadership" className="hover:text-white transition-colors">Self-leadership</Link></li>
                            <li><Link href="/advanced-people-management" className="hover:text-white transition-colors">Advanced people management</Link></li>
                            <li><Link href="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
                            <li><Link href="/platform" className="hover:text-white transition-colors">See all features</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Why Wazo? */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Why Wazo?</h4>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li><Link href="/why-wazo/effect" className="hover:text-white transition-colors">The Wazo effect</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">Our story</Link></li>
                            <li><Link href="/science" className="hover:text-white transition-colors">Scientific foundation</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Resources */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Resources</h4>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/library" className="hover:text-white transition-colors">Library</Link></li>
                            <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link href="/newsletter" className="hover:text-white transition-colors">Newsletter</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Company */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/partnership" className="hover:text-white transition-colors">Partnership</Link></li>
                            <li><Link href="/contact/sales" className="hover:text-white transition-colors">Contact Sales</Link></li>
                            <li><Link href="/contact/finance" className="hover:text-white transition-colors">Contact Finance</Link></li>
                        </ul>
                    </div>

                    {/* Column 6: Legal information */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white max-w-[150px] leading-tight">Legal information</h4>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie policy</Link></li>
                            <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Badges Section */}
                <div className="flex justify-end gap-6 mb-12">
                    <div className="flex items-center gap-2 text-white">
                        <Globe className="h-8 w-8" />
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">ISO 27001</span>
                            <span className="text-[10px] text-slate-400">CERTIFIED</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <ShieldCheck className="h-8 w-8" />
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">GDPR</span>
                            <span className="text-[10px] text-slate-400">COMPLIANT</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <Link href="#" className="bg-white p-2 rounded-full hover:bg-white/90 transition-colors">
                            <Linkedin className="h-5 w-5 text-primary" />
                        </Link>
                        <Link href="#" className="bg-white p-2 rounded-full hover:bg-white/90 transition-colors">
                            <Twitter className="h-5 w-5 text-primary" />
                        </Link>
                        <Link href="#" className="bg-white p-2 rounded-full hover:bg-white/90 transition-colors">
                            <Facebook className="h-5 w-5 text-primary" />
                        </Link>
                        <Link href="#" className="bg-white p-2 rounded-full hover:bg-white/90 transition-colors">
                            <Instagram className="h-5 w-5 text-primary" />
                        </Link>
                    </div>

                    <p className="text-slate-300 text-sm">© 2025 Wazo</p>
                </div>
            </div>
        </footer>
    );
}
