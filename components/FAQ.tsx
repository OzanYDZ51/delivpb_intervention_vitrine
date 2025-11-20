'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: "L'inscription est-elle vraiment gratuite ?",
    answer:
      "Oui, l'inscription sur GlassUp est 100% gratuite et sans engagement. Vous ne payez que lorsque vous réalisez ou recevez une mission.",
  },
  {
    question: 'Comment sont validés les techniciens ?',
    answer:
      "Chaque inscription est vérifiée manuellement par notre équipe. Nous demandons le Kbis, une pièce d'identité et un RIB pour garantir le sérieux de chaque professionnel sur la plateforme.",
  },
  {
    question: 'Quelle est la zone de couverture ?',
    answer:
      'GlassUp est disponible partout en France métropolitaine. Notre réseau de techniciens couvre les principales villes et nous nous développons rapidement dans les zones rurales.',
  },
  {
    question: 'Combien de temps pour activer mon compte ?',
    answer:
      'Une fois vos documents soumis, notre équipe valide votre compte sous 24 à 48h ouvrées. Vous recevez un email de confirmation dès que votre profil est activé.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-navy-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Questions fréquentes
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                'bg-navy-900 rounded-xl border transition-all duration-300',
                openIndex === index
                  ? 'border-cyan-500/30'
                  : 'border-white/5 hover:border-white/10'
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <span
                  className={cn(
                    'flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300',
                    openIndex === index
                      ? 'bg-cyan-500 text-white'
                      : 'bg-navy-700 text-gray-400'
                  )}
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
