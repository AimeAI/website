/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#070A0F',
          'bg-dark': '#0B0B0F',
          'bg-card': '#121218',
          cyan: '#00ffff',
          magenta: '#ff00ff',
          green: '#00ff41',
          'terminal-green': '#39ff14',
          purple: '#9d00ff',
          blue: '#0099ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 0.3s infinite',
        'scanline': 'scanline 3s linear infinite',
        'blink': 'blink 1s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'matrix': 'matrix 2s ease-in-out infinite',
        'flicker': 'flicker 0.15s infinite',
      },
      boxShadow: {
        'neon-cyan': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff',
        'neon-magenta': '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff',
        'neon-green': '0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14',
      },
    },
  },
  plugins: [],
}
