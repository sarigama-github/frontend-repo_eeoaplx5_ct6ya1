import React from 'react'
import { motion } from 'framer-motion'
import { Donut, CupSoda, Cupcake } from 'lucide-react'

// Simple 3D-ish goodies with motion to feel playful
const floatTransition = {
  duration: 3,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
}

const ThreeDGoodies = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-mint-50 via-pink-50 to-lavender-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-pink-500">Floating Treats</h3>
          <p className="text-purple-700 mt-2">Tiny playful elements drift and twirl like a sweet daydream.</p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-[10%] top-[30%]"
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={floatTransition}
        >
          <div className="rounded-2xl bg-pink-200/60 backdrop-blur px-4 py-3 shadow-lg border border-pink-200">
            <Donut className="w-10 h-10 text-pink-600" />
          </div>
        </motion.div>

        <motion.div
          className="absolute left-[70%] top-[20%]"
          animate={{ y: [0, -18, 0], rotate: [0, -8, 8, 0] }}
          transition={{ ...floatTransition, duration: 3.6 }}
        >
          <div className="rounded-full bg-mint-200/60 backdrop-blur px-4 py-3 shadow-lg border border-mint-200">
            <CupSoda className="w-10 h-10 text-mint-700" />
          </div>
        </motion.div>

        <motion.div
          className="absolute left-[40%] top-[65%]"
          animate={{ y: [0, -16, 0], rotate: [0, 6, -6, 0] }}
          transition={{ ...floatTransition, duration: 2.8 }}
        >
          <div className="rounded-2xl bg-lavender-200/60 backdrop-blur px-4 py-3 shadow-lg border border-purple-200">
            <Cupcake className="w-10 h-10 text-purple-700" />
          </div>
        </motion.div>
      </div>

      <div className="h-64" />
    </section>
  )
}

export default ThreeDGoodies
