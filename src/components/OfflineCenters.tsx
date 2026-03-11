"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Navigation, Clock } from "lucide-react";

const centers = [
    {
        city: "Old Rajinder Nagar",
        title: "Main Campus",
        address: "22-B, Pusa Road, Bada Bazar Marg, Old Rajinder Nagar, New Delhi",
        phone: "011-42437002 / 9811489560",
        email: "enquiry@sriramsias.com",
        timing: "8:00 AM - 8:00 PM",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800"
    },
    {
        city: "Mukherjee Nagar",
        title: "North Campus",
        address: "A-32, Commercial Complex, Dr. Mukherjee Nagar, Delhi",
        phone: "011-27653592",
        email: "enquiry@sriramsias.com",
        timing: "8:00 AM - 8:00 PM",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
        city: "Hyderabad",
        title: "South Campus",
        address: "Ashok Nagar, Crossroads Rd Number 1, Hyderabad",
        phone: "040-27613591",
        email: "hyderabad@sriramasias.com",
        timing: "9:00 AM - 7:00 PM",
        image: "https://images.unsplash.com/photo-1574958269340-fa927503f3c1?auto=format&fit=crop&q=80&w=800"
    }
];

export default function OfflineCenters() {
    return (
        <section className="py-24 relative bg-[#f8fafc]" id="centers">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
                    >
                        <MapPin size={16} className="text-[#E31E24]" />
                        <span className="text-[#132863] font-bold text-sm tracking-widest uppercase">Visit Us</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#132863] leading-tight mb-6 font-serif"
                    >
                        Our Offline <span className="text-[#E31E24] italic">Centers</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 leading-relaxed font-medium"
                    >
                        Walk into our state-of-the-art campuses. Experience premium infrastructure, interactive classrooms, and direct mentorship from India's top UPSC faculty.
                    </motion.p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {centers.map((center, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(19,40,99,0.1)] transition-all duration-500 group flex flex-col transform hover:-translate-y-2"
                        >
                            {/* Image Header */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-[#132863]/30 group-hover:bg-[#132863]/10 transition-colors duration-500 z-10"></div>
                                <img
                                    src={center.image}
                                    alt={center.city}
                                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#132863] to-transparent z-20"></div>

                                <div className="absolute bottom-5 left-6 right-6 z-30 flex justify-between items-end">
                                    <div>
                                        <div className="bg-[#E31E24] text-white text-[11px] font-bold px-3 py-1.5 rounded-md inline-block mb-3 uppercase tracking-wider shadow-md">
                                            {center.title}
                                        </div>
                                        <h3 className="text-[26px] font-extrabold text-white tracking-wide drop-shadow-md leading-none">
                                            {center.city}
                                        </h3>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white transition-colors duration-300 cursor-pointer shadow-lg mb-1">
                                        <Navigation size={20} className="text-white group-hover:text-[#132863] transition-colors" />
                                    </div>
                                </div>
                            </div>

                            {/* Center Details */}
                            <div className="p-8 flex-1 flex flex-col justify-between bg-white relative">
                                <div className="absolute top-0 right-10 w-16 h-1 bg-[#E31E24] rounded-b-md"></div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100/50">
                                            <MapPin size={18} className="text-[#132863]" />
                                        </div>
                                        <div className="pt-0.5">
                                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">Location <span className="h-px w-4 bg-gray-200 block"></span></p>
                                            <p className="text-[15px] text-gray-700 font-semibold leading-relaxed pr-2">{center.address}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-50">
                                            <Phone size={16} className="text-[#E31E24]" />
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Contact</p>
                                            <p className="text-[15px] text-gray-700 font-semibold">{center.phone}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                                            <Mail size={16} className="text-[#00adef]" />
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                                            <p className="text-[15px] text-gray-700 font-semibold truncate">{center.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                                            <Clock size={16} className="text-orange-500" />
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Timings</p>
                                            <p className="text-[15px] text-gray-700 font-semibold truncate">{center.timing}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <button className="w-full py-4 rounded-xl font-bold text-[14px] tracking-widest uppercase text-[#132863] bg-blue-50/50 hover:bg-[#132863] hover:text-white border border-blue-100 hover:border-[#132863] transition-all duration-300 text-center flex items-center justify-center gap-3 group/btn shadow-sm">
                                        Get Directions
                                        <MapPin size={16} className="text-[#E31E24] group-hover/btn:text-white transition-colors" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
