import { motion } from 'framer-motion'

/**
 * About Component
 * Displays bio, key features, and a vertical marquee of skills.
 */
const About = () => {
    // Skills list
    const skills = [
        { name: 'Python', icon: 'bx bxl-python' },
        { name: 'JavaScript', icon: 'bx bxl-javascript' },
        { name: 'C', icon: 'bx bx-code-alt' },
        { name: 'C++', icon: 'bx bxl-c-plus-plus' },
        { name: 'Bash', icon: 'bx bx-terminal' },
    ]

    return (
        <section id="about" className="py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                        <span className="w-12 h-1 bg-red-500 rounded-full"></span>
                        About Me
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        I am a Computer Science student specializing in the intersection of Cybersecurity and Artificial Intelligence. My work focuses on building resilient systems, from multi-threaded proxy servers to hybrid machine learning models for threat detection. Currently pursuing final year, I combine technical rigor with leadership to solve complex engineering problems.
                    </p>

                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { icon: 'bx bx-shield-quarter', label: "Secure Systems" },
                            { icon: 'bx bx-bug', label: "Bugs Focus" },
                            { icon: 'bx bx-tachometer', label: "Performance Focus" },
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-4 rounded-xl text-center space-y-2">
                                <div className="mx-auto w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                                    <i className={`${item.icon} text-xl`}></i>
                                </div>
                                <p className="text-sm font-medium">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column - Skills Vertical Marquee */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="glass-card p-8 rounded-3xl overflow-hidden relative h-[500px]">
                        <h3 className="text-xl font-bold mb-6 text-center">Core Technologies</h3>

                        <div className="relative h-full overflow-hidden mask-gradient-y">
                            <div className="absolute inset-x-0 animate-marquee-vertical flex flex-col gap-4">
                                {[...skills, ...skills].map((skill, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                        <i className={`${skill.icon} text-3xl text-red-400`}></i>
                                        <span className="font-bold text-lg">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Gradient Overlays for smooth fade */}
                        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-red-950/90 to-transparent z-10"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-red-950/90 to-transparent z-10"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
