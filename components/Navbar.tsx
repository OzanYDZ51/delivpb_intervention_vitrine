'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'

interface NavbarProps {
  onOpenModal: () => void
}

const navLinks = [
  { href: '#early-access', label: 'Early Access' },
  { href: '#how-it-works', label: 'Comment ça marche' },
  { href: '#features', label: 'Avantages' },
  { href: '#for-who', label: 'Pour qui' },
  { href: '#faq', label: 'FAQ' },
]

export function Navbar({ onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-[#0F171E]/95 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="GlassUp"
                width={450}
                height={135}
                className="h-24 w-auto"
                priority
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button onClick={onOpenModal} size="sm" rightIcon={<Zap className="w-4 h-4" />}>
                Accès anticipé
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 lg:hidden"
          >
            <div className="bg-[#0F171E]/98 backdrop-blur-xl border-b border-white/5 p-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-2 mt-2 border-t border-white/10">
                  <Button
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      onOpenModal()
                    }}
                    className="w-full"
                    rightIcon={<Zap className="w-4 h-4" />}
                  >
                    Accès anticipé gratuit
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
