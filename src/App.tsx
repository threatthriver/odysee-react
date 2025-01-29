import { useEffect } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

function App() {
  const { scrollY } = useScroll()
  
  const scrollProgress = useSpring(
    useTransform(scrollY, [0, document.documentElement.scrollHeight - window.innerHeight], [0, 1]),
    { stiffness: 100, damping: 30, restDelta: 0.001 }
  )

  const backgroundOpacity = useTransform(
    scrollY,
    [0, 400],
    [1, 0.5]
  )

  useEffect(() => {
    scrollProgress.onChange(v => {
      document.body.style.setProperty('--scroll', v.toString())
    })
  }, [scrollProgress])

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white text-gray-900 bg-mandala-light bg-fixed bg-center overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 origin-left z-50"
        style={{ scaleX: scrollProgress }}
      />

      {/* Navigation */}
      <motion.nav
        style={{ backgroundColor: useTransform(scrollY, [0, 200], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.9)']) }}
        className="fixed w-full backdrop-blur-sm z-40 border-b border-primary-200/20"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-display font-bold animate-color-shift"
            >
              IntellijMind
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Features', 'Technical', 'Open Source'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-sans font-medium hover:text-primary-500 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden flex items-center">
        <motion.div 
          className="absolute inset-0 bg-rangoli-pattern"
          style={{ opacity: backgroundOpacity }}
        />
        <div className="container mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="animate-float"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 text-transparent bg-clip-text">
              Odysee Gen 1
            </h1>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-secondary-500 via-primary-600 to-accent-500 text-transparent bg-clip-text">
              Language AI
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-handwriting mb-8 max-w-3xl mx-auto text-spice-cinnamon"
          >
            Empowering communication across India's diverse linguistic landscape through cutting-edge AI technology.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-sans font-medium shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary-500 rounded-lg font-sans font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-center mb-16 animate-color-shift"
          >
            Key Features
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Language Support",
                description: "Support for all major Indian languages and dialects",
                icon: "🗣️",
                color: "from-primary-500 to-primary-600"
              },
              {
                title: "Real-time Translation",
                description: "Instant translation between Indian languages",
                icon: "⚡",
                color: "from-accent-500 to-accent-600"
              },
              {
                title: "Cultural Context",
                description: "AI that understands Indian cultural nuances",
                icon: "🎭",
                color: "from-secondary-500 to-secondary-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-display font-bold mb-4 bg-gradient-to-r text-transparent bg-clip-text animate-color-shift">
                  {feature.title}
                </h3>
                <p className="text-lg font-handwriting text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Vision & Mission
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'The Gap',
                description: "India's contribution to LLM development lags behind global advancements"
              },
              {
                title: 'Cultural Relevance',
                description: 'Existing LLMs struggle with Indian languages and cultural nuances'
              },
              {
                title: 'The Need',
                description: 'Requirement for culturally attuned AI tools'
              }
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-700/50 p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <p className="text-gray-400">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section id="technical" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Technical Innovation
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data Ingestion',
                description: 'Fineweb Dataset Processing'
              },
              {
                title: 'Model Training',
                description: 'MoE Architecture with Cerebras WSE'
              },
              {
                title: 'Deployment',
                description: 'Efficient Storage & API Access'
              }
            ].map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-700/50 p-6 rounded-lg text-center"
              >
                <h3 className="text-xl font-semibold mb-4">{tech.title}</h3>
                <p className="text-gray-400">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section id="opensource" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Open Source Commitment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            All models, code, datasets, and documentation will be released under an open-source license to facilitate community collaboration.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IntellijMind. Advancing Indian Language AI.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
