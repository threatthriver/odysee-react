import { motion, useScroll, useTransform } from 'framer-motion'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  const { scrollY } = useScroll()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        style={{ backgroundColor: useTransform(scrollY, [0, 200], ['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']) }}
        className="fixed top-0 left-0 right-0 backdrop-blur-lg z-40 border-b border-white/10"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-display font-bold"
              >
                IntellijMind
              </motion.div>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Documentation', path: '/documentation' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="font-sans text-sm font-medium text-white/80 hover:text-white transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              IntellijMind
            </h3>
            <p className="text-white/60 mb-8">
              Advancing Indian Language AI
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { name: 'GitHub', path: '#' },
                { name: 'Documentation', path: '/documentation' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} IntellijMind. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
