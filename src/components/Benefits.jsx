import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Heart, Globe, TrendingUp } from 'lucide-react';
import '../styles/Benefits.css';

const benefits = [
    {
        icon: <Zap size={24} />,
        title: "3x Faster than Typing",
        description: "Users can speak 150 words per minute vs typing 40. Lower friction means more feedback."
    },
    {
        icon: <Heart size={24} />,
        title: "Deeper Emotional Insights",
        description: "Capture tone, hesitation, and emotion that text surveys miss completely."
    },
    {
        icon: <TrendingUp size={24} />,
        title: "Higher Completion Rates",
        description: "Voice is natural. Users are 40% more likely to complete a voice survey."
    },
    {
        icon: <Globe size={24} />,
        title: "Works in Any Language",
        description: "Our AI understands 50+ languages and automatically translates transcripts."
    }
];

const Benefits = () => {
    return (
        <section className="benefits section-padding">
            <div className="container benefits-container">
                <div className="benefits-content">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">Why Voice Feedback?</h2>
                        <p className="section-subtitle">
                            Text forms are boring. Voice is human. Unlock the true potential of customer feedback.
                        </p>

                        <div className="benefits-list">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="benefit-item">
                                    <div className="benefit-icon">{benefit.icon}</div>
                                    <div>
                                        <h3 className="benefit-title">{benefit.title}</h3>
                                        <p className="benefit-desc">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="benefits-visual">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="visual-card"
                    >
                        {/* Abstract representation of voice vs text */}
                        <div className="comparison-chart">
                            <div className="chart-column text-column">
                                <div className="column-bar" style={{ height: '25%' }}></div>
                                <span>Text Forms</span>
                            </div>
                            <div className="chart-column voice-column">
                                <div className="column-bar" style={{ height: '75%' }}>
                                    <div className="pulse-effect"></div>
                                </div>
                                <span>Voice</span>
                            </div>
                        </div>
                        <div className="stat-overlay">
                            <span className="stat-number">3x</span>
                            <span className="stat-label">More Data</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
