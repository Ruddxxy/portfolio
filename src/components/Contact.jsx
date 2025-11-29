import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Netlify requires data to be encoded as x-www-form-urlencoded
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": "contact", // Must match the name in index.html
                    ...formData
                })
            });

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20">
            <div className="grid lg:grid-cols-2 gap-16">
                {/* Left Column - Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
                    <p className="text-gray-400 mb-8">
                        Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.
                    </p>

                    {status === 'success' ? (
                        <div className="bg-green-500/10 border border-green-500 text-green-500 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                            <p>Thanks for reaching out. I'll get back to you shortly.</p>
                            <button
                                onClick={() => setStatus('')}
                                className="mt-4 text-sm underline hover:text-green-400"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Hidden input for Netlify bot-field (spam protection) */}
                            <input type="hidden" name="form-name" value="contact" />

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Message</label>
                                <textarea
                                    name="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none"
                                    placeholder="Message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                <i className='bx bx-send text-xl'></i>
                            </button>

                            {status === 'error' && (
                                <p className="text-red-500 text-center">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    )}
                </motion.div>

                {/* Right Column - Info */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6 lg:pt-20"
                >
                    {[
                        { icon: 'bx bx-envelope', title: "Email", value: "mahapatro16@gmail.com" },
                        { icon: 'bx bx-phone', title: "Phone", value: "+91 72055 69669" },
                        { icon: 'bx bx-map', title: "Location", value: "Rourkela, Odisha" },
                    ].map((item, i) => (
                        <div key={i} className="glass-card p-6 rounded-2xl flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-red-400">
                                <i className={`${item.icon} text-2xl`}></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">{item.title}</p>
                                <p className="text-lg font-medium">{item.value}</p>
                            </div>
                        </div>
                    ))}

                    <div className="glass-card p-8 rounded-3xl mt-8 bg-gradient-to-br from-red-900/20 to-black/40">
                        <p className="text-gray-400 italic">
                            "If it exists, it can be hacked."
                        </p>
                        <p className="text-right mt-4 text-sm font-bold text-red-400">- Unknown</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact