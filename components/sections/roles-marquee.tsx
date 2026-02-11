'use client'

import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { sectionContainer, sectionWrapper } from '@/lib/utils'
import { motion } from 'motion/react'

const roles = [
  'Rekryterare',
  'HR People Lead',
  'HR Manager',
  'HR Business Partner',
  'TA Specialist',
  'HR Generalist',
  'Head of TA',
  'HRIS Specialist',
  'HR On-Demand',
  'TA On-Demand',
]

export default function RolesMarquee() {
  return (
    <section className={sectionWrapper('bg-surface-dark')}>
      <div className={sectionContainer('bg-surface-dark', 'no-padding')}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="py-16"
        >
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-white/50">
            Roller vi tillsätter
          </p>
          <div className="relative">
            <InfiniteSlider speed={30} gap={48}>
              {roles.map((role) => (
                <span
                  key={role}
                  className="whitespace-nowrap text-3xl font-bold tracking-tight text-white/80 md:text-4xl lg:text-5xl"
                >
                  {role}
                </span>
              ))}
            </InfiniteSlider>
            <ProgressiveBlur
              className="pointer-events-none absolute top-0 left-0 h-full w-16"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute top-0 right-0 h-full w-16"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
