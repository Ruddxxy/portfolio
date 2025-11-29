import { motion } from 'framer-motion'

/**
 * Navbar Component
 * Fixed navigation bar with glassmorphism effect.
 * Animates in from the top on load.
 */
const Navbar = () => {
    const navLinks = [
        { name: 'Home', icon: 'bx bx-home-alt', href: '#' },
        { name: 'Work', icon: 'bx bx-briefcase-alt', href: '#projects' },
        { name: 'Contact', icon: 'bx bx-envelope', href: '#contact' },
    ]

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4 rounded-2xl glass-card">
                <a href="#" className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform">
                    <span className="text-gradient">&gt;_ bachira.dev</span>
                </a>

                <ul className="flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group relative"
                            >
                                <i className={`${link.icon} text-xl group-hover:text-red-400 transition-colors`}></i>
                                <span className="font-medium">{link.name}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    )
}

export default Navbar
