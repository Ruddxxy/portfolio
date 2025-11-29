import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-950 via-black to-black text-white selection:bg-red-500 selection:text-white">
            <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

            <Navbar />

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>

            <footer className="py-8 text-center text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} Rudra Mohapatro, UNCONV.</p>
            </footer>
        </div>
    )
}

export default App
