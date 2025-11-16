'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

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
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 pt-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-gray-400 text-lg">Sign in to your RUNWAY account</p>
        </motion.div>

        {/* Login Form */}
        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="space-y-6 mb-8"
        >
          {/* Email Field */}
          <motion.div variants={itemVariants} className="space-y-2">
            <label className="text-sm uppercase tracking-widest text-gray-300">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-gray-900 border border-gray-700 rounded-none py-3 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </motion.div>

          {/* Password Field */}
          <motion.div variants={itemVariants} className="space-y-2">
            <label className="text-sm uppercase tracking-widest text-gray-300">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full bg-gray-900 border border-gray-700 rounded-none py-3 pl-12 pr-12 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Remember & Forgot */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between text-sm"
          >
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 bg-gray-900 border border-gray-700 rounded accent-white"
              />
              <span className="text-gray-400">Remember me</span>
            </label>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Forgot password?
            </Link>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            variants={itemVariants}
            type="submit"
            className="w-full bg-white text-black py-3 font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors"
          >
            Sign In
          </motion.button>
        </motion.form>

        {/* Divider */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gray-700" />
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-700" />
        </motion.div>

        {/* Social Login */}
        <motion.div variants={itemVariants} className="space-y-3 mb-8">
          <button className="w-full border border-gray-700 py-3 text-white hover:bg-gray-900 transition-colors uppercase tracking-widest text-sm font-semibold">
            Continue with Google
          </button>
          <button className="w-full border border-gray-700 py-3 text-white hover:bg-gray-900 transition-colors uppercase tracking-widest text-sm font-semibold">
            Continue with Apple
          </button>
        </motion.div>

        {/* Sign Up Link */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-gray-400">
            Don't have an account?{' '}
            <Link href="/register" className="text-white font-semibold hover:underline">
              Create one
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
