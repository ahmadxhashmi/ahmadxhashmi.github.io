import React from 'react';
import { ArrowUp } from 'lucide-react';

const Contact = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section id="contact" style={{ background: 'var(--bg)' }}>
            {/* CTA Section */}
            <div className="section-padding relative overflow-hidden">
                {/* Blurred lime orb */}
                <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{
                    background: 'rgba(173,243,60,0.03)',
                    filter: 'blur(100px)',
                    zIndex: 0,
                }}></div>
                {/* Blurred orange orb */}
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none" style={{
                    background: 'rgba(200,94,24,0.03)',
                    filter: 'blur(100px)',
                    zIndex: 0,
                }}></div>

                <div className="container-main relative z-10 text-center">
                    <div className="reveal" data-delay="0">
                        <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl mb-4" style={{ lineHeight: 1.15 }}>
                            Let's make your
                        </h2>
                    </div>
                    <div className="reveal" data-delay="150">
                        <h2 className="font-serif italic font-normal text-3xl md:text-5xl lg:text-6xl mb-8" style={{ lineHeight: 1.15, color: 'var(--accent-lime)' }}>
                            ideas come alive
                        </h2>
                    </div>
                    <p className="reveal text-base md:text-lg max-w-md mx-auto mb-10" data-delay="300" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                        Ready to build something extraordinary? Let's discuss your project and bring your vision to reality.
                    </p>
                    <div className="reveal" data-delay="400">
                        <a href="mailto:ahmadhashmi123123@gmail.com" className="btn-primary text-sm">
                            Contact Now
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="reveal flex items-center justify-center gap-8 mt-10" data-delay="500">
                        <a href="https://github.com/ahmadxhashmi" target="_blank" rel="noopener noreferrer"
                            className="text-xs uppercase tracking-widest transition-colors duration-200"
                            style={{ color: 'var(--text-muted)' }}
                            onMouseEnter={(e) => e.target.style.color = '#adf33c'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                        >GitHub</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                            className="text-xs uppercase tracking-widest transition-colors duration-200"
                            style={{ color: 'var(--text-muted)' }}
                            onMouseEnter={(e) => e.target.style.color = '#c85e18'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                        >LinkedIn</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                            className="text-xs uppercase tracking-widest transition-colors duration-200"
                            style={{ color: 'var(--text-muted)' }}
                            onMouseEnter={(e) => e.target.style.color = '#adf33c'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                        >Instagram</a>
                    </div>
                </div>
            </div>

            {/* Footer Bar */}
            <div className="py-6" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="container-main flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Circular Logo Stamp — lime accent */}
                    <div className="relative w-20 h-20">
                        <svg viewBox="0 0 100 100" className="w-full h-full" style={{ animation: 'spin 12s linear infinite' }}>
                            <defs>
                                <path id="footerCircle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                            </defs>
                            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(173,243,60,0.2)" strokeWidth="0.5" />
                            <text fontSize="8.5" fill="#adf33c" fontFamily="DM Sans, sans-serif" letterSpacing="3">
                                <textPath href="#footerCircle">
                                    AHMAD HASHMI • DEVELOPER • ISLAMABAD •
                                </textPath>
                            </text>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-display font-bold text-xs" style={{ color: 'var(--accent-lime)' }}>AH</span>
                        </div>
                    </div>

                    {/* Center */}
                    <div className="text-center">
                        <p className="font-display font-semibold text-sm text-white">Ahmad Hashmi</p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>© 2025 • Islamabad, Pakistan</p>
                    </div>

                    {/* Back To Top */}
                    <button onClick={scrollToTop} className="flex items-center gap-2 text-xs uppercase tracking-widest transition-colors duration-200"
                        style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#adf33c'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                        Back To Top
                        <ArrowUp size={14} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
