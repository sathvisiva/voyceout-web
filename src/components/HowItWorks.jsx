import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Share2, BarChart3 } from 'lucide-react';
import '../styles/HowItWorks.css';

const steps = [
    {
        icon: <Sparkles size={32} />,
        title: "Generate Survey Questions",
        description: "The AI instantly creates context-aware questions from your goal.",
        color: "var(--color-primary)"
    },
    {
        icon: <Share2 size={32} />,
        title: "Share the Voice Link",
        description: "Users respond using voice — no typing, no friction.",
        color: "var(--color-accent)"
    },
    {
        icon: <BarChart3 size={32} />,
        title: "Get Actionable Insights",
        description: "Real-time summaries, sentiment, and AI-driven analytics.",
        color: "#00C853"
    }
];

const HowItWorks = () => {
    return (
        <section className="how-it-works section-padding" id="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">How it Works</h2>
                    <p className="section-subtitle">Three simple steps to voice-powered insights.</p>
                </div>

                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="step-card"
                        >
                            <div className="step-icon" style={{ color: step.color, background: `${step.color}15` }}>
                                {step.icon}
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.description}</p>

                            {index < steps.length - 1 && (
                                <div className="step-connector-mobile"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
