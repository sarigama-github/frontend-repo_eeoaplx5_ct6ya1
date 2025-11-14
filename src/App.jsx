import React from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Videos from './components/Videos'
import ThreeDGoodies from './components/ThreeDGoodies'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 text-purple-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍰</span>
            <span className="font-extrabold text-pink-500">CaaKeyBakkey</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#gallery" className="hover:text-pink-500 transition">Gallery</a>
            <a href="#videos" className="hover:text-pink-500 transition">Videos</a>
            <a href="#goodies" className="hover:text-pink-500 transition">3D Goodies</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Gallery />
        <div id="videos">
          <Videos />
        </div>
        <div id="goodies">
          <ThreeDGoodies />
        </div>
      </main>

      <footer className="py-10 text-center text-purple-600">
        Made with love and sprinkles ✨
      </footer>
    </div>
  )
}

export default App
