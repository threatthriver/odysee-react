import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Documentation from './pages/Documentation'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Story from './pages/Story'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <div className="min-h-screen bg-black text-white overflow-x-hidden">
              {/* Progress Bar */}
              <div
                className="fixed top-0 left-0 right-0 h-0.5 bg-white/20 z-50"
              />

              {/* Navigation */}
              <nav
                className="fixed w-full backdrop-blur-lg z-40 border-b border-white/10"
              >
                <div className="container mx-auto px-4">
                  <div className="flex items-center justify-between h-16">
                    <div
                      className="text-2xl font-display font-bold"
                    >
                      IntellijMind
                    </div>
                    
                    <div className="hidden md:flex space-x-8">
                      {['Vision', 'Features', 'Technical', 'Open Source'].map((item) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          className="font-sans text-sm font-medium text-white/80 hover:text-white transition-all duration-300"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </nav>

              {/* Hero Section */}
              <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="container mx-auto px-4 py-32 text-center relative">
                  <div
                    className="max-w-4xl mx-auto"
                  >
                    <p
                      className="text-lg font-medium text-primary-400 mb-6"
                    >
                      Introducing
                    </p>
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 bg-gradient-to-r from-white via-primary-400 to-accent-400 text-transparent bg-clip-text">
                      Odysee Gen 1
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto">
                      The next generation of Indian Language AI, designed to understand and preserve our cultural heritage.
                    </p>
                    <div
                      className="flex flex-wrap justify-center gap-6"
                    >
                      <button
                        className="px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition-all duration-300"
                      >
                        Learn more
                      </button>
                      <button
                        className="px-8 py-4 bg-white/10 text-white rounded-full font-medium text-sm hover:bg-white/20 transition-all duration-300"
                      >
                        View on GitHub
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Vision Section */}
              <section id="vision" className="py-32 bg-black relative overflow-hidden">
                <div className="container mx-auto px-4">
                  <div
                    className="max-w-4xl mx-auto text-center mb-16"
                  >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                      Our Vision
                    </h2>
                    <p className="text-xl text-white/60">
                      Establishing India as a global leader in Language Model development, creating AI that truly understands and respects our diverse cultural heritage.
                    </p>
                  </div>

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
                      <div
                        key={item.title}
                        className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-500"
                      >
                        <div className="text-4xl mb-6">{item.icon}</div>
                        <h3 className="text-xl font-display font-bold mb-4 text-white">
                          {item.title}
                        </h3>
                        <p className="text-white/60">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Technical Innovation Section */}
              <section id="technical" className="py-32 bg-gradient-to-b from-black to-gray-900">
                <div className="container mx-auto px-4">
                  <h2
                    className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
                  >
                    Technical Innovation
                  </h2>

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
                      <div
                        key={item.title}
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
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Open Source Section */}
              <section id="opensource" className="py-32 bg-black relative">
                <div className="container mx-auto px-4">
                  <div
                    className="max-w-4xl mx-auto text-center"
                  >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                      Open Source
                    </h2>
                    <p className="text-xl text-white/60 mb-12">
                      We believe in the power of community collaboration. All our models, code, datasets, and documentation are open source.
                    </p>
                    <button
                      className="px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition-all duration-300"
                    >
                      Explore GitHub
                    </button>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="py-12 bg-black border-t border-white/10">
                <div className="container mx-auto px-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-display font-bold mb-4">
                      IntellijMind
                    </h3>
                    <p className="text-white/60 mb-8">
                      Advancing Indian Language AI
                    </p>
                    <div className="flex justify-center space-x-6 mb-8">
                      {['GitHub', 'Documentation', 'Blog', 'Contact'].map((item) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          className="text-white/60 hover:text-white text-sm transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                    <p className="text-sm text-white/40">
                      &copy; {new Date().getFullYear()} IntellijMind. All rights reserved.
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          } />
          <Route path="documentation" element={<Documentation />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="story" element={<Story />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
