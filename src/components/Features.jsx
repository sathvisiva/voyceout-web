import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Mic, Smile, FileText, Globe2, LayoutDashboard } from 'lucide-react';
import '../styles/Features.css';

const features = [
    {
        icon: <Bot size={24} />,
        title: "AI Question Generator",
        description: "Just state your goal, and our AI crafts the perfect open-ended questions."
    },
    {
        icon: <Mic size={24} />,
        title: "Voice-to-Text Transcription",
        description: "99% accurate transcription for every voice response, instantly."
    },
    {
        icon: <Smile size={24} />,
        title: "Sentiment Analysis",
        description: "Detect emotions, tone, and urgency in every customer response."
    },
    {
        icon: <FileText size={24} />,
        title: "Auto-Summaries",
        description: "Get concise summaries of hours of audio feedback in seconds."
    },
    {
        icon: <Globe2 size={24} />,
        title: "Multi-language Support",
        description: "Collect feedback in any language and analyze it in English."
    },
    {
        icon: <LayoutDashboard size={24} />,
        title: "Analytics Dashboard",
        description: "Visualize trends, keywords, and NPS scores in real-time."
    }
];

const Features = () => {
    return (
        <section className="features section-padding" id="features">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Everything you need to listen better.</h2>
                    <p className="section-subtitle">Powerful features built for modern product teams.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="feature-card"
                        >
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
