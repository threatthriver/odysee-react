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
      title: 'Exploring Mixture of Experts (MoE) Architecture',
      date: 'January 29, 2025',
      author: 'Research Team',
      excerpt: 'Deep dive into how Mixture of Experts (MoE) layers enable efficient scaling of language models through conditional computation. Learn how MoE architecture increases model capacity while maintaining computational efficiency through sparse parameter activation.',
      tag: 'Technical'
    },
    {
      title: 'Web-Scale Dataset Processing Pipeline',
      date: 'January 28, 2025',
      author: 'Data Science Team',
      excerpt: 'Understanding the challenges of building high-quality training datasets at web scale. Exploring data curation, semantic deduplication, and quality filtering techniques for creating robust language model training data.',
      tag: 'Research'
    },
    {
      title: 'Scaling Laws and Compute Efficiency',
      date: 'January 27, 2025',
      author: 'Engineering Team',
      excerpt: 'Analysis of how MoE models compare to dense architectures in terms of compute efficiency. At modest training budgets, MoE models can match dense model performance using approximately 4 times less compute.',
      tag: 'Technical'
    },
    {
      title: 'Challenges in Multi-Domain Learning',
      date: 'January 26, 2025',
      author: 'ML Research Team',
      excerpt: 'Investigating how model performance varies across different domains and tasks. Our research shows that MoE and dense models exhibit different generalization patterns worthy of further study.',
      tag: 'Research'
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
