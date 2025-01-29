import { motion } from 'framer-motion'

const Story = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary-400/10 text-primary-400 text-sm">
                Vision
              </span>
              <span className="text-white/40 text-sm">January 29, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Building India's Future in AI 🚀
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-400/10 flex items-center justify-center text-xl">
                AK
              </div>
              <div>
                <div className="font-medium">Aniket Kumar</div>
                <div className="text-sm text-white/60">AI Researcher & Developer</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              In the fast-evolving world of artificial intelligence, where nations are competing to lead the AI revolution, I am determined to make a difference. As a passionate AI enthusiast, I am not just learning about artificial intelligence—I am actively working on building a large language model (LLM). My goal is clear: to ensure that India secures a strong position in the global AI race.
            </p>

            <h2 className="text-2xl font-display font-bold mt-12 mb-6">The Vision: India as an AI Leader</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              I firmly believe that India should not just be a consumer of AI technologies developed by other nations. Instead, the country should play an active role in AI innovation, research, and development. With the rise of powerful AI models in the West, such as OpenAI's GPT and Google's Gemini, India needs to step up and develop its own cutting-edge AI models to stay competitive.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              For me, this is more than just a project—it's a mission to contribute to India's technological independence. I envision an India where AI research is not limited to a few tech giants but is accessible to everyone, helping businesses, students, and researchers innovate and grow.
            </p>

            <h2 className="text-2xl font-display font-bold mt-12 mb-6">The Challenge: Building a Large Language Model</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Building a large language model is no small feat. It requires extensive knowledge in machine learning, deep learning, natural language processing (NLP), and data engineering. Training an LLM demands massive computational resources, vast datasets, and sophisticated optimization techniques.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              I am fully aware of these challenges but remain determined and focused. My approach is to learn, experiment, and apply the best practices in AI to create a powerful model that can understand and generate human-like text efficiently.
            </p>

            <h2 className="text-2xl font-display font-bold mt-12 mb-6">A Step Towards AI Independence</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Most AI advancements today are led by companies from the U.S. and China. While India has a strong talent pool in AI and software development, it lacks homegrown AI models that can compete on a global scale. I want to bridge this gap by developing an AI system that can serve India's diverse linguistic and technological needs.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              From regional language support to domain-specific AI applications, this LLM can empower businesses, researchers, and developers across India. I believe that by building indigenous AI technologies, India can reduce its dependence on foreign models and create AI solutions tailored to its own needs.
            </p>

            <h2 className="text-2xl font-display font-bold mt-12 mb-6">The Road Ahead</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              I am fully committed to this goal. I understand that building an AI model of this scale will take time, effort, and collaboration. However, I am ready to step out of my comfort zone, learn from the best, and take India one step closer to AI innovation.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              With dedication and vision, I am not just working on an AI model—I am working on India's future in artificial intelligence. 🚀
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-12 border-t border-white/10"
          >
            <h3 className="text-xl font-bold mb-6">Share this story</h3>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                <motion.button
                  key={platform}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  {platform}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Story
