"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function SmoothScrollProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [mounted, setMounted] = useState(false);
    const { scrollYProgress } = useScroll();

    // A smooth spring animation for scroll progress
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <>{children}</>;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100] pointer-events-none"
                style={{ scaleX }}
            />
            {children}
        </>
    );
}
