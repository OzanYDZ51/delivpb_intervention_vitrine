'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  variant?: 'default' | 'glass' | 'gradient' | 'outline'
  hover?: boolean
  glow?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, glow = false, children, ...props }, ref) => {
    // Prime Video card styles
    const variants = {
      default: 'bg-[#1A242F] border border-[#243447]',
      glass: 'bg-white/5 backdrop-blur-xl border border-white/10',
      gradient: 'bg-gradient-to-br from-[#1A242F] to-[#0F171E] border border-[#243447]',
      outline: 'bg-transparent border-2 border-[#3D4F61]',
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-lg p-6 transition-all duration-200',
          variants[variant],
          hover && 'hover:border-[#3D4F61] hover:-translate-y-0.5',
          glow && 'hover:shadow-lg hover:shadow-[#00A8E1]/10',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export { Card }
