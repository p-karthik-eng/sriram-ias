"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Suez_One } from "next/font/google";
import {
    ChevronDown, Mail, Phone, MapPin, ArrowRight, X, Loader2, Menu, User,
    Info, FileText, Smartphone, Code, Cloud, BrainCircuit, Box, Layout, ShieldCheck, Target, Network, Layers, MonitorSmartphone, Settings, PenTool,
    Search, BookOpen, GraduationCap, Award, BookMarked, Users, History, Globe, Briefcase, FileSignature, Presentation
} from "lucide-react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const suez = Suez_One({ weight: '400', subsets: ['latin'], display: 'swap' });

interface QuoteModalProps {
    open: boolean;
    onClose: () => void;
}

interface MegaMenuProps {
    data: any[];
    type: string;
    closeMenu: () => void;
}

/* ---------------- QUOTE MODAL ---------------- */

function QuoteModal({ open, onClose }: QuoteModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!open) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const payload = Object.fromEntries(formData.entries());

        console.log("Form Data Captured:", payload);

        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        alert("Thank you! Your request has been sent.");
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl flex overflow-hidden relative"
            >
                <div className="hidden md:flex w-[40%] bg-[#f8faff] items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
                    <DotLottieReact
                        src="/quote-animation.json"
                        loop
                        autoplay
                        className="w-full max-w-[200px] aspect-square relative z-10"
                    />
                </div>

                <div className="w-full md:w-[60%] p-5 sm:p-6 relative bg-white">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-700 hover:text-black hover:bg-gray-100 p-2 rounded-full transition-colors z-10"
                    >
                        <X size={20} />
                    </button>

                    <div className="mb-4 relative">
                        <h2 className="text-2xl font-extrabold text-[#1e293b] text-center">Book FREE Mentorship</h2>
                    </div>

                    <form className="space-y-3" onSubmit={handleSubmit}>
                        <div className="w-full relative">
                            <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <User size={16} className="text-blue-500" />
                                </div>
                                <input
                                    type="text" name="fullName" id="fullName"
                                    className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors placeholder:text-gray-400"
                                    placeholder="Full Name" required
                                />
                            </div>
                        </div>

                        <div className="w-full relative">
                            <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">Your Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <Mail size={16} className="text-blue-500" />
                                </div>
                                <input
                                    type="email" name="email" id="email"
                                    className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors placeholder:text-gray-400"
                                    placeholder="Email Id" required
                                />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="w-[40%]">
                                <label htmlFor="code" className="block text-xs font-bold text-slate-700 mb-1">Country Code</label>
                                <div className="relative">
                                    <select
                                        name="code" id="code"
                                        className="w-full pl-3 pr-8 py-2 bg-white border border-gray-200 rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="+91">India (+91)</option>
                                        <option value="+1">USA (+1)</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                        <ChevronDown size={14} />
                                    </div>
                                </div>
                            </div>

                            <div className="w-[60%]">
                                <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">Your Mobile</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <Smartphone size={16} className="text-blue-500" />
                                    </div>
                                    <input
                                        type="tel" pattern="[0-9]{10,15}" title="10-15 digits" name="phone" id="phone"
                                        className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors placeholder:text-gray-400"
                                        placeholder="Contact Number" required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full relative">
                            <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">Message</label>
                            <textarea
                                name="message" id="message" maxLength={500}
                                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors placeholder:text-gray-400 resize-none"
                                rows={2} placeholder="Message"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2.5 rounded-lg font-bold shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm mt-1"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={16} />
                                    PROCESSING...
                                </>
                            ) : (
                                <>SUBMIT REQUEST <ArrowRight size={16} /></>
                            )}
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}

/* ---------------- MULTI-MENU DATA ---------------- */

