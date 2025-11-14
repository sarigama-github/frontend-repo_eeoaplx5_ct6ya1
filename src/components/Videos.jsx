import React from 'react'
import { motion } from 'framer-motion'

const videos = [
  // Royalty-free aesthetic baking shorts from sample CDN sources
  {
    src: 'https://cdn.coverr.co/videos/coverr-pouring-flour-into-bowl-1782/1080p.mp4',
    title: 'Whisper Flour',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-frosting-the-cake-5669/1080p.mp4',
    title: 'Frosting Flow',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-cracking-eggs-into-a-bowl-3109/1080p.mp4',
    title: 'Sunny Eggs',
  },
]

const Videos = () => {
  return (
    <section id="videos" className="py-16 bg-gradient-to-b from-purple-50 via-lavender-50 to-mint-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-purple-700 text-center"
        >
          Short Aesthetic Bakes
        </motion.h2>
        <p className="text-center text-purple-600 mt-2">Soft, cozy loops to set the mood.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden bg-white border border-purple-100 shadow-md"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <video src={v.src} controls className="w-full h-64 object-cover" />
              <div className="p-3 text-center text-purple-700 font-medium">{v.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Videos
