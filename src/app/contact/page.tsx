'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        })
    }

    return (
        <div className="min-h-screen bg-black text-white pt-20 pb-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
                        Get in Touch
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
                        Have a question or want to collaborate? We'd love to hear from you.
                        Reach out to our team and we'll respond as soon as possible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12">
                    {/* Contact Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-10 md:space-y-12"
                    >
                        {/* Email */}
                        <motion.div variants={itemVariants} className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-200" />
                                <h3 className="text-lg sm:text-xl font-semibold">Email</h3>
                            </div>
                            <a
                                href="mailto:pranjalworkon@gmail.com"
                                className="text-gray-400 hover:text-white transition-colors block break-words"
                            >
                                pranjalworkon@gmail.com
                            </a>
                        </motion.div>

                        {/* Phone */}
                        <motion.div variants={itemVariants} className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gray-200" />
                                <h3 className="text-lg sm:text-xl font-semibold">Phone</h3>
                            </div>
                            <a
                                href="tel:+39123456789"
                                className="text-gray-400 hover:text-white transition-colors block"
                            >
                                +91 (123) 456-789
                            </a>
                            <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm IST</p>
                        </motion.div>

                        {/* Address */}
                        <motion.div variants={itemVariants} className="space-y-3">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-200" />
                                <h3 className="text-lg sm:text-xl font-semibold">Address</h3>
                            </div>
                            <div className="text-gray-400 space-y-1">
                                <p>Runway Headquarters</p>
                                <p>New Delhi</p>
                                <p>India</p>
                            </div>
                        </motion.div>

                        {/* Social Media */}
                        <motion.div variants={itemVariants} className="space-y-3 pt-4 border-t border-gray-800">
                            <h3 className="text-lg sm:text-xl font-semibold">Follow Us</h3>
                            <div className="flex flex-wrap gap-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Instagram
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Facebook
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Twitter
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        onSubmit={handleSubmit}
                        className="md:col-span-2 space-y-6"
                    >
                        {/* Name Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <motion.div variants={itemVariants} className="space-y-2 min-w-0">
                                <label className="text-xs sm:text-sm uppercase tracking-widest text-gray-300">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, firstName: e.target.value })
                                    }
                                    className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-3 sm:px-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
                                    placeholder="Pranjal"
                                    required
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-2 min-w-0">
                                <label className="text-xs sm:text-sm uppercase tracking-widest text-gray-300">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, lastName: e.target.value })
                                    }
                                    className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-3 sm:px-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
                                    placeholder="Jain"
                                    required
                                />
                            </motion.div>
                        </div>

                        {/* Email & Phone Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <motion.div variants={itemVariants} className="space-y-2 min-w-0">
                                <label className="text-xs sm:text-sm uppercase tracking-widest text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-3 sm:px-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
                                    placeholder="pranjal@gmail.com"
                                    required
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-2 min-w-0">
                                <label className="text-xs sm:text-sm uppercase tracking-widest text-gray-300">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                    className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-3 sm:px-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
                                    placeholder="+39 123 456 789"
                                />
                            </motion.div>
                        </div>

                        {/* Subject */}
                        <motion.div variants={itemVariants} className="space-y-2">
                            <label className="text-xs sm:text-sm uppercase tracking-widest text-gray-300">
                                Subject
                            </label>
                            <input
                                type="text"
                                value={formData.subject}
                                onChange={(e) =>
                                    setFormData({ ...formData, subject: e.target.value })
                                }
                                className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-3 sm:px-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
                                placeholder="How can we help?"
                                required
                            />
                        </motion.div>

                        {/* Message */}
                        <motion.div variants={itemVariants} className="space-y-2">
                            <label className="text-xs sm:text-sm uppercase tracking-widest text-gray-300">
                                Message
                            </label>
                            <textarea
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                rows={6}
                                className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-3 sm:px-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors resize-none"
                                placeholder="Tell us more about your inquiry..."
                                required
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            variants={itemVariants}
                            type="submit"
                            className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-2 group rounded-md text-sm sm:text-base"
                        >
                            <span>Send Message</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        {/* Info Text */}
                        <motion.p variants={itemVariants} className="text-sm text-gray-500 text-center sm:text-left">
                            We'll get back to you within 24 hours during business days.
                        </motion.p>
                    </motion.form>
                </div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="border-t border-gray-800 pt-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {[
                            {
                                q: 'How long does shipping take?',
                                a: 'Standard shipping takes 5-7 business days. Express shipping available.',
                            },
                            {
                                q: 'What is your return policy?',
                                a: 'Items can be returned within 30 days of purchase in original condition.',
                            },
                            {
                                q: 'Do you offer international shipping?',
                                a: 'Yes, we ship to over 150 countries worldwide.',
                            },
                            {
                                q: 'Can I track my order?',
                                a: 'Yes, tracking information is sent via email once your order ships.',
                            },
                        ].map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.15 + idx * 0.05 }}
                                className="space-y-2"
                            >
                                <h3 className="font-semibold text-base sm:text-lg">{faq.q}</h3>
                                <p className="text-gray-400 text-sm sm:text-base">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
