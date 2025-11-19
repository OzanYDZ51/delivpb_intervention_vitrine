'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const footerLinks = {
  platform: [
    { label: 'Comment ça marche', href: '#how-it-works' },
    { label: 'Avantages', href: '#features' },
    { label: 'Pour qui', href: '#for-who' },
    { label: 'FAQ', href: '#faq' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'CGU', href: '/cgu' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
  ],
  contact: [
    { label: 'contact@glassup.fr', href: 'mailto:contact@glassup.fr' },
    { label: 'Support', href: 'mailto:support@glassup.fr' },
    { label: 'Partenariats', href: 'mailto:partenariats@glassup.fr' },
  ],
}

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="py-16 bg-[#0A1015] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/logo.png"
              alt="GlassUp"
              width={250}
              height={75}
              className="h-14 w-auto mb-4"
            />
            <p className="text-gray-500 text-sm leading-relaxed">
              La plateforme qui connecte garages et techniciens
              du vitrage automobile partout en France.
            </p>
          </motion.div>

          {/* Platform links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Plateforme</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-500 hover:text-[#00A8E1] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#00A8E1] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#00A8E1] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-white/5 text-center"
        >
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} GlassUp. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
