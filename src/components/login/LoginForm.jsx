/**
 * LoginForm — Animated login form matching Shivanya RxAI theme.
 * Dark olive, moss green (#b7c25e), cream (#f4ede6), Outfit font.
 */
import { useState } from "react";
import { motion } from "framer-motion";

const inputVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.1 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function LoginForm({ onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder — add auth logic later
    };

    return (
        <motion.div
            className="w-full max-w-[400px] mx-auto"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Logo mark */}
            <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <svg width="56" height="56" viewBox="-60 -60 120 120" className="text-[#b7c25e]">
                    <g transform="scale(0.8)">
                        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                            <path
                                key={i}
                                d="M0 0 C 16 -9, 20 -34, 0 -50 C -20 -34, -16 -9, 0 0 Z"
                                transform={`rotate(${deg})`}
                                fill="currentColor"
                            />
                        ))}
                        <circle cx="0" cy="0" r="5" fill="currentColor" />
                    </g>
                </svg>
            </motion.div>

            <motion.h2
                className="text-center font-bold text-[#f4ede6] text-xl mb-1"
                style={{ fontFamily: "'Outfit', sans-serif" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
            >
                Welcome to Shivanya RxAI
            </motion.h2>
            <motion.p
                className="text-center text-[#b7c25e] text-sm font-medium tracking-widest uppercase mb-8"
                style={{ letterSpacing: "0.2em" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Sign in to your pharmacy portal
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div
                    custom={0}
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <label className="block text-[#c8dfa0] text-xs font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="pharmacist@pharmacy.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[rgba(12,20,5,0.6)] border border-[rgba(183,194,94,0.25)] text-[#f4ede6] placeholder-[rgba(244,237,230,0.35)] text-sm focus:outline-none focus:border-[#b7c25e] focus:ring-1 focus:ring-[#b7c25e] transition-all duration-300"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    />
                </motion.div>

                <motion.div
                    custom={1}
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <label className="block text-[#c8dfa0] text-xs font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[rgba(12,20,5,0.6)] border border-[rgba(183,194,94,0.25)] text-[#f4ede6] placeholder-[rgba(244,237,230,0.35)] text-sm focus:outline-none focus:border-[#b7c25e] focus:ring-1 focus:ring-[#b7c25e] transition-all duration-300"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    />
                </motion.div>

                <motion.div
                    custom={2}
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    className="pt-2"
                >
                    <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest text-[#1a2a0a] bg-[#b7c25e] hover:bg-[#c8dfa0] transition-all duration-300 hover:shadow-[0_0_24px_rgba(183,194,94,0.4)]"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        Sign In
                    </button>
                </motion.div>

                <motion.p
                    className="text-center text-[rgba(244,237,230,0.5)] text-xs"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Don&apos;t have an account?{" "}
                    <span className="text-[#b7c25e] font-semibold cursor-pointer hover:underline">
                        Contact your admin
                    </span>
                </motion.p>
            </form>
        </motion.div>
    );
}
