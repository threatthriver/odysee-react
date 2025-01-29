import { motion } from 'framer-motion'

const Documentation = () => {
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
              Documentation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 mb-12"
            >
              Everything you need to build with Odysee Gen 1
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold mb-8"
            >
              Quick Start
            </motion.h2>
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Installation</h3>
                <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-primary-400">pip install odysee-gen1</code>
                </pre>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Basic Usage</h3>
                <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-primary-400">
                    {`from odysee import OdyseeModel

model = OdyseeModel.from_pretrained('intellijmind/odysee-gen1')
output = model.generate("Your text here")`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold mb-12"
            >
              API Reference
            </motion.h2>
            
            <div className="grid gap-8">
              {[
                {
                  title: 'Model Configuration',
                  description: 'Configure model parameters and settings',
                  methods: ['set_config()', 'get_config()', 'reset_config()']
                },
                {
                  title: 'Text Generation',
                  description: 'Generate text using the model',
                  methods: ['generate()', 'generate_batch()', 'stream_generate()']
                },
                {
                  title: 'Model Management',
                  description: 'Load and manage model instances',
                  methods: ['from_pretrained()', 'save_pretrained()', 'push_to_hub()']
                }
              ].map((section) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                  <p className="text-white/60 mb-4">{section.description}</p>
                  <ul className="space-y-2">
                    {section.methods.map((method) => (
                      <li key={method} className="text-primary-400">
                        {method}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold mb-12"
            >
              Examples
            </motion.h2>

            <div className="grid gap-8">
              {[
                {
                  title: 'Multi-language Translation',
                  code: `from odysee import OdyseeModel

model = OdyseeModel.from_pretrained('intellijmind/odysee-gen1')
text = "Translate to Hindi: Hello, how are you?"
output = model.generate(text)
print(output)  # नमस्ते, आप कैसे हैं?`
                },
                {
                  title: 'Cultural Context Understanding',
                  code: `from odysee import OdyseeModel

model = OdyseeModel.from_pretrained('intellijmind/odysee-gen1')
text = "Explain the significance of 'Namaste'"
output = model.generate(text)
print(output)`
                }
              ].map((example) => (
                <motion.div
                  key={example.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold mb-4">{example.title}</h3>
                  <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                    <code className="text-primary-400">{example.code}</code>
                  </pre>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Documentation
