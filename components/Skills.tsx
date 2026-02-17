'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import {
    Cloud, Code, Layout, Database, Terminal, Globe,
    Cpu, Users, Shield, Server, Box, GitBranch,
    Workflow, Smartphone, Layers, Command, Zap,
    Settings, Briefcase, Coffee
} from 'lucide-react';
import { useRef } from 'react';

// Enhanced Data Structure with Icons per Skill
const skillCategories = [
    {
        title: 'DevOps & Cloud',
        icon: Cloud,
        description: 'Orchestrating scalable, resilient infrastructure.',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        skills: [
            { name: 'AWS', icon: Cloud, detail: 'EC2, EKS, Lambda' },
            { name: 'Docker', icon: Box, detail: 'Containerization' },
            { name: 'Kubernetes', icon: Layers, detail: 'Orchestration' },
            { name: 'Terraform', icon: Database, detail: 'IaC' }, // Using Database generic for infra state
            { name: 'GitHub Actions', icon: Workflow, detail: 'CI/CD Pipelines' },
            { name: 'Azure DevOps', icon: Settings, detail: 'Release Automation' }
        ]
    },
    {
        title: 'Programming',
        icon: Code,
        description: 'Crafting efficient, maintainable logic.',
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20',
        skills: [
            { name: 'Dart', icon: Code, detail: 'Advanced' },
            { name: 'C++', icon: Code, detail: 'Intermediate' },
            { name: 'HTML/CSS', icon: Layout, detail: 'Advanced' },
            { name: 'Java', icon: Coffee, detail: 'Intermediate' },
            { name: 'Python', icon: Terminal, detail: 'Beginner' },
            { name: 'Architecture', icon: Layers, detail: 'OOP & DSA' }
        ]
    },
    {
        title: 'Mobile & Web',
        icon: Smartphone,
        description: 'Building seamless cross-platform experiences.',
        color: 'text-green-400',
        bg: 'bg-green-500/10',
        border: 'border-green-500/20',
        skills: [
            { name: 'Flutter', icon: Smartphone, detail: 'iOS & Android' },
            { name: 'Firebase', icon: Zap, detail: 'Backend as a Service' },
            { name: 'UI/UX', icon: Layout, detail: 'Design Systems' },
            { name: 'Frontend', icon: Globe, detail: 'Responsive Web' },
            { name: 'Backend', icon: Server, detail: 'Node.js/API' }
        ]
    },
    {
        title: 'Machine Learning',
        icon: Cpu,
        description: 'Leveraging data for intelligent solutions.',
        color: 'text-orange-400',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/20',
        skills: [
            { name: 'Python', icon: Terminal, detail: 'Data Scripting' },
            { name: 'TensorFlow', icon: Cpu, detail: 'Model Dev' },
            { name: 'Data Proc', icon: Database, detail: 'Preprocessing' }
        ]
    },
    {
        title: 'Tools & Platforms',
        icon: Terminal,
        description: 'Powering the development workflow.',
        color: 'text-red-400',
        bg: 'bg-red-500/10',
        border: 'border-red-500/20',
        skills: [
            { name: 'VS Code', icon: Code, detail: 'IDE' },
            { name: 'Figma', icon: Layout, detail: 'Prototyping' },
            { name: 'Git', icon: GitBranch, detail: 'Version Control' },
            { name: 'Linux', icon: Terminal, detail: 'Shell/Bash' },
            { name: 'Jira', icon: Briefcase, detail: 'Agile Mgmt' }
        ]
    },
    {
        title: 'Soft Skills',
        icon: Users,
        description: 'Leadership and collaboration.',
        color: 'text-teal-400',
        bg: 'bg-teal-500/10',
        border: 'border-teal-500/20',
        skills: [
            { name: 'Leadership', icon: Users, detail: 'Team Mgmt' },
            { name: 'Communication', icon: Globe, detail: 'Verbal/Written' },
            { name: 'Problem Solving', icon: Shield, detail: 'Analytical' }
        ]
    }
];

export default function Skills() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const shouldReduceMotion = useReducedMotion();

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="skills" ref={containerRef} className="relative z-20 w-full min-h-[80vh] py-24 flex flex-col items-center justify-center bg-black/40 backdrop-blur-md overflow-hidden">

            {/* Background Decorations */}
            <motion.div
                style={{ y: shouldReduceMotion ? 0 : y }}
                className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-blue-900/5 pointer-events-none"
            />

            <div className="w-full max-w-[90rem] px-6 relative z-10 text-center mx-auto flex flex-col items-center">

                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20"
                >
                    <span className="text-sm font-mono text-purple-500 tracking-widest uppercase mb-4 block">Expertise</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Tools.</span>
                    </h2>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-[90rem]">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-0 md:p-4 flex flex-col text-left group"
                        >
                            {/* Category Header */}
                            <div className="flex items-start justify-between mb-8 pb-6 border-b border-white/5">
                                <div className="flex items-center gap-6">
                                    <div className={`p-4 rounded-2xl ${category.bg} ${category.color} border ${category.border} group-hover:scale-110 transition-transform duration-300`}>
                                        <category.icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                            {category.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{category.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Skills Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                                {category.skills.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 transition-colors cursor-default"
                                    >
                                        <skill.icon className={`w-5 h-5 ${category.color} opacity-90`} />
                                        <div className="flex flex-col">
                                            <span className="text-base font-medium text-gray-100">{skill.name}</span>
                                            {skill.detail && (
                                                <span className="text-xs text-gray-500">{skill.detail}</span>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
