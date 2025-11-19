'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { UserPlus, CheckCircle, Search, CreditCard } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Inscrivez-vous',
    description: 'Créez votre compte gratuitement en quelques minutes. Aucun engagement requis.',
  },
  {
    icon: CheckCircle,
    title: 'Validation',
    description: 'Notre équipe vérifie vos documents (Kbis, RIB) pour garantir la qualité du réseau.',
  },
  {
    icon: Search,
    title: 'Connexion',
    description: 'Trouvez un technicien à proximité ou recevez des missions selon votre disponibilité.',
  },
  {
    icon: CreditCard,
    title: 'Paiement sécurisé',
    description: 'Réglez directement via la plateforme. Tout est centralisé et sécurisé.',
  },
]

export function HowItWorks() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
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
          <span className="inline-block bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            Simple et rapide
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trouvez un technicien ou augmentez votre activité en quelques clics
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-navy-700">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 origin-left"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-navy-800 border-2 border-navy-600 flex items-center justify-center text-xl font-bold transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500 group">
                  <span className="group-hover:scale-110 transition-transform">
                    {index + 1}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-cyan-500/10 flex items-center justify-center transition-all duration-300 hover:bg-cyan-500/20 hover:-translate-y-1">
                  <step.icon className="w-10 h-10 text-cyan-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
