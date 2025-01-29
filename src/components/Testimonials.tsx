import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    content: "IntellijMind's language processing capabilities have transformed how we handle customer support across multiple Indian languages. The accuracy is remarkable.",
    author: "Priya Sharma",
    role: "CTO, TechServe India",
    image: "/testimonials/priya.jpg"
  },
  {
    content: "The speech recognition system understands various Indian accents perfectly. It's been a game-changer for our voice-based applications.",
    author: "Rajesh Kumar",
    role: "Product Head, VoiceFirst",
    image: "/testimonials/rajesh.jpg"
  },
  {
    content: "We've seen a 40% improvement in customer satisfaction since implementing IntellijMind's translation services. Highly recommended!",
    author: "Anita Desai",
    role: "CEO, GlobalConnect",
    image: "/testimonials/anita.jpg"
  }
]

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="relative p-8 rounded-2xl bg-dark-200 border border-white/10"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-t-2xl"></div>
      
      <svg className="w-12 h-12 text-primary-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      <p className="text-gray-300 mb-6 text-lg">{testimonial.content}</p>

      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 p-[2px]">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="ml-4">
          <div className="text-white font-semibold">{testimonial.author}</div>
          <div className="text-gray-400 text-sm">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="relative py-24 bg-dark-100 overflow-hidden" id="testimonials">
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
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Trusted by leading companies to power their Indian language AI solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-primary-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary-500/20 rounded-full filter blur-3xl"></div>
    </section>
  )
}

export default Testimonials
