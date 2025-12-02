'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      // Date de lancement : 8 décembre 2025 à minuit
      const launchDate = new Date('2025-12-08T00:00:00')
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return null
  }

  const timeBlocks = [
    { value: timeLeft.days, label: 'Jours' },
    { value: timeLeft.hours, label: 'Heures' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Secondes' },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {timeBlocks.map((block, index) => (
        <motion.div
          key={block.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative"
        >
          <div className="bg-[#1A242F] border border-[#3D4F61] rounded-lg p-4 sm:p-5 min-w-[70px] sm:min-w-[85px] text-center hover:border-[#00A8E1]/50 transition-colors">
            {/* Number */}
            <motion.span
              key={block.value}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00A8E1] block"
            >
              {block.value.toString().padStart(2, '0')}
            </motion.span>

            {/* Label */}
            <span className="text-xs text-[#8197A4] mt-1 block uppercase tracking-wider">
              {block.label}
            </span>
          </div>

          {/* Separator */}
          {index < timeBlocks.length - 1 && (
            <span className="absolute -right-2.5 top-1/2 -translate-y-1/2 text-xl text-[#3D4F61] hidden sm:block font-bold">
              :
            </span>
          )}
        </motion.div>
      ))}
    </div>
  )
}
