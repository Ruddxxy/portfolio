import { motion } from 'framer-motion'

/**
 * Projects Component
 * Displays featured projects in a Bento Grid layout.
 * Cards have glassmorphism effects and hover interactions.
 */
const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-4xl font-bold mb-4">Projects</h2>
                <p className="text-gray-400">A selection of my recent work.</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Main Featured Project */}
                <div className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:bg-white/5 transition-colors border border-white/5 hover:border-red-500/30">
                    <div className="absolute top-4 right-4 z-10">
                        <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors inline-flex">
                            <i className='bx bx-link-external text-xl'></i>
                        </a>
                    </div>

                    <div className="h-48 mb-8 rounded-2xl bg-gradient-to-br from-red-900/20 to-black border border-white/5 flex items-center justify-center overflow-hidden">
                        <i className='bx bx-server text-6xl text-red-500/50 group-hover:scale-110 transition-transform duration-500'></i>
                    </div>

                    <h3 className="text-3xl font-bold mb-2">Multi-Threaded HTTP Server</h3>
                    <p className="text-gray-300 mb-6">A multi-threaded HTTP server built with C++, featuring thread-safe request handling and efficient resource management.</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {['Bash', 'C++',].map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-sm border border-white/10">{tag}</span>
                        ))}
                    </div>
                </div>

                {/* Secondary Project */}
                <div className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:bg-white/5 transition-colors border border-white/5 hover:border-red-500/30">
                    <div className="absolute top-4 right-4 z-10">
                        <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors inline-flex">
                            <i className='bx bx-link-external text-xl'></i>
                        </a>
                    </div>

                    <div className="h-48 mb-8 rounded-2xl bg-gradient-to-br from-orange-900/20 to-black border border-white/5 flex items-center justify-center overflow-hidden">
                        <i className='bx bx-terminal text-6xl text-orange-500/50 group-hover:scale-110 transition-transform duration-500'></i>
                    </div>

                    <h3 className="text-3xl font-bold mb-2">Akira</h3>
                    <p className="text-gray-300 mb-6">A modular CLI & GUI tool to help beginners and power users manage command-line aliases, auto-complete suggestions, and plugins.</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {['Bash', 'Node.js', 'Docker'].map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-sm border border-white/10">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
