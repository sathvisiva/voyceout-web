import React from 'react';
import { Mic, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="logo">
                            <div className="logo-icon">
                                <Mic size={20} color="white" />
                            </div>
                            <span className="logo-text">Voyceout</span>
                        </div>
                        <p className="footer-desc">
                            The world’s first AI platform to create surveys and capture responses through natural voice conversations.
                        </p>
                        <div className="social-links">
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Linkedin size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Github size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Product</h4>
                            <a href="#">Features</a>
                            <a href="#">Integrations</a>
                            <a href="#">Pricing</a>
                            <a href="#">Changelog</a>
                        </div>
                        <div className="footer-column">
                            <h4>Company</h4>
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="footer-column">
                            <h4>Legal</h4>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Security</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Voyceout — Voice-First Survey Intelligence</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
