"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const centers = [
    {
        city: "Old Rajinder Nagar",
        address: "22-B, Pusa Road, Bada Bazar Marg, Old Rajinder Nagar, New Delhi",
        phone: "+91-11-25825591",
        email: "info@sriramasias.com"
    },
    {
        city: "Mukherjee Nagar",
        address: "A-32, Commercial Complex, Dr. Mukherjee Nagar, Delhi",
        phone: "+91-11-27653592",
        email: "info@sriramasias.com"
    },
    {
        city: "Hyderabad Centre",
        address: "Ashok Nagar, Crossroads Rd Number 1, Hyderabad",
        phone: "+91-40-27613591",
        email: "hyderabad@sriramasias.com"
    }
];

export default function OfflineCenters() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block"
                    >
                        Reach Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-primary mb-6"
                    >
                        Find Our Offline Centers
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        Experience our proven offline pedagogy at our state-of-the-art centers across India.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Map Image / Component */}
                    <div className="lg:w-[60%] h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white group">
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                        {/* Using a placeholder map image for aesthetics since iframe maps can be unpredictable */}
                        <img
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200"
                            alt="Map Locations"
                            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                        />

                        {/* Animated Markers overlay on image context */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, type: "spring" }}
                            className="absolute top-[40%] left-[45%] z-20"
                        >
                            <div className="relative">
                                <MapPin size={48} className="text-accent drop-shadow-lg" fill="#0F2A44" />
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-primary font-bold bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md text-xs whitespace-nowrap">New Delhi</span>
                                <span className="absolute top-2 left-2 animate-ping h-8 w-8 rounded-full bg-accent opacity-75"></span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, type: "spring" }}
                            className="absolute bottom-[30%] right-[35%] z-20"
                        >
                            <div className="relative">
                                <MapPin size={48} className="text-accent drop-shadow-lg" fill="#0F2A44" />
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-primary font-bold bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md text-xs whitespace-nowrap">Hyderabad</span>
                                <span className="absolute top-2 left-2 animate-ping h-8 w-8 rounded-full bg-accent opacity-75"></span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Center Details Cards */}
                    <div className="lg:w-[40%] flex flex-col gap-6">
                        {centers.map((center, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all border-l-4 border-l-accent group"
                            >
                                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">{center.city}</h3>
                                <div className="space-y-3 text-gray-600">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="text-accent shrink-0 mt-1" size={20} />
                                        <span>{center.address}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="text-accent shrink-0" size={20} />
                                        <span>{center.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="text-accent shrink-0" size={20} />
                                        <span>{center.email}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
