'use client';

import { Users, Heart, Globe, Code } from 'lucide-react';

const stats = [
    {
        icon: Users,
        value: 'Next.js',
        label: 'Frontend Framework',
    },
    {
        icon: Globe,
        value: 'WebSocket',
        label: 'Real-time Updates',
    },
    {
        icon: Heart,
        value: 'Prisma',
        label: 'Database ORM',
    },
    {
        icon: Code,
        value: 'TypeScript',
        label: 'Type Safety',
    },
];

const testimonials = [
    {
        name: 'Real-time Sync',
        title: 'Core Feature',
        quote: 'Changes sync instantly across all connected users via WebSocket, making collaboration seamless.',
        initials: 'RT',
    },
    {
        name: 'Hand-drawn Style',
        title: 'Design Philosophy',
        quote: 'Create beautiful sketches with a natural, hand-drawn aesthetic that makes diagrams approachable.',
        initials: 'HD',
    },
    {
        name: 'Secure Auth',
        title: 'JWT Authentication',
        quote: 'User authentication with JWT tokens ensures your drawings and rooms are protected.',
        initials: 'SA',
    },
];

export function Stats() {
    return (
        <section id="stats" className="py-20 sm:py-32 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                    {stat.value}
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="mb-16 sm:mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                        Key Features
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="p-8 bg-gray-50 dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-300"
                            >
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed italic">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-semibold text-sm">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
