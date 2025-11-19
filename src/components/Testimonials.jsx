import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import '../styles/Testimonials.css';

const testimonials = [
    {
        quote: "Voyceout completely changed how we do user research. The depth of insight we get from voice is unmatched.",
        author: "Sarah Jenkins",
        role: "Product Lead at TechFlow",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
    },
    {
        quote: "Our response rates doubled when we switched to voice surveys. People actually enjoy giving feedback now.",
        author: "David Chen",
        role: "Head of CX at GrowthScale",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
    },
    {
        quote: "The AI summaries are magic. I save hours every week not having to listen to every single recording manually.",
        author: "Elena Rodriguez",
        role: "UX Researcher at Designify",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Loved by product teams.</h2>
                    <p className="section-subtitle">Don't just take our word for it.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="testimonial-card"
                        >
                            <div className="quote-icon">
                                <Quote size={24} />
                            </div>
                            <p className="testimonial-quote">"{testimonial.quote}"</p>
                            <div className="testimonial-author">
                                <img src={testimonial.image} alt={testimonial.author} className="author-image" />
                                <div>
                                    <h4 className="author-name">{testimonial.author}</h4>
                                    <p className="author-role">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
