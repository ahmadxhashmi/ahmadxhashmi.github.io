import React, { useState } from 'react';
import { services } from '../../data/portfolio';
import { Smartphone, Brain, Globe, Server, ChevronRight } from 'lucide-react';

const serviceIcons = [Smartphone, Brain, Globe, Server];

const Services = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const featured = services[0];
    const rest = services.slice(1);

    return (
        <section id="services" className="section-padding" style={{ background: 'var(--bg)' }}>
            <div className="container-main">
                {/* Header */}
                <div className="reveal flex items-end justify-between mb-16 flex-wrap gap-4" data-delay="0">
                    <div>
                        <h2 className="font-display font-bold uppercase" style={{ fontSize: 'clamp(38px, 5vw, 60px)', lineHeight: 1.1 }}>
                            Serv<span style={{ color: 'var(--accent-lime)' }}>i</span>ces
                        </h2>
                        <p className="text-base mt-3" style={{ color: 'var(--text-muted)' }}>What I can do for you</p>
                    </div>
                    <span className="tag" style={{ borderColor: 'rgba(173,243,60,0.2)', color: 'var(--accent-lime)' }}>Discover</span>
                </div>

                {/* Featured Service */}
                <div className="reveal rounded-2xl p-8 md:p-10 mb-6 relative overflow-hidden" data-delay="150" style={{ background: 'var(--bg-card)', border: '1px solid rgba(173,243,60,0.15)' }}>
                    {/* Background accent glow */}
                    <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
                        background: 'linear-gradient(135deg, rgba(173,243,60,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(200,94,24,0.15) 0%, transparent 50%)',
                    }}></div>

                    <span className="tag absolute top-6 right-6 z-10" style={{ color: 'var(--accent-orange)' }}>( 01 )</span>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                        <div>
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(173,243,60,0.08)', border: '1px solid rgba(173,243,60,0.15)' }}>
                                <Smartphone size={24} style={{ color: 'var(--accent-lime)' }} />
                            </div>
                            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">{featured.title}</h3>
                            <p className="text-base mb-6" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{featured.description}</p>
                            <div className="mb-6">
                                <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>Starts At Cost® —</span>
                                <p className="font-display font-bold text-2xl mt-1" style={{ color: 'var(--accent-orange)' }}>{featured.price}</p>
                            </div>
                            <a href="#contact" className="btn-primary">Book A Call</a>
                        </div>
                        <div>
                            <span className="tag mb-4" style={{ borderColor: 'rgba(173,243,60,0.15)', color: 'var(--accent-lime)' }}>Key Features</span>
                            <ul className="space-y-3 mt-6">
                                {featured.features.map((f, i) => (
                                    <li key={i} className="text-base flex items-center gap-3" style={{ color: 'var(--text-muted)' }}>
                                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent-lime)' }}></span>{f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Other Services — Expandable Rows */}
                <div className="space-y-2">
                    {rest.map((service, index) => {
                        const Icon = serviceIcons[index + 1];
                        const isOpen = expandedIndex === index;
                        return (
                            <div
                                key={index}
                                className="reveal rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
                                data-delay={300 + index * 100}
                                style={{
                                    background: isOpen ? 'var(--bg-card)' : 'transparent',
                                    border: `1px solid ${isOpen ? 'rgba(173,243,60,0.2)' : 'var(--border)'}`,
                                }}
                                onClick={() => setExpandedIndex(isOpen ? null : index)}
                            >
                                <div className="flex items-center justify-between p-6 md:p-7">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: isOpen ? 'rgba(173,243,60,0.08)' : 'rgba(255,255,255,0.05)' }}>
                                            <Icon size={18} style={{ color: isOpen ? 'var(--accent-lime)' : 'white' }} />
                                        </div>
                                        <div>
                                            <h3 className="font-display font-semibold text-lg md:text-xl text-white">{service.title}</h3>
                                            <span className="text-sm hidden md:inline" style={{ color: 'var(--text-muted)' }}>{service.price}</span>
                                        </div>
                                    </div>
                                    <ChevronRight size={20} style={{ color: isOpen ? 'var(--accent-lime)' : 'var(--text-dim)', transition: 'transform 0.3s ease, color 0.2s ease', transform: isOpen ? 'rotate(90deg)' : 'none' }} />
                                </div>
                                {isOpen && (
                                    <div className="px-6 md:px-7 pb-6 md:pb-7 pt-0">
                                        <p className="text-sm mb-4" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{service.description}</p>
                                        <ul className="flex flex-wrap gap-3">
                                            {service.features.map((f, i) => (
                                                <li key={i} className="tag" style={{ borderColor: 'rgba(173,243,60,0.15)', color: 'var(--accent-lime)' }}>{f}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
