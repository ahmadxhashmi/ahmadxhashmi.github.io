import React from 'react';
import { Download } from 'lucide-react';

const clientLogos = ['Flutter', 'Dart', 'Python', 'React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'Git'];

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ background: 'var(--bg-card)' }}>
            <div className="container-main">
                {/* Two Column */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left — Portrait — enriched */}
                    <div className="reveal relative" data-delay="0">
                        <div
                            className="w-full rounded-[20px] overflow-hidden relative"
                            style={{
                                aspectRatio: '3/4',
                                background: 'linear-gradient(160deg, #0f3460 0%, #1a1a2e 40%, #16213e 70%, #0A0A0A 100%)',
                                border: '1px solid var(--border)',
                            }}
                        >
                            {/* Grid pattern */}
                            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                                backgroundImage: 'linear-gradient(rgba(173,243,60,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(173,243,60,0.3) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                            }}></div>

                            {/* Terminal dots */}
                            <div className="absolute top-5 left-6 flex gap-2 z-10">
                                <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }}></div>
                                <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }}></div>
                                <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }}></div>
                                <span className="text-[10px] uppercase tracking-widest ml-3" style={{ color: 'var(--text-dim)' }}>about.jsx</span>
                            </div>

                            {/* Glow orbs */}
                            <div className="absolute top-[15%] right-[10%] w-40 h-40 rounded-full" style={{ background: 'radial-gradient(circle, rgba(173,243,60,0.08) 0%, transparent 70%)' }}></div>
                            <div className="absolute bottom-[20%] left-[10%] w-48 h-48 rounded-full" style={{ background: 'radial-gradient(circle, rgba(200,94,24,0.06) 0%, transparent 70%)' }}></div>

                            {/* Initials watermark */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-display font-extrabold opacity-[0.04]" style={{ fontSize: 'clamp(120px, 20vw, 240px)', color: 'var(--accent-lime)' }}>Ahmad Hashmi</span>
                            </div>

                            {/* Concentric circles */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full" style={{ border: '1px solid rgba(173,243,60,0.06)' }}>
                                <div className="absolute inset-4 rounded-full" style={{ border: '1px solid rgba(200,94,24,0.05)' }}>
                                    <div className="absolute inset-4 rounded-full" style={{ border: '1px solid rgba(173,243,60,0.04)' }}></div>
                                </div>
                            </div>

                            {/* Status indicator */}
                            <div className="absolute top-16 right-6 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-lime)', boxShadow: '0 0 8px rgba(173,243,60,0.5)', animation: 'pulse 2s ease-in-out infinite' }}></div>
                                <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent-lime)', opacity: 0.6 }}>Available</span>
                            </div>

                            {/* Quick stat badges */}
                            <div className="absolute top-16 left-6 flex flex-col gap-3">
                                <div className="px-3 py-2 rounded-lg backdrop-blur-sm" style={{ background: 'rgba(10,10,10,0.6)', border: '1px solid rgba(173,243,60,0.1)' }}>
                                    <span className="font-display font-bold text-lg" style={{ color: 'var(--accent-lime)' }}>2+</span>
                                    <p className="text-[9px] uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>Years</p>
                                </div>
                                <div className="px-3 py-2 rounded-lg backdrop-blur-sm" style={{ background: 'rgba(10,10,10,0.6)', border: '1px solid rgba(200,94,24,0.1)' }}>
                                    <span className="font-display font-bold text-lg" style={{ color: 'var(--accent-orange)' }}>10+</span>
                                    <p className="text-[9px] uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>Projects</p>
                                </div>
                            </div>

                            {/* Floating skill badges */}
                            <div className="absolute bottom-20 right-6 flex flex-col gap-2">
                                {['Flutter', 'Python', 'React'].map((tech, i) => (
                                    <span key={tech} className="text-[9px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm text-right"
                                        style={{
                                            border: '1px solid rgba(173,243,60,0.12)',
                                            background: 'rgba(10,10,10,0.5)',
                                            color: 'var(--accent-lime)',
                                            opacity: 0.5 + i * 0.15,
                                        }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Code personality snippet */}
                            <div className="absolute bottom-6 left-6 right-6 font-mono text-[10px] leading-relaxed opacity-35" style={{ color: 'var(--text-muted)' }}>
                                <p><span style={{ color: 'var(--accent-lime)' }}>class</span> Ahmad {'{'}</p>
                                <p className="ml-3">location: <span style={{ color: 'var(--accent-orange)' }}>"Islamabad, PK"</span></p>
                                <p className="ml-3">focus: <span style={{ color: 'var(--accent-orange)' }}>"Mobile + AI"</span></p>
                                <p>{'}'}</p>
                            </div>

                            {/* Est badge */}
                            <div className="absolute bottom-6 right-6">
                                <span className="tag" style={{ background: 'rgba(10,10,10,0.8)', borderColor: 'rgba(173,243,60,0.15)', color: 'var(--accent-lime)' }}>est. 2024</span>
                            </div>
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div>
                        <span className="reveal tag mb-6" data-delay="100">About Me</span>
                        <h2 className="reveal font-display font-bold text-3xl md:text-4xl mt-6 mb-6" data-delay="200" style={{ lineHeight: 1.15 }}>
                            about <span className="font-serif italic font-normal" style={{ color: 'var(--accent-lime)' }}>Ahmad</span>
                        </h2>

                        <div className="reveal space-y-4 text-base mb-10" data-delay="300" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                            <p>
                                I'm Ahmad Hashmi — a multidisciplinary software developer based in Islamabad, Pakistan.
                                I specialize in building cross-platform mobile applications with Flutter, intelligent AI solutions
                                with Python, and modern web experiences with React.
                            </p>
                            <p>
                                My approach combines clean architecture with intuitive design, creating software that doesn't just
                                function — it delights. From startup MVPs to enterprise-grade solutions, I bring precision and passion
                                to every line of code.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="reveal mb-8" data-delay="400">
                            <span className="tag mb-4" style={{ borderColor: 'var(--accent-orange)', color: 'var(--accent-orange)' }}>My Mission</span>
                            <p className="mt-4 text-base" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                                To bridge the gap between beautiful design and powerful technology — creating digital products
                                that solve real problems and make a genuine impact on people's lives.
                            </p>
                        </div>

                        <div className="reveal" data-delay="500">
                            <button className="btn-ghost">
                                <Download size={14} />
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>

                {/* Client Logo Ticker */}
                <div className="reveal mt-20 pt-16 overflow-hidden" data-delay="0" style={{ borderTop: '1px solid var(--border)' }}>
                    <p className="text-center text-xs uppercase tracking-widest mb-8" style={{ color: 'var(--text-muted)' }}>Technologies & Tools</p>
                    <div className="relative overflow-hidden">
                        <div className="flex gap-16 whitespace-nowrap marquee-track" style={{ animation: 'marquee-left 20s linear infinite' }}>
                            {[...clientLogos, ...clientLogos].map((logo, i) => (
                                <span
                                    key={i}
                                    className="text-lg font-display font-semibold uppercase tracking-wide shrink-0 transition-all duration-200"
                                    style={{ opacity: 0.5, color: 'var(--text-muted)' }}
                                    onMouseEnter={(e) => { e.target.style.opacity = '1'; e.target.style.color = 'var(--accent-lime)'; }}
                                    onMouseLeave={(e) => { e.target.style.opacity = '0.5'; e.target.style.color = 'var(--text-muted)'; }}
                                >
                                    {logo}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
