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
      title: 'Getting Started with Odysee',
      date: 'January 29, 2025',
      author: 'Documentation Team',
      excerpt: 'Learn how to get started with Odysee, our open-source video platform. This guide covers the basics of creating an account, uploading content, and engaging with the community.',
      tag: 'Guide'
    },
    {
      title: 'Community Guidelines Update',
      date: 'January 28, 2025',
      author: 'Moderation Team',
      excerpt: 'We have updated our community guidelines to ensure a safe and welcoming environment for all users. Read about the important changes and how they affect content creators.',
      tag: 'Announcement'
    },
    {
      title: 'New Features: Enhanced Search and Discovery',
      date: 'January 27, 2025',
      author: 'Product Team',
      excerpt: 'Discover our latest features including improved search algorithms, better content recommendations, and new filtering options to help you find the content you love.',
      tag: 'Features'
    },
    {
      title: 'Creator Spotlight: January 2025',
      date: 'January 26, 2025',
      author: 'Content Team',
      excerpt: 'Meet the amazing content creators who are making waves on Odysee this month. Learn about their journey, creative process, and favorite moments on the platform.',
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
