"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const toppers = [
    { name: "Shruti Sharma", rank: "AIR 1", year: "2021", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" },
    { name: "Aditya Srivastava", rank: "AIR 1", year: "2023", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
    { name: "Ishita Kishore", rank: "AIR 1", year: "2022", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" },
    { name: "Shubham Kumar", rank: "AIR 1", year: "2020", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
    { name: "Kanishak Kataria", rank: "AIR 1", year: "2018", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
];

function Counter({ end, suffix = "", label }: { end: number, suffix?: string, label: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, end]);

    return (
        <div ref={ref} className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {count}{suffix}
            </div>
            <div className="text-white font-medium uppercase tracking-wider text-sm">{label}</div>
        </div>
    );
}

export default function Results() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section id="results" className="py-24 bg-primary text-white overflow-hidden relative" ref={containerRef}>
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block"
                    >
                        A Tradition of Success
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Celebrating Our Successful Selections in UPSC
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-300"
                    >
                        Year after year, our students break records and secure top ranks in the country.
                    </motion.p>
                </div>

                {/* Counters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <Counter end={3500} suffix="+" label="Total Selections" />
                    <Counter end={150} suffix="+" label="In Top 100" />
                    <Counter end={35} suffix="+" label="Years of Excellence" />
                </div>
            </div>

            {/* Horizontal Scrolling Toppers */}
            <div className="w-full relative py-10 flex overflow-hidden group">
                <motion.div style={{ x }} className="flex gap-8 px-6 w-max">
                    {[...toppers, ...toppers, ...toppers].map((topper, idx) => (
                        <div
                            key={idx}
                            className="w-[300px] shrink-0 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 p-4 transition-transform hover:scale-105"
                        >
                            <div className="relative h-[250px] w-full rounded-xl overflow-hidden mb-4">
                                <img
                                    src={topper.image}
                                    alt={topper.name}
                                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                    <span className="inline-block px-3 py-1 bg-accent text-primary font-bold text-sm rounded-full mb-1">
                                        {topper.rank}
                                    </span>
                                    <div className="text-white font-semibold text-xs opacity-80">UPSC {topper.year}</div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-center text-white">{topper.name}</h3>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
