"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const projects = [
  {
    id: 'nuit-blanche',
    title: 'Nuit Blanche Toronto Guide',
    subtitle: 'Art installation navigator',
    buildTime: '3 hours',
    status: 'Live',
    description: 'Built this in 3 hours for Toronto\'s annual all-night art event. Real-time navigation, curated recommendations. Launched same day. Worked. People used it.',
    tech: ['React', 'Next.js', 'Maps API'],
    link: 'https://nuit-blanche-app.vercel.app',
    gradient: 'from-purple-600 via-pink-500 to-purple-600',
    metrics: '2,000+ users • 50+ installations mapped',
    videoUrl: '', // Add Vimeo/YouTube embed
  },
  {
    id: 'skyguard',
    title: 'SkyGuard AI',
    subtitle: 'Acoustic drone detection',
    buildTime: '12 hours',
    status: 'Live Demo',
    description: 'Defense tech hackathon entry. 4-stage ML pipeline detecting drones from audio signatures. Hit 95%+ accuracy on test data. Try the live demo.',
    tech: ['Python', 'TensorFlow', 'Signal Processing', 'Real-time Audio'],
    link: 'https://skyguard-demo.vercel.app', // Update with real link
    gradient: 'from-emerald-600 via-green-500 to-emerald-600',
    metrics: '95% accuracy • 10,000+ audio samples tested',
    videoUrl: '', // Add Vimeo/YouTube embed
    caseStudyUrl: '/case-studies/skyguard',
  },
  {
    id: 'scenescout',
    title: 'SceneScout',
    subtitle: 'Event discovery platform',
    buildTime: 'Active development',
    status: 'Live Beta',
    description: 'The "Netflix for local events." Aggregating 10,000+ Toronto events with AI recommendations. Play with the beta version—still shipping updates daily.',
    tech: ['React', 'Next.js', 'Python', 'FastAPI', 'AI Recommendations'],
    link: 'https://scenescout.vercel.app', // Update with real link
    gradient: 'from-blue-600 via-cyan-500 to-blue-600',
    metrics: '10,000+ events indexed • 500+ beta users',
    videoUrl: '', // Add Vimeo/YouTube embed
  },
  {
    id: 'ghostos',
    title: 'GhostOS',
    subtitle: 'Multi-agent orchestration',
    buildTime: 'Ongoing R&D',
    status: 'Interactive Demo',
    description: 'Autonomous agents that coordinate to build software. Watch agents work together in real-time. Experimental, but the parts that work are fascinating.',
    tech: ['Python', 'LLM APIs', 'Multi-agent Systems', 'WebSockets'],
    link: 'https://ghostos-demo.vercel.app', // Update with real link
    gradient: 'from-violet-600 via-purple-500 to-violet-600',
    metrics: '3 autonomous agents • Real-time coordination',
    videoUrl: '', // Add Vimeo/YouTube embed
  },
  {
    id: 'neocity',
    title: 'Neo-City',
    subtitle: 'AI agent simulation',
    buildTime: '1 week',
    status: 'Playable Demo',
    description: 'Immersive city simulation for testing autonomous agents in dynamic environments. Watch AI agents navigate, interact, and solve problems. Click around and see them adapt.',
    tech: ['Three.js', 'WebGL', 'Python', 'Agent Simulation'],
    link: 'https://neocity.vercel.app', // Update with real link
    gradient: 'from-orange-600 via-red-500 to-orange-600',
    metrics: '100+ AI agents • Dynamic environment',
    videoUrl: '', // Add Vimeo/YouTube embed
  },
  {
    id: 'aicube',
    title: 'AI Cube Initiate',
    subtitle: 'AI education for kids',
    buildTime: '3 weeks',
    status: 'Live Demo',
    description: 'Teaching kids the building blocks of AI through hands-on exercises. Try the interactive modules—designed for actual learning, not just demos.',
    tech: ['React', 'Next.js', 'Python', 'Interactive Learning'],
    link: 'https://aicube.vercel.app', // Update with real link
    gradient: 'from-cyan-600 via-blue-500 to-cyan-600',
    metrics: '12 interactive modules • Ages 8-14',
    videoUrl: '', // Add Vimeo/YouTube embed
  },
  {
    id: 'vetboard',
    title: 'Veteran Job Board',
    subtitle: 'Military → Tech transition',
    buildTime: '1 week',
    status: 'Live Beta',
    description: 'Platform connecting ex-military professionals with tech startups. Matching military skillsets to innovative projects. Browse live listings.',
    tech: ['React', 'Next.js', 'Python', 'Matching Algorithm'],
    link: 'https://veteran-jobs.vercel.app', // Update with real link
    gradient: 'from-green-600 via-emerald-500 to-green-600',
    metrics: '150+ verified veterans • 80+ job listings',
    videoUrl: '', // Add Vimeo/YouTube embed
  },
];

const testimonials = [
  {
    quote: "Built our prototype in 48 hours. What would have taken our team weeks, Mani delivered over a weekend.",
    author: "Sarah Chen",
    role: "CTO, TechStart AI",
    project: "SceneScout MVP",
  },
  {
    quote: "Incredible speed without sacrificing quality. The AI recommendations were live and working on day one.",
    author: "Marcus Rodriguez",
    role: "Founder, EventFlow",
    project: "Event Discovery Engine",
  },
];

