'use client';

import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-zinc-950 dark:to-zinc-900 pt-20 pb-32 sm:pt-32 sm:pb-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                                Sketch, Collaborate, Create Together
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                                A real-time collaborative whiteboard for sketching diagrams, wireframes, and ideas with a hand-drawn aesthetic. Built with Next.js, WebSockets, and Prisma.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/signin"
                                className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                            >
                                Start Drawing
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 dark:bg-zinc-900 dark:text-blue-400 dark:border-blue-500 dark:hover:bg-zinc-800 transition-colors duration-300 font-semibold">

                                Sign In
                            </button>
                        </div>

                        <div className="flex items-center gap-8 text-gray-600 dark:text-gray-400 pt-4">
                            <div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">Real-time</div>
                                <div className="text-sm">Collaboration</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">WebSocket</div>
                                <div className="text-sm">Powered</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">Open</div>
                                <div className="text-sm">Source</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl blur-3xl opacity-30 -z-10"></div>
                        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-zinc-800">
                            <svg className="w-full h-auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                                <rect x="20" y="40" width="120" height="80" fill="none" stroke="#3b82f6" strokeWidth="2" rx="8" />
                                <text x="80" y="85" textAnchor="middle" className="text-sm font-semibold fill-gray-900 dark:fill-gray-100">
                                    Design
                                </text>

                                <circle cx="280" cy="100" r="50" fill="none" stroke="#06b6d4" strokeWidth="2" />
                                <text x="280" y="105" textAnchor="middle" className="text-sm font-semibold fill-gray-900 dark:fill-gray-100">
                                    Idea
                                </text>

                                <path
                                    d="M 140 80 Q 210 50 230 50"
                                    stroke="#8b5cf6"
                                    strokeWidth="2"
                                    fill="none"
                                    markerEnd="url(#arrowhead)"
                                />

                                <rect x="50" y="180" width="100" height="70" fill="none" stroke="#ec4899" strokeWidth="2" rx="8" />
                                <text x="100" y="220" textAnchor="middle" className="text-sm font-semibold fill-gray-900 dark:fill-gray-100">
                                    Prototype
                                </text>

                                <circle cx="280" cy="220" r="45" fill="none" stroke="#f59e0b" strokeWidth="2" />
                                <text x="280" y="228" textAnchor="middle" className="text-sm font-semibold fill-gray-900 dark:fill-gray-100">
                                    Deploy
                                </text>

                                <path
                                    d="M 150 220 Q 210 220 235 220"
                                    stroke="#10b981"
                                    strokeWidth="2"
                                    fill="none"
                                    markerEnd="url(#arrowhead)"
                                />

                                <defs>
                                    <marker
                                        id="arrowhead"
                                        markerWidth="10"
                                        markerHeight="10"
                                        refX="9"
                                        refY="3"
                                        orient="auto"
                                    >
                                        <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                                    </marker>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
