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
    Search
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
        category: "About us",
        desc: "Panacea delivers innovative mobile and web app solutions for modern businesses",
        icon: <Image src="/business_solution.png" alt="About" width={24} height={24} className="object-contain" />,
        items: [
            { title: "Company Overview", desc: "Panacea delivers innovative mobile and web app solutions for modern businesses", href: "/about" },
            { title: "Vision & Mission", desc: "Driving digital innovation with purpose and empowering businesses globally", href: "/vision" },
            { title: "Leadership Team", desc: "Meet the experienced minds leading Panacea to digital excellence", href: "/leadership" },
            { title: "Our Journey", desc: "14+ years of building world-class digital products across 20+ industries", href: "/journey" },
            { title: "Awards & Recognition", desc: "Industry accolades celebrating our commitment to quality and innovation", href: "/awards" },
            { title: "NASSCOM Membership", desc: "Proud member of India's premier IT industry association", href: "/nasscom" },
            { title: "Life at Panacea", desc: "Explore our vibrant culture, talented people, and collaborative work environment", href: "/careers" },
        ],
        rightPanel: {
            title: "ABOUT PANACEA",
            checkmarks: [
                "ISO-Certified Enterprise IT Company",
                "14+ Years of Industry Experience",
                "Trusted by Global Governments & Enterprises",
                "1500+ Apps Delivered Worldwide",
                "Offices in Hyderabad, USA"
            ],
            buttonText: "Get in Touch",
            buttonLink: "/contact"
        }
    },
    {
        category: "Blog",
        desc: "Discover expert ideas and innovations on our Blogs",
        icon: <Image src="/socialmedia.png" alt="Blog" width={24} height={24} className="object-contain" />,
        items: [
            { title: "Latest Insights", desc: "Read our newest articles and updates", href: "/blog" },
            { title: "Tech Trends", desc: "Stay ahead with latest technology trends", href: "/blog/tech" },
            { title: "Case Studies", desc: "In-depth analysis of our successful projects", href: "/blog/case-studies" },
        ],
        rightPanel: {
            title: "SUBSCRIBE NOW",
            checkmarks: [
                "Weekly Tech Insights",
                "Industry Best Practices",
                "Exclusive Feature Updates"
            ],
            buttonText: "Read Blog",
            buttonLink: "/blog"
        }
    }
];

