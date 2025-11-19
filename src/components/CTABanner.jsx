import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/CTABanner.css';

const CTABanner = () => {
    return (
        <section className="cta-banner section-padding">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">Ready to listen to your users?</h2>
                    <p className="cta-subtitle">Join 10,000+ product teams building better products with voice feedback.</p>
                    <button className="btn btn-white">
                        Get Started Free <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
