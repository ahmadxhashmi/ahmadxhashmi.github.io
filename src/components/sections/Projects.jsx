import React from 'react';
import { projects } from '../../data/portfolio';

const Projects = () => {
    return (
        <section id="work" className="section-padding" style={{ background: 'var(--bg)' }}>
            <div className="container-main">
                {/* Split Section Header */}
                <div className="mb-16">
                    <div className="reveal" data-delay="0">
                        <h2 className="font-display font-bold uppercase" style={{ fontSize: 'clamp(38px, 5vw, 60px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                            Selected
                        </h2>
                    </div>
                    <div className="flex items-end justify-between gap-8 flex-wrap">
                        <div className="reveal" data-delay="150">
                            <h2 className="font-display font-bold uppercase" style={{ fontSize: 'clamp(38px, 5vw, 60px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--accent-lime)' }}>
                                WORK
                            </h2>
                        </div>
                        <p className="reveal font-serif italic text-base mb-2 max-w-xs hidden md:block" data-delay="250" style={{ color: 'var(--text-muted)' }}>
                            A curated selection of recent projects and collaborations
                        </p>
                    </div>
                </div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--grid-gap)' }}>
                    {projects.map((project, index) => (
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="work-card reveal group block rounded-2xl overflow-hidden"
                            data-delay={index * 100}
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border)',
                                borderRadius: 'var(--radius-card)',
                                transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.35s ease, box-shadow 0.35s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.borderColor = 'rgba(173,243,60,0.3)';
                                e.currentTarget.style.boxShadow = '0 24px 60px rgba(173,243,60,0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--border)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Image Area — enriched */}
                            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/10' }}>
                                <div
                                    className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.04] relative"
                                    style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
                                >
                                    {/* Grid pattern */}
                                    <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
                                        backgroundImage: 'linear-gradient(rgba(173,243,60,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(173,243,60,0.2) 1px, transparent 1px)',
                                        backgroundSize: '30px 30px',
                                    }}></div>

                                    {/* Decorative title text */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                        <span className="font-display font-extrabold uppercase" style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.03em', color: 'var(--accent-lime)' }}>
                                            {project.title.split(' ')[0]}
                                        </span>
                                    </div>

                                    {/* Tech stack badges — top right */}
                                    <div className="absolute top-4 right-4 flex gap-2 z-10">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-[9px] font-medium uppercase tracking-wider px-2 py-1 rounded-full backdrop-blur-sm"
                                                style={{
                                                    border: '1px solid rgba(173,243,60,0.15)',
                                                    background: 'rgba(10,10,10,0.6)',
                                                    color: 'var(--accent-lime)',
                                                }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Terminal dots */}
                                    <div className="absolute top-4 left-4 flex gap-1.5 z-10">
                                        <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f57' }}></div>
                                        <div className="w-2 h-2 rounded-full" style={{ background: '#febc2e' }}></div>
                                        <div className="w-2 h-2 rounded-full" style={{ background: '#28c840' }}></div>
                                    </div>

                                    {/* Glow orb */}
                                    <div className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500" style={{
                                        background: index % 2 === 0
                                            ? 'radial-gradient(circle, rgba(173,243,60,0.08) 0%, transparent 70%)'
                                            : 'radial-gradient(circle, rgba(200,94,24,0.08) 0%, transparent 70%)',
                                    }}></div>

                                    {/* Concentric circle decoration */}
                                    <div className="absolute bottom-6 right-6 w-16 h-16 rounded-full opacity-[0.06]" style={{ border: '1px solid var(--accent-lime)' }}>
                                        <div className="absolute inset-2 rounded-full" style={{ border: '1px solid var(--accent-orange)' }}></div>
                                    </div>
                                </div>

                                {/* Cost tag */}
                                <div className="absolute bottom-3 left-4 z-10">
                                    <span className="inline-flex items-center text-[11px] font-medium uppercase tracking-wide px-2.5 py-1 rounded-full"
                                        style={{ color: 'var(--accent-lime)', border: '1px solid rgba(173,243,60,0.2)', background: 'rgba(17,17,17,0.9)' }}>
                                        cost® — {project.tech[0]}
                                    </span>
                                </div>
                            </div>

                            {/* Metadata Strip */}
                            <div className="p-6 relative" style={{ background: 'var(--bg-card)' }}>
                                {/* Project Index */}
                                <span className="absolute top-4 right-6 text-[11px] font-medium" style={{ color: 'var(--accent-orange)' }}>
                                    [{String(index + 1).padStart(2, '0')}]
                                </span>

                                <h3 className="font-display font-semibold text-xl md:text-2xl text-white mb-2 pr-12">
                                    {project.title}
                                </h3>
                                <p className="text-sm mb-3" style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                    {project.description}
                                </p>

                                {/* Category tag */}
                                <span className="tag !text-[10px] !py-1 !px-3" style={{ borderColor: 'rgba(173,243,60,0.15)', color: 'var(--accent-lime)' }}>{project.category}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
