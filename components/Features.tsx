'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Shield, Camera, CreditCard } from 'lucide-react'
import { Card } from './ui/Card'

const features = [
  {
    icon: BadgeCheck,
    title: 'Garages et techniciens certifiés',
    description:
      'Tous les professionnels sont vérifiés et validés manuellement. Kbis vérifié, sérieux garanti.',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Shield,
    title: 'Gestion des interventions par la plateforme',
    description:
      'Tout est géré via la plateforme : missions, communications, facturation. Simple et efficace.',
    gradient: 'from-[#00A8E1] to-[#0077B6]',
  },
  {
    icon: Camera,
    title: 'Photos vérifiées',
    description:
      'Validation photo avant paiement. Vitrage livré directement au garage en toute confiance.',
    gradient: 'from-violet-500 to-violet-600',
  },
  {
    icon: CreditCard,
    title: 'Paiement centralisé',
    description:
      'Transactions sécurisées via la plateforme. Paiement déclenché après validation photo.',
    gradient: 'from-amber-500 to-amber-600',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-[#1A242F] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

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
            Pourquoi GlassUp
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            La confiance avant tout
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Une plateforme pensée pour simplifier le quotidien des professionnels du vitrage
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-full bg-[#0F171E] group relative overflow-hidden"
                glow
              >
                {/* Top border gradient on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A8E1] to-[#00C8FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#00A8E1] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
