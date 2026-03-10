"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
    "Over 35 Years of Teaching Excellence",
    "Top-tier Faculty with Proven Track Record",
    "Comprehensive Study Material & Test Series",
    "Personalized Mentorship for every Aspiring Student"
];

const staggerContainer: any = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const textVariant: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AboutUs() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side: Images with Parallax */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center">
                        {/* Background Shape */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-10"></div>

                        <motion.div style={{ y: y1 }} className="absolute z-20 left-0 top-10 w-[60%] shadow-2xl rounded-2xl overflow-hidden border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000"
                                alt="Students studying"
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>

                        <motion.div style={{ y: y2 }} className="absolute z-30 right-0 bottom-10 w-[55%] shadow-2xl rounded-2xl overflow-hidden border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000"
                                alt="Teacher explaining"
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>

                        {/* Experience Badge */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-primary w-32 h-32 rounded-full flex flex-col items-center justify-center p-4 text-center shadow-xl border-4 border-white"
                        >
                            <span className="text-3xl font-bold">35+</span>
                            <span className="text-xs font-semibold leading-tight mt-1">Years of Legacy</span>
                        </motion.div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <motion.span variants={textVariant} className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">
                                About SriRam IAS
                            </motion.span>

                            <motion.h2 variants={textVariant} className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                                Shaping the Leaders <br /> of Tomorrow
                            </motion.h2>

                            <motion.p variants={textVariant} className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Founded with a vision to democratize top-tier civil services coaching, SriRam IAS has evolved into an institution synonymous with success in the UPSC examinations.
                            </motion.p>

                            <motion.p variants={textVariant} className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our pedadogy blends rigorous academic curriculum with personalized mentorship, ensuring that every aspirant is equipped to navigate the dynamic demands of the exam.
                            </motion.p>

                            <div className="space-y-4 mb-10">
                                {features.map((feature, idx) => (
                                    <motion.div key={idx} variants={textVariant} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                                        <span className="text-primary font-medium">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                variants={textVariant}
                                className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-blue-950 transition-colors shadow-lg shadow-primary/30"
                            >
                                Discover Our Story
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
