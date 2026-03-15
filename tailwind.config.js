/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ['"DM Sans"', 'sans-serif'],
                display: ['"Syne"', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            },
            colors: {
                'bg-primary': '#0A0A0A',
                'bg-secondary': '#111111',
                'bg-tertiary': '#161616',
                'border-main': '#222222',
                'border-subtle': '#1E1E1E',
                'text-primary': '#FFFFFF',
                'text-secondary': '#888888',
                'text-muted': '#555555',
                'accent': '#AAAAAA',
                'cta-bg': '#FFFFFF',
                'cta-text': '#000000',
                'tag-bg': 'rgba(255,255,255,0.05)',
                'tag-border': 'rgba(255,255,255,0.10)',
            },
            fontSize: {
                'hero': 'clamp(80px, 12vw, 160px)',
                'h2': 'clamp(36px, 5vw, 56px)',
                'h3': '24px',
                'h4': '18px',
                'body': '15px',
                'label': '11px',
                'nav': '13px',
            },
            letterSpacing: {
                'hero': '-0.04em',
                'wide-label': '0.12em',
            },
            lineHeight: {
                'tight': '1.1',
                'body': '1.65',
            },
            spacing: {
                'section': '120px',
                'container-px': '40px',
                'card-p': '32px',
            },
            maxWidth: {
                'container': '1200px',
            },
            borderRadius: {
                'card': '16px',
                'pill': '100px',
                'sm': '8px',
            },
            animation: {
                'marquee': 'marquee 35s linear infinite',
                'marquee-reverse': 'marquee 35s linear infinite reverse',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                marquee: {
                    'from': { transform: 'translateX(0)' },
                    'to': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
}