const homeData = [
    {
        category: "About Sriram's IAS",
        desc: "40 years of excellence in guiding UPSC civil services aspirants.",
        icon: <Briefcase size={24} className="text-[#132863]" />,
        items: [
            { title: "Our Legacy", desc: "Four decades of creating civil servants and serving the nation", href: "/about/legacy" },
            { title: "Director's Message", desc: "A visionary message from Sriram Srirangam", href: "/about/director-message" },
            { title: "Our Core Methodology", desc: "The proven Sriram's approach to the UPSC examination", href: "/about/methodology" },
            { title: "Offices & Centers", desc: "Explore our state-of-the-art offline presence across India", href: "#centers" }
        ],
        rightPanel: {
            title: "SRIRAM'S LEGACY",
            checkmarks: [
                "40+ Years of UPSC Experience",
                "Thousands of Successful Selections",
                "India's Top Faculty Panel",
                "Comprehensive Study Material",
                "Personalized Mentorship"
            ],
            buttonText: "Join Our Legacy",
            buttonLink: "/contact"
        }
    },
    {
        category: "Leadership & Faculty",
        desc: "Learn from the most experienced educators in the nation.",
        icon: <Users size={24} className="text-[#132863]" />,
        items: [
            { title: "Core Faculty Panel", desc: "Meet the experts guiding your preparation across subjects", href: "/about/faculty" },
            { title: "Guest Lecturers", desc: "Insights from serving bureaucrats and experts", href: "/about/guest-lecturers" },
            { title: "Dedicated Mentors", desc: "Your personal guides for academic and strategy support", href: "/about/mentors" }
        ],
        rightPanel: {
            title: "EXPERT GUIDANCE",
            checkmarks: [
                "Decades of Subject Expertise",
                "Dynamic Teaching Methodologies",
                "1-on-1 Doubt Clearing Sessions"
            ],
            buttonText: "Meet the Faculty",
            buttonLink: "/about/faculty"
        }
    },
    {
        category: "Results & Achievements",
        desc: "Our results speak for our dedication to your success.",
        icon: <Award size={24} className="text-[#132863]" />,
        items: [
            { title: "UPSC CSE Toppers", desc: "View our stellar selections in recent years", href: "/results/toppers" },
            { title: "Toppers' Strategies", desc: "Learn from the success stories of our students", href: "/results/strategies" },
            { title: "Toppers' Answer Copies", desc: "Analyze how successful candidates write their answers", href: "/results/answer-copies" },
            { title: "Hall of Fame", desc: "Sriram's IAS alumni serving across the nation", href: "/results/hall-of-fame" }
        ],
        rightPanel: {
            title: "PROVEN RESULTS",
            checkmarks: [
                "Consistent Top Ranks",
                "Highest Success Rate in Final Interviews",
                "Transparent Result Publishing"
            ],
            buttonText: "View Wall of Fame",
            buttonLink: "/results/toppers"
        }
    }
];

