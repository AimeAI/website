"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SkyGuardCaseStudy() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-emerald-400 font-semibold text-sm">Case Study</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              SkyGuard AI: Real-time Acoustic Drone Detection
            </h1>

            <p className="text-xl text-slate-400 mb-8">
              Building a 95% accurate ML-powered drone detection system in 12 hours for a defense tech hackathon.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-slate-500 border-t border-slate-800 pt-6">
              <div>
                <span className="text-slate-600">Timeline:</span>
                <span className="ml-2 text-white font-semibold">12 hours</span>
              </div>
              <div>
                <span className="text-slate-600">Tech Stack:</span>
                <span className="ml-2 text-white font-semibold">Python, TensorFlow, Signal Processing</span>
              </div>
              <div>
                <span className="text-slate-600">Result:</span>
                <span className="ml-2 text-emerald-400 font-semibold">95% accuracy on test data</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="relative py-20 px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-white mb-6">The Problem</h2>

            <div className="space-y-4 text-lg text-slate-400">
              <p>
                Drone threats are increasing rapidly across military, security, and civilian environments.
                Current detection systems are:
              </p>

              <ul className="list-none space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span><strong className="text-white">Expensive:</strong> Commercial systems cost $50K-$500K</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span><strong className="text-white">Slow:</strong> Visual detection requires line-of-sight</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span><strong className="text-white">Limited range:</strong> Radar struggles with small consumer drones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span><strong className="text-white">Complex deployment:</strong> Require specialized equipment and training</span>
                </li>
              </ul>

              <p className="pt-4 text-white font-semibold">
                The hackathon challenge: Build a proof-of-concept drone detection system using only acoustic signatures in 12 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-white mb-6">The Solution</h2>

            <p className="text-lg text-slate-400 mb-8">
              I built a 4-stage ML pipeline that detects drones from audio signatures in real-time:
            </p>

            <div className="space-y-6">
              {[
                {
                  stage: "1",
                  title: "Audio Capture & Preprocessing",
                  description: "Real-time audio stream with noise filtering and normalization. Handles background noise, wind, and environmental interference.",
                  tech: "PyAudio, SciPy",
                },
                {
                  stage: "2",
                  title: "Feature Extraction",
                  description: "Convert audio to spectrograms and extract frequency patterns unique to drone motors and propellers.",
                  tech: "librosa, NumPy",
                },
                {
                  stage: "3",
                  title: "ML Classification",
                  description: "Convolutional neural network trained on 10,000+ audio samples. Distinguishes drone sounds from birds, cars, helicopters, and background noise.",
                  tech: "TensorFlow, Keras",
                },
                {
                  stage: "4",
                  title: "Alert System",
                  description: "Real-time detection with confidence scoring. Triggers alerts when drone signature detected above 85% confidence threshold.",
                  tech: "Flask API, WebSockets",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                      <span className="text-blue-400 font-black text-xl">{item.stage}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400 mb-3">{item.description}</p>
                      <div className="inline-block px-3 py-1 bg-slate-800/50 rounded text-xs text-slate-500 font-mono">
                        {item.tech}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="relative py-20 px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-white mb-6">Impact & Results</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  metric: "95%",
                  label: "Detection Accuracy",
                  description: "On test dataset of 10,000+ samples",
                },
                {
                  metric: "12hrs",
                  label: "Build Time",
                  description: "From concept to working demo",
                },
                {
                  metric: "<200ms",
                  label: "Detection Latency",
                  description: "Real-time audio processing",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-6 text-center"
                >
                  <div className="text-4xl font-black text-blue-400 mb-2">{item.metric}</div>
                  <div className="text-white font-semibold mb-1">{item.label}</div>
                  <div className="text-sm text-slate-500">{item.description}</div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4 text-lg text-slate-400">
              <p>
                The hackathon judges were impressed by the <strong className="text-white">speed of development</strong> and
                <strong className="text-white"> accuracy on real-world audio samples</strong>.
              </p>

              <p>
                Key achievement: Proved that acoustic detection is <strong className="text-white">viable and cost-effective</strong>
                —no expensive radar or cameras needed. Just a microphone and ML model running on commodity hardware.
              </p>

              <div className="pt-6 border-t border-slate-800">
                <h3 className="text-xl font-bold text-white mb-4">What I Learned</h3>
                <ul className="list-none space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Real-time audio processing is harder than expected—preprocessing quality matters more than model complexity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Feature extraction (spectral analysis) was the breakthrough—once the data was clean, the CNN trained quickly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Time constraints force ruthless prioritization—I cut 3 "nice-to-have" features to ship core functionality</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Project */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-black text-white mb-4">Want to work together?</h2>
            <p className="text-slate-400 mb-8">
              I build AI prototypes fast. Let's talk about your project.
            </p>
            <a
              href="mailto:mani@aimeintelligence.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all"
            >
              Email Me
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
