import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Blog = () => {
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
              Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60"
            >
              Latest updates, articles, and insights from the IntellijMind team
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12">
              {[
                {
                  title: 'Building India\'s Future in AI',
                  date: 'January 29, 2025',
                  author: 'Aniket Kumar',
                  excerpt: 'In the fast-evolving world of artificial intelligence, where nations are competing to lead the AI revolution, I am determined to make a difference. As a passionate AI enthusiast, I am not just learning about artificial intelligence—I am actively working on building a large language model (LLM).',
                  tag: 'Vision'
                },
                {
                  title: 'Introducing Odysee Gen 1',
                  date: 'January 29, 2025',
                  author: 'IntellijMind Team',
                  excerpt: 'Today, we're excited to announce the release of Odysee Gen 1, our state-of-the-art language model designed specifically for Indian languages.',
                  tag: 'Announcement'
                },
                {
                  title: 'The Technology Behind Odysee',
                  date: 'January 28, 2025',
                  author: 'Tech Team',
                  excerpt: 'Deep dive into the architecture and innovations that power Odysee Gen 1, including our unique approach to handling Indian languages.',
                  tag: 'Technical'
                },
                {
                  title: 'Contributing to Odysee',
                  date: 'January 27, 2025',
                  author: 'Open Source Team',
                  excerpt: 'Learn how you can contribute to the development of Odysee and help shape the future of Indian language AI.',
                  tag: 'Community'
                }
              ].map((post) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary-400/10 text-primary-400 text-sm">
                      {post.tag}
                    </span>
                    <span className="text-white/40 text-sm">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-display font-bold mb-4">
                    {post.title}
                  </h2>
                  <p className="text-white/60 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-sm">{post.author}</span>
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      {post.title === 'Building India\'s Future in AI' ? (
                        <Link to="/story">Read more →</Link>
                      ) : (
                        'Read more →'
                      )}
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
