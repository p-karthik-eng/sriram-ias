"use client";

import { motion } from "framer-motion";
import { BookOpen, Trophy, GraduationCap, ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                >
                    {/* Fallback to a known working stock video for education/studying */}
                    <source
                        src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-black/30 z-10 delay-75"></div>
            </div>

            {/* Floating Shapes / Icons */}
            <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-1/4 text-accent/30"
                >
                    <BookOpen size={64} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/3 text-accent/20"
                >
                    <Trophy size={80} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/3 left-1/4 text-accent/20"
                >
                    <GraduationCap size={72} />
                </motion.div>
            </div>

            <div className="container relative z-30 mx-auto px-6 flex flex-col items-start justify-center text-white h-full mt-16">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block px-4 py-2 border border-accent/50 rounded-full bg-primary/30 backdrop-blur-md mb-6"
                    >
                        <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                            India's Top UPSC Coaching Institute
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                    >
                        Your Journey to <span className="text-accent">UPSC Success</span> Starts Here
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed"
                    >
                        Join the legacy of excellence at SriRam IAS. We offer comprehensive coaching, expert faculty, and a structured curriculum to help you achieve your IAS dream.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#courses"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary bg-accent rounded-full overflow-hidden transition-all hover:scale-105"
                        >
                            <span className="relative flex items-center gap-2">
                                Explore Courses
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </span>
                        </a>

                        <a
                            href="#contact"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white border-2 border-white/50 backdrop-blur-sm rounded-full overflow-hidden transition-all hover:bg-white/10 hover:border-white hover:scale-105"
                        >
                            <span className="relative flex items-center gap-2">
                                Start Preparation
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
