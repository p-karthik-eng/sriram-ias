"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const videos = [
    {
        title: "How to Approach UPSC Prelims 2026",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
        embed: "dQw4w9WgXcQ", // Replace with real YouTube ID
    },
    {
        title: "The Hindu Editorial Analysis | March 2026",
        thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600",
        embed: "dQw4w9WgXcQ",
    },
    {
        title: "Answer Writing Strategy for GS Paper 2",
        thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
        embed: "dQw4w9WgXcQ",
    },
];

export default function VideoCorner() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block"
                        >
                            SriRam IAS on YouTube
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-primary mb-6"
                        >
                            Video Corner
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-600"
                        >
                            Access our library of free lectures, strategy sessions, and daily news analysis videos.
                        </motion.p>
                    </div>

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        href="#"
                        className="hidden md:inline-flex items-center justify-center px-6 py-3 font-bold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                        Explore Channel
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedVideo(video.embed)}
                        >
                            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg mb-4 bg-gray-900">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover group-hover:scale-110 opacity-80 group-hover:opacity-100 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>

                                {/* Play Button */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-110 shadow-lg shadow-accent/50 transition-transform duration-300">
                                    <Play size={28} className="translate-x-0.5" fill="currentColor" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors line-clamp-2">
                                {video.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12"
                    >
                        <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                            <button
                                className="absolute -top-12 right-0 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-10"
                                onClick={() => setSelectedVideo(null)}
                            >
                                <X size={24} />
                            </button>

                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
