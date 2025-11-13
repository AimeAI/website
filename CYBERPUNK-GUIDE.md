# Cyberpunk Portfolio - Styling Guide

## 🎨 Color Palette

```css
--cyber-bg: #070A0F (deep black-blue)
--cyber-bg-dark: #0B0B0F (darker variant)
--cyber-bg-card: #121218 (card backgrounds)
--neon-cyan: #00ffff (primary accent)
--neon-magenta: #ff00ff (secondary accent)
--terminal-green: #39ff14 (success/active states)
```

## 🔤 Typography

### Headings & Titles
Use `font-mono` for a hacker/terminal aesthetic:
```jsx
<h1 className="font-mono text-4xl text-cyber-cyan">
  > initializing_system...
</h1>
```

### Body Text
Keep `font-sans` (Inter) for readability

### Code/Tech Terms
Wrap in monospace with neon:
```jsx
<span className="font-mono text-cyber-terminal-green">
  3_hours.build()
</span>
```

## ✨ Effects Library

### 1. Glitch Effect (for headings)
```jsx
<h2 className="glitch font-mono text-3xl">
  PORTFOLIO_v2.0
</h2>
```

### 2. Neon Glow (for highlights)
```jsx
<span className="neon-cyan font-mono">
  &gt; LIVE_DEMO
</span>
```

### 3. Terminal Border (for cards)
```jsx
<div className="terminal-border bg-cyber-bg-card p-6 rounded-lg">
  {/* Content */}
</div>
```

### 4. Blinking Cursor (for status text)
```jsx
<span className="cursor-blink font-mono text-cyber-terminal-green">
  Building in Toronto
</span>
```

### 5. Scanline Effect (for sections)
```jsx
<section className="scanline">
  {/* Content gets subtle scanline overlay */}
</section>
```

### 6. Circuit Background
```jsx
<div className="circuit-bg">
  {/* Subtle tech grid pattern */}
</div>
```

### 7. Pulse Glow (for CTAs)
```jsx
<button className="pulse-glow-hover bg-cyber-cyan text-black px-6 py-3 rounded">
  [ LAUNCH_DEMO ]
</button>
```

## 🎯 Component Examples

### Hero Section
```jsx
<section className="relative min-h-screen circuit-bg">
  <div className="scanline">
    <h1 className="font-mono text-6xl mb-4">
      <span className="neon-cyan glitch">MANI_MEHRAMOOZ</span>
    </h1>
    <p className="font-mono text-cyber-terminal-green cursor-blink">
      > Building_AI_prototypes_in_hours
    </p>
  </div>
</section>
```

### Project Card (Terminal Style)
```jsx
<div className="terminal-border-cyan bg-cyber-bg-card p-6 rounded-lg hologram">
  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <span className="font-mono text-cyber-terminal-green text-xs">
      > STATUS: LIVE
    </span>
    <span className="font-mono text-cyber-cyan text-xs">
      ⚡ 3_HOURS
    </span>
  </div>
  
  {/* Title */}
  <h3 className="font-mono text-xl text-white mb-2">
    [ NUIT_BLANCHE_GUIDE ]
  </h3>
  
  {/* Description */}
  <p className="text-slate-400 text-sm mb-4">
    Art installation navigator. Built in 3 hours.
  </p>
  
  {/* CTA */}
  <button className="pulse-glow-hover font-mono text-cyber-cyan text-sm border border-cyber-cyan px-4 py-2 rounded hover:bg-cyber-cyan hover:text-black transition-all">
    &gt; LAUNCH_DEMO_
  </button>
</div>
```

### Status Badge
```jsx
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full terminal-border bg-cyber-bg-dark">
  <span className="w-2 h-2 rounded-full bg-cyber-terminal-green animate-blink"></span>
  <span className="font-mono text-xs text-cyber-terminal-green">
    ONLINE_
  </span>
</span>
```

### Build Time Badge
```jsx
<span className="font-mono text-xs text-cyber-cyan">
  ⚡ BUILT_IN: <span className="neon-cyan">3H</span>
</span>
```

## 🎬 Animation Usage

### On Hover - Glitch
```jsx
<h2 className="glitch">Glitches on hover</h2>
```

### Continuous - Scanline
```jsx
<div className="scanline">Has moving scanline effect</div>
```

### Blinking Cursor
```jsx
<span className="cursor-blink">Text with cursor</span>
```

### Pulse Glow
```jsx
<button className="pulse-glow-hover">Pulses on hover</button>
```

## 💡 Best Practices

### Do:
- Use monospace (`font-mono`) for: headers, status text, metrics, code
- Use neon colors (`text-cyber-cyan`) for: highlights, CTAs, active states
- Use terminal borders for: cards, containers, important sections
- Use subtle glitch on: headers (sparingly)
- Use cursor blink on: status indicators only

### Don't:
- Overuse glitch effect (headache-inducing)
- Make body text monospace (hard to read)
- Use all neon colors at once (too chaotic)
- Add scanlines everywhere (subtle is key)

## 🚀 Quick Start

Replace this in your component:
```jsx
// Before
<h1 className="text-4xl text-white">Project Title</h1>

// After (Cyberpunk)
<h1 className="font-mono text-4xl text-cyber-cyan glitch">
  [ PROJECT_TITLE ]
</h1>
```

## Example: Full Project Card

```jsx
<motion.div
  className="terminal-border-cyan bg-cyber-bg-card p-6 rounded-lg relative overflow-hidden group"
  whileHover={{ scale: 1.02 }}
>
  {/* Scanline effect */}
  <div className="scanline absolute inset-0 pointer-events-none opacity-30"></div>
  
  {/* Circuit pattern background */}
  <div className="circuit-bg absolute inset-0 opacity-5 pointer-events-none"></div>
  
  {/* Content */}
  <div className="relative z-10">
    {/* Status */}
    <div className="flex items-center justify-between mb-4">
      <span className="font-mono text-xs text-cyber-terminal-green flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-cyber-terminal-green animate-blink"></span>
        &gt; LIVE
      </span>
      <span className="font-mono text-xs text-cyber-cyan">
        ⚡ 3_HOURS
      </span>
    </div>
    
    {/* Title */}
    <h3 className="font-mono text-xl text-white mb-3 group-hover:text-cyber-cyan transition-colors">
      [ SKYGUARD_AI ]
    </h3>
    
    {/* Tech stack */}
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="font-mono text-xs px-2 py-1 bg-cyber-bg-dark text-cyber-cyan border border-cyber-cyan/30 rounded">
        Python
      </span>
      <span className="font-mono text-xs px-2 py-1 bg-cyber-bg-dark text-cyber-cyan border border-cyber-cyan/30 rounded">
        TensorFlow
      </span>
    </div>
    
    {/* CTA */}
    <button className="w-full font-mono text-sm text-cyber-cyan border border-cyber-cyan px-4 py-3 rounded hover:bg-cyber-cyan hover:text-black transition-all pulse-glow-hover">
      &gt; TRY_LIVE_DEMO_
    </button>
  </div>
</motion.div>
```

## 🎨 Color Usage Guide

- **Primary Actions**: `text-cyber-cyan` or `bg-cyber-cyan`
- **Success/Active**: `text-cyber-terminal-green`
- **Highlights**: `text-cyber-magenta`
- **Backgrounds**: `bg-cyber-bg`, `bg-cyber-bg-card`
- **Borders**: `border-cyber-cyan/30` (with opacity)

Keep it functional but make it look like you coded this at 3 AM in a weird lab. ⚡