const servicesData = [
    {
        category: "Software Development",
        desc: "Delivering seamless digital experiences with expert software development.",
        icon: <Image src="/custom_software-dev.png" alt="Software" width={24} height={24} className="object-contain" />,
        items: [
            { title: "Mobile App Development", desc: "Custom iOS, Android & cross-platform solutions", href: "/services/mobile" },
            { title: "Web Application Development", desc: "Scalable web apps built for your business", href: "/services/web" },
            { title: "iOS App Development", desc: "Native iPhone apps with seamless UX", href: "/services/ios" },
            { title: "Custom Software Development", desc: "Tailored solutions for unique business needs", href: "/services/custom" },
            { title: "Android App Development", desc: "Robust apps for the Android ecosystem", href: "/services/android" },
            { title: "CMS & Portal Development", desc: "Content management systems for easy updates", href: "/services/cms" },
            { title: "iPad App Development", desc: "Optimized tablet experiences for enterprise", href: "/services/ipad" },
            { title: "360° Photography Services", desc: "Immersive virtual tours and product views", href: "/services/photography" },
            { title: "Flutter App Development", desc: "Cross-platform apps from a single codebase", href: "/services/flutter" },
            { title: "Enterprise Application Development", desc: "Scalable, secure & cloud-native enterprise software", href: "/services/enterprise" },
            { title: "React Native App Development", desc: "High-performance hybrid mobile apps", href: "/services/react-native" },
            { title: "App Maintenance & Support", desc: "Ongoing updates, bug fixes & performance optimization", href: "/services/maintenance" },
            { title: "Cross-Platform Development", desc: "Build once, deploy everywhere", href: "/services/cross-platform" },
        ],
        rightPanel: {
            title: "WHY PANACEA",
            checkmarks: [
                "Client-Centric, Result-Driven Approach",
                "End-to-End IT & Digital Transformation Solutions",
                "Efficient Development with Speed & Quality",
                "Dedicated In-House Expert Team",
                "Proven Track Record Across 20+ Industries"
            ],
            buttonText: "Explore Services",
            buttonLink: "/services"
        }
    },
    {
        category: "Cloud & DevOps",
        desc: "Scalable cloud infrastructure and CI/CD automation",
        icon: <Image src="/cloud_devops.png" alt="Cloud" width={24} height={24} className="object-contain" />,
        items: [
            { title: "Cloud Strategy & Consulting", desc: "Expert guidance for cloud adoption and migration", href: "/services/cloud-consulting" },
            { title: "AWS Cloud Services", desc: "Scalable solutions built on Amazon Web Services", href: "/services/aws" },
            { title: "Devops & CI/CD", desc: "Automate delivery and deployment workflows", href: "/services/devops" },
            { title: "Cloud Migration", desc: "Seamless transition to cloud infrastructure", href: "/services/cloud-migration" },
            { title: "Cloud Managed Services", desc: "Comprehensive management of your cloud resources", href: "/services/cloud-managed" },
        ],
        rightPanel: {
            title: "CLOUD EXPERTISE",
            checkmarks: [
                "AWS Advanced Consulting Partner",
                "Azure Integration Experts",
                "Secure & Compliant Architectures",
                "24/7 Cloud Support & Monitoring"
            ],
            buttonText: "View Solutions",
            buttonLink: "/services"
        }
    },
    {
        category: "AI & Data Intelligence",
        desc: "AI-powered insights that transform raw data into real impact.",
        icon: <Image src="/ai_data_intelligence.png" alt="AI" width={24} height={24} className="object-contain" />,
        items: [
            { title: "AI Consulting & Strategy", desc: "Navigate the AI landscape securely", href: "/services/ai-consulting" },
            { title: "Machine Learning Solutions", desc: "Predictive models for business growth", href: "/services/ml" },
            { title: "Data Engineering", desc: "Robust data pipelines and architectures", href: "/services/data-engineering" },
            { title: "Generative AI Applications", desc: "Custom LLM development and integration", href: "/services/gen-ai" },
        ],
        rightPanel: {
            title: "DATA INTELLIGENCE",
            checkmarks: [
                "Predictive Analytics Excellence",
                "Custom LLM Integrations",
                "Data Privacy First Approach"
            ],
            buttonText: "Explore AI",
            buttonLink: "/services"
        }
    },
    {
        category: "Salesforce",
        desc: "Salesforce – where businesses grow smarter and faster.",
        icon: <Image src="/sales_force.png" alt="Salesforce" width={24} height={24} className="object-contain" />,
        items: [
            { title: "Salesforce Consulting", desc: "Strategic planning for CRM success", href: "/services/sf-consulting" },
            { title: "Implementation Services", desc: "End-to-end Salesforce rollout", href: "/services/sf-implementation" },
            { title: "Lightning Migration", desc: "Upgrade to the modern Lightning UI", href: "/services/sf-lightning" },
            { title: "Integration Services", desc: "Connect Salesforce with your ecosystem", href: "/services/sf-integration" },
        ],
        rightPanel: {
            title: "SALESFORCE EXPERTS",
            checkmarks: [
                "Certified Salesforce Developers",
                "Seamless Tool Integrations",
                "Custom Dashboards & Reports",
                "Ongoing Admin Support"
            ],
            buttonText: "Optimize CRM",
            buttonLink: "/services"
        }
    },
    {
        category: "Design & Experience",
        desc: "Design with purpose, experience with impact.",
        icon: <Image src="/design_experience.png" alt="Design" width={24} height={24} className="object-contain" />,
        items: [
            { title: "UI/UX Design & Research", desc: "Data-driven design strategies", href: "/services/ui-ux" },
            { title: "Wireframing & Prototyping", desc: "Visualizing concepts quickly", href: "/services/prototyping" },
            { title: "Usability Testing", desc: "Validating designs with real users", href: "/services/testing" },
            { title: "Brand Identity", desc: "Crafting memorable visual brands", href: "/services/branding" },
        ],
        rightPanel: {
            title: "CRAFTING EXPERIENCES",
            checkmarks: [
                "User-Centric Methodology",
                "Conversion-Optimized Designs",
                "Interactive Prototypes",
                "Accessibility Compliant (WCAG)"
            ],
            buttonText: "See Portfolio",
            buttonLink: "/portfolio"
        }
    },
    {
        category: "Digital Marketing Solutions",
        desc: "Turning clicks into customers with digital marketing solutions.",
        icon: <Image src="/digital-marketing-services.png" alt="Marketing" width={24} height={24} className="object-contain" />,
        items: [
            { title: "SEO Optimization", desc: "Rank higher on search engines", href: "/services/seo" },
            { title: "SEM / PPC Campaigns", desc: "Targeted ads for immediate ROI", href: "/services/ppc" },
            { title: "Social Media Marketing", desc: "Engage and grow your audience", href: "/services/smm" },
            { title: "Content Strategy", desc: "Compelling content that converts", href: "/services/content" },
        ],
        rightPanel: {
            title: "GROWTH MARKETING",
            checkmarks: [
                "Data-Driven Strategies",
                "Transparent Reporting",
                "High ROI Performance Campaigns",
                "Expert Creative Teams"
            ],
            buttonText: "Boost Growth",
            buttonLink: "/services"
        }
    }
];

