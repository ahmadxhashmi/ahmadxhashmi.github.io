import React, { useState } from 'react';
import { faqItems } from '../../data/portfolio';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="section-padding" style={{ background: 'var(--bg-card)' }}>
            <div className="container-main">
                {/* Header */}
                <div className="reveal flex items-end justify-between mb-16 flex-wrap gap-4" data-delay="0">
                    <div>
                        <h2 className="font-display font-bold uppercase" style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.1 }}>
                            Frequently <span style={{ color: 'var(--accent-lime)' }}>Asked</span>
                        </h2>
                        <h2 className="font-display font-bold uppercase" style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.1 }}>
                            Questions
                        </h2>
                        <p className="text-base mt-3" style={{ color: 'var(--text-muted)' }}>Everything you need to know</p>
                    </div>
                    <span className="tag" style={{ borderColor: 'rgba(200,94,24,0.3)', color: 'var(--accent-orange)' }}>Get to Know More</span>
                </div>

                {/* Accordion */}
                <div>
                    {faqItems.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="reveal"
                                data-delay={index * 50}
                                style={{ borderBottom: `1px solid ${isOpen ? 'rgba(173,243,60,0.2)' : 'var(--border)'}` }}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="w-full flex items-center justify-between py-6 text-left group"
                                >
                                    <span className="font-display font-semibold text-base md:text-lg pr-8" style={{ color: isOpen ? 'var(--accent-lime)' : 'white' }}>
                                        {item.question}
                                    </span>
                                    {/* + that rotates to × */}
                                    <span
                                        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-light"
                                        style={{
                                            border: `1px solid ${isOpen ? 'var(--accent-lime)' : 'var(--border)'}`,
                                            background: isOpen ? 'rgba(173,243,60,0.1)' : 'transparent',
                                            color: isOpen ? 'var(--accent-lime)' : 'white',
                                            transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease',
                                        }}
                                    >
                                        <span className={`faq-icon ${isOpen ? 'open' : ''} block`}>+</span>
                                    </span>
                                </button>
                                {/* Answer with max-height transition */}
                                <div
                                    style={{
                                        maxHeight: isOpen ? '200px' : '0',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.4s ease, padding 0.4s ease',
                                        paddingBottom: isOpen ? '24px' : '0',
                                    }}
                                >
                                    <p className="text-sm md:text-base pr-16" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
