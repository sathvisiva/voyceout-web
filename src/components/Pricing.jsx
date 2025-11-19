import React from 'react';
import { Check } from 'lucide-react';
import '../styles/Pricing.css';

const plans = [
    {
        name: "Starter",
        price: "Free",
        description: "Perfect for individuals and small experiments.",
        features: [
            "50 voice responses / month",
            "Basic transcription",
            "1 active survey",
            "Email support"
        ],
        cta: "Start for Free",
        popular: false
    },
    {
        name: "Growth",
        price: "$49",
        period: "/month",
        description: "For growing teams who need deeper insights.",
        features: [
            "1,000 voice responses / month",
            "Advanced sentiment analysis",
            "Unlimited surveys",
            "Export to CSV/Notion",
            "Priority support"
        ],
        cta: "Start Free Trial",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Scale voice feedback across your organization.",
        features: [
            "Unlimited responses",
            "Custom AI models",
            "SSO & Security",
            "Dedicated success manager",
            "SLA"
        ],
        cta: "Contact Sales",
        popular: false
    }
];

const Pricing = () => {
    return (
        <section className="pricing section-padding" id="pricing">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Simple, transparent pricing.</h2>
                    <p className="section-subtitle">Start for free, scale as you grow.</p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                            {plan.popular && <div className="popular-badge">Most Popular</div>}
                            <h3 className="plan-name">{plan.name}</h3>
                            <div className="plan-price">
                                {plan.price}
                                {plan.period && <span className="plan-period">{plan.period}</span>}
                            </div>
                            <p className="plan-desc">{plan.description}</p>

                            <ul className="plan-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <Check size={18} className="check-icon" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} full-width`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
