"use client";

import { motion } from "framer-motion";

const experts = [
    {
        name: "Dr. Sriram Srirangam",
        designation: "Founder & Director",
        experience: "35+ Years Experience",
        subject: "Economy & Policy",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
    },
    {
        name: "Prof. R.K. Sharma",
        designation: "Head of Polity Faculty",
        experience: "25+ Years Experience",
        subject: "Indian Polity & Governance",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
        name: "Dr. Meera Nanda",
        designation: "Senior Faculty",
        experience: "18+ Years Experience",
        subject: "History & Art",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
        name: "Mr. Alok Ranjan",
        designation: "Geography Expert",
        experience: "20+ Years Experience",
        subject: "Geography & Environment",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
    }
];

export default function TeachingExperts() {
    return (
        <section className="py-24 bg-gray-50 relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block"
                    >
                        Guiding Lights
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-primary mb-6"
                    >
                        Our Teaching Experts
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        Learn from the masters who have dedicated their lives to mentoring UPSC aspirants.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {experts.map((expert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative flex flex-col items-center"
                        >
                            <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                <img
                                    src={expert.image}
                                    alt={expert.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                    <span className="text-accent font-bold mb-2">{expert.experience}</span>
                                    <p className="text-white text-sm font-medium">Expertise in:<br />{expert.subject}</p>
                                </div>
                            </div>

                            <div className="text-center transition-transform duration-300 group-hover:-translate-y-2">
                                <h3 className="text-2xl font-bold text-primary mb-1">{expert.name}</h3>
                                <p className="text-accent font-medium">{expert.designation}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
