import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-display font-bold mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60"
            >
              Get in touch with the IntellijMind team
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white/60 text-sm">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/60 text-sm">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white/60 text-sm">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white/60 text-sm">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all duration-200">
                  <option value="">Select a topic</option>
                  <option value="support">Technical Support</option>
                  <option value="business">Business Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-white/60 text-sm">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all duration-200"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-all duration-200"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Email',
                  info: 'contact@intellijmind.com',
                  icon: '✉️'
                },
                {
                  title: 'Location',
                  info: 'Bangalore, India',
                  icon: '📍'
                },
                {
                  title: 'Social',
                  info: '@intellijmind',
                  icon: '🌐'
                }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm text-center"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.info}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
