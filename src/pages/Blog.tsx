import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

interface BlogPost {
  title: string
  date: string
  author: string
  excerpt: string
  tag: string
  content: string
}

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  const blogPosts: BlogPost[] = [
    {
      title: 'Exploring Mixture of Experts (MoE) Architecture',
      date: 'January 29, 2025',
      author: 'Research Team',
      excerpt: 'Deep dive into how Mixture of Experts (MoE) layers enable efficient scaling of language models through conditional computation. Learn how MoE architecture increases model capacity while maintaining computational efficiency through sparse parameter activation.',
      tag: 'Technical',
      content: `Mixture of Experts (MoE) architecture represents a significant advancement in language model scaling. At its core, MoE employs conditional computation, where only a subset of the model's parameters is activated for each input token.

Key Components:
• Expert Networks: Specialized neural networks that each focus on different aspects of the input
• Gating Network: Determines which experts should process each input
• Router: Efficiently directs inputs to the most relevant experts

Performance Benefits:
• 4x compute efficiency compared to dense models
• Increased model capacity without proportional compute costs
• Better handling of specialized tasks through expert specialization

Current Research Directions:
• Optimal expert count and size
• Load balancing strategies
• Cross-domain generalization patterns`
    },
    {
      title: 'Web-Scale Dataset Processing Pipeline',
      date: 'January 28, 2025',
      author: 'Data Science Team',
      excerpt: 'Understanding the challenges of building high-quality training datasets at web scale. Exploring data curation, semantic deduplication, and quality filtering techniques for creating robust language model training data.',
      tag: 'Research',
      content: `Building high-quality training datasets at web scale requires sophisticated processing pipelines and careful consideration of multiple factors.

Data Collection:
• Web crawling strategies
• Content quality assessment
• Language identification
• Format standardization

Processing Steps:
1. Initial Filtering
   • Remove low-quality content
   • Language detection
   • Format validation

2. Deduplication
   • Exact match removal
   • Near-duplicate detection
   • Semantic similarity analysis

3. Content Classification
   • Topic modeling
   • Quality scoring
   • Domain categorization

4. Final Processing
   • Text normalization
   • Format standardization
   • Metadata enrichment`
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
              Technical Research Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Deep dives into ML architecture and data processing
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPost(post)}
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

      {/* Modal for full post */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                  {selectedPost.tag}
                </span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-500 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <span>{selectedPost.author}</span>
                <span>{selectedPost.date}</span>
              </div>
              <div className="prose prose-invert max-w-none">
                {selectedPost.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4 text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter for the latest technical insights and research updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
