'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Rocket, CheckCircle, Zap } from 'lucide-react'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { Countdown } from './Countdown'

interface HeroProps {
  onOpenModal: () => void
}

export function Hero({ onOpenModal }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToSection = () => {
    const element = document.querySelector('#early-access')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient blobs */}
        <motion.div
          style={{ y }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#00A8E1]/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#00A8E1]/5 rounded-full blur-[120px]"
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00A8E1]/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
              }}
              initial={{
                y: '100vh',
                opacity: 0,
              }}
              animate={{
                y: '-100vh',
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Launch badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="cyan" dot pulse className="text-sm">
                <Rocket className="w-4 h-4 mr-1" />
                Lancement le 1er Décembre 2025
              </Badge>
            </motion.div>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              La plateforme{' '}
              <span className="text-gradient">Deliveroo</span>
              <br />
              du vitrage automobile
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              Connectez instantanément garages et techniciens partout en France.
              <br />
              <span className="text-[#00A8E1] font-semibold">
                Inscrivez-vous maintenant pour un accès anticipé exclusif.
              </span>
            </motion.p>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-10"
            >
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
                Lancement dans
              </p>
              <Countdown />
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                onClick={onOpenModal}
                size="lg"
                rightIcon={<Zap className="w-5 h-5" />}
                className="group"
              >
                <span>Accès anticipé gratuit</span>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToSection}
                leftIcon={<ArrowRight className="w-5 h-5" />}
              >
                Découvrir les avantages
              </Button>
            </motion.div>

            {/* Early bird benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>100% Gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Accès prioritaire</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#00A8E1] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
