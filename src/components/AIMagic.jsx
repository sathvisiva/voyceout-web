import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Cpu } from 'lucide-react';
import '../styles/AIMagic.css';

const AIMagic = () => {
    return (
        <section className="ai-magic section-padding">
            <div className="container">
                <div className="ai-magic-content">
                    <div className="ai-text">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="badge-ai">
                                <Sparkles size={14} /> AI-Powered Intelligence
                            </div>
                            <h2 className="section-title text-white">
                                From raw audio to <br />
                                <span className="text-gradient-ai">strategic insights.</span>
                            </h2>
                            <p className="section-subtitle text-gray">
                                Powered by next-gen AI. Just ask questions. Voyceout does the rest.
                                We analyze sentiment, detect themes, and generate actionable summaries instantly.
                            </p>
                        </motion.div>
                    </div>

                    <div className="ai-visual">
                        <div className="ai-orb-container">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="ai-orb-ring ring-1"
                            />
                            <motion.div
                                animate={{ scale: [1.1, 1, 1.1], rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="ai-orb-ring ring-2"
                            />
                            <div className="ai-orb-core">
                                <Brain size={48} color="white" />
                            </div>

                            {/* Floating particles */}
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="ai-particle"
                                    animate={{
                                        y: [0, -100, 0],
                                        x: [0, (i % 2 === 0 ? 50 : -50), 0],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        delay: i * 0.5,
                                        ease: "easeInOut"
                                    }}
                                    style={{
                                        left: '50%',
                                        top: '50%'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIMagic;
