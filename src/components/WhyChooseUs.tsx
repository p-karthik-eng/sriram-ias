"use client";

import { motion } from "framer-motion";
import { Users, FileText, Target, BookOpen, Clock, Award } from "lucide-react";

// Add realistic images for each feature
const features = [
    {
        title: "Expert Faculty",
        description: "Learn from India's top educators, retired bureaucrats, and subject matter experts who understand the nuances of the UPSC examination.",
        icon: Users,
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600",
        color: "from-blue-600 to-blue-900",
        className: "md:col-span-2 md:row-span-2", // Large hero feature
    },
    {
        title: "Meticulous Syllabus",
        description: "Complete coverage of NCERTs to advanced topics.",
        icon: BookOpen,
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400",
        color: "from-amber-500 to-amber-700",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Daily Answer Writing",
        description: "Master Mains through daily rigorous practice.",
        icon: FileText,
        image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=400",
        color: "from-emerald-500 to-emerald-700",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Personal Mentorship",
        description: "Every aspirant gets a dedicated mentor to clear doubts, analyze test performance, and calibrate strategy continually.",
        icon: Target,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
        color: "from-purple-600 to-purple-900",
        className: "md:col-span-2 md:row-span-1", // Wide feature
    },
    {
        title: "Time Management",
        description: "Learn to maximize efficiency in your study hours.",
        icon: Clock,
        color: "from-rose-500 to-rose-700",
        className: "md:col-span-1 md:row-span-1", // Icon only feature
    },
    {
        title: "Proven Results",
        description: "35+ years of legacy in securing top ranks.",
        icon: Award,
        color: "from-primary to-black",
        className: "md:col-span-1 md:row-span-1", // Icon only feature
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-[#0a0f16] text-white relative overflow-hidden">
            {/* Background Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] opacity-10 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(201,162,39,0.8) 0%, rgba(15,42,68,0) 70%)" }}
            ></div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block"
                    >
                        The SriRam IAS Advantage
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
                    >
                        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">Success</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-400"
                    >
                        Our pedagogy blends intense academics with realistic goal-setting to shape the administrators of tomorrow.
                    </motion.p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px]">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`relative min-h-[300px] md:min-h-0 rounded-3xl overflow-hidden group shadow-2xl ${feature.className} ${!feature.image ? `bg-gradient-to-br ${feature.color}` : 'bg-gray-900'}`}
                        >
                            {/* Image Background (if exists) */}
                            {feature.image && (
                                <div
                                    className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url(${feature.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                />
                            )}

                            {/* Overlay for image cards */}
                            {feature.image && (
                                <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-80 mix-blend-multiply group-hover:opacity-60 transition-opacity duration-500`} />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 pointer-events-none" />

                            {/* Content Box */}
                            <div className="relative h-full p-8 flex flex-col justify-end z-10">
                                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 border border-white/20">
                                    <feature.icon className={`text-white ${feature.image ? 'opacity-80' : 'opacity-100 text-accent'}`} size={24} />
                                </div>

                                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className={`text-gray-300 text-sm leading-relaxed ${feature.className.includes('row-span-2') || feature.className.includes('col-span-2') ? 'md:text-base' : 'line-clamp-2 md:line-clamp-none'}`}>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-out_forwards] pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        @keyframes shine {
          100% {
            transform: translateX(150%) skewX(-20deg);
          }
        }
      `}</style>
        </section>
    );
}
