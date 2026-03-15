import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const lastScrollRef = useRef(0);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            if (current > lastScrollRef.current && current > 80) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            lastScrollRef.current = current;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <nav
            className="fixed left-0 w-full h-16 z-[100] border-b border-[#1E1E1E]"
            style={{
                top: '0',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                background: 'rgba(10,10,10,0.75)',
                transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
                transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
            }}
        >
            <div className="container-main h-full flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="font-display font-bold text-lg tracking-tight">
                    AH<span style={{ color: 'var(--text-muted)' }}>.</span>
                </a>

                {/* Center — Location & Clock */}
                <div className="hidden md:flex items-center gap-3 text-xs tracking-wide" style={{ color: 'var(--text-muted)' }}>
                    <span>Islamabad, PK</span>
                    <span className="w-1 h-1 rounded-full bg-current opacity-50"></span>
                    <span className="tabular-nums">
                        {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
                    </span>
                </div>

                {/* Right — Nav Links + CTA */}
                <div className="flex items-center gap-4 md:gap-6">
                    <a href="#about" className="nav-tag hidden sm:inline">( ABOUT )</a>
                    <a href="#services" className="nav-tag hidden sm:inline">( SERVICES )</a>
                    <a href="#contact" className="btn-primary !py-2.5 !px-5 !text-xs">
                        Contact Now
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
