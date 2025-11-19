import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Mic, MessageSquare, BarChart2 } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="badge"
                    >
                        <span className="badge-icon">✨</span>
                        The Future of Feedback is Here
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="hero-title"
                    >
                        Collect Feedback at the <br />
                        <span className="text-gradient">Speed of Voice.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hero-subtitle"
                    >
                        The world’s first AI platform to create surveys and capture responses through natural voice conversations.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hero-actions"
                    >
                        <button className="btn btn-primary">
                            Try Voyceout Free <ArrowRight size={18} />
                        </button>
                        <button className="btn btn-secondary">
                            <Play size={18} fill="currentColor" /> Watch Demo
                        </button>
                    </motion.div>
                </div>

                <div className="hero-visual">
                    <div className="antigravity-container">
                        {/* Central Floating Element */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="floating-card main-card"
                        >
                            <div className="voice-wave">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [20, 40, 20] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                        className="wave-bar"
                                    />
                                ))}
                            </div>
                            <p>How was your experience?</p>
                        </motion.div>

                        {/* Floating Icons */}
                        <motion.div
                            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="floating-icon icon-1"
                        >
                            <Mic size={24} color="white" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -25, 0], x: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="floating-icon icon-2"
                        >
                            <MessageSquare size={24} color="white" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="floating-icon icon-3"
                        >
                            <BarChart2 size={24} color="white" />
                        </motion.div>

                        {/* Background Glow */}
                        <div className="hero-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
