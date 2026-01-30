'use client';

import { PenTool, Github, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from '../theme-toggle';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-zinc-950/80 dark:border-zinc-800 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <PenTool className="w-8 h-8 text-blue-600 dark:text-blue-500" />
                    <span className="text-xl font-bold text-gray-900 dark:text-white">SketchFlow</span>
                </Link>

                <div className="flex items-center gap-2 lg:hidden">
                    <ModeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-gray-600 dark:text-gray-300"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                        Features
                    </a>
                    <a href="#use-cases" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                        Use Cases
                    </a>
                    <a href="#stats" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                        About
                    </a>
                    <a
                        href="https://github.com/Shades3101/draw-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                        <Github className="w-5 h-5" />
                        GitHub
                    </a>
                    <Link
                        href="/signin"
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors font-medium"
                    >
                        Start Drawing
                    </Link>
                    <ModeToggle />
                </div>

                {isOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 lg:hidden">
                        <div className="flex flex-col p-4 gap-4">
                            <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                                Features
                            </a>
                            <a href="#use-cases" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                                Use Cases
                            </a>
                            <a href="#stats" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                                About
                            </a>
                            <a
                                href="https://github.com/Shades3101/draw-app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                            >
                                <Github className="w-5 h-5" />
                                GitHub
                            </a>
                            <Link
                                href="/signin"
                                className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                            >
                                Start Drawing
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
