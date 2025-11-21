'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import { Card } from './ui/Card'
import { cn } from '@/lib/utils'

const audiences = {
  garages: {
    title: 'Garages fixes ou mobiles',
    description:
      'Trouvez rapidement des techniciens qualifiés pour répondre à vos besoins en vitrage automobile.',
    benefits: [
      'Publiez une mission en quelques clics',
      'Techniciens certifiés et vérifiés',
      'Paiement sécurisé après validation photo',
      'Gestion des interventions via la plateforme',
    ],
  },
  techniciens: {
    title: 'Techniciens indépendants',
    description:
      'Augmentez votre chiffre d\'affaires et étendez votre activité à toute la France. La nouvelle ère du vitrage auto est arrivée.',
    benefits: [
      'Recevez des missions qualifiées partout en France',
      'Choisissez vos interventions selon vos disponibilités',
      'Paiement rapide et sécurisé',
      'Augmentez votre visibilité nationale',
    ],
  },
}

export function ForWho() {
  const [activeTab, setActiveTab] = useState<'garages' | 'techniciens'>('garages')

  return (
    <section id="for-who" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#00A8E1]/10 text-[#00A8E1] px-4 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            Pour qui
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Pour tous les professionnels
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Que vous soyez garage ou technicien indépendant
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-4 mb-12"
        >
          {(['garages', 'techniciens'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200',
                activeTab === tab
                  ? 'bg-[#00A8E1] text-white'
                  : 'bg-[#1A242F] text-gray-400 hover:text-white hover:bg-[#243447] border border-[#3D4F61]'
              )}
            >
              {tab === 'garages' ? 'Garages' : 'Techniciens'}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="bg-[#1A242F] p-8" glow>
              <h3 className="text-2xl font-bold mb-4">
                {audiences[activeTab].title}
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {audiences[activeTab].description}
              </p>

              <ul className="space-y-4">
                {audiences[activeTab].benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </span>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
