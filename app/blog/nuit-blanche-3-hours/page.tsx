"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NuitBlanchePost() {
  return (
    <main className="relative bg-slate-950 min-h-screen">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-blue-500/50 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Article */}
      <article className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                <span>October 2024</span>
                <span>•</span>
                <span>5 min read</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                How I Built Nuit Blanche Guide in 3 Hours
              </h1>

              <p className="text-xl text-slate-400">
                Real-time navigation for 50+ art installations. Built and deployed same-day for Toronto's all-night art event.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Context</h2>
                <p>
                  Nuit Blanche Toronto is an annual all-night contemporary art event with 50+ installations scattered across the city.
                  Finding installations requires checking the official website, downloading PDFs, and manually plotting routes.
                  Most people miss half the exhibits because discovery is such a pain.
                </p>

                <p>
                  I had 3 hours before the event started. Could I build something better?
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">What I Built</h2>
                <p>
                  A mobile-first web app with:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Interactive map showing all 50+ installations</li>
                  <li>Real-time location tracking to find nearest exhibits</li>
                  <li>Quick filters by category (sculpture, performance, interactive, etc.)</li>
                  <li>Direct navigation links to each installation</li>
                  <li>Fast loading—no app download required</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Stack (and Why)</h2>
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <ul className="space-y-3">
                    <li>
                      <strong className="text-white">Next.js + React:</strong>
                      <span className="text-slate-400"> Fast setup, instant deployment to Vercel</span>
                    </li>
                    <li>
                      <strong className="text-white">Google Maps API:</strong>
                      <span className="text-slate-400"> Familiar UX, built-in geolocation</span>
                    </li>
                    <li>
                      <strong className="text-white">Tailwind CSS:</strong>
                      <span className="text-slate-400"> Rapid styling without context switching</span>
                    </li>
                    <li>
                      <strong className="text-white">Static data (JSON):</strong>
                      <span className="text-slate-400"> No database needed—scraped from official site</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">How I Shipped in 3 Hours</h2>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Hour 1: Data + Setup</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Scraped installation data from official Nuit Blanche site (name, address, category)</li>
                  <li>Used Google Maps Geocoding API to convert addresses to lat/lng coordinates</li>
                  <li>Set up Next.js project with Tailwind</li>
                  <li>Integrated Google Maps React component</li>
                </ul>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Hour 2: Core Features</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Built map view with custom markers for each installation</li>
                  <li>Added geolocation to show user's current position</li>
                  <li>Created filters for categories (sculpture, performance, etc.)</li>
                  <li>Built list view as alternative to map (for quick browsing)</li>
                </ul>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Hour 3: Polish + Deploy</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Mobile-first responsive design (most people use phones at the event)</li>
                  <li>Added "Get Directions" buttons linking to Google Maps</li>
                  <li>Tested on iPhone and Android</li>
                  <li>Deployed to Vercel (took 2 minutes)</li>
                  <li>Shared on social media + event hashtag</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">What I Learned</h2>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">Speed = Constraints</h3>
                  <p className="text-slate-300">
                    I didn't build user accounts, favorites, social features, or ratings. Just core value: find installations fast.
                    The 3-hour deadline forced ruthless prioritization.
                  </p>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mt-4">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">Static > Dynamic (for MVPs)</h3>
                  <p className="text-slate-300">
                    No database, no backend. Just a JSON file with installation data. Deployment was instant, zero server costs,
                    and no chance of crashes during the event.
                  </p>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mt-4">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">Ship Before Perfect</h3>
                  <p className="text-slate-300">
                    The site had bugs. Some addresses were slightly off. But it worked well enough that 2,000+ people used it
                    during the event. Perfection would have taken days—and missed the deadline.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Results</h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>2,000+ unique visitors during the 7-hour event</li>
                  <li>50+ social media shares</li>
                  <li>Positive feedback from attendees who found installations they would have missed</li>
                  <li>Zero downtime or crashes</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Try It Yourself</h2>
                <p>
                  Next time you see an event with scattered locations (concerts, food festivals, scavenger hunts),
                  build a quick map app. 3 hours is enough time if you:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Use familiar tools (don't learn new frameworks mid-build)</li>
                  <li>Cut features aggressively (ship core value only)</li>
                  <li>Use static data when possible (no backend = faster deploy)</li>
                  <li>Test on real devices (mobile matters)</li>
                </ul>

                <div className="mt-12 p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
                  <p className="text-slate-400">
                    <strong className="text-white">Want to see the code?</strong> Check out the{" "}
                    <a href="https://github.com" className="text-blue-400 hover:text-blue-300 underline">
                      GitHub repo
                    </a>
                    {" "}or try the{" "}
                    <a href="https://nuit-blanche-app.vercel.app" className="text-blue-400 hover:text-blue-300 underline">
                      live demo
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  );
}
