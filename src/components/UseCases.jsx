import React from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Briefcase } from 'lucide-react';
import '../styles/UseCases.css';

const useCases = [
    {
        icon: <Users size={32} />,
        title: "Product Teams",
        description: "Understand users faster. Get deep insights into feature requests, bugs, and UX issues directly from the user's voice.",
        tags: ["User Research", "Beta Testing", "Feature Requests"]
    },
    {
        icon: <Search size={32} />,
        title: "Market Research",
        description: "Conduct conversational surveys at scale. Replace boring multiple-choice forms with rich, qualitative voice data.",
        tags: ["Consumer Insights", "Brand Perception", "Concept Testing"]
    },
    {
        icon: <Briefcase size={32} />,
        title: "HR & People Ops",
        description: "Employee pulse checks through voice. Let employees express themselves freely and anonymously.",
        tags: ["Employee Engagement", "Exit Interviews", "Culture Surveys"]
    }
];

const UseCases = () => {
    return (
        <section className="use-cases section-padding" id="use-cases">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Built for every team.</h2>
                    <p className="section-subtitle">Unlock insights across your entire organization.</p>
                </div>

                <div className="use-cases-grid">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="use-case-card"
                        >
                            <div className="use-case-icon-wrapper">
                                <div className="use-case-icon">{useCase.icon}</div>
                            </div>
                            <div className="use-case-content">
                                <h3 className="use-case-title">{useCase.title}</h3>
                                <p className="use-case-desc">{useCase.description}</p>
                                <div className="use-case-tags">
                                    {useCase.tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
