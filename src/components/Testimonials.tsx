"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Akansha Singh",
        rank: "AIR 44, UPSC 2022",
        text: "The personalized attention and the rigor of the test series at SriRam IAS were instrumental in my success. The faculty's ability to simplify complex concepts made a huge difference.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
        name: "Ravi Kumar",
        rank: "AIR 18, UPSC 2021",
        text: "SriRam IAS provided the right ecosystem for my preparation. The daily answer writing practice and the insightful feedback from mentors helped me maximize my Mains score.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200"
    },
    {
        name: "Neha Sharma",
        rank: "AIR 89, UPSC 2023",
        text: "The comprehensive coverage of current affairs and the interactive classroom environment kept me motivated throughout my journey.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slideVariants: any = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            z: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            z: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-primary relative overflow-hidden flex items-center justify-center min-h-[600px] md:min-h-[800px]">
            {/* Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block"
                    >
                        Student Stories
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Hear from Our Achievers
                    </motion.h2>
                </div>

                <div className="relative h-[400px] max-w-4xl mx-auto flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full"
                        >
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 md:p-14 rounded-3xl shadow-2xl flex flex-col items-center text-center">
                                <Quote className="text-accent/50 w-16 h-16 absolute top-8 left-8 -z-10 rotate-180" />
                                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-lg font-bold text-white">{testimonials[currentIndex].name}</h4>
                                        <p className="text-sm text-accent">{testimonials[currentIndex].rank}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <button
                        className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-accent text-white hover:text-primary rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-20"
                        onClick={() => paginate(-1)}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-accent text-white hover:text-primary rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-20"
                        onClick={() => paginate(1)}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? "bg-accent scale-125" : "bg-white/30 hover:bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
