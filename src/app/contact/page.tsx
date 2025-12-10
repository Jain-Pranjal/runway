'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'

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
        <div className="min-h-screen bg-black pt-20 pb-12 text-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                        Get in Touch
                    </h1>
                    <p className="max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
                        Have a question or want to collaborate? We&apos;d love
                        to hear from you. Reach out to our team and we&apos;ll
                        respond as soon as possible.
                    </p>
                </motion.div>

                <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
                    {/* Contact Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-10 md:space-y-12"
                    >
                        {/* Email */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-3"
                        >
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-gray-200 sm:h-6 sm:w-6" />
                                <h3 className="text-lg font-semibold sm:text-xl">
                                    Email
                                </h3>
                            </div>
                            <a
                                href="mailto:pranjalworkon@gmail.com"
                                className="block break-words text-gray-400 transition-colors hover:text-white"
                            >
                                pranjalworkon@gmail.com
                            </a>
                        </motion.div>

                        {/* Phone */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-3"
                        >
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-gray-200 sm:h-6 sm:w-6" />
                                <h3 className="text-lg font-semibold sm:text-xl">
                                    Phone
                                </h3>
                            </div>
                            <a
                                href="tel:+39123456789"
                                className="block text-gray-400 transition-colors hover:text-white"
                            >
                                +91 (123) 456-789
                            </a>
                            <p className="text-sm text-gray-500">
                                Mon-Fri, 9am-6pm IST
                            </p>
                        </motion.div>

                        {/* Address */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-3"
                        >
                            <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-gray-200 sm:h-6 sm:w-6" />
                                <h3 className="text-lg font-semibold sm:text-xl">
                                    Address
                                </h3>
                            </div>
                            <div className="space-y-1 text-gray-400">
                                <p>Runway Headquarters</p>
                                <p>New Delhi</p>
                                <p>India</p>
                            </div>
                        </motion.div>

                        {/* Social Media */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-3 border-t border-gray-800 pt-4"
                        >
                            <h3 className="text-lg font-semibold sm:text-xl">
                                Follow Us
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 transition-colors hover:text-white"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 transition-colors hover:text-white"
                                >
                                    Facebook
                                </a>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 transition-colors hover:text-white"
                                >
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
                        className="space-y-6 md:col-span-2"
                    >
                        {/* Name Row */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                            <motion.div
                                variants={itemVariants}
                                className="min-w-0 space-y-2"
                            >
                                <label className="text-xs tracking-widest text-gray-300 uppercase sm:text-sm">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            firstName: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-3 text-white placeholder-gray-600 transition-colors focus:ring-2 focus:ring-white/20 focus:outline-none sm:px-4"
                                    placeholder="Pranjal"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="min-w-0 space-y-2"
                            >
                                <label className="text-xs tracking-widest text-gray-300 uppercase sm:text-sm">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            lastName: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-3 text-white placeholder-gray-600 transition-colors focus:ring-2 focus:ring-white/20 focus:outline-none sm:px-4"
                                    placeholder="Jain"
                                    required
                                />
                            </motion.div>
                        </div>

                        {/* Email & Phone Row */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                            <motion.div
                                variants={itemVariants}
                                className="min-w-0 space-y-2"
                            >
                                <label className="text-xs tracking-widest text-gray-300 uppercase sm:text-sm">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-3 text-white placeholder-gray-600 transition-colors focus:ring-2 focus:ring-white/20 focus:outline-none sm:px-4"
                                    placeholder="pranjal@gmail.com"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="min-w-0 space-y-2"
                            >
                                <label className="text-xs tracking-widest text-gray-300 uppercase sm:text-sm">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            phone: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-3 text-white placeholder-gray-600 transition-colors focus:ring-2 focus:ring-white/20 focus:outline-none sm:px-4"
                                    placeholder="+39 123 456 789"
                                />
                            </motion.div>
                        </div>

                        {/* Subject */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-2"
                        >
                            <label className="text-xs tracking-widest text-gray-300 uppercase sm:text-sm">
                                Subject
                            </label>
                            <input
                                type="text"
                                value={formData.subject}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        subject: e.target.value,
                                    })
                                }
                                className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-3 text-white placeholder-gray-600 transition-colors focus:ring-2 focus:ring-white/20 focus:outline-none sm:px-4"
                                placeholder="How can we help?"
                                required
                            />
                        </motion.div>

                        {/* Message */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-2"
                        >
                            <label className="text-xs tracking-widest text-gray-300 uppercase sm:text-sm">
                                Message
                            </label>
                            <textarea
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                                rows={6}
                                className="w-full resize-none rounded-md border border-gray-700 bg-gray-900 px-3 py-3 text-white placeholder-gray-600 transition-colors focus:ring-2 focus:ring-white/20 focus:outline-none sm:px-4"
                                placeholder="Tell us more about your inquiry..."
                                required
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            variants={itemVariants}
                            type="submit"
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold tracking-widest text-black uppercase transition-colors hover:bg-gray-200 sm:w-auto sm:px-6 sm:py-3 sm:text-base"
                        >
                            <span>Send Message</span>
                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </motion.button>

                        {/* Info Text */}
                        <motion.p
                            variants={itemVariants}
                            className="text-center text-sm text-gray-500 sm:text-left"
                        >
                            We&apos;ll get back to you within 24 hours during
                            business days.
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
                    <h2 className="mb-8 text-2xl font-bold sm:text-3xl md:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
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
                                transition={{
                                    duration: 0.5,
                                    delay: 0.15 + idx * 0.05,
                                }}
                                className="space-y-2"
                            >
                                <h3 className="text-base font-semibold sm:text-lg">
                                    {faq.q}
                                </h3>
                                <p className="text-sm text-gray-400 sm:text-base">
                                    {faq.a}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
