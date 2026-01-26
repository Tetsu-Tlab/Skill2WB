"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function TransitionEffect() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <AnimatePresence>
            {!isLoaded && (
                <motion.div
                    key="overlay"
                    initial={{ y: 0 }}
                    animate={{ y: "-100%" }}
                    exit={{ y: "-100%" }}
                    transition={{
                        duration: 1.2,
                        ease: [0.87, 0, 0.13, 1]
                    }}
                    className="fixed inset-0 bg-primary z-[9999] pointer-events-none"
                />
            )}
        </AnimatePresence>
    );
}
