'use client';

import { ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
    return (
        <section className="py-20 sm:py-32 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-800 dark:to-cyan-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                    Ready to Start Sketching?
                </h2>
                <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Create a room, invite collaborators, and start sketching together in real-time. Your ideas, visualized instantly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Link
                        href="/signin"
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 dark:bg-zinc-950 dark:text-blue-400 dark:hover:bg-zinc-900 transition-colors font-semibold shadow-lg"
                    >
                        Launch Excalidraw
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a
                        href="https://github.com/Shades3101/draw-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white border-2 border-white rounded-lg hover:bg-blue-800 dark:bg-blue-900 dark:border-blue-400 dark:hover:bg-blue-800 transition-colors font-semibold"
                    >
                        <Github className="w-5 h-5" />
                        View on GitHub
                    </a>
                </div>

                <p className="text-blue-100 text-sm">
                    Real-time sync • Secure rooms • Hand-drawn style • Built with ❤️
                </p>
            </div>
        </section>
    );
}
