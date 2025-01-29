import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    title: 'Natural Language Processing',
    description: 'Advanced NLP models specifically trained on Indian languages for superior understanding and processing.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    stats: ['22+ Languages', '99.9% Accuracy', '10ms Response']
  },
  {
    title: 'Speech Recognition',
    description: 'Industry-leading speech recognition system that understands diverse Indian accents and dialects.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    stats: ['15+ Dialects', '95% Accuracy', 'Real-time Processing']
  },
  {
    title: 'Text Generation',
    description: 'Generate human-like text in multiple Indian languages while maintaining context and cultural nuances.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    stats: ['Multiple Styles', 'Context-Aware', 'Cultural Sensitivity']
  },
  {
    title: 'Translation Services',
    description: 'Neural machine translation system that maintains semantic accuracy across Indian languages.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    stats: ['100+ Language Pairs', '98% Accuracy', 'Bidirectional']
  }
]

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
      <div className="relative p-8 rounded-2xl bg-dark-200 border border-white/10 group-hover:border-white/20 transition-colors">
        <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400 mb-6">
          {feature.icon}
        </div>
        <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
        <p className="text-gray-400 mb-6">{feature.description}</p>
        <div className="grid grid-cols-3 gap-4">
          {feature.stats.map((stat, statIndex) => (
            <div key={statIndex} className="text-center">
              <div className="text-sm font-medium text-gray-300">{stat}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="relative py-24 bg-dark-100 overflow-hidden" id="features">
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
      
      <div className="relative container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 text-transparent bg-clip-text">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Our cutting-edge AI technology provides comprehensive solutions for Indian language processing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-secondary-500/20 rounded-full filter blur-3xl"></div>
    </section>
  )
}

export default Features