const servicesData = [
    {
        category: "General Studies (GS)",
        desc: "Comprehensive coverage of Prelims and Mains GS syllabus.",
        icon: <BookOpen size={24} className="text-[#132863]" />,
        items: [
            { title: "GS Comprehensive Foundation (PCM)", desc: "10-Month extensive course for UPSC CSE", href: "/courses/gs-foundation" },
            { title: "GS Super Core Batch", desc: "Intensive 6-Month program for advanced aspirants", href: "/courses/gs-core" },
            { title: "GS Modular Courses", desc: "Subject-specific modules (Economy, Polity, etc.)", href: "/courses/gs-modular" },
            { title: "Crash Courses (Prelims & Mains)", desc: "Quick revision batches before the main exam", href: "/courses/crash-courses" },
            { title: "Weekend Foundation Batch", desc: "Designed for working professionals and college students", href: "/courses/weekend" },
            { title: "NCERT Foundation", desc: "Building the core basics from NCERT books", href: "/courses/ncert" }
        ],
        rightPanel: {
            title: "GS FOUNDATION",
            checkmarks: [
                "Complete Syllabus Coverage",
                "Printed Sriram's IAS Study Material",
                "Daily Answer Writing Practice",
                "Regular Class Tests & Evaluation",
                "Mentorship & Support"
            ],
            buttonText: "Enroll in GS Course",
            buttonLink: "/signup"
        }
    },
    {
        category: "Optional Subjects",
        desc: "Specialized coaching for high-scoring UPSC Optional Subjects.",
        icon: <Globe size={24} className="text-[#132863]" />,
        items: [
            { title: "Public Administration Optional", desc: "Comprehensive syllabus coverage and answer writing", href: "/courses/pub-ad" },
            { title: "Sociology Optional", desc: "In-depth conceptual clarity by expert faculty", href: "/courses/sociology" },
            { title: "Geography Optional", desc: "Map-based learning and complete syllabus grasp", href: "/courses/geography" },
            { title: "Political Science (PSIR)", desc: "Dynamic coverage with current affairs integration", href: "/courses/psir" },
            { title: "Anthropology Optional", desc: "High-scoring concise syllabus coaching", href: "/courses/anthropology" },
            { title: "History Optional", desc: "Thorough chronological analysis and map work", href: "/courses/history" }
        ],
        rightPanel: {
            title: "OPTIONAL MASTERY",
            checkmarks: [
                "Targeted 500+ Marks Strategy",
                "Previous Year Question Analysis",
                "Dedicated Optional Test Series",
                "Personalized Answer Evaluation"
            ],
            buttonText: "Explore Optionals",
            buttonLink: "/courses/optionals"
        }
    },
    {
        category: "CSAT & Essay",
        desc: "Conquer the qualifying and scoring papers with ease.",
        icon: <FileSignature size={24} className="text-[#132863]" />,
        items: [
            { title: "CSAT Comprehensive Batch", desc: "Master quantitative aptitude, reasoning, and reading comprehension", href: "/courses/csat" },
            { title: "CSAT Crash Course", desc: "Last-minute tips and high-yield topics", href: "/courses/csat-crash" },
            { title: "Essay Writing Program", desc: "Learn to structure and write high-scoring essays", href: "/courses/essay" },
            { title: "Essay Enrichment Module", desc: "Quote banks, anecdotes, and thematic preparation", href: "/courses/essay-enrichment" }
        ],
        rightPanel: {
            title: "SCORE MAXIMIZATION",
            checkmarks: [
                "Simplifying Complex Math",
                "Structured Essay Frameworks",
                "Extensive Practice Questions"
            ],
            buttonText: "Boost Your Score",
            buttonLink: "/courses"
        }
    },
    {
        category: "Interview Guidance",
        desc: "Prepare for the final hurdle: The UPSC Personality Test.",
        icon: <Presentation size={24} className="text-[#132863]" />,
        items: [
            { title: "Mock Interview Program", desc: "Panel interactions with former bureaucrats", href: "/courses/interview" },
            { title: "DAF Analysis & Question Bank", desc: "Detailed breakdown of your Detailed Application Form", href: "/courses/daf-analysis" },
            { title: "One-on-One Interaction", desc: "Personalized sessions with Sriram Sir", href: "/courses/one-on-one" },
            { title: "Current Issues Bootcamp", desc: "Intensive session on burning national & international topics", href: "/courses/interview-bootcamp" }
        ],
        rightPanel: {
            title: "PERSONALITY TEST",
            checkmarks: [
                "Eminent Board Members",
                "Video Recorded Mock Sessions",
                "Detailed Feedback & Body Language Tips",
                "Sector-Specific Issue Preparation"
            ],
            buttonText: "Book Mock Interview",
            buttonLink: "/contact"
        }
    }
];

const productsData = [
    {
        category: "Prelims Test Series",
        desc: "Evaluate your readiness with our UPSC-standard Prelims Mocks.",
        icon: <Target size={24} className="text-[#132863]" />,
        items: [
            { title: "Prelims GS Test Series", desc: "Sectional and Full-Length GS Paper 1 Tests", href: "/test-series/prelims-gs" },
            { title: "Prelims CSAT Test Series", desc: "Simulate exact UPSC CSAT difficulty levels", href: "/test-series/prelims-csat" },
            { title: "All India Open Mock Tests", desc: "Compete with thousands of aspirants nationally", href: "/test-series/open-mocks" },
            { title: "Current Affairs Revision Tests", desc: "Tests focusing purely on the last 12 months' news", href: "/test-series/prelims-ca" }
        ],
        rightPanel: {
            title: "PRELIMS SUCCESS",
            checkmarks: [
                "Questions strictly aligned to UPSC pattern",
                "Detailed Explanatory Notes",
                "All India Ranking & Percentile",
                "Subject-wise Performance Analytics"
            ],
            buttonText: "Enroll Now",
            buttonLink: "/test-series"
        }
    },
    {
        category: "Mains Test Series",
        desc: "Refine your answer writing skills and time management.",
        icon: <PenTool size={24} className="text-[#132863]" />,
        items: [
            { title: "GS Mains Test Series", desc: "Comprehensive tests for GS I, II, III, and IV", href: "/test-series/mains-gs" },
            { title: "Optional Mains Test Series", desc: "Tests for History, Geography, PubAd, Sociology, etc", href: "/test-series/mains-optional" },
            { title: "Essay Test Series", desc: "Thematic essays with detailed feedback on structure", href: "/test-series/essay-tests" },
            { title: "Daily Answer Writing (DAW)", desc: "Consistent daily practice for continuous improvement", href: "/test-series/daw" }
        ],
        rightPanel: {
            title: "MAINS MASTERY",
            checkmarks: [
                "Timely & Detailed Evaluation",
                "Constructive Feedback by Experts",
                "Model Answers for all Questions",
                "Topper Copy References"
            ],
            buttonText: "Start Writing",
            buttonLink: "/test-series"
        }
    }
];

