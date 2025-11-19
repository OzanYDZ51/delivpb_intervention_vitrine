'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from './ui/Card'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    quote:
      "GlassUp a transformé mon activité. Je reçois des missions régulières et je peux enfin me concentrer sur mon métier plutôt que sur la prospection.",
    name: 'Jean-Marc P.',
    role: 'Technicien indépendant, Lyon',
    avatar: 'JM',
  },
  {
    quote:
      "En tant que garage, trouver des techniciens qualifiés était un casse-tête. Avec GlassUp, c'est réglé en quelques clics. Service client au top !",
    name: 'Sophie M.',
    role: 'Gérante AutoGlass, Paris',
    avatar: 'SM',
  },
  {
    quote:
      "La plateforme est intuitive et le paiement sécurisé. Je recommande GlassUp à tous les professionnels du vitrage automobile.",
    name: 'Pierre D.',
    role: 'Technicien mobile, Marseille',
    avatar: 'PD',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 relative overflow-hidden">
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
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ils nous font confiance
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto">
          <Card className="text-center py-12 px-8 bg-navy-800" glow>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote icon */}
                <span className="text-6xl text-cyan-500/30 block mb-6">&quot;</span>

                {/* Quote */}
                <p className="text-xl text-gray-300 leading-relaxed mb-8 italic">
                  {testimonials[current].quote}
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-lg font-bold">
                    {testimonials[current].avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Card>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  current === index
                    ? 'w-8 bg-cyan-500'
                    : 'w-2 bg-navy-600 hover:bg-navy-500'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
