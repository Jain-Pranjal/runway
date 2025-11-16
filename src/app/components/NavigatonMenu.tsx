'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { TextRoll } from './TextRoll'


interface NavLinkProps {
    href: string
    text: string
    onClick?: () => void
}

export default function NavigationMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const scrollYRef = useRef<number>(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            
            // Show navbar when scrolling up, hide when scrolling down
            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
            
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    // Lock body scroll when menu is open and restore position on close
    useEffect(() => {
        if (isOpen) {
            scrollYRef.current = window.scrollY
            document.body.style.position = 'fixed'
            document.body.style.top = `-${scrollYRef.current}px`
            document.body.style.left = '0'
            document.body.style.right = '0'
            document.body.style.overflow = 'hidden'
            document.body.style.width = '100%'
        } else {
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.left = ''
            document.body.style.right = ''
            document.body.style.overflow = ''
            document.body.style.width = ''
            window.scrollTo(0, scrollYRef.current || 0)
        }

        return () => {
            // Cleanup in case component unmounts while menu is open
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.left = ''
            document.body.style.right = ''
            document.body.style.overflow = ''
            document.body.style.width = ''
        }
    }, [isOpen])


    const navLinks = [
        { name: 'Fall Winter 25-26', href: '#' },
        { name: 'Outlet', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Growth', href: '#' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <>
            <motion.nav
                initial={{ y: 0 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 right-0 z-50 bg-black text-white"
                style={{ display: isOpen ? 'none' : 'block' }}
            >
                <div className="flex items-center justify-between px-4 py-4 md:px-8">
                    {/* Left Section - Hamburger & Logo */}
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 hover:opacity-80 transition-opacity"
                            aria-label="Toggle menu"
                        >
                            <Menu size={24} />
                        </button>
                        <Link href="/" className="font-bold text-base md:text-xl">
                            RUNWAY
                        </Link>
                    </div>

                    {/* Middle Section - Campaign Info */}
                    <div className="hidden md:flex items-center gap-6 text-xs md:text-sm">
                        <Link href="#">
                        <span className='hover:opacity-80 transition-opacity'>Fall Winter 25-26</span>
                        </Link>
                        <Link href="#">
                        <span className='hover:opacity-80 transition-opacity'>Outlet</span>
                        </Link>
                    </div>

                    {/* Right Section - User Links */}
                    <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
                        <Link href="/login" className="hover:opacity-80 transition-opacity">
                            Login
                        </Link>
                        <Link href="/register" className="hover:opacity-80 transition-opacity">
                            Register
                        </Link>
                        <Link href="/bag" className="hover:opacity-80 transition-opacity">
                            Bag
                        </Link>
                    </div>
                </div>
            </motion.nav>


            {/* Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 bg-black text-white pt-5 overflow-y-auto"
                    >
                        {/* Menu Header */}
                        <div className="flex items-center justify-between px-4 md:px-8 pb-8 border-b border-gray-800">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:opacity-80 transition-opacity"
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </button>
                                <Link href="/" className="font-bold text-base md:text-xl">
                                    RUNWAY
                                </Link>
                                <div className="hidden md:flex items-center gap-6 text-xs md:text-sm ml-6">
                                    <Link href="#">
                                    <span>Fall Winter 25-26</span>
                                    </Link>
                                    <Link href="#">
                                    <span>Outlet</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Language Selector */}
                            <div className="flex items-center gap-4 text-xs md:text-sm">
                                <button className="hover:opacity-80 transition-opacity">
                                    English
                                </button>
                                <button className="hover:opacity-80 transition-opacity">
                                    Italiano
                                </button>
                            </div>
                        </div>


                        <div className="px-4 md:px-8 py-12">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                                {/* Navigation Links */}
                                <div className="lg:col-span-2 space-y-6 md:space-y-8">
                                    {navLinks.map((link) => (
                                        <NavLink
                                            key={link.name}
                                            href={link.href}
                                            text={link.name}
                                            onClick={() => setIsOpen(false)}
                                        />
                                    ))}
                                </div>

                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}



function NavLink({ href, text, onClick }: NavLinkProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block hover:opacity-70 transition-opacity"
        >
            <TextRoll className="text-5xl md:text-9xl font-bold leading-tight">
                {text}
            </TextRoll>
        </Link>
    )
}
