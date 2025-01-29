import { motion, useScroll, useTransform } from 'framer-motion'

const Home = () => {
  const { scrollY } = useScroll()
  const scrollProgress = useTransform(scrollY, [0, document.documentElement.scrollHeight - window.innerHeight], [0, 1])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 py-32 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg font-medium text-primary-400 mb-6"
            >
              Introducing
            </motion.p>
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 bg-gradient-to-r from-white via-primary-400 to-accent-400 text-transparent bg-clip-text">
              Odysee Gen 1
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto">
              The next generation of Indian Language AI, designed to understand and preserve our cultural heritage.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition-all duration-300"
              >
                Learn more
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/10 text-white rounded-full font-medium text-sm hover:bg-white/20 transition-all duration-300"
              >
                View on GitHub
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-white/60">
              Establishing India as a global leader in Language Model development, creating AI that truly understands and respects our diverse cultural heritage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Gap",
                description: "India's contribution to LLM development lags behind global advancements.",
                icon: "🌏"
              },
              {
                title: "Cultural Relevance",
                description: "Current LLMs struggle with Indian languages and cultural nuances.",
                icon: "🎭"
              },
              {
                title: "The Solution",
                description: "AI tools that are culturally attuned to India's diverse heritage.",
                icon: "✨"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-500"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-display font-bold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-white/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Innovation Section */}
      <section id="technical" className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
          >
            Technical Innovation
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Data Ingestion",
                features: [
                  "Advanced Fineweb Dataset",
                  "Multi-language Pipeline",
                  "Intelligent Cleaning"
                ],
                icon: "📊"
              },
              {
                title: "Model Training",
                features: [
                  "MoE Architecture",
                  "Cerebras WSE",
                  "Parameter Optimization"
                ],
                icon: "🧠"
              },
              {
                title: "Deployment",
                features: [
                  "Efficient Storage",
                  "Optimized API Access",
                  "Load Balancing"
                ],
                icon: "⚡"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-500"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-display font-bold mb-6">
                  {item.title}
                </h3>
                <ul className="space-y-4">
                  {item.features.map((feature) => (
                    <li key={feature} className="text-white/60 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section id="opensource" className="py-32 bg-black relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Open Source
            </h2>
            <p className="text-xl text-white/60 mb-12">
              We believe in the power of community collaboration. All our models, code, datasets, and documentation are open source.
            </p>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition-all duration-300"
            >
              Explore GitHub
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
