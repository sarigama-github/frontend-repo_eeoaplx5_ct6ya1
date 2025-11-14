import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Simple helper to fetch AI images from a free source (picsum placeholder as stand-in)
// In a real setup, you could connect to an AI image API. Here we simulate the vibe.
const prompts = [
  'kawaii pastel cake with strawberries, soft lighting',
  'cute cupcakes with smiling faces, mint and lavender frosting',
  'pastel macarons in a heart box, cream tones',
  'chubby donut with pink glaze and sprinkles, kawaii eyes',
  'buttery croissant with a tiny bow, cozy table',
  'lavender eclair with sparkles, dreamy background',
]

const Gallery = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    // Use picsum to simulate AI images (unique via seed). Each prompt influences seed.
    const imgs = prompts.map((p, idx) => ({
      url: `https://picsum.photos/seed/caa-key-bak-key-${idx}/800/600`,
      alt: p,
    }))
    setImages(imgs)
  }, [])

  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-pink-50 via-rose-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-purple-700 text-center"
        >
          Sweet AI-Inspired Gallery
        </motion.h2>
        <p className="text-center text-purple-600 mt-2">Cakes, cupcakes, and pastries in soft pastel tones.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-lg border border-pink-100"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <img src={img.url} alt={img.alt} className="h-64 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-200/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-3 left-3 right-3 text-sm text-purple-700 bg-white/80 rounded-full px-3 py-1 shadow-sm">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