const timeline = [
  {
    period: '2005–2011',
    icon: '🎖️',
    title: 'Military',
    role: 'MSE Operator, Canadian Armed Forces Reserves',
    description: 'Winter warfare training. Logistics under pressure. Learned discipline and how to ship with limited resources.',
  },
  {
    period: '2008–2023',
    icon: '🎬',
    title: 'Film Production',
    role: 'Writer, Director, Producer, Editor, DOP',
    description: '15 years running Toronto Film Studio. Music videos, commercials, short films. IATSE member (Local 873, 856, 891) working on productions like Star Trek: Strange New Worlds. Learned storytelling, visual thinking, and solo creative execution.',
  },
  {
    period: '2018–2024',
    icon: '💼',
    title: 'Enterprise Sales',
    role: 'Strategic AI Architect',
    description: 'Closed $3M+ in deals with Fortune 500 companies. Harvard Business School (HBX). Learned positioning, strategy, and navigating enterprise bureaucracy.',
  },
  {
    period: '2023–Now',
    icon: '🤖',
    title: 'AI Builder',
    role: 'Founder, AIME Intelligence',
    description: 'Building autonomous AI systems. Combining LLMs, video AI (Veo, Runway), and generative tools (Midjourney) to prototype fast. Shipping in hours/days, not months.',
  },
];

function AnimatedGrid() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none opacity-10"
      style={{ y }}
    >
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
        backgroundSize: '100px 100px',
      }} />
    </motion.div>
  );
}

