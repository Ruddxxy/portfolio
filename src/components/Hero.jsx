import { motion } from 'framer-motion'
import profileImg from '../assets/profile.png'

/**
 * Hero Component
 * Displays the main introduction, availability status, and certificate cards.
 * Uses Framer Motion for entrance animations.
 */
const Hero = () => {
    return (
        <section className="pt-40 min-h-screen flex flex-col justify-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-red-300 text-sm font-medium">
                        <i className='bx bxs-hot text-yellow-400 text-lg'></i>
                        Available for freelancing
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        Cybersecurity Researcher <br />
                        <span className="text-gradient">& Full Stack Developer</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                        Computer Science undergraduate at NIT Rourkela. Architecting secure digital infrastructures and robust web applications using Python, C, and Modern Web Stacks.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors"
                        >
                            Explore My Work
                            <i className='bx bx-right-arrow-alt text-xl'></i>
                        </a>
                    </div>
                </motion.div>

                {/* Right Column */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Profile Card */}
                    <div className="glass-card p-8 rounded-3xl relative z-10">
                        <div className="flex items-start justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-0.5">
                                    <div className="w-full h-full bg-black rounded-2xl overflow-hidden">
                                        <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Rudra Mohapatro</h3>
                                    <p className="text-gray-400 text-sm">Rourkela, Odisha</p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                {[
                                    { icon: 'bx bxl-github', href: 'https://github.com/Ruddxxy' },
                                    { icon: 'bx bxl-linkedin', href: 'https://www.linkedin.com/in/rudra2/' },
                                    { icon: 'bx bx-envelope', href: 'mailto:mahapatro16@gmail.com' }
                                ].map((item, i) => (
                                    <a key={i} href={item.href} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                        <i className={`${item.icon} text-gray-300 text-xl`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Resume and CTF Stats */}
                        <div className="space-y-4 mt-6">
                            <a href="https://drive.google.com/file/d/1iONYJ0UzZsJaVpHXRzOxcQX0ax8gEPNP/view?usp=drive_link" className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 transition-all group">
                                <i className='bx bx-file-blank text-red-400 text-xl group-hover:scale-110 transition-transform'></i>
                                <span className="font-medium">Click me for Resume</span>
                            </a>

                            <div className="grid grid-cols-2 gap-4">
                                <a href="https://app.hackthebox.com/profile/2280861" className="p-3 rounded-xl bg-white/5 hover:bg-green-900/20 border border-white/5 flex items-center gap-3 transition-colors group">
                                    <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
                                        <i className='bx bx-cube text-xl group-hover:scale-110 transition-transform'></i>
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm">HackTheBox</div>
                                        <div className="text-xs text-gray-500">Profile</div>
                                    </div>
                                </a>
                                <a href="https://tryhackme.com/p/Ruddyignite23" className="p-3 rounded-xl bg-white/5 hover:bg-red-900/20 border border-white/5 flex items-center gap-3 transition-colors group">
                                    <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                                        <i className='bx bx-target-lock text-xl group-hover:scale-110 transition-transform'></i>
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm">TryHackMe</div>
                                        <div className="text-xs text-gray-500">Profile</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-600/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl -z-10"></div>
                </motion.div>
            </div>

            {/* Bottom Row - Latest Blogs */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-24"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
                    <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Latest Writing</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Understanding Buffer Overflows",
                            desc: "A deep dive into memory corruption vulnerabilities.",
                            link: "#",
                            icon: "bx bx-code-block"
                        },
                        {
                            title: "Modern Web Security",
                            desc: "Best practices for securing React applications.",
                            link: "#",
                            icon: "bx bx-shield-quarter"
                        },
                        {
                            title: "Ethical Hacking 101",
                            desc: "Getting started with CTFs and penetration testing.",
                            link: "#",
                            icon: "bx bx-terminal"
                        },
                    ].map((blog, i) => (
                        <a
                            key={i}
                            href={blog.link}
                            className="glass-card p-6 rounded-2xl group hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-red-500/30"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 rounded-xl bg-red-500/10 text-red-400 group-hover:scale-110 transition-transform">
                                    <i className={`${blog.icon} text-2xl`}></i>
                                </div>
                                <i className='bx bx-link-external text-gray-500 group-hover:text-white transition-colors'></i>
                            </div>
                            <h4 className="font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">{blog.title}</h4>
                            <p className="text-sm text-gray-400">{blog.desc}</p>
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