const productsData = [
    {
        category: "Management Systems",
        desc: "Comprehensive admin and operations management tools.",
        icon: <Image src="/education.png" alt="Management" width={24} height={24} className="object-contain" />,
        items: [
            { title: "Child Care System", desc: "Streamline daycare operations", href: "/products/child-care" },
            { title: "School Management App", desc: "All-in-one educational platform", href: "/products/school" },
            { title: "OMR Customization", desc: "Automated grading solutions", href: "/products/omr" },
            { title: "Influencers App", desc: "Manage campaigns and creators", href: "/products/influencers" },
        ],
        rightPanel: {
            title: "OUR PRODUCTS",
            checkmarks: [
                "Scalable Architectures",
                "Easy Integration Capabilities",
                "Secure Data Handling",
                "Custom Tailored Deployments"
            ],
            buttonText: "View Products",
            buttonLink: "/products"
        }
    },
    {
        category: "On-Demand Apps",
        desc: "Transforming services into instant successes.",
        icon: <Image src="/ondemand.png" alt="On Demand" width={24} height={24} className="object-contain" />,
        items: [
            { title: "Car Wash App", desc: "Book auto cleaning instantly", href: "/products/car-wash" },
            { title: "Grocery Delivery", desc: "Hyperlocal commerce platforms", href: "/products/grocery" },
            { title: "Ticket Booking", desc: "Event and travel reservations", href: "/products/tickets" },
            { title: "Party Rentals", desc: "Manage inventory and bookings", href: "/products/party-rentals" },
        ],
        rightPanel: {
            title: "ON-DEMAND ECONOMY",
            checkmarks: [
                "Real-Time Tracking",
                "Secure Payment Gateways",
                "Admin Control Panels",
                "Multi-Platform Support"
            ],
            buttonText: "Start Building",
            buttonLink: "/contact"
        }
    }
];

