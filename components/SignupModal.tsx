'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Select } from './ui/Select'

const signupSchema = z.object({
  firstName: z.string().min(2, 'Prénom requis'),
  lastName: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  company: z.string().min(2, 'Nom de société requis'),
  userType: z.string().min(1, 'Veuillez sélectionner votre profil'),
})

type SignupFormData = z.infer<typeof signupSchema>

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  })

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const onSubmit = async (data: SignupFormData) => {
    try {
      // Send data to Zapier webhook
      const response = await fetch('https://hooks.zapier.com/hooks/catch/18372908/uzd58r8/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          company: data.company,
          userType: data.userType,
          timestamp: new Date().toISOString(),
          source: 'landing_page',
        }),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi')
      }

      toast.success('Inscription réussie !', {
        description: 'Notre équipe vous contactera sous 24-48h pour valider votre compte.',
      })

      reset()
      onClose()
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Erreur lors de l\'inscription', {
        description: 'Veuillez réessayer ou nous contacter directement.',
      })
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-900/90 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md bg-navy-800 rounded-2xl border border-white/5 shadow-2xl overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Rejoignez GlassUp</h3>
                <p className="text-gray-400">
                  Inscription gratuite, sans engagement
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Prénom"
                    placeholder="Votre prénom"
                    error={errors.firstName?.message}
                    {...register('firstName')}
                  />
                  <Input
                    label="Nom"
                    placeholder="Votre nom"
                    error={errors.lastName?.message}
                    {...register('lastName')}
                  />
                </div>

                <Input
                  label="Email professionnel"
                  type="email"
                  placeholder="votre@email.com"
                  error={errors.email?.message}
                  {...register('email')}
                />

                <Input
                  label="Téléphone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  error={errors.phone?.message}
                  {...register('phone')}
                />

                <Input
                  label="Nom de la société"
                  placeholder="Votre société"
                  error={errors.company?.message}
                  {...register('company')}
                />

                <Select
                  label="Vous êtes"
                  error={errors.userType?.message}
                  options={[
                    { value: '', label: 'Sélectionnez...' },
                    { value: 'garage', label: 'Garage (fixe ou mobile)' },
                    { value: 'technicien', label: 'Technicien indépendant' },
                  ]}
                  {...register('userType')}
                />

                <Button
                  type="submit"
                  className="w-full mt-6"
                  size="lg"
                  isLoading={isSubmitting}
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Créer mon compte
                </Button>
              </form>

              {/* Security note */}
              <p className="text-center text-gray-500 text-sm mt-6 flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                Vos données sont sécurisées et ne seront jamais partagées.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
