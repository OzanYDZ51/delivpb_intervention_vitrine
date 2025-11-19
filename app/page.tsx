'use client'

import { useState, useEffect } from 'react'
import { Loader } from '@/components/Loader'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { EarlyAccess } from '@/components/EarlyAccess'
import { HowItWorks } from '@/components/HowItWorks'
import { Features } from '@/components/Features'
import { ForWho } from '@/components/ForWho'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { SignupModal } from '@/components/SignupModal'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Loader isLoading={isLoading} />

      <main className="relative">
        <Navbar onOpenModal={openModal} />
        <Hero onOpenModal={openModal} />
        <EarlyAccess onOpenModal={openModal} />
        <HowItWorks />
        <Features />
        <ForWho />
        <FAQ />
        <CTA onOpenModal={openModal} />
        <Footer />
      </main>

      <SignupModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
