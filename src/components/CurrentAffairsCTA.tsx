"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Calendar, BookOpen } from "lucide-react";

const recentPosts = [
    {
        title: "The Impact of G20 Summit on India's Foreign Policy",
        date: "March 11, 2026",
        category: "International Relations",
        icon: Globe
    },
    {
        title: "Digital Personal Data Protection Act: An Analysis",
        date: "March 10, 2026",
        category: "Polity & Governance",
        icon: FileText
    },
    {
        title: "RBI's New Monetary Policy Framework Explained",
        date: "March 9, 2026",
        category: "Economy",
        icon: BookOpen
    }
];

// Quick workaround for Globe icon (we'll just use BookOpen if Globe not imported properly)
function Globe(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" x2="22" y1="12" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    );
}

export default function CurrentAffairsCTA() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: "radial-gradient(#C9A227 1px, transparent 1px)", backgroundSize: "40px 40px" }}
            ></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 text-white">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/20">
                            Free Resources
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Master Current Affairs <br />
                            <span className="text-accent">Daily</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
                            Stay ahead in your UPSC preparation with our meticulously curated daily current affairs. Get expert analysis of The Hindu, Indian Express, and PIB.
                        </p>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#current-affairs"
                            className="inline-flex items-center justify-center px-8 py-4 font-bold text-primary bg-accent rounded-full hover:bg-yellow-500 transition-colors shadow-lg shadow-accent/30"
                        >
                            Start Learning Free
                            <ArrowRight className="ml-2" size={20} />
                        </motion.a>
                    </motion.div>
                </div>

                <div className="lg:w-1/2 w-full">
                    <div className="flex flex-col gap-4">
                        {recentPosts.map((post, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-colors cursor-pointer group flex items-start gap-4"
                            >
                                <div className="bg-accent/20 p-3 rounded-xl text-accent group-hover:bg-accent group-hover:text-primary transition-colors shrink-0">
                                    <post.icon size={24} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 text-sm text-gray-300 mb-2">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-accent"></span>
                                        <span className="text-accent">{post.category}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                                        {post.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
