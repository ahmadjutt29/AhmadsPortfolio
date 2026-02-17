'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Binary, Cpu, Cloud, Smartphone } from 'lucide-react';
import { useRef } from 'react';

const experiences = [
    {
        role: 'DevOps Trainee',
        company: 'Power Information Technology Company (PITC)',
        period: 'Dec 2025 – Present',
        project: 'e-Ops — National Electric Utility Operations Platform',
        icon: Cloud,
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        points: [
            'Implementing CI/CD pipelines with GitHub Actions for ReactJS frontend and .NET backend on on-premise servers.',
            'Docker containerization for enterprise-scale operations across DISCOs in Pakistan.',
            'Automating build, test, and deployment workflows for production reliability.',
        ],
        tech: ['CI/CD', 'GitHub Actions', 'Docker', 'ReactJS', '.NET', 'On-Premise'],
    },
    {
        role: 'DevOps Intern',
        company: 'Netsol Pakistan',
        period: 'Aug 2025 – Sep 2025',
        project: 'Cloud Infrastructure & DevOps Automation',
        icon: Binary,
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20',
        points: [
            'Designed secure AWS VPC architectures with public/private subnets, NAT Gateways, and Security Groups.',
            'Automated deployments of Dockerized microservices on ECS Fargate.',
            'Managed ECR container images and implemented CI/CD pipelines with GitHub Actions.',
            'Orchestrated containers using Kubernetes with Minikube and AWS EKS.',
        ],
        tech: ['AWS', 'ECS Fargate', 'ECR', 'EKS', 'GitHub Actions', 'Kubernetes', 'Docker'],
    },
    {
        role: 'Software Development Intern',
        company: 'Synergy Elektrik (Pvt.) Ltd.',
        period: 'May 2025 – Jun 2025',
        project: 'Transformer Testing Reports System',
        icon: Cpu,
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/20',
        points: [
            'Contributed to custom application for transformer testing reports with data input forms.',
            'Automated test parameter storage and digital report generation.',
        ],
        tech: ['Automation', 'Data Management', 'Reporting'],
    },
    {
        role: 'Flutter & Software Management',
        company: 'Thehash.io',
        period: 'Mar 2025 – May 2025',
        project: 'Cross-Platform Mobile Applications',
        icon: Smartphone,
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/20',
        points: [
            'Built cross-platform Flutter apps with responsive, modern UI/UX.',
            'Managed version control with Git, agile sprints, and release deployments.',
        ],
        tech: ['Flutter', 'Dart', 'Agile', 'Git', 'UI/UX'],
    },
    {
        role: 'Flutter Developer Intern',
        company: 'Apprays',
        period: 'Sep 2024 – Dec 2024',
        project: 'Mobile App Development',
        icon: Briefcase,
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        points: [
            'Developed cross-platform mobile apps using Flutter and Dart.',
            'Integrated Firebase for backend, authentication, and real-time data synchronization.',
            'Enhanced UI/UX for user engagement and retention.',
        ],
        tech: ['Flutter', 'Firebase', 'Dart', 'Mobile Dev'],
    },
];

export default function Experience() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 40]);
    const shouldReduceMotion = useReducedMotion();

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="experience" ref={containerRef} className="relative z-20 w-full py-32 flex flex-col items-center bg-[#121212]/30 backdrop-blur-md overflow-hidden">

            {/* Background Glow */}
            <motion.div
                style={{ y: shouldReduceMotion ? 0 : y }}
                className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-blue-900/5 pointer-events-none"
            />

            <div className="w-full max-w-7xl px-6 relative z-10 mx-auto">

                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-32 text-center"
                >
                    <span className="text-sm font-mono text-purple-500 tracking-widest uppercase mb-4 block">Professional Path</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                        Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Experience.</span>
                    </h2>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative max-w-6xl mx-auto">

                    {/* Main Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/30 to-transparent -translate-x-1/2 hidden md:block z-0" />
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/30 to-transparent -translate-x-1/2 md:hidden z-0" />

                    <div className="space-y-40">
                        {experiences.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Node (Icon) - Centered Exactly on the line */}
                                <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`p-4 md:p-5 rounded-3xl bg-[#121212] border ${job.border} ${job.color} shadow-[0_0_30px_rgba(168,85,247,0.2)] ring-[16px] ring-[#121212]`}
                                    >
                                        <job.icon className="w-8 h-8 md:w-10 md:h-10" />
                                    </motion.div>
                                </div>

                                {/* Content Card - Giving explicit width and gutter */}
                                <div className={`w-full md:w-[45%] pl-24 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="group relative transition-all duration-300">

                                        {/* Period Overlay (Mobile) */}
                                        <div className="flex items-center gap-2 mb-6 text-xs font-mono text-gray-500 md:hidden">
                                            <Calendar className="w-3 h-3" />
                                            {job.period}
                                        </div>

                                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-8`}>
                                            <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter group-hover:text-purple-400 transition-colors leading-tight">
                                                {job.role}
                                            </h3>
                                            <p className="text-lg md:text-xl font-bold text-gray-400 mt-3 uppercase tracking-[0.25em]">
                                                {job.company}
                                            </p>
                                        </div>

                                        <div className={`mb-10 ${index % 2 === 0 ? 'md:border-r-4 md:border-l-0 pr-6' : 'border-l-4 pl-6'} border-purple-500/30 py-2`}>
                                            <p className="text-lg md:text-xl text-purple-300/90 font-medium italic leading-relaxed">
                                                {job.project}
                                            </p>
                                        </div>

                                        <ul className={`space-y-6 mb-12 flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                                            {job.points.map((point, j) => (
                                                <li key={j} className={`flex items-start gap-4 text-gray-400 text-base md:text-lg leading-relaxed group/item ${index % 2 === 0 ? 'md:flex-row-reverse text-right' : ''}`}>
                                                    <div className={`mt-3 w-2 h-2 rounded-full bg-purple-500 shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover/item:scale-150 transition-transform`} />
                                                    <span className="group-hover/item:text-gray-100 transition-colors">{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech Stack */}
                                        <div className={`flex flex-wrap gap-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            {job.tech.map((t, j) => (
                                                <span
                                                    key={j}
                                                    className="text-[10px] md:text-xs font-black tracking-widest text-gray-500 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-300 transition-all duration-300"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Date Box - Symmetrical Width */}
                                <div className={`hidden md:flex md:w-[45%] ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                    <div className="flex flex-col items-center gap-4 group">
                                        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 px-10 py-5 rounded-[2rem] shadow-2xl transition-all duration-500 group-hover:border-purple-500/50 group-hover:bg-white/10 group-hover:-translate-y-2">
                                            <Calendar className="w-6 h-6 text-purple-500 group-hover:rotate-12 transition-transform" />
                                            <span className="text-xl font-mono text-gray-200 font-bold tracking-tight">{job.period}</span>
                                        </div>
                                        <div className="w-1.5 h-12 bg-gradient-to-b from-purple-500/30 to-transparent rounded-full opacity-30 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
