import React from 'react';
// testimonials data — add entries here as needed
const testimonials = [];

const TestimonialCard = ({ t }) => (
    <div
        className="shrink-0 w-[340px] p-7 rounded-2xl mx-3"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
        {/* Decorative quote mark */}
        <span className="font-serif text-[60px] leading-none block mb-[-20px]" style={{ color: 'var(--border)' }}>"</span>

        {/* Company logo placeholder + Date */}
        <div className="flex items-center justify-between mb-4">
            <div className="h-6 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    {t.name.charAt(0)}
                </div>
                <span className="text-xs font-medium" style={{ color: 'var(--text-muted)', opacity: 0.7 }}>{t.role.split(',')[1]?.trim() || t.role}</span>
            </div>
            <span className="tag !text-[9px] !py-1 !px-2.5">{t.date}</span>
        </div>

        {/* Quote */}
        <p className="text-sm mb-6" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
            "{t.quote}"
        </p>

        {/* Avatar + Name */}
        <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-semibold text-xs" style={{ background: 'var(--cta-bg)', color: 'var(--cta-txt)' }}>
                {t.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
                <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.role}</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const row1 = [...testimonials, ...testimonials];
    const row2 = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

    return (
        <section className="section-padding overflow-hidden" style={{ background: 'var(--bg)' }}>
            <div className="container-main mb-16">
                <div className="reveal" data-delay="0">
                    <h2 className="font-display font-bold uppercase" style={{ fontSize: 'clamp(38px, 5vw, 60px)', lineHeight: 1.1 }}>
                        What My <span className="font-serif italic font-normal lowercase">clients</span> Say
                    </h2>
                    <div className="flex items-center gap-4 mt-3">
                        <span className="tag">See what our clients have to say...</span>
                    </div>
                </div>
            </div>

            {/* Marquee Row 1 — scrolls left */}
            <div className="overflow-hidden mb-6">
                <div className="flex marquee-track" style={{ animation: 'marquee-left 35s linear infinite' }}>
                    {row1.map((t, i) => (
                        <TestimonialCard key={`r1-${i}`} t={t} />
                    ))}
                </div>
            </div>

            {/* Marquee Row 2 — scrolls right */}
            <div className="overflow-hidden">
                <div className="flex marquee-track" style={{ animation: 'marquee-right 35s linear infinite' }}>
                    {row2.map((t, i) => (
                        <TestimonialCard key={`r2-${i}`} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
