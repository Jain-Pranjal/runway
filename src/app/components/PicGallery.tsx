"use client"

import { motion, MotionValue, useScroll, useTransform } from "framer-motion"
import Lenis from "lenis"
import CurvedLoop from "./CurvedLoop"
import { useEffect, useRef, useState } from "react"

import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerPlayButton,
  VideoPlayerTimeRange,
  VideoPlayerMuteButton,
} from "@/app/components/VideoPlayer"

const RunwayVideo = () => {
  return (
    <VideoPlayer className="w-full h-full">
      <VideoPlayerContent
        src="/runwayVideo.mp4"
        autoPlay
        loop
        muted
        slot="media"
        className="w-full object-cover"
      />
      <VideoPlayerControlBar className="absolute bottom-0 left-1/2 flex w-full max-w-7xl -translate-x-1/2 items-center justify-center px-5">
        <VideoPlayerPlayButton className="h-4 bg-transparent" />
        <VideoPlayerTimeRange className="bg-transparent" />
        <VideoPlayerMuteButton className="size-4 bg-transparent" />
      </VideoPlayerControlBar>
    </VideoPlayer>
  )
}

const images = [
  "dress/dress1.jpg",
  "dress/dress2.jpg",
  "dress/dress3.jpg",
  "dress/dress4.jpg",
  "dress/dress5.jpg",
  "dress/dress6.jpg",
  "dress/dress7.jpg",
  "dress/dress8.jpg",
  "dress/dress9.jpg",
  "dress/dress10.jpg",
  "dress/dress11.jpg",
  "dress/dress12.jpg",
]

const Skiper30 = () => {
  const gallery = useRef<HTMLDivElement>(null)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  })

  const { height } = dimension
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf)
    resize()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <main className="w-full bg-[#eee] text-black">
      <div className="relative flex h-screen items-center justify-center gap-2 overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          tabIndex={-1}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
          controls={false}
        />

        {/* Optional dark overlay to improve text legibility */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* Scrolling hero text overlay (imposed on the video) */}
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-auto">
          <div className="w-full px-6">
            <CurvedLoop
              marqueeText="Creative / Style / Runway / Fashion / Design / Vogue / Glamour / Trend"
              speed={3}
              curveAmount={350}
              direction="left"
              interactive={false}
            />
          </div>
        </div>
      </div>

      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-white p-[2vw]"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>

      <div className="font-geist relative flex flex-col min-h-[60vh] md:h-screen items-center justify-center gap-2">
        <div className="w-[90vw] max-w-[1400px]">
          <div className="aspect-video max-h-[60vh] md:max-h-none overflow-hidden relative">
        <RunwayVideo />
        <span className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-5xl font-bold pointer-events-none none-select">
          RUNWAY
        </span>
          </div>

          <div className="mt-3 text-xl  text-black font-medium text-left">
        Play video Fall Winter 25/26
          </div>
        </div>
      </div>
    </main>
  )
}

type ColumnProps = {
  images: string[]
  y: MotionValue<number>
}

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-full w-full overflow-hidden">
          <img
            src={`${src}`}
            alt="image"
            className="pointer-events-none object-cover"
          />
        </div>
      ))}
    </motion.div>
  )
}

export { Skiper30 }
