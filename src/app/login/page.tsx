'use client'

import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({ email: '', password: '' })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Login attempt:', formData)
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-black px-4 pt-24 text-white">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-md"
            >
                {/* Header */}
                <motion.div
                    variants={itemVariants}
                    className="mb-12 text-center"
                >
                    <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">
                        Welcome Back
                    </h1>
                    <p className="text-lg text-gray-400">
                        Sign in to your RUNWAY account
                    </p>
                </motion.div>

                {/* Login Form */}
                <motion.form
                    variants={itemVariants}
                    onSubmit={handleSubmit}
                    className="mb-8 space-y-6"
                >
                    {/* Email Field */}
                    <motion.div variants={itemVariants} className="space-y-2">
                        <label className="text-sm tracking-widest text-gray-300 uppercase">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-500" />
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                className="w-full rounded-none border border-gray-700 bg-gray-900 py-3 pr-4 pl-12 text-white placeholder-gray-600 transition-colors focus:border-white focus:outline-none"
                            />
                        </div>
                    </motion.div>

                    {/* Password Field */}
                    <motion.div variants={itemVariants} className="space-y-2">
                        <label className="text-sm tracking-widest text-gray-300 uppercase">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-500" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    })
                                }
                                className="w-full rounded-none border border-gray-700 bg-gray-900 py-3 pr-12 pl-12 text-white placeholder-gray-600 transition-colors focus:border-white focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 transition-colors hover:text-white"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5" />
                                ) : (
                                    <Eye className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </motion.div>

                    {/* Remember & Forgot */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-between text-sm"
                    >
                        <label className="flex cursor-pointer items-center gap-2">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border border-gray-700 bg-gray-900 accent-white"
                            />
                            <span className="text-gray-400">Remember me</span>
                        </label>
                        <Link
                            href="#"
                            className="text-gray-400 transition-colors hover:text-white"
                        >
                            Forgot password?
                        </Link>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        variants={itemVariants}
                        type="submit"
                        className="w-full bg-white py-3 font-semibold tracking-widest text-black uppercase transition-colors hover:bg-gray-200"
                    >
                        Sign In
                    </motion.button>
                </motion.form>

                {/* Divider */}
                <motion.div
                    variants={itemVariants}
                    className="mb-8 flex items-center gap-4"
                >
                    <div className="h-px flex-1 bg-gray-700" />
                    <span className="text-sm text-gray-500">OR</span>
                    <div className="h-px flex-1 bg-gray-700" />
                </motion.div>

                {/* Social Login */}
                <motion.div variants={itemVariants} className="mb-8 space-y-3">
                    <button className="w-full border border-gray-700 py-3 text-sm font-semibold tracking-widest text-white uppercase transition-colors hover:bg-gray-900">
                        Continue with Google
                    </button>
                    <button className="w-full border border-gray-700 py-3 text-sm font-semibold tracking-widest text-white uppercase transition-colors hover:bg-gray-900">
                        Continue with Apple
                    </button>
                </motion.div>

                {/* Sign Up Link */}
                <motion.div variants={itemVariants} className="text-center">
                    <p className="text-gray-400">
                        Don&apos;t have an account?{' '}
                        <Link
                            href="/register"
                            className="font-semibold text-white hover:underline"
                        >
                            Create one
                        </Link>
                    </p>
                </motion.div>
            </motion.div>
        </div>
    )
}
