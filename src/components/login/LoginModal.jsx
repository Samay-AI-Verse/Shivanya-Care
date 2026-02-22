/**
 * LoginModal — Full-screen overlay with animated login form.
 * Opens when user clicks GET STARTED. Matches Shivanya RxAI theme.
 */
import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "./LoginForm";

export default function LoginModal({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[200] flex items-center justify-center p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-[rgba(10,18,5,0.92)] backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal card */}
                    <motion.div
                        className="relative w-full max-w-[440px] rounded-2xl p-10 border border-[rgba(183,194,94,0.2)] shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(183,194,94,0.08)]"
                        style={{
                            background: "linear-gradient(165deg, rgba(26,42,10,0.98) 0%, rgba(18,30,7,0.99) 100%)",
                        }}
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 24, scale: 0.96 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-[#f4ede6] hover:bg-[rgba(183,194,94,0.15)] transition-colors"
                            aria-label="Close"
                        >
                            <i className="ri-close-line text-xl" />
                        </button>

                        <LoginForm onClose={onClose} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
