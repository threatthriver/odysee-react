import { useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-primary"
            >
              Odysee
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Features', 'Technical', 'Open Source'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Advancing Indian Language AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Empowering India's diverse linguistic landscape through advanced AI technology
          </motion.p>
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

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Key Features
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'High-Quality Text Generation',
                description: 'Fluent and contextually relevant text in Indian languages'
              },
              {
                title: 'Accurate Translation',
                description: 'Seamless translation between Indian languages and English'
              },
              {
                title: 'Question Answering',
                description: 'Insightful answers to complex queries'
              },
              {
                title: 'Concise Summarization',
                description: 'Efficient generation of text summaries'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-8 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
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
          <p>&copy; {new Date().getFullYear()} Odysee. Advancing Indian Language AI.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
