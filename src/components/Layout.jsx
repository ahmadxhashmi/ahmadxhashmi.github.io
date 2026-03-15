import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from './ui/Navbar';

const Layout = ({ children }) => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    // Lenis smooth scroll
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    // Custom cursor with lerp
    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        // Check for touch device
        const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (isTouch) return;

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
        };

        function animateRing() {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
            requestAnimationFrame(animateRing);
        }

        document.addEventListener('mousemove', onMouseMove);
        animateRing();

        // Hover states
        const interactives = document.querySelectorAll('a, button');
        const workCards = document.querySelectorAll('.work-card');
        const textElements = document.querySelectorAll('p, span.body-text, li');

        const addHover = () => { ring.classList.add('hover'); dot.classList.add('hover'); };
        const removeHover = () => { ring.classList.remove('hover'); dot.classList.remove('hover'); };

        const addCardHover = () => { ring.classList.add('hover-card'); dot.classList.add('hover'); };
        const removeCardHover = () => { ring.classList.remove('hover-card'); dot.classList.remove('hover'); };

        interactives.forEach(el => {
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });

        workCards.forEach(el => {
            el.addEventListener('mouseenter', addCardHover);
            el.addEventListener('mouseleave', removeCardHover);
        });

        // Mouse down/up
        const onDown = () => { dot.classList.add('pressing'); ring.classList.add('pressing'); };
        const onUp = () => { dot.classList.remove('pressing'); ring.classList.remove('pressing'); };
        document.addEventListener('mousedown', onDown);
        document.addEventListener('mouseup', onUp);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mousedown', onDown);
            document.removeEventListener('mouseup', onUp);
            interactives.forEach(el => {
                el.removeEventListener('mouseenter', addHover);
                el.removeEventListener('mouseleave', removeHover);
            });
            workCards.forEach(el => {
                el.removeEventListener('mouseenter', addCardHover);
                el.removeEventListener('mouseleave', removeCardHover);
            });
        };
    });

    // Global Intersection Observer for .reveal elements
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(32px)';
            el.style.transition = 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)';
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    });

    return (
        <div className="relative min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
            {/* Custom Cursor */}
            <div ref={dotRef} className="cursor-dot hidden md:block"></div>
            <div ref={ringRef} className="cursor-ring hidden md:block">
                <span className="cursor-view-text">VIEW</span>
            </div>

            <Navbar />
            <main className="relative z-10 w-full overflow-x-hidden" style={{ paddingTop: '64px' }}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
