import React from 'react';
import { processSteps } from '../../data/portfolio';
import { PenTool, Code, Rocket } from 'lucide-react';

const icons = [PenTool, Code, Rocket];
const iconColors = ['var(--accent-lime)', 'var(--accent-orange)', 'var(--accent-lime)'];

const Process = () => {
    return (
        <section className="section-padding relative overflow-hidden" style={{ background: 'var(--bg)' }}>
            {/* Background texture with accent glow */}
            <div className="absolute inset-0 z-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse at 30% 50%, rgba(173,243,60,0.015) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(200,94,24,0.01) 0%, transparent 50%)',
                opacity: 0.6,
            }}></div>

            <div className="container-main relative z-[1]">
                {/* Header */}
                <div className="mb-16">
                    <p className="reveal text-sm uppercase tracking-widest mb-4" data-delay="0" style={{ color: 'var(--accent-orange)' }}>Let me show how I do</p>
                    <div className="reveal" data-delay="100">
                        <h2 className="font-display font-bold uppercase" style={{ fontSize: 'clamp(38px, 5vw, 60px)', lineHeight: 1.1 }}>
                            discover <span className="font-serif italic font-normal lowercase" style={{ color: 'var(--accent-lime)' }}>my</span> work method
                        </h2>
                    </div>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--grid-gap)' }}>
                    {processSteps.map((step, index) => {
                        const Icon = icons[index];
                        return (
                            <div
                                key={index}
                                className="reveal p-8 rounded-[20px] transition-all duration-300 hover:-translate-y-1 group"
                                data-delay={200 + index * 150}
                                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', transition: 'transform 0.3s ease, border-color 0.3s ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(173,243,60,0.2)'}
                                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                            >
                                <span className="tag mb-6" style={{ color: 'var(--accent-lime)', borderColor: 'rgba(173,243,60,0.2)' }}>[ {step.number} ]</span>
                                <div className="w-10 h-10 rounded-full flex items-center justify-center mt-6 mb-6" style={{ background: 'rgba(173,243,60,0.08)', border: '1px solid rgba(173,243,60,0.15)' }}>
                                    <Icon size={20} style={{ color: iconColors[index] }} />
                                </div>
                                <h4 className="font-display font-bold text-lg text-white mb-3">{step.title}</h4>
                                <p className="text-sm mb-6" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{step.description}</p>
                                <ul className="space-y-2">
                                    {step.bullets.map((b, i) => (
                                        <li key={i} className="text-sm flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                                            <span style={{ color: 'var(--accent-lime)' }}>—</span>{b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Process;
