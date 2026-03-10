"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "#courses" },
    { name: "Resources", href: "#resources" },
    { name: "Results", href: "#results" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    const headerHeight = useTransform(scrollY, [0, 100], [100, 70]);
    const headerBg = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.85)"]
    );
    const headerBackdrop = useTransform(
        scrollY,
        [0, 100],
        ["blur(0px)", "blur(12px)"]
    );
    const headerShadow = useTransform(
        scrollY,
        [0, 100],
        ["none", "0 4px 6px -1px rgba(0, 0, 0, 0.1)"]
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            style={{
                height: headerHeight,
                backgroundColor: headerBg,
                backdropFilter: headerBackdrop,
                boxShadow: headerShadow,
            }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center transition-colors duration-300"
        >
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold"
                    >
                        <span className="text-primary">SriRam</span>
                        <span className="text-accent ml-1">IAS</span>
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, staggerChildren: 0.1 }}
                        className="flex items-center gap-8"
                    >
                        {navItems.map((item, i) => (
                            <motion.li
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? "text-primary" : "text-primary md:text-white"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Link
                            href="#enroll"
                            className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-white bg-accent rounded-full hover:bg-yellow-600 transition-all group"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                            <span className="relative flex items-center gap-2">
                                Enroll Now
                            </span>
                        </Link>
                    </motion.div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className="text-primary" />
                    ) : (
                        <Menu className={isScrolled ? "text-primary" : "text-primary md:text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-2xl font-bold text-primary hover:text-accent"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="#enroll"
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-8 py-3 font-bold text-white bg-accent rounded-full"
                    >
                        Enroll Now
                    </Link>
                </motion.div>
            )}
        </motion.header>
    );
}
