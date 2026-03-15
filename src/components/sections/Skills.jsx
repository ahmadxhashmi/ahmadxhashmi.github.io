import React from 'react';
import { stack } from '../../data/portfolio';
import { ArrowRight } from 'lucide-react';

const Skills = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-card)' }}>
            <div className="container-main">
                <div className="reveal mb-16" data-delay="0">
                    <h2 className="font-display font-bold uppercase" style={{ fontSize: 'clamp(38px, 5vw, 60px)', lineHeight: 1.1 }}>
                        Favourite <span className="font-serif italic font-normal lowercase" style={{ color: 'var(--accent-lime)' }}>stack</span>
                    </h2>
                    <p className="text-base mt-3" style={{ color: 'var(--text-muted)' }}>Tools and technologies I work with daily</p>
                </div>

                <div className="reveal mb-8" data-delay="100">
                    <span className="tag" style={{ borderColor: 'rgba(173,243,60,0.2)', color: 'var(--accent-lime)' }}>My Skills</span>
                </div>

                <div>
                    {stack.map((item, index) => (
                        <div
                            key={index}
                            className="reveal flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-6 group"
                            data-delay={200 + index * 100}
                            style={{ borderBottom: '1px solid var(--border)', transition: 'border-color 0.3s ease' }}
                            onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'rgba(173,243,60,0.15)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'var(--border)'}
                        >
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-display font-bold text-sm"
                                style={{ background: 'rgba(173,243,60,0.08)', border: '1px solid rgba(173,243,60,0.15)', color: 'var(--accent-lime)' }}>
                                {item.name.charAt(0)}
                            </div>
                            <h5 className="font-display font-semibold text-base text-white min-w-[180px]">{item.name}</h5>
                            <span className="tag shrink-0" style={{ borderColor: 'rgba(200,94,24,0.3)', color: 'var(--accent-orange)' }}>{item.proficiency}%</span>
                            <span className="text-sm flex-1" style={{ color: 'var(--text-muted)' }}>{item.category}</span>

                            {/* Progress bar — lime accent */}
                            <div className="w-full sm:w-48 h-1 rounded-full overflow-hidden shrink-0" style={{ background: 'rgba(255,255,255,0.06)' }}>
                                <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '0%', background: 'linear-gradient(90deg, var(--accent-lime), var(--accent-orange))' }}
                                    ref={(el) => {
                                        if (!el) return;
                                        const obs = new IntersectionObserver(([e]) => {
                                            if (e.isIntersecting) {
                                                setTimeout(() => { el.style.width = item.proficiency + '%'; }, 300 + index * 100);
                                                obs.disconnect();
                                            }
                                        }, { threshold: 0.3 });
                                        obs.observe(el);
                                    }}
                                ></div>
                            </div>

                            <ArrowRight size={16} className="shrink-0 hidden sm:block transition-colors duration-200" style={{ color: '#333' }}
                                onMouseEnter={(e) => e.target.style.color = '#adf33c'}
                                onMouseLeave={(e) => e.target.style.color = '#333'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
