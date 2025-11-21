'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Sparkles, MapPinned } from 'lucide-react'

export function ValueProposition() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0F171E] via-[#1A242F] to-[#0F171E]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00A8E1]/20 rounded-full blur-[120px]"
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.line
            x1="0%"
            y1="30%"
            x2="100%"
            y2="30%"
            stroke="url(#gradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="0%"
            y1="70%"
            x2="100%"
            y2="70%"
            stroke="url(#gradient2)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.7 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A8E1" stopOpacity="0" />
              <stop offset="50%" stopColor="#00A8E1" stopOpacity="1" />
              <stop offset="100%" stopColor="#00A8E1" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#00C8FF" stopOpacity="0" />
              <stop offset="50%" stopColor="#00C8FF" stopOpacity="1" />
              <stop offset="100%" stopColor="#00C8FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Decorative top element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-6 h-6 text-[#00A8E1]" />
            </motion.div>
            <span className="text-[#00A8E1] font-semibold uppercase tracking-wider text-sm">
              La Révolution du Vitrage Auto
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-6 h-6 text-[#00A8E1]" />
            </motion.div>
          </motion.div>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block mb-4">
                Augmentez votre{' '}
                <span className="relative inline-block">
                  <span className="text-gradient">chiffre d'affaires</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A8E1] to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </span>
              <span className="block">
                ou étendez votre activité{' '}
                <span className="text-gradient relative inline-block">
                  à toute la France
                  <MapPinned className="inline-block w-10 h-10 sm:w-12 sm:h-12 ml-2 text-[#00A8E1] animate-bounce" />
                </span>
              </span>
            </h2>
          </motion.div>

          {/* Sub message with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative inline-block"
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-[#00A8E1]/20 via-[#00C8FF]/30 to-[#00A8E1]/20 blur-xl rounded-lg"
              />

              <div className="relative bg-gradient-to-r from-[#00A8E1]/10 to-[#00C8FF]/10 backdrop-blur-sm border border-[#00A8E1]/30 rounded-2xl px-8 py-6 sm:px-12 sm:py-8">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <TrendingUp className="w-8 h-8 text-[#00A8E1]" />
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    La nouvelle ère du vitrage auto
                  </p>
                  <TrendingUp className="w-8 h-8 text-[#00A8E1]" />
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-lg sm:text-xl text-[#00A8E1] font-semibold"
                >
                  est arrivée
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Decorative bottom stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '100%', label: 'Couverture nationale' },
              { number: '0€', label: "Frais d'inscription" },
              { number: '∞', label: 'Opportunités' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A8E1]/20 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-[#0F171E]/50 backdrop-blur-sm border border-[#00A8E1]/20 rounded-xl p-6 group-hover:border-[#00A8E1]/40 transition-all duration-300">
                  <p className="text-4xl font-bold text-gradient mb-2">{stat.number}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
