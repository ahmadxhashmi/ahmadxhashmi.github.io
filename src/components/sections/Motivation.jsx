import React from 'react';

const Motivation = () => {
    return (
        <section className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-card)' }}>
            {/* Decorative SVG abstract shape — lime accent */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] h-[80%] pointer-events-none opacity-[0.12]" style={{ zIndex: 0 }}>
                <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
                    <circle cx="200" cy="200" r="180" stroke="#adf33c" strokeWidth="0.5" opacity="0.3" />
                    <circle cx="200" cy="200" r="120" stroke="#c85e18" strokeWidth="0.5" opacity="0.25" />
                    <circle cx="200" cy="200" r="60" stroke="#adf33c" strokeWidth="0.5" opacity="0.15" />
                    <path d="M 100 200 Q 200 100 300 200 Q 200 300 100 200" stroke="#c85e18" strokeWidth="0.5" opacity="0.2" />
                </svg>
            </div>

            {/* Noise texture overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '128px 128px',
            }}></div>

            <div className="container-main relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="reveal tag mb-6" data-delay="0" style={{ borderColor: 'rgba(200,94,24,0.3)', color: 'var(--accent-orange)' }}>My Motto</span>
                    <h2 className="reveal font-display font-bold uppercase mt-8 mb-4" data-delay="100" style={{ fontSize: 'clamp(38px, 5vw, 60px)', lineHeight: 1.1 }}>
                        MOTIV<span style={{ color: 'var(--accent-lime)' }}>A</span>TION
                    </h2>
                    <p className="reveal text-xs uppercase tracking-widest mb-12" data-delay="200" style={{ color: 'var(--text-muted)' }}>The Journey of Creative Inspiration</p>

                    <div className="reveal space-y-6 text-base md:text-lg mb-12" data-delay="300" style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
                        <p>
                            Every great product starts with a problem worth solving. I believe that technology should serve people,
                            not the other way around. My drive comes from seeing ideas transform into tangible solutions that genuinely
                            improve someone's daily life.
                        </p>
                        <p>
                            The intersection of clean code and beautiful design is where I thrive. It's not enough for software to work —
                            it must feel effortless, look stunning, and adapt gracefully to the humans who use it.
                        </p>
                    </div>

                    {/* Pull Quote */}
                    <blockquote className="reveal relative pt-8" data-delay="500" style={{ borderTop: '1px solid rgba(173,243,60,0.15)' }}>
                        <span className="font-serif text-[80px] leading-none absolute -top-2 left-1/2 -translate-x-1/2" style={{ color: 'var(--accent-lime)', opacity: 0.15 }}>"</span>
                        <p className="font-serif italic text-xl md:text-2xl text-white leading-relaxed mb-4">
                            "First, solve the problem. Then, write the code."
                        </p>
                        <cite className="text-sm font-body not-italic tracking-wide" style={{ color: 'var(--accent-orange)' }}>
                            — John Johnson
                        </cite>
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default Motivation;
