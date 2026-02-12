'use client'

import { Button } from '@/components/ui/button'
import { cn, horizontalPadding } from '@/lib/utils'
import { motion } from 'motion/react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-surface-dark">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/stairs.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div
        className={cn(
          'relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center',
          'pl-12 pr-6 md:pl-20 md:pr-8'
        )}
      >
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl pt-24"
        >
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl xl:text-7xl">
            När människor växer, växer organisationer
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70 md:text-xl">
            Zoey är er partner inom HR och Talent Acquisition. Vi hjälper
            organisationer att hitta, utveckla och behålla rätt kompetens.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90"
            >
              <Link href="#tjanster">
                <span className="text-nowrap">För företag</span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white/10"
            >
              <Link href="#kontakt">
                <span className="text-nowrap">För konsulter</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
