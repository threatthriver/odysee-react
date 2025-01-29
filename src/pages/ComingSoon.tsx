import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary-400 to-accent-400 text-transparent bg-clip-text">
            Coming Soon
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition-all duration-300"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default ComingSoon
