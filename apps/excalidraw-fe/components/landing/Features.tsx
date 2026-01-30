'use client';

import {
    Zap,
    Share2,
    Lock,
    Download,
    Users,
    Palette,
} from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: 'Hand-Drawn Aesthetic',
        description: 'Create beautiful diagrams with a natural, sketched appearance that feels organic and approachable.',
    },
    {
        icon: Users,
        title: 'Real-Time Collaboration',
        description: 'Work together with team members in real-time. See cursors, changes, and updates instantly.',
    },
    {
        icon: Lock,
        title: 'Privacy First',
        description: 'End-to-end encryption by default. Your diagrams are yours alone, stored securely on your device.',
    },
    {
        icon: Download,
        title: 'Multiple Export Options',
        description: 'Save and export your work as PNG, SVG, or embed directly in documents and presentations.',
    },
    {
        icon: Palette,
        title: 'Customizable Styling',
        description: 'Customize colors, fonts, stroke styles, and more to match your brand and preferences.',
    },
    {
        icon: Share2,
        title: 'Easy Sharing',
        description: 'Generate shareable links to collaborate with others or share read-only versions of your diagrams.',
    },
];

export function Features() {
    return (
        <section id="features" className="py-20 sm:py-32 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 sm:mb-20">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Powerful Features for Modern Teams
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Everything you need to create, collaborate, and share beautiful diagrams and designs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group p-8 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="mb-4 inline-flex p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
