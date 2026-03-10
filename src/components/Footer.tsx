"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Send, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("submitting");
        // Simulate Zoho API integeration delay
        setTimeout(() => {
            setStatus("success");
            setEmail("");
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <footer id="contact" className="bg-primary pt-24 pb-8 text-white relative overflow-hidden">
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.05)_0%,transparent_60%)] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-3xl font-bold">
                                <span className="text-white">SriRam</span>
                                <span className="text-accent ml-1">IAS</span>
                            </span>
                        </Link>
                        <p className="text-gray-300 leading-relaxed">
                            India's premier UPSC coaching institute with over 35 years of legacy in shaping civil servants. Join us to transform your aspiration into reality.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-accent mb-6 uppercase tracking-wider">Quick Links</h4>
                        <ul className="flex flex-col gap-3">
                            {['About Us', 'Director\'s Message', 'Faculty', 'Student Testimonials', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all inline-block">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="text-lg font-bold text-accent mb-6 uppercase tracking-wider">Our Courses</h4>
                        <ul className="flex flex-col gap-3">
                            {['GS Foundation Course (Offline)', 'GS Foundation Course (Online)', 'Optional Subjects', 'Test Series 2026', 'Interview Guidance'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all inline-block">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact / Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold text-accent mb-6 uppercase tracking-wider">Newsletter</h4>
                        <p className="text-gray-300 mb-4 text-sm">Subscribe to get daily current affairs and event updates directly in your inbox.</p>

                        <form onSubmit={handleSubscribe} className="mb-8 relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-white/10 border border-white/20 rounded-full py-3 pl-5 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                                disabled={status === "submitting" || status === "success"}
                            />
                            <button
                                type="submit"
                                disabled={status === "submitting" || status === "success"}
                                className="absolute right-1 top-1 w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors disabled:opacity-50"
                            >
                                {status === "success" ? <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>✓</motion.div> : <Send size={16} className={status === "submitting" ? "animate-pulse" : ""} />}
                            </button>
                            {status === "success" && <p className="text-green-400 text-xs mt-2 absolute">Successfully subscribed!</p>}
                        </form>

                        <div className="flex flex-col gap-3 text-sm text-gray-300">
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="text-accent mt-1 shrink-0" />
                                <span>22-B, Pusa Road, Old Rajinder Nagar, New Delhi - 110060</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-accent shrink-0" />
                                <span>+91-11-25825591</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-accent shrink-0" />
                                <span>info@sriramasias.com</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} SriRam IAS. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Refund Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
