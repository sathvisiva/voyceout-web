import React, { useState, useEffect } from 'react';
import { Menu, X, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <div className="logo-icon">
                        <Mic size={24} color="white" />
                    </div>
                    <span className="logo-text">Voyceout</span>
                </div>

                <nav className="desktop-nav">
                    <a href="#how-it-works">How it Works</a>
                    <a href="#features">Features</a>
                    <a href="#use-cases">Use Cases</a>
                    <a href="#pricing">Pricing</a>
                </nav>

                <div className="header-actions">
                    <a href="#" className="login-link">Log in</a>
                    <button className="btn btn-primary">Get Started</button>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="mobile-menu"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How it Works</a>
                            <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                            <a href="#use-cases" onClick={() => setIsMobileMenuOpen(false)}>Use Cases</a>
                            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
                            <hr />
                            <a href="#" className="login-link">Log in</a>
                            <button className="btn btn-primary full-width">Get Started</button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
