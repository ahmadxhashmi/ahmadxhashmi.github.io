import React, { useState, useEffect, useRef } from 'react';
import { stats } from '../../data/portfolio';

function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
}

const AnimatedNumber = ({ target, suffix = '' }) => {
    const [display, setDisplay] = useState('0');
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        const num = parseInt(target);
        if (isNaN(num)) { setDisplay(target); return; }

        const duration = 1500;
        let startTime = null;

        function animate(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = easeOutQuart(progress);
            setDisplay(String(Math.floor(eased * num)));
            if (progress < 1) requestAnimationFrame(animate);
            else setDisplay(String(num));
        }

        requestAnimationFrame(animate);
    }, [started, target]);

    return (
        <span ref={ref} className="font-display font-extrabold text-4xl md:text-5xl tabular-nums" style={{ color: 'var(--accent-lime)' }}>
            {display}<span style={{ color: 'var(--text)' }}>{suffix}</span>
        </span>
    );
};

const Stats = () => {
    return (
        <section className="py-16 md:py-20" style={{ background: 'var(--bg-card)' }}>
            <div className="container-main">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
                    {stats.map((stat, index) => {
                        const num = parseInt(stat.number);
                        const suffix = stat.number.replace(/[0-9]/g, '');
                        return (
                            <div key={index} className="reveal text-center" data-delay={index * 100}>
                                <AnimatedNumber target={isNaN(num) ? stat.number : String(num)} suffix={suffix} />
                                <p className="text-xs uppercase tracking-widest mt-3" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
