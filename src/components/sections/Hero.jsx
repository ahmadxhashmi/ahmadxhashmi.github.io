import React, { useEffect, useRef } from 'react';
import { allProjects } from '../../data/portfolio';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const sectionRef = useRef(null);

    // Page-load entrance animations
    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('[data-hero-anim]');
        if (!els) return;

        els.forEach(el => {
            el.style.opacity = '0';
            const type = el.dataset.heroAnim;
            if (type === 'fade-down') el.style.transform = 'translateY(-20px)';
            else if (type === 'fade-up-big') el.style.transform = 'translateY(40px)';
            else if (type === 'fade-up') el.style.transform = 'translateY(20px)';
            else if (type === 'scale-in') el.style.transform = 'scale(0.8)';
            else if (type === 'scale-up') el.style.transform = 'scale(0.96)';
        });

        requestAnimationFrame(() => {
            els.forEach(el => {
                const delay = el.dataset.heroDelay || '0';
                const type = el.dataset.heroAnim;
                const dur = type === 'scale-up' ? '1s' : type === 'fade-up-big' ? '0.8s' : '0.6s';
                const ease = (type === 'fade-up-big') ? 'cubic-bezier(0.16,1,0.3,1)' : 'ease-out';
                el.style.transition = `opacity ${dur} ${ease} ${delay}ms, transform ${dur} ${ease} ${delay}ms`;

                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0) scale(1)';
                }, 50);
            });
        });
    }, []);

    return (
        <section ref={sectionRef} className="relative flex items-center overflow-hidden" style={{ background: 'var(--bg)', minHeight: 'calc(100vh - 100px)' }}>
            {/* Radial gradient glow — lime accent */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(173,243,60,0.03) 0%, transparent 70%)',
            }}></div>

            <div className="container-main w-full py-20 md:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left */}
                    <div className="relative z-10">
                        {/* Word 1: "Software" in serif italic */}
                        <div className="overflow-hidden mb-1">
                            <h1
                                data-hero-anim="fade-up-big"
                                data-hero-delay="200"
                                className="font-serif italic"
                                style={{ fontSize: 'clamp(72px,10vw,140px)', fontWeight: 700, lineHeight: 1.05, color: 'var(--text)' }}
                            >
                                Software
                            </h1>
                        </div>

                        {/* Word 2: "DEVELOPER" in display bold */}
                        <div className="overflow-hidden mb-8">
                            <h1
                                data-hero-anim="fade-up-big"
                                data-hero-delay="400"
                                className="font-display uppercase"
                                style={{ fontSize: 'clamp(80px,12vw,160px)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.03em', color: 'var(--accent-lime)' }}
                            >
                                DEVELOPER
                            </h1>
                        </div>

                        {/* Rotating Badge — lime accent */}
                        <div
                            data-hero-anim="scale-in"
                            data-hero-delay="600"
                            className="absolute -top-16 right-0 lg:right-[-10px] hidden md:block"
                        >
                            <div className="relative w-[120px] h-[120px] rounded-full flex items-center justify-center" style={{ background: 'rgba(173,243,60,0.05)', border: '1px solid rgba(173,243,60,0.2)' }}>
                                <svg width="120" height="120" viewBox="0 0 120 120" className="absolute inset-0" style={{ animation: 'spin 12s linear infinite' }}>
                                    <defs>
                                        <path id="heroCircle" d="M 60,60 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
                                    </defs>
                                    <text fontSize="10" fill="#adf33c" fontFamily="DM Sans, sans-serif" letterSpacing="3.5" textAnchor="start">
                                        <textPath href="#heroCircle">
                                            AHMAD HASHMI • SOFTWARE • DEVELOPER • AVAILABLE •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>

                        {/* Body */}
                        <p
                            data-hero-anim="fade-up"
                            data-hero-delay="700"
                            className="text-base md:text-lg mb-8 max-w-sm"
                            style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}
                        >
                            Crafting premium digital experiences with Flutter, Python, and modern web technologies. Based in Islamabad, working worldwide.
                        </p>

                        {/* CTA */}
                        <a
                            data-hero-anim="fade-up"
                            data-hero-delay="900"
                            href="#work"
                            className="inline-flex items-center gap-3 group"
                        >
                            <span className="tag group-hover:border-[#adf33c] group-hover:text-[#adf33c] transition-all duration-200">
                                See All Projects ({allProjects.length}+)
                            </span>
                            <span className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200" style={{ background: 'var(--accent-lime)' }}>
                                <ArrowRight size={14} className="text-black" />
                            </span>
                        </a>
                    </div>

                    {/* Right — Media Block */}
                    <div
                        data-hero-anim="scale-up"
                        data-hero-delay="300"
                        className="relative hidden lg:block translate-x-8"
                    >
                        <div
                            className="w-full rounded-3xl overflow-hidden relative"
                            style={{
                                aspectRatio: '4/5',
                                background: 'linear-gradient(135deg, #111111 0%, #1a1a2e 30%, #16213e 60%, #0f3460 100%)',
                                border: '1px solid var(--border)',
                                borderRadius: '24px',
                            }}
                        >
                            {/* Terminal dots */}
                            <div className="absolute top-5 left-6 flex gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }}></div>
                                <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }}></div>
                                <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }}></div>
                                <span className="text-[10px] uppercase tracking-widest ml-3" style={{ color: 'var(--text-dim)' }}>terminal — zsh</span>
                            </div>

                            {/* Grid pattern overlay */}
                            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                                backgroundImage: 'linear-gradient(rgba(173,243,60,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(173,243,60,0.3) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                            }}></div>

                            {/* Glow orbs — accent colored */}
                            <div className="absolute top-[15%] left-[15%] w-40 h-40 rounded-full" style={{ background: 'radial-gradient(circle, rgba(173,243,60,0.1) 0%, transparent 70%)', animation: 'pulse 4s ease-in-out infinite' }}></div>
                            <div className="absolute bottom-[25%] right-[10%] w-48 h-48 rounded-full" style={{ background: 'radial-gradient(circle, rgba(200,94,24,0.08) 0%, transparent 70%)' }}></div>

                            {/* Floating tech badges */}
                            <div className="absolute top-16 right-6 flex flex-col gap-2">
                                {['Flutter', 'Python', 'React'].map((tech, i) => (
                                    <span key={tech} className="text-[10px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm"
                                        style={{
                                            border: '1px solid rgba(173,243,60,0.15)',
                                            background: 'rgba(173,243,60,0.05)',
                                            color: 'var(--accent-lime)',
                                            opacity: 0.6 + i * 0.15,
                                        }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Status bar */}
                            <div className="absolute top-16 left-6 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-lime)', boxShadow: '0 0 8px rgba(173,243,60,0.5)', animation: 'pulse 2s ease-in-out infinite' }}></div>
                                <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent-lime)', opacity: 0.6 }}>Available for work</span>
                            </div>

                            {/* Centered decorative element */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full" style={{
                                border: '1px solid rgba(173,243,60,0.06)',
                            }}>
                                <div className="absolute inset-4 rounded-full" style={{ border: '1px solid rgba(200,94,24,0.06)' }}>
                                    <div className="absolute inset-4 rounded-full" style={{ border: '1px solid rgba(173,243,60,0.04)' }}></div>
                                </div>
                            </div>

                            {/* Year + projects counter */}
                            <div className="absolute top-[40%] left-8 space-y-4">
                                <div>
                                    <span className="font-display font-extrabold text-3xl" style={{ color: 'var(--accent-lime)', opacity: 0.25 }}>2+</span>
                                    <p className="text-[10px] uppercase tracking-widest mt-1" style={{ color: 'var(--text-dim)' }}>Years Exp</p>
                                </div>
                                <div>
                                    <span className="font-display font-extrabold text-3xl" style={{ color: 'var(--accent-orange)', opacity: 0.25 }}>15+</span>
                                    <p className="text-[10px] uppercase tracking-widest mt-1" style={{ color: 'var(--text-dim)' }}>Projects</p>
                                </div>
                            </div>

                            {/* Code snippet */}
                            <div className="absolute bottom-6 left-8 right-8 font-mono text-[11px] leading-relaxed opacity-40" style={{ color: 'var(--text-muted)' }}>
                                <p><span style={{ color: 'var(--accent-lime)' }}>const</span> ahmad = {'{'}</p>
                                <p className="ml-4">role: <span style={{ color: 'var(--accent-orange)' }}>"Software Developer"</span>,</p>
                                <p className="ml-4">stack: [<span style={{ color: 'var(--accent-orange)' }}>"Flutter"</span>, <span style={{ color: 'var(--accent-orange)' }}>"Python"</span>, <span style={{ color: 'var(--accent-orange)' }}>"React"</span>],</p>
                                <p className="ml-4">passion: <span style={{ color: 'var(--accent-orange)' }}>"Building beautiful things"</span></p>
                                <p>{'}'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                data-hero-anim="fade-up"
                data-hero-delay="1200"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs tracking-widest uppercase"
                style={{ color: 'var(--text-muted)' }}
            >
                <span>Scroll</span>
                <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, var(--accent-lime), transparent)' }}></div>
            </div>
        </section>
    );
};

export default Hero;
