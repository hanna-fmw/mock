'use client'

import { sectionContainer, sectionWrapper } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

const services = [
  {
    title: 'Rekrytera',
    description:
      'Vi hjälper er att hitta rätt kandidater genom en grundlig och personlig rekryteringsprocess anpassad efter era behov.',
    href: '#',
  },
  {
    title: 'Anlita konsult',
    description:
      'Behöver ni tillfällig HR- eller TA-kompetens? Vi erbjuder erfarna konsulter som snabbt kan bidra i er organisation.',
    href: '#',
  },
  {
    title: 'Bli konsult',
    description:
      'Är du en erfaren HR- eller TA-specialist? Bli en del av Zoeys nätverk och arbeta med spännande uppdrag.',
    href: '#',
  },
  {
    title: 'Lediga jobb',
    description:
      'Se våra aktuella tjänster och hitta din nästa karriärmöjlighet inom HR och Talent Acquisition.',
    href: '#',
  },
]

export default function ServicesSection() {
  return (
    <section id="tjanster" className={sectionWrapper('bg-background')}>
      <div className={sectionContainer()}>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Vad kan vi hjälpa er med?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Oavsett var ni befinner er i er HR-resa har vi tjänster som passar
            just er.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: index * 0.1,
              }}
            >
              <Link
                href={service.href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg md:p-8"
              >
                <div>
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium">
                  <span>Läs mer</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
