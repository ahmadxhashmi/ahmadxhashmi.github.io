import React from 'react';
import { experience } from '../../data/portfolio';
import { ArrowRight } from 'lucide-react';

const Experience = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--bg)' }}>
            <div className="container-main">
                <div className="reveal mb-16" data-delay="0">
                    <h2 className="font-display font-bold uppercase" style={{ fontSize: 'clamp(38px, 5vw, 60px)', lineHeight: 1.1 }}>
                        Exper<span style={{ color: 'var(--accent-lime)' }}>i</span>ence
                    </h2>
                    <p className="text-base mt-3" style={{ color: 'var(--text-muted)' }}>Showcasing my software development journey</p>
                </div>

                <div className="reveal mb-8" data-delay="100">
                    <span className="tag" style={{ borderColor: 'rgba(200,94,24,0.3)', color: 'var(--accent-orange)' }}>2024 – Present</span>
                </div>

                <div>
                    {experience.map((exp, index) => (
                        <div
                            key={index}
                            className="reveal flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 group"
                            data-delay={200 + index * 100}
                            style={{ borderBottom: '1px solid var(--border)', transition: 'border-color 0.3s ease' }}
                            onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'rgba(173,243,60,0.15)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'var(--border)'}
                        >
                            {/* Company Logo */}
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-display font-bold text-sm"
                                style={{ background: 'rgba(173,243,60,0.08)', border: '1px solid rgba(173,243,60,0.15)', color: 'var(--accent-lime)' }}>
                                {exp.company.charAt(0)}
                            </div>

                            <h5 className="font-display font-semibold text-base text-white min-w-[140px]">{exp.company}</h5>
                            <span className="tag shrink-0">{exp.period}</span>
                            <span className="text-sm font-medium min-w-[200px]" style={{ color: 'var(--accent-orange)' }}>{exp.role}</span>
                            <p className="text-sm flex-1" style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{exp.description}</p>

                            {/* Arrow */}
                            <ArrowRight size={16} className="shrink-0 transition-colors duration-200" style={{ color: '#333' }}
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

export default Experience;
