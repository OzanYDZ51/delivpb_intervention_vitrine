'use client'

import { motion } from 'framer-motion'
import { Zap, Wrench, MapPin, Camera, CreditCard, Users } from 'lucide-react'
import { Card } from './ui/Card'
import { Button } from './ui/Button'

interface EarlyAccessProps {
  onOpenModal: () => void
}

const benefits = [
  {
    icon: Wrench,
    title: 'Déposez une mission',
    description: 'Publiez votre besoin et recevez des propositions de techniciens qualifiés',
    color: 'from-[#00A8E1] to-[#0077B6]',
  },
  {
    icon: MapPin,
    title: 'Trouvez un technicien',
    description: 'Localisez un professionnel certifié dans votre région en quelques clics',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Camera,
    title: 'Validation photo',
    description: 'Photos vérifiées avant paiement, vitrage livré directement au garage',
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: CreditCard,
    title: 'Paiement sécurisé',
    description: 'Paiement centralisé via la plateforme, zéro contact direct nécessaire',
    color: 'from-amber-500 to-amber-600',
  },
]

export function EarlyAccess({ onOpenModal }: EarlyAccessProps) {
  return (
    <section id="early-access" className="py-24 bg-[#1A242F] relative overflow-hidden">
      {/* Background */}
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
          <span className="inline-flex items-center gap-2 bg-[#00A8E1]/10 text-[#00A8E1] px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-[#00A8E1]/20">
            <Zap className="w-4 h-4" />
            Accès anticipé exclusif
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ce que vous pourrez faire
            <br />
            <span className="text-gradient">dès le lancement</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Inscrivez-vous maintenant pour être parmi les premiers à utiliser
            toutes les fonctionnalités de GlassUp
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-[#0F171E] text-center group" glow>
                <div
                  className={`w-16 h-16 mx-auto mb-5 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[#00A8E1] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Card className="inline-block bg-[#0F171E] border-[#00A8E1]/30 px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-3">
                <Users className="w-10 h-10 text-[#00A8E1]" />
                <div className="text-left">
                  <p className="text-sm text-gray-400">Inscription</p>
                  <p className="text-lg font-bold">100% gratuite</p>
                </div>
              </div>
              <div className="h-12 w-px bg-[#243447] hidden sm:block" />
              <Button
                onClick={onOpenModal}
                size="lg"
                rightIcon={<Zap className="w-5 h-5" />}
              >
                Rejoindre la liste
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
