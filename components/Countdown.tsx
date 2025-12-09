'use client'

import { motion } from 'framer-motion'
import { Rocket, CheckCircle, Sparkles } from 'lucide-react'

export function LaunchBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-4"
    >
      {/* Badge principal */}
      <div className="relative">
        <motion.div
          animate={{
            boxShadow: [
              '0 0 20px rgba(0, 168, 225, 0.3)',
              '0 0 40px rgba(0, 168, 225, 0.5)',
              '0 0 20px rgba(0, 168, 225, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-gradient-to-r from-[#00A8E1] to-[#0077B6] rounded-full px-8 py-4 flex items-center gap-3"
        >
          <Rocket className="w-6 h-6 text-white" />
          <span className="text-xl sm:text-2xl font-bold text-white">
            C'est parti !
          </span>
          <Sparkles className="w-6 h-6 text-white" />
        </motion.div>

        {/* Particules animées */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00A8E1] rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: [0, (i % 2 === 0 ? 1 : -1) * (30 + i * 10)],
              y: [0, -20 - i * 5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: '50%',
              top: '50%',
            }}
          />
        ))}
      </div>

      {/* Message de confirmation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-2 text-emerald-400"
      >
        <CheckCircle className="w-5 h-5" />
        <span className="text-sm font-medium">La plateforme est maintenant disponible</span>
      </motion.div>
    </motion.div>
  )
}

// Export avec l'ancien nom pour la compatibilité
export { LaunchBadge as Countdown }
