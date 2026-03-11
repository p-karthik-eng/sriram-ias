"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";

const courses = [
    {
        id: 1,
        title: "Foundation",
        subtitle: "UPSC Civil Services",
        description: "Build your base with our meticulous Foundation program. Designed specifically for undergraduates and beginners, this course starts with NCERT fundamentals and gradually scales to advanced analytical concepts required for both Prelims and Mains.",
        tags: ["NCERTs", "Basic Concepts", "Prelims + Mains"],
        image: "/foundation.png", // Parliament/Government building representation
        color: "from-blue-600 to-primary",
    },
    {
        id: 2,
        title: "Advanced",
        subtitle: "Intensive Training",
        description: "Take your preparation to the next level. This course focuses on complex multi-disciplinary analysis, answer writing mastery, and rigorous test series aimed to maximize your total score.",
        tags: ["Answer Writing", "Analysis", "Test Series"],
        image: "/advanced.png", // Intense study/writing representation
        color: "from-accent to-yellow-600",
    },
    {
        id: 3,
        title: "Optionals",
        subtitle: "Subject Mastery",
        description: "Expert guidance for high-scoring optional subjects. With specialized faculties, latest study materials, and customized test series, convert your optional subject into a strategic advantage.",
        tags: ["Expert Faculty", "Specialized Notes", "Score Maximization"],
        image: "/optional.png", // Library / Stacks of books representation
        color: "from-emerald-600 to-emerald-900",
    },
    {
        id: 4,
        title: "Interview",
        subtitle: "Personality Test",
        description: "The final hurdle requires finesse, not just knowledge. Our panel of retired bureaucrats and domain experts guide you through DAF analysis, mock interviews, and confidence building sessions.",
        tags: ["Mock Interviews", "DAF Analysis", "Bureaucrat Panel"],
        image: "/interview.png", // Formal professional interview setting
        color: "from-purple-600 to-indigo-900",
    },
];

export default function Courses() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeCourse, setActiveCourse] = useState(courses[0]);

    // Parallax effect for the background image
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section id="courses" ref={containerRef} className="py-24 bg-gray-50 relative overflow-hidden min-h-[900px]">
            <div className="container mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl text-left">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block"
                        >
                            Structured Curriculum
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight"
                        >
                            Master Your <br /> <span className="text-accent">Preparation</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg text-gray-500 max-w-sm"
                    >
                        A dynamic, phase-wise curriculum designed for guaranteed excellence in every stage of UPSC.
                    </motion.p>
                </div>

                {/* Dynamic Display Area */}
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 items-stretch h-auto lg:h-[600px]">

                    {/* Left Side: Navigation Sidebar */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {courses.map((course, idx) => {
                            const isActive = activeCourse.id === course.id;
                            return (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    onClick={() => setActiveCourse(course)}
                                    className={`cursor-pointer p-6 rounded-3xl transition-all duration-300 border-2 ${isActive
                                        ? "bg-white border-accent shadow-xl scale-[1.02] z-10 relative"
                                        : "bg-transparent border-transparent hover:bg-white/50"
                                        }`}
                                >
                                    <h3 className={`text-2xl font-bold transition-colors ${isActive ? "text-primary" : "text-gray-400"}`}>
                                        <span className="text-xl opacity-50 block mb-1">0{course.id}</span>
                                        {course.title}
                                    </h3>

                                    {/* Active Indicator & Quick Subtitle */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="mt-3 text-accent font-semibold flex items-center gap-2"
                                            >
                                                {course.subtitle} <ChevronRight size={16} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Side: Featured Course Display */}
                    <div className="lg:col-span-8 relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px] lg:h-full bg-primary group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCourse.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full"
                            >
                                {/* Image with Parallax */}
                                <motion.div
                                    className="absolute inset-0 w-[120%] h-[120%] -left-[10%] -top-[10%]"
                                    style={{ y: yParallax }}
                                >
                                    <img
                                        src={activeCourse.image}
                                        alt={activeCourse.title}
                                        className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                                    />
                                </motion.div>

                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br opacity-40 mix-blend-multiply ${activeCourse.color}`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#132863] via-[#132863]/50 to-transparent"></div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white">
                                    <motion.div
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                    >
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {activeCourse.tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="text-3xl md:text-5xl font-black mb-4">
                                            {activeCourse.title} <span className="text-accent">Program</span>
                                        </h3>

                                        <p className="text-gray-200 text-lg leading-relaxed max-w-2xl mb-8">
                                            {activeCourse.description}
                                        </p>

                                        <button className="flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1 shadow-lg group-hover:shadow-xl">
                                            View Syllabus
                                            <ExternalLink size={18} />
                                        </button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