const resourcesData = [
    {
        category: "Mobile App Developers",
        desc: "Mobile App Development - From concept to code, we create apps that connect...",
        icon: <Image src="/custom_software-dev.png" alt="Mobile" width={24} height={24} className="object-contain" />,
        items: [
            { title: "Mobile App Developers", desc: "Full-cycle iOS & Android app specialists", href: "/hire/mobile" },
            { title: "Native App Developers", desc: "Platform-specific apps for peak performance", href: "/hire/native" },
            { title: "Android App Developers", desc: "Kotlin & Java experts for the Play Store", href: "/hire/android" },
            { title: "Hybrid App Developers", desc: "Single codebase apps across iOS & Android", href: "/hire/hybrid" },
            { title: "iOS App Developers", desc: "Swift developers for iPhone & Apple ecosystem", href: "/hire/ios" },
            { title: "Flutter App Developers", desc: "Google's UI toolkit for beautiful cross-platform apps", href: "/hire/flutter" },
            { title: "iPad App Developers", desc: "Tablet-optimized apps for enterprise & education", href: "/hire/ipad" },
            { title: "React Native Developers", desc: "JavaScript-powered mobile apps with native feel", href: "/hire/react" },
            { title: "Custom Software Developers", desc: "Bespoke solutions tailored to your workflow", href: "/hire/custom" },
        ],
        rightPanel: {
            title: "HIRING MADE EASY",
            checkmarks: [
                "Pre-Vetted & Skilled IT Professionals",
                "Flexible Hiring Models (Hourly, Dedicated, Project-Based)",
                "Quick Onboarding & Seamless Integration",
                "Cost-Effective Resource Engagement",
                "Transparent Communication & Full Control"
            ],
            buttonText: "Start Hiring",
            buttonLink: "/contact"
        }
    },
    {
        category: "Web App Developers",
        desc: "Full-stack developers for scalable web applications.",
        icon: <Image src="/business_solution.png" alt="Web" width={24} height={24} className="object-contain" />,
        items: [
            { title: "Frontend Developers", desc: "React, Angular, Vue experts", href: "/hire/frontend" },
            { title: "Backend Developers", desc: "Node, Python, Java engineers", href: "/hire/backend" },
            { title: "Full Stack Developers", desc: "End-to-end web specialists", href: "/hire/fullstack" },
            { title: "CMS Developers", desc: "WordPress, Drupal, Shopify experts", href: "/hire/cms" },
        ],
        rightPanel: {
            title: "TOP WEB TALENT",
            checkmarks: [
                "Modern JS Framework Experts",
                "Secure Backend Architects",
                "Performance Orientated coders",
                "Agile Methodologies"
            ],
            buttonText: "Hire Web Devs",
            buttonLink: "/contact"
        }
    },
    {
        category: "Enterprise & Cloud Developers",
        desc: "AWS, DevOps and cloud infrastructure specialists.",
        icon: <Image src="/cloud_devops.png" alt="Enterprise" width={24} height={24} className="object-contain" />,
        items: [
            { title: "Cloud Architects", desc: "Design scalable cloud systems", href: "/hire/architects" },
            { title: "DevOps Engineers", desc: "CI/CD and automation specialists", href: "/hire/devops" },
            { title: "Database Administrators", desc: "Optimize data storage & retrieval", href: "/hire/dba" },
            { title: "Security Experts", desc: "Ensure compliance & data protection", href: "/hire/security" },
        ],
        rightPanel: {
            title: "SCALE YOUR INFRA",
            checkmarks: [
                "AWS, Azure, GCP Experts",
                "Zero Downtime Migrations",
                "High Availability Architectures"
            ],
            buttonText: "Transform Now",
            buttonLink: "/contact"
        }
    },
    {
        category: "Design & Creative Experts",
        desc: "UI/UX designers and creative professionals on demand.",
        icon: <Image src="/design_experience.png" alt="Design" width={24} height={24} className="object-contain" />,
        items: [
            { title: "UI/UX Designers", desc: "Craft beautiful user interfaces", href: "/hire/ui-ux" },
            { title: "Product Designers", desc: "End-to-end product visionaries", href: "/hire/product-designers" },
            { title: "Graphic Designers", desc: "Visual branding and assets", href: "/hire/graphics" },
            { title: "Animators & 3D Artists", desc: "Immersive interactive media", href: "/hire/3d" },
        ],
        rightPanel: {
            title: "CREATIVE MASTERY",
            checkmarks: [
                "Figma & Adobe CC Experts",
                "Design Thinking Workshops",
                "Rapid Prototyping",
                "Pixel-Perfect Delivery"
            ],
            buttonText: "Hire Creatives",
            buttonLink: "/contact"
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
