import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import '../styles/Demo.css';

const Demo = () => {
    return (
        <section className="demo section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">See it in action.</h2>
                    <p className="section-subtitle">Experience the future of feedback collection.</p>
                </div>

                <div className="demo-wrapper">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="demo-container"
                    >
                        <div className="demo-placeholder">
                            <div className="play-button-wrapper">
                                <button className="play-button">
                                    <Play size={32} fill="white" color="white" />
                                </button>
                            </div>
                            <div className="demo-overlay"></div>
                            {/* In a real app, this would be an img or video tag */}
                            <div className="demo-bg-pattern"></div>
                        </div>
                        <div className="demo-caption">
                            See how easy it is to collect voice-based feedback.
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Demo;