const resourcesData = [
    {
        category: "Current Affairs Initiatives",
        desc: "Stay updated with our curated relevant news analysis.",
        icon: <BookMarked size={24} className="text-[#132863]" />,
        items: [
            { title: "Daily News Analysis", desc: "Key takeaways from The Hindu & Indian Express", href: "/current-affairs/daily" },
            { title: "Mainspedia", desc: "Topic-wise compiled notes for GS Mains", href: "/current-affairs/mainspedia" },
            { title: "Editorial Summary", desc: "Simplified breakdown of daily editorials", href: "/current-affairs/editorials" },
            { title: "Monthly Current Affairs Magazine", desc: "Comprehensive monthly compilation for quick revision", href: "/resources/magazine" },
            { title: "Weekly Objective Quiz", desc: "Test your weekly current affairs knowledge", href: "/current-affairs/quiz" },
            { title: "Yojana & Kurukshetra Gist", desc: "Summaries of highly relevant government magazines", href: "/resources/yojana" }
        ],
        rightPanel: {
            title: "STAY UPDATED",
            checkmarks: [
                "Filtered, UPSC-Relevant News",
                "Linkage to Static Syllabus",
                "Free Downloadable PDFs",
                "Infographics for Easy Retention"
            ],
            buttonText: "Read Today's News",
            buttonLink: "/current-affairs"
        }
    },
    {
        category: "UPSC Basics & Preparation",
        desc: "Essential free resources to kickstart your UPSC journey.",
        icon: <GraduationCap size={24} className="text-[#132863]" />,
        items: [
            { title: "UPSC Complete Syllabus", desc: "Detailed breakdown of micro-topics for Prelims & Mains", href: "/resources/syllabus" },
            { title: "Previous Year Papers (PYQ)", desc: "Downloadable last 10 years' question papers", href: "/resources/pyq" },
            { title: "Sriram's IAS Booklist", desc: "Recommended readings for standard preparation", href: "/resources/booklist" },
            { title: "Preparation Strategy", desc: "Step-by-step guide for beginners", href: "/resources/strategy" },
            { title: "Cut-off & Trend Analysis", desc: "Historical data of UPSC passing marks and question trends", href: "/resources/analysis" },
            { title: "Downloadable Notes", desc: "Free PDFs of static GS subjects", href: "/resources/notes" }
        ],
        rightPanel: {
            title: "FREE RESOURCES",
            checkmarks: [
                "Absolutely Free Access",
                "Extensively Researched",
                "Updated according to latest trends",
                "Designed to save aspirants' time"
            ],
            buttonText: "View Resources",
            buttonLink: "/free-resources"
        }
    }
];

/* ---------------- MEGA MENU COMPONENT ---------------- */

