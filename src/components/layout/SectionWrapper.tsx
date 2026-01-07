"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function SectionWrapper({ children, className = "", delay = 0 }: SectionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
