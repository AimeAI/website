"use client";

import { useState, useEffect, useRef } from 'react';

interface TerminalLine {
  type: 'command' | 'output' | 'error' | 'success';
  content: string;
}

const commands: Record<string, string> = {
  help: `Available commands:
  • about        - Learn about me
  • projects     - View all projects
  • skills       - Technical skills
  • contact      - Get in touch
  • matrix       - Easter egg
  • clear        - Clear terminal
  • exit         - Close terminal`,

  about: `Mani Mehramooz - AI Prototyper & Builder

  15 years directing films → $3M+ in enterprise sales → now building AI.
  Ex-military (Canadian Armed Forces), IATSE member, HBX grad.

  Location: Toronto, Canada
  Status: Shipping fast, breaking things, learning in public.
  Followers: 2,300+ watching the journey`,

  projects: `Live Projects (click project names on the site):

  • Nuit Blanche Guide (3 hours) - 2,000+ users
  • SkyGuard AI (12 hours) - 95% accuracy drone detection
  • SceneScout (active dev) - 10,000+ events indexed
  • GhostOS (R&D) - Multi-agent orchestration
  • Neo-City (1 week) - 100+ AI agents in simulation
  • AI Cube Initiate (3 weeks) - Teaching kids AI
  • Veteran Job Board (1 week) - Military→Tech transition`,

  skills: `Technical Stack:

  AI/ML: LLMs, TensorFlow, PyTorch, Agent Systems
  Frontend: React, Next.js, TypeScript, Framer Motion
  Backend: Python, FastAPI, Node.js, WebSockets
  Video AI: Runway, Veo, Midjourney
  Tools: Git, Docker, Vercel, AWS

  Soft Skills: Rapid prototyping, storytelling, enterprise sales`,

  contact: `Let's build something:

  Email: mani@aimeintelligence.com
  LinkedIn: linkedin.com/in/manimehramooz
  Location: Toronto, Canada

  Open to: Consulting, technical advisory, ambitious rapid prototypes
  Not interested in: Recruiters, "quick calls", generic pitches`,

  matrix: `Wake up, Neo...

  ⠀⠀⠀⣠⣴⣶⣿⣿⣷⣶⣄⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣾⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⡟⠁⣰⣿⣿⣿⡿⠿⠻⠿⣿⣿⣿⣿⣧⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⠏⠀⣴⣿⣿⣿⠉⠀⠀⠀⠀⠀⠈⢻⣿⣿⣇⠀⠀⠀

  The AI revolution is here. You're already in it.`,
};

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'success', content: '> TERMINAL v2.0.1 INITIALIZED' },
    { type: 'output', content: '> Type "help" for available commands' },
    { type: 'output', content: '> Press Ctrl+` to toggle terminal' },
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle terminal with Ctrl+` or Cmd+`
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      // Close with Escape
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    setHistory(prev => [
      ...prev,
      { type: 'command', content: `> ${cmd}` }
    ]);

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmedCmd === 'exit') {
      setIsOpen(false);
      return;
    }

    if (commands[trimmedCmd]) {
      setHistory(prev => [
        ...prev,
        { type: 'output', content: commands[trimmedCmd] }
      ]);
    } else if (trimmedCmd) {
      setHistory(prev => [
        ...prev,
        { type: 'error', content: `Command not found: ${trimmedCmd}. Type "help" for available commands.` }
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim()) {
      handleCommand(currentInput);
      setCurrentInput('');
    }
  };

  return (
    <div className={`terminal-interface ${isOpen ? 'active' : ''}`}>
      <div className="terminal-header">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-terminal-green font-mono text-sm font-bold">
            AIME_TERMINAL v2.0.1
          </span>
        </div>
        <div className="text-slate-500 text-xs font-mono">
          Press Ctrl+` to toggle • ESC to close
        </div>
      </div>

      <div className="terminal-output" ref={outputRef}>
        {history.map((line, i) => (
          <div
            key={i}
            className={`terminal-line ${
              line.type === 'command' ? 'terminal-command' :
              line.type === 'error' ? 'terminal-error' :
              line.type === 'success' ? 'terminal-success' :
              ''
            }`}
          >
            <pre className="whitespace-pre-wrap font-mono">{line.content}</pre>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="terminal-input-area">
        <span className="terminal-prompt">guest@aime:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          className="terminal-input"
          placeholder="Type a command..."
          autoComplete="off"
        />
      </form>
    </div>
  );
}
