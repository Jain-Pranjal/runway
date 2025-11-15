'use client'

import { useEffect, useState } from 'react'

const ScrollToTop: React.FC = () => {
    const [isTop, setIsTop] = useState(true)
    const [right, setRight] = useState(28)

    useEffect(() => {
        const calcRight = () => {
            if (typeof window === 'undefined') return
            if (window.innerWidth > 1400) {
                const r = (window.innerWidth - 1400) / 2 + 40
                setRight(r)
            } else {
                setRight(28)
            }
        }

        const handleScroll = () => {
            if (typeof window === 'undefined') return
            setIsTop(window.scrollY <= 100)
        }

        calcRight()
        handleScroll()

        window.addEventListener('resize', calcRight)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('resize', calcRight)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <div
                style={{ right: `${right}px` }}
                className={`fixed bottom-28 z-50 ${isTop ? 'hidden' : 'block'}`}
            >
                <button
                    onClick={() => {
                        if (typeof window === 'undefined') return
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    aria-label="Scroll to top"
                    className="relative flex h-16 w-16 items-center justify-center rounded-full p-0 shadow-xl focus:outline-none bg-gray-800 hover:opacity-95"
                >
                    {/* Rotating ring */}
                    <svg
                        viewBox="0 0 100 100"
                        className="absolute inset-0 h-full w-full origin-center opacity-95"
                    >
                        <defs>
                            <linearGradient id="ringGradient" x1="0" x2="1">
                                <stop offset="0%" stopColor="#fff" stopOpacity="0.18" />
                                <stop offset="60%" stopColor="#fff" stopOpacity="0.06" />
                                <stop offset="100%" stopColor="#fff" stopOpacity="0.12" />
                            </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="42" stroke="url(#ringGradient)" strokeWidth="3" fill="transparent" strokeLinecap="round" />
                        {/* inner hexagon-ish stroke (subtle) */}
                        <polygon
                            points="50,14 78,30 78,70 50,86 22,70 22,30"
                            fill="transparent"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="2"
                        />
                    </svg>

                    {/* Text stacked like reference */}
                    <div className="relative z-10 flex -translate-y-[2px] flex-col items-center justify-center text-[10px] leading-[10px] tracking-wider text-white">
                        <span className="font-semibold">SCROLL</span>
                        <span className="font-semibold">TOP</span>
                    </div>

                    {/* subtle hover pulse */}
                    <span
                        className="absolute -inset-1 rounded-full opacity-0 transition-opacity duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.28)]"
                    />
                </button>
            </div>

            {/* scoped styles for rotation and hover */}
            <style jsx>{`
                button:hover svg {
                    animation: spin 9s linear infinite;
                }
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </>
    )
}

export default ScrollToTop
