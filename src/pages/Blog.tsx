import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import React from 'react'

interface BlogPost {
  title: string
  date: string
  author: string
  excerpt: string
  tag: string
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "Building India's Future in AI",
      date: 'January 29, 2025',
      author: 'Aniket Kumar',
      excerpt: 'In the fast-evolving world of artificial intelligence, where nations are competing to lead the AI revolution, I am determined to make a difference. As a passionate AI enthusiast, I am not just learning about artificial intelligence—I am actively working on building a large language model (LLM).',
      tag: 'Vision'
    },
    {
      title: 'Introducing Odysee Gen 1',
      date: 'January 29, 2025',
      author: 'IntellijMind Team',
      excerpt: 'Today, we are excited to announce the release of Odysee Gen 1, our state-of-the-art language model designed specifically for Indian languages.',
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
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Blog & Updates
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Stay updated with the latest developments in Indian language AI
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
                    {post.tag}
                  </span>
                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
