"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    slug: 'nuit-blanche-3-hours',
    title: 'How I Built Nuit Blanche Guide in 3 Hours',
    date: 'October 2024',
    readTime: '5 min read',
    description: 'Real-time navigation for 50+ art installations. Built and deployed same-day for Toronto\'s all-night art event.',
    tags: ['React', 'Next.js', 'Maps API', 'Rapid Prototyping'],
  },
  {
    slug: 'skyguard-12-hours',
    title: 'Building 95% Accurate Drone Detection in 12 Hours',
    date: 'November 2024',
    readTime: '8 min read',
    description: 'Defense tech hackathon entry. 4-stage ML pipeline, real-time audio processing, and lessons learned under time pressure.',
    tags: ['Python', 'TensorFlow', 'Signal Processing', 'ML'],
  },
  {
    slug: 'claude-code-ai-builder',
    title: 'How Claude Code 10x\'d My Prototyping Speed',
    date: 'November 2024',
    readTime: '6 min read',
    description: 'Why AI coding assistants are a game-changer for solo builders. Real examples from my projects.',
    tags: ['AI Tools', 'Productivity', 'Claude Code', 'Solo Building'],
  },
];

export default function BlogPage() {
  return (
    <main className="relative bg-slate-950 min-h-screen">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-blue-500/50 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Technical Writing
            </h1>
            <p className="text-xl text-slate-400">
              Building notes, lessons learned, and process breakdowns from shipping AI prototypes fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-slate-800/50 text-slate-500 rounded-full border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-400">
                      <span>Read article</span>
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
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
