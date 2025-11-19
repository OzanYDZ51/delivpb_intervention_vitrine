'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface LoaderProps {
  isLoading: boolean
}

export function Loader({ isLoading }: LoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-[#0F171E] flex items-center justify-center"
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Image
                src="/images/logo.png"
                alt="GlassUp"
                width={400}
                height={120}
                className="h-20 w-auto mx-auto"
                priority
              />
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-1 bg-[#1A242F] rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="h-full bg-[#00A8E1] rounded-full"
              />
            </div>
          </div>

          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00A8E1]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00A8E1]/5 rounded-full blur-3xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
