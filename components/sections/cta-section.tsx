'use client'

import { Button } from '@/components/ui/button'
import { horizontalPadding, sectionContainer, sectionWrapper } from '@/lib/utils'
import { motion } from 'motion/react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className={sectionWrapper('bg-background')}>
      <div className={sectionContainer(undefined, 'no-padding')}>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative overflow-hidden bg-surface-dark"
        >
          <div
            className={`relative flex flex-col gap-8 ${horizontalPadding} py-20 md:flex-row md:items-center md:justify-between md:py-24`}
          >
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Redo att ta nästa steg?
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Kontakta oss så berättar vi mer om hur Zoey kan stärka er
                organisation med rätt HR-kompetens.
              </p>
            </div>
            <div className="shrink-0">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                <Link href="#kontakt">
                  <span className="text-nowrap">Kontakta oss</span>
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
