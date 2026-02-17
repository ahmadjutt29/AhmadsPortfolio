'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Zap, Layers, Database, Terminal, Layout } from 'lucide-react';
import { useRef } from 'react';

const projects = [
    {
        title: 'Zarraat Mobile App',
        subtitle: 'Final Year Project',
        description: 'Cross-platform Flutter application tailored for the agricultural landscape in Pakistan. Features include real-time weather forecasts, crop market data, a marketplace for buy/sell operations, and expert-led guidance for foreign crop cultivation.',
        icon: Smartphone,
        color: 'text-green-400',
        accent: 'bg-green-500',
        bg: 'bg-green-500/5',
        tech: ['Flutter', 'Firebase', 'Dart', 'REST APIs', 'Android/iOS'],
    },
    {
        title: 'E-Ops Platform',
        subtitle: 'National Utility Infrastructure',
        description: 'Architected and implemented CI/CD pipelines with GitHub Actions for a high-stake national electric utility operations platform. Managed enterprise-scale containerization and automated on-premise deployments for mission-critical reliability.',
        icon: Zap,
        color: 'text-blue-400',
        accent: 'bg-blue-500',
        bg: 'bg-blue-500/5',
        tech: ['ReactJS', '.NET', 'GitHub Actions', 'Docker', 'DevOps'],
    },
    {
        title: 'Telemetry Web App',
        subtitle: 'IoT Smart Dashboard',
        description: 'A sophisticated IoT management dashboard with real-time data visualization. Tracks smart home diagnostics including voltage, temperature, and power usage trends via deep Swagger API integration.',
        icon: Layers,
        color: 'text-purple-400',
        accent: 'bg-purple-500',
        bg: 'bg-purple-500/5',
        tech: ['Flutter Web', 'Swagger API', 'Real-time Data', 'DataViz'],
    },
    {
        title: 'ISP Billing System',
        subtitle: 'Full-Stack Enterprise',
        description: 'End-to-end billing solution featuring automated PDF invoice generation, JWT-based role authorization, and robust MySQL data persistence. Fully containerized with Docker Compose for seamless offline/local deployment.',
        icon: Database,
        color: 'text-orange-400',
        accent: 'bg-orange-500',
        bg: 'bg-orange-500/5',
        tech: ['React', '.NET 8', 'MySQL', 'Docker Compose', 'JWT'],
    },
    {
        title: 'AWS CLI Automation',
        subtitle: 'Cloud Management Tool',
        description: 'A Python-driven automation suite for AWS EC2 management. Implements secure Bcrypt authentication, tag-driven automation via Boto3, and centralized S3 logging for distributed cloud architectures.',
        icon: Terminal,
        color: 'text-yellow-400',
        accent: 'bg-yellow-500',
        bg: 'bg-yellow-500/5',
        tech: ['Python', 'AWS EC2', 'Boto3', 'S3', 'Bcrypt'],
    },
    {
        title: 'Corporate Ecosystem',
        subtitle: 'Modern Web Presence',
        description: 'A high-performance corporate platform built on Vite. Features dynamic product rendering via Cloudinary, integrated CI/CD via Vercel, and a custom-built notification system using EmailJS.',
        icon: Layout,
        color: 'text-red-400',
        accent: 'bg-red-500',
        bg: 'bg-red-500/5',
        tech: ['React', 'Vite', 'TailwindCSS', 'Vercel', 'Cloudinary'],
    },
];

export default function Projects() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
    const shouldReduceMotion = useReducedMotion();

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="projects" ref={containerRef} className="relative z-20 w-full py-32 flex flex-col items-center bg-[#121212]/30 backdrop-blur-md overflow-hidden">

            {/* Ambient Background Glow */}
            <motion.div
                style={{ y: shouldReduceMotion ? 0 : y }}
                className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-purple-900/5 pointer-events-none"
            />

            <div className="w-full max-w-7xl px-6 relative z-10 mx-auto">

                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp} style={{ marginTop: '8rem' }}
                    className="mb-32 text-center"
                >
                    <span className="text-sm font-mono text-blue-500 tracking-[0.4em] uppercase mb-4 block">Selected Works</span>
                    <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
                        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-500">Solutions.</span>
                    </h2>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-32 " style={{ marginTop: '6rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group relative flex flex-col h-full bg-[#121212]/30 p-1 mr-4"
                        >
                            {/* Industrial Left Accent (The "Beam") */}
                            <div className={`absolute top-0 bottom-0 -left-6 w-1.5 ${project.accent} opacity-30 group-hover:opacity-100 transition-all duration-500 rounded-full`} />

                            {/* Precision Brackets (Creative alternative to boxes) */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/10 group-hover:border-blue-500/50 group-hover:w-12 group-hover:h-12 transition-all duration-500" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/10 group-hover:border-blue-500/50 group-hover:w-12 group-hover:h-12 transition-all duration-500" />

                            <div className="relative z-10 p-10 flex flex-col h-full">
                                {/* Icon & Title Block */}
                                <div className="flex items-center gap-6 mb-8">
                                    <div className={`p-4 rounded-xl ${project.bg} ${project.color} border border-white/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl overflow-hidden relative`}>
                                        <project.icon className="w-8 h-8" />
                                        {/* Scanner Pulse Effect */}
                                        <div className="absolute inset-0 bg-white/20 -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-3xl font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-[11px] font-mono text-gray-500 uppercase tracking-widest mt-1">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Main Path Line */}
                                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-10 group-hover:from-blue-500/40 transition-all duration-500" />

                                {/* Description */}
                                <div className="flex-1 mb-10">
                                    <p className="text-lg text-gray-400 leading-relaxed font-medium">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {project.tech.map((t, j) => (
                                        <span
                                            key={j}
                                            className="text-[10px] font-black tracking-widest text-gray-600 bg-black/40 border border-white/5 px-4 py-2 rounded-lg hover:border-blue-500/30 hover:text-blue-300 transition-all duration-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Call to Action */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 text-xs font-black tracking-tighter text-white bg-blue-500/90 hover:bg-blue-600 px-7 py-3 rounded-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                                        >
                                            EXPLORE CASE
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </motion.button>
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            className="p-3 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white cursor-pointer transition-all"
                                        >
                                            <Github className="w-4 h-4" />
                                        </motion.div>
                                    </div>

                                    {/* Structural coordinate text */}
                                    <span className="hidden md:block text-[9px] font-mono text-white/5 group-hover:text-white/20 transition-colors">
                                        REF: PRJ-{index + 1} / 2025
                                    </span>
                                </div>
                            </div>

                            {/* Hover Backdrop Overlay (Frameless glow) */}
                            <div className="absolute inset-x-0 inset-y-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