const MegaMenu = ({ data, type, closeMenu }: MegaMenuProps) => {
    const [activeIdx, setActiveIdx] = useState(0);
    const activeItem = data[activeIdx];

    if (!activeItem) return null;

    return (
        <div className="w-full bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-t flex-col border-gray-200 max-h-[60vh] overflow-hidden hidden lg:flex">
            <div className="w-full h-full flex overflow-hidden">
                {/* Left Column (Categories) */}
                <div className="w-[320px] bg-[#f8f9fa] border-r border-gray-200 p-4 py-6 shrink-0 flex flex-col gap-1 overflow-y-auto custom-scrollbar">
                    <h4 className="text-[11px] font-bold text-blue-600 tracking-widest uppercase mb-4 px-3">{type}</h4>
                    {data.map((item: any, idx: number) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setActiveIdx(idx)}
                            className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all border group ${activeIdx === idx ? 'bg-white shadow-sm border-gray-200' : 'border-transparent hover:bg-gray-100'}`}
                        >
                            <div className={`w-9 h-9 shrink-0 rounded flex items-center justify-center ${activeIdx === idx ? 'bg-blue-50 text-blue-600' : 'bg-transparent text-gray-500 group-hover:text-blue-500'}`}>
                                {item.icon}
                            </div>
                            <div className="flex-1">
                                <h6 className={`text-[13px] font-bold ${activeIdx === idx ? 'text-blue-600' : 'text-gray-700'}`}>{item.category}</h6>
                                <p className={`text-[11px] mt-1 line-clamp-2 leading-snug ${activeIdx === idx ? 'text-gray-500' : 'text-gray-400'}`}>{item.desc}</p>
                            </div>
                            <div className="flex items-center justify-center h-full pt-1">
                                <ChevronDown size={14} className={`transition-transform -rotate-90 ${activeIdx === idx ? 'text-gray-400' : 'text-transparent group-hover:text-gray-300'}`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Middle Column (Content Grid) */}
                <div className="flex-1 bg-white p-8 overflow-y-auto custom-scrollbar">
                    <h4 className="text-[11px] font-bold text-blue-600 tracking-widest uppercase mb-6">{activeItem.category}</h4>
                    <div className={`grid ${activeItem.items.length > 5 ? 'grid-cols-2' : 'grid-cols-1'} gap-x-12 gap-y-6`}>
                        {activeItem.items.map((link: any, lIdx: number) => (
                            <Link key={lIdx} href={link.href} onClick={closeMenu} className="flex flex-col group items-start">
                                <span className="text-[13px] font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-1">{link.title}</span>
                                <span className="text-[12px] text-gray-500 leading-relaxed max-w-sm">{link.desc}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Column (Highlights) */}
                <div className="w-[320px] bg-[#0c31d6] text-white p-8 shrink-0 relative flex flex-col justify-between overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                    <div className="relative z-10">
                        <h4 className="text-[11px] font-bold tracking-widest uppercase mb-6 text-blue-200">{activeItem.rightPanel.title}</h4>
                        <div className="flex flex-col gap-4">
                            {activeItem.rightPanel.checkmarks.map((point: string, pIdx: number) => (
                                <div key={pIdx} className="flex items-start gap-3">
                                    <div className="mt-0.5 shrink-0">
                                        <svg className="w-4 h-4 text-[#00E676] bg-white rounded-full p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-[13px] text-blue-50 leading-snug">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 relative z-10">
                        <Link href={activeItem.rightPanel.buttonLink} onClick={closeMenu} className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold text-[13px] py-3 px-6 rounded-lg text-center transition-all shadow-lg w-full">
                            {activeItem.rightPanel.buttonText}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

/* ---------------- MAIN NAVBAR ---------------- */

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const [quoteOpen, setQuoteOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        document.body.style.overflow = (isMobileMenuOpen || quoteOpen) ? "hidden" : "unset";
    }, [isMobileMenuOpen, quoteOpen]);

    // Map the visual elements to the provided Dummy Data from original code.
    const getDropdownData = () => {
        if (activeDropdown === 'courses') return servicesData;
        if (activeDropdown === 'about') return homeData;
        if (activeDropdown === 'test-series') return productsData;
        if (activeDropdown === 'current-affairs') return resourcesData;
        if (activeDropdown === 'free-resources') return resourcesData;
        return [];
    };

    const getDropdownType = () => {
        if (activeDropdown === 'courses') return 'Courses';
        if (activeDropdown === 'about') return 'About Us';
        if (activeDropdown === 'test-series') return 'Test Series';
        if (activeDropdown === 'current-affairs') return 'Current Affairs';
        if (activeDropdown === 'free-resources') return 'Free Resources';
        return '';
    };

    return (
        <header className="fixed top-0 left-0 w-full z-[100] shadow-md border-b border-gray-100 bg-white" onMouseLeave={() => setActiveDropdown(null)}>
            {/* Top Contact Bar (SriRam's IAS Styling) */}
            <div className="bg-gradient-to-r from-[#171A7C] via-[#332277] to-[#4A2063] text-white py-1.5 px-4 hidden lg:flex border-b border-gray-100">
                <div className="max-w-[1400px] w-full mx-auto flex justify-between font-medium items-center text-sm px-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#00adef] p-1 rounded-full flex items-center justify-center">
                            <Phone size={12} className="fill-white" />
                        </div>
                        <span className="font-medium text-[12px] tracking-wide">9811489560/011-42437002</span>
                    </div>

                    <button
                        onClick={() => setQuoteOpen(true)}
                        className="bg-gradient-to-r from-[#5a8bfb] to-[#2547a0] px-6 py-1 rounded-full text-center shadow-inner border border-blue-400/30 hidden md:block cursor-pointer hover:shadow-md transition-shadow"
                    >
                        <span className="font-medium text-[13px]">
                            Book <span className="text-[#FFD700] font-bold">FREE</span> 1:1 Mentorship for UPSC CSE
                        </span>
                    </button>

                    <div className="flex items-center gap-2">
                        <div className="bg-[#00adef] p-1 rounded-full flex items-center justify-center">
                            <Mail size={12} className="fill-white" />
                        </div>
                        <span className="font-medium text-[12px] tracking-wide">enquiry@sriramsias.com</span>
                    </div>
                </div>
            </div>

            {/* Main Nav Container */}
            <nav className="text-gray-900 relative">
                <div className="max-w-[1400px] mx-auto px-4 py-3 xl:py-4 flex items-center justify-between">

                    {/* Logo Section */}
                    <Link href="/" className="shrink-0 flex items-center gap-2" onMouseEnter={() => setActiveDropdown(null)}>
                        <div className="flex flex-col items-center justify-center pb-1">
                            <div className="flex items-baseline -mb-1">
                                <span className="text-[#132863] text-[34px] xl:text-[40px] font-extrabold italic leading-none tracking-tighter">40</span>
                                <div className="flex flex-col items-center ml-0.5">
                                    <span className="text-[#E31E24] text-[9px] xl:text-[10px] font-black italic leading-none tracking-tighter">YEARS</span>
                                </div>
                            </div>
                            <div className="bg-[#E31E24] text-white text-[8px] xl:text-[9px] font-bold px-1.5 py-[1px] w-[56px] xl:w-[64px] text-center rounded-[1px]">
                                of Excellence
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex border-[2px] border-[#132863]">
                                <div className="bg-white text-[#132863] text-[20px] xl:text-[24px] font-serif font-extrabold px-3 leading-tight tracking-tight">
                                    SRIRAM's
                                </div>
                                <div className="bg-[#E31E24] text-white text-[20px] xl:text-[24px] font-serif font-extrabold px-3 leading-tight tracking-wide border-l-[2px] border-[#132863]">
                                    IAS
                                </div>
                            </div>
                            <div className="text-black text-[10px] xl:text-[11px] font-semibold tracking-wide text-center mt-0.5">
                                Serving The Nation Since 1985
                            </div>
                        </div>
                    </Link>

                    {/* Right Side Desktop */}
                    <div className="hidden lg:flex flex-col items-end gap-3 mt-1 h-full">
                        {/* Top Row Buttons */}
                        <div className="flex items-center gap-2 pr-1" onMouseEnter={() => setActiveDropdown(null)}>
                            <Link href="/upcoming-batches" className="relative bg-[#2b5ba3] hover:bg-[#1e4480] transition-colors text-white text-[10px] font-black px-4 py-[7px] rounded-[2px] shadow-sm">
                                <div className="absolute -top-3.5 -left-3 text-[#E31E24] font-black text-[10px] transform -rotate-12 bg-[#FFD700] px-1 py-0.5 leading-none rounded-[1px] shadow-md z-10 border border-[#b89b00]">NEW!</div>
                                UPCOMING BATCHES
                            </Link>
                            <Link href="/blog" className="bg-[#2b5ba3] hover:bg-[#1e4480] transition-colors text-white text-[10px] font-black px-4 py-[7px] rounded-[2px] shadow-sm">BLOG</Link>
                            <Link href="/portal" className="bg-[#2b5ba3] hover:bg-[#1e4480] transition-colors text-white text-[10px] font-black px-4 py-[7px] rounded-[2px] shadow-sm">PORTAL</Link>
                            <Link href="/signup" className="bg-[#2b5ba3] hover:bg-[#1e4480] transition-colors text-white text-[10px] font-black px-4 py-[7px] rounded-[2px] shadow-sm">SIGN UP</Link>
                            <Link href="/contact" className="bg-[#2b5ba3] hover:bg-[#1e4480] transition-colors text-white text-[10px] font-black px-4 py-[7px] rounded-[2px] shadow-sm">CONTACT US</Link>

                            <div className="relative ml-2 flex items-center group">
                                <input type="text" placeholder="Search by Course Name" className="pl-4 pr-10 h-[34px] text-[13px] border border-gray-300 rounded-full w-[220px] xl:w-[260px] focus:outline-none focus:border-[#00adef] text-gray-700 shadow-inner transition-all group-hover:border-[#00adef]" />
                                <button className="absolute right-0 top-0 h-[34px] w-[34px] bg-[#00adef] hover:bg-[#0092c8] transition-colors rounded-full flex items-center justify-center">
                                    <Search size={16} className="text-white" strokeWidth={3} />
                                </button>
                            </div>
                        </div>

                        {/* Bottom Row Links */}
                        <div className="flex items-center gap-4 xl:gap-5 text-[12px] xl:text-[13px] font-bold text-gray-900 tracking-tight pr-3">
                            <Link href="/courses" onMouseEnter={() => setActiveDropdown('courses')} className={`flex items-center group transition-colors relative py-2 ${activeDropdown === 'courses' ? 'text-[#00adef]' : 'hover:text-[#00adef]'}`}>
                                COURSES <span className="text-[12px] xl:text-[13px] ml-1 font-medium transition-colors group-hover:text-[#00adef]">+</span>
                                <span className={`absolute left-0 bottom-0 h-[2px] bg-[#00adef] transition-all duration-300 ${activeDropdown === 'courses' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>

                            <Link href="/about" onMouseEnter={() => setActiveDropdown('about')} className={`flex items-center group transition-colors relative py-2 ${activeDropdown === 'about' ? 'text-[#00adef]' : 'hover:text-[#00adef]'}`}>
                                ABOUT US <span className="text-[12px] xl:text-[13px] ml-1 font-medium transition-colors group-hover:text-[#00adef]">+</span>
                                <span className={`absolute left-0 bottom-0 h-[2px] bg-[#00adef] transition-all duration-300 ${activeDropdown === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>

                            <Link href="/test-series" onMouseEnter={() => setActiveDropdown('test-series')} className={`flex items-center group transition-colors relative py-2 ${activeDropdown === 'test-series' ? 'text-[#00adef]' : 'hover:text-[#00adef]'}`}>
                                TEST SERIES <span className="text-[12px] xl:text-[13px] ml-1 font-medium transition-colors group-hover:text-[#00adef]">+</span>
                                <span className={`absolute left-0 bottom-0 h-[2px] bg-[#00adef] transition-all duration-300 ${activeDropdown === 'test-series' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>

                            <Link href="/current-affairs" onMouseEnter={() => setActiveDropdown('current-affairs')} className={`flex items-center group transition-colors relative py-2 ${activeDropdown === 'current-affairs' ? 'text-[#00adef]' : 'hover:text-[#00adef]'}`}>
                                CURRENT AFFAIRS <span className="text-[12px] xl:text-[13px] ml-1 font-medium transition-colors group-hover:text-[#00adef]">+</span>
                                <span className={`absolute left-0 bottom-0 h-[2px] bg-[#00adef] transition-all duration-300 ${activeDropdown === 'current-affairs' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>

                            <Link href="/free-resources" onMouseEnter={() => setActiveDropdown('free-resources')} className={`flex items-center group transition-colors relative py-2 ${activeDropdown === 'free-resources' ? 'text-[#00adef]' : 'hover:text-[#00adef]'}`}>
                                FREE RESOURCES <span className="text-[12px] xl:text-[13px] ml-1 font-medium transition-colors group-hover:text-[#00adef]">+</span>
                                <span className={`absolute left-0 bottom-0 h-[2px] bg-[#00adef] transition-all duration-300 ${activeDropdown === 'free-resources' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>

                            <Link href="/login" onMouseEnter={() => setActiveDropdown(null)} className="bg-[#1860c2] hover:bg-[#124b9a] transition-colors text-white text-[14px] font-bold px-6 py-[7px] rounded-full shadow-md ml-1 tracking-tight">
                                Student Login
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                <AnimatePresence>
                    {activeDropdown && (
                        <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 w-full z-10 border-t border-gray-100">
                            <MegaMenu
                                data={getDropdownData()}
                                type={getDropdownType()}
                                closeMenu={() => setActiveDropdown(null)}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 top-[76px] bg-white z-[90] lg:hidden overflow-y-auto"
                        >
                            <div className="flex flex-col">
                                <div className="flex flex-col bg-gray-50 border-b border-gray-200 px-4 py-3 gap-2">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-[#00adef] p-1 rounded-full"><Phone size={12} className="text-white" /></div>
                                        <span className="text-xs font-semibold text-gray-700">9811489560 / 011-42437002</span>
                                    </div>
                                    <button onClick={() => { setQuoteOpen(true); setMobileMenuOpen(false); }} className="text-left w-full">
                                        <div className="bg-gradient-to-r from-[#5a8bfb] to-[#2547a0] px-4 py-1.5 rounded-full text-center shadow-sm">
                                            <span className="font-medium text-[12px] text-white">
                                                Book <span className="text-[#FFD700] font-bold">FREE</span> 1:1 Mentorship
                                            </span>
                                        </div>
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <div className="bg-[#00adef] p-1 rounded-full"><Mail size={12} className="text-white" /></div>
                                        <span className="text-xs font-semibold text-gray-700">enquiry@sriramsias.com</span>
                                    </div>
                                </div>

                                <div className="px-4 py-2 font-bold text-sm text-gray-800">
                                    {[
                                        { id: 'courses', label: 'COURSES +', dataset: servicesData, path: '/courses' },
                                        { id: 'about', label: 'ABOUT US +', dataset: homeData, path: '/about' },
                                        { id: 'test-series', label: 'TEST SERIES +', dataset: productsData, path: '/test-series' },
                                        { id: 'current-affairs', label: 'CURRENT AFFAIRS +', dataset: resourcesData, path: '/current-affairs' },
                                        { id: 'free-resources', label: 'FREE RESOURCES +', dataset: resourcesData, path: '/free-resources' },
                                    ].map(({ id, label, dataset, path }) => (
                                        <div key={id}>
                                            <div className="flex items-center justify-between w-full py-3 border-b border-gray-100">
                                                <Link href={path} className="flex-1" onClick={() => setMobileMenuOpen(false)}>{label}</Link>
                                                <ChevronDown
                                                    size={28}
                                                    className={`p-1.5 bg-gray-100 rounded ${mobileExpanded === id ? 'rotate-180 text-blue-500' : 'text-gray-500'}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setMobileExpanded(mobileExpanded === id ? null : id);
                                                    }}
                                                />
                                            </div>
                                            {mobileExpanded === id && (
                                                <div className="flex flex-col gap-4 pl-4 pt-4 pb-2 normal-case border-b border-gray-100 bg-gray-50 -mx-4 px-8">
                                                    {dataset.map((s, idx) => (
                                                        <div key={idx}>
                                                            <p className="text-blue-600 font-bold mb-2 uppercase text-[11px] tracking-widest">{s.category}</p>
                                                            <div className="flex flex-col gap-3 pl-2">
                                                                {s.items.map((link: any, lIdx: number) => (
                                                                    <Link key={lIdx} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-[13px] text-gray-600 hover:text-blue-600 block leading-snug">{link.title}</Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="px-4 py-3 grid grid-cols-2 gap-2 mt-1">
                                    <Link href="/upcoming-batches" onClick={() => setMobileMenuOpen(false)} className="bg-[#2b5ba3] text-white text-[11px] font-bold py-2.5 rounded-sm text-center relative shadow-sm">
                                        <span className="absolute -top-1.5 -left-1 text-[#E31E24] font-black text-[9px] bg-[#FFD700] px-1 border border-[#b89b00] shadow-sm rounded-sm z-10">NEW!</span>
                                        UPCOMING BATCHES
                                    </Link>
                                    <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="bg-[#2b5ba3] text-white text-[11px] font-bold py-2.5 rounded-sm text-center shadow-sm">BLOG</Link>
                                    <Link href="/portal" onClick={() => setMobileMenuOpen(false)} className="bg-[#2b5ba3] text-white text-[11px] font-bold py-2.5 rounded-sm text-center shadow-sm">PORTAL</Link>
                                    <Link href="/signup" onClick={() => setMobileMenuOpen(false)} className="bg-[#2b5ba3] text-white text-[11px] font-bold py-2.5 rounded-sm text-center shadow-sm">SIGN UP</Link>
                                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-[#2b5ba3] text-white text-[11px] font-bold py-2.5 rounded-sm text-center col-span-2 shadow-sm">CONTACT US</Link>
                                </div>

                                <div className="px-4 py-4 mt-2 bg-gray-50 border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
                                    <div className="relative flex items-center mb-4">
                                        <input type="text" placeholder="Search by Course Name" className="pl-4 pr-10 h-[40px] text-[13px] border border-gray-300 rounded-full w-full focus:outline-none focus:border-[#00adef] text-gray-700 shadow-inner" />
                                        <button className="absolute right-0 top-0 h-[40px] w-[40px] bg-[#00adef] hover:bg-[#0092c8] transition-colors rounded-full flex items-center justify-center">
                                            <Search size={18} className="text-white" strokeWidth={2.5} />
                                        </button>
                                    </div>
                                    <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="bg-[#1860c2] text-white text-[15px] font-bold py-3.5 rounded-full text-center block w-full shadow-md">
                                        Student Login
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}</style>
            <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
        </header>
    );
}
