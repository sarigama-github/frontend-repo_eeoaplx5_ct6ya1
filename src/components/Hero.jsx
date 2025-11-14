import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/fTzRQ8pMbm1-BzvF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft pastel gradient veil to match brand vibes */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55),rgba(250,240,255,0.8))]" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-rose-400 to-purple-500 drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">
            CaaKeyBakkey
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-purple-700/90 backdrop-blur-[1px]">
            A cozy, kawaii bakery filled with pastel dreams, bouncy treats, and sparkling sweetness.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#gallery"
              className="rounded-full bg-pink-400/90 text-white px-6 py-3 shadow-lg shadow-pink-200 hover:bg-pink-400 transition"
            >
              See Sweet Gallery
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#videos"
              className="rounded-full bg-white/80 text-purple-700 px-6 py-3 border border-purple-200 shadow-md hover:bg-white transition"
            >
              Watch Aesthetic Bakes
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Sparkles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-pink-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2 + (i % 5) * 0.4, repeat: Infinity, delay: i * 0.2 }}
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 29) % 100}%`,
              filter: 'drop-shadow(0 1px 4px rgba(255,150,200,0.6))',
            }}
          >
            ✦
          </motion.span>
        ))}
      </div>
    </section>
  )
}

export default Hero