function FloatingOrbs() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <>
      <motion.div
        className="fixed top-20 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"
        style={{ y: y2 }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="fixed bottom-1/4 left-1/2 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none"
        style={{ y: y3 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </>
  );
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative bg-cyber-bg overflow-hidden circuit-bg">
      <AnimatedGrid />
      <FloatingOrbs />
      
      <motion.div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
        animate={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto relative z-10"
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full terminal-border bg-cyber-bg-dark mb-8 backdrop-blur-sm"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(57, 255, 20, 0.3)',
                  '0 0 40px rgba(57, 255, 20, 0.5)',
                  '0 0 20px rgba(57, 255, 20, 0.3)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-cyber-terminal-green animate-blink"
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="text-cyber-terminal-green font-mono font-semibold text-sm cursor-blink">
                &gt; ONLINE_Toronto_CA
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight font-mono">
              <motion.span
                className="block text-white glitch"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                [ I_SHIP_AI_PROTOTYPES ]
              </motion.span>
              <motion.span
                className="block neon-cyan mt-2"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                &gt; IN_HOURS_NOT_MONTHS
              </motion.span>
            </h1>
            
            <motion.div 
              className="space-y-4 text-lg text-slate-400 mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p>
                Solo builder experimenting with autonomous systems and wild ideas.
              </p>
              <p className="text-slate-500">
                15 years directing films → closed $3M+ in enterprise sales → now building AI prototypes. 
                Ex-military, IATSE member, HBX grad. Building in public with 2,300+ watching the journey.
              </p>
              <motion.p 
                className="text-white font-semibold"
                animate={{
                  color: ['#ffffff', '#3b82f6', '#ffffff'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                All projects are live. Click in and play with them.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="mailto:mani@aimeintelligence.com"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: '200% auto',
                  }}
                />
                <span className="relative z-10">Email me</span>
              </motion.a>
              
              <div className="flex items-center gap-4 text-slate-500">
                <motion.a
                  href="https://www.linkedin.com/in/manimehramooz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  LinkedIn
                </motion.a>
                <span>•</span>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  <motion.span whileHover={{ scale: 1.1, y: -2 }} className="inline-block">
                    Blog
                  </motion.span>
                </Link>
                <span>•</span>
                <motion.a
                  href="https://manimehramooz.wixsite.com/torontofilmstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  Film Work
                </motion.a>
                <span>•</span>
                <motion.a
                  href="https://vimeo.com/1078851097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  Video AI Demo
                </motion.a>
                <span>•</span>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-sm font-medium">Try the demos</span>
            <motion.svg 
              className="w-6 h-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Live Projects — Click & Play
            </h2>
            <p className="text-slate-400 text-lg">
              All deployed. All interactive. Built fast, shipped faster.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group relative block"
              >
                <div className="scanline absolute inset-0 pointer-events-none opacity-30 rounded-2xl"></div>

                <div className="relative terminal-border-cyan bg-cyber-bg-card backdrop-blur-md rounded-2xl p-6 hologram transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <motion.span
                      className={`px-3 py-1 text-xs font-mono font-bold rounded-full flex items-center gap-2 ${
                        project.status === 'Live'
                          ? 'terminal-border bg-cyber-bg-dark text-cyber-terminal-green'
                          : 'terminal-border-cyan bg-cyber-bg-dark text-cyber-cyan'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full animate-blink ${
                        project.status === 'Live' ? 'bg-cyber-terminal-green' : 'bg-cyber-cyan'
                      }`}></span>
                      &gt; {project.status.toUpperCase()}
                    </motion.span>
                    <span className="text-xs font-mono font-semibold text-cyber-cyan">
                      ⚡ {project.buildTime.toUpperCase().replace(/ /g, '_')}
                    </span>
                  </div>

                  <h3 className="text-xl font-mono font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors">
                    [ {project.title.toUpperCase().replace(/ /g, '_')} ]
                  </h3>

                  <p className="text-cyber-cyan text-sm font-mono mb-3">&gt; {project.subtitle}</p>
                  
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {project.videoUrl && (
                    <div className="mb-4 aspect-video rounded-lg overflow-hidden bg-slate-800/50">
                      <iframe
                        src={project.videoUrl}
                        className="w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}

                  {project.metrics && (
                    <div className="mb-4 px-3 py-2 terminal-border bg-cyber-bg-dark rounded-lg">
                      <p className="text-xs font-mono font-semibold text-cyber-terminal-green">
                        &gt; {project.metrics}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-mono bg-cyber-bg-dark text-cyber-cyan rounded terminal-border-cyan"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-mono font-semibold text-cyber-cyan group-hover:text-cyber-terminal-green pulse-glow-hover">
                      <span>&gt; LAUNCH_DEMO_</span>
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </div>
                    {project.caseStudyUrl && (
                      <Link
                        href={project.caseStudyUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-slate-500 hover:text-white transition-colors underline"
                      >
                        Read case study
                      </Link>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Speed callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">⚡</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Why speed matters</h3>
                <p className="text-slate-400">
                  Most people spend weeks planning. I ship in hours, get real user feedback, then iterate. 
                  Nuit Blanche was built in 3 hours and launched same day. SceneScout processes 10,000+ events. 
                  SkyGuard hit 95% accuracy in 2 weeks. Speed = more experiments = better learning = better products.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 px-6 lg:px-8 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Client Feedback
            </h2>
            <p className="text-slate-400 text-lg">
              What people say about working with me
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
                  <div className="text-4xl text-blue-400 mb-4">"</div>
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-bold text-white">{testimonial.author}</div>
                      <div className="text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                    <div className="text-xs text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-32 px-6 lg:px-8 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              The Journey
            </h2>
            <p className="text-slate-400 text-lg mb-16">
              Weird path, but it all connects.
            </p>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ x: 10 }}
                  className="relative pl-20 border-l-2 border-slate-800"
                >
                  <motion.div 
                    className="absolute left-0 top-0 -translate-x-[17px] w-8 h-8 rounded-full bg-slate-900 border-4 border-blue-500 flex items-center justify-center text-lg"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  <div className="text-sm text-blue-400 font-semibold mb-2">{item.period}</div>
                  <div className="text-2xl font-bold text-white mb-2">{item.title}</div>
                  <div className="text-slate-400 font-medium mb-3">{item.role}</div>
                  <p className="text-slate-500 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-16 p-8 bg-slate-900/50 border border-slate-800 rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ borderColor: 'rgba(59, 130, 246, 0.5)' }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Why This Combo Works</h3>
              <div className="space-y-3 text-slate-400">
                <p><span className="text-blue-400 font-semibold">Film production</span> → storytelling, visual thinking, and shipping creative projects solo</p>
                <p><span className="text-blue-400 font-semibold">Enterprise sales</span> → positioning, strategy, and knowing what Fortune 500s actually need</p>
                <p><span className="text-blue-400 font-semibold">Military training</span> → discipline, logistics, and executing under pressure with limited resources</p>
                <p className="text-white pt-2 font-semibold">Result: I ship AI prototypes fast, make them compelling, and know how to position them for real users.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative py-32 px-6 lg:px-8 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
              Let's Build Something
            </h2>
            
            <p className="text-xl text-slate-400 mb-8">
              Open to consulting, technical advisory, or working on ambitious projects that need rapid prototyping.
            </p>

            <p className="text-slate-500 mb-12">
              Not interested in: recruiters, "quick calls," generic agency pitches, or people who haven't looked at what I build.
            </p>

            <motion.a
              href="mailto:mani@aimeintelligence.com"
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: '200% auto',
                }}
              />
              <span className="relative z-10">mani@aimeintelligence.com</span>
            </motion.a>

            <p className="mt-8 text-sm text-slate-500">
              Toronto-based • Usually respond within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6 text-center mb-6">
            <p className="text-slate-500 italic text-sm max-w-2xl">
              Everything here is live, experimental, and designed to teach something new.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <div>© 2025 Mani Mehramooz</div>
            <div className="flex items-center gap-6">
              <motion.a 
                href="https://www.linkedin.com/in/manimehramooz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                LinkedIn
              </motion.a>
              <motion.a 
                href="https://manimehramooz.wixsite.com/torontofilmstudio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                Film Work
              </motion.a>
              <motion.a 
                href="https://vimeo.com/1078851097" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                Video AI
              </motion.a>
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                GitHub
              </motion.a>
              <span>Toronto</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
