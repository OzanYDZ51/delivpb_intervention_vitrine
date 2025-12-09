'use client'

import { motion } from 'framer-motion'
import { Zap, ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'
import { Countdown } from './Countdown'

interface CTAProps {
  onOpenModal: () => void
}

export function CTA({ onOpenModal }: CTAProps) {
  const scrollToSection = () => {
    const element = document.querySelector('#early-access')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            La plateforme
            <br />
            est disponible !
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Rejoignez la communauté des professionnels du vitrage automobile
            et boostez votre activité dès aujourd&apos;hui.
          </p>

          {/* Launch badge */}
          <div className="mb-10">
            <Countdown />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open('https://app.glassup.fr', '_blank')}
              size="lg"
              rightIcon={<Zap className="w-5 h-5" />}
            >
              Accéder à la plateforme
            </Button>
            <Button variant="secondary" size="lg" onClick={scrollToSection}>
              Voir les avantages
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
