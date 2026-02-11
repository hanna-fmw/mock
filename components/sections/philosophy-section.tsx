'use client'

import { sectionContainer, sectionWrapper } from '@/lib/utils'
import { motion } from 'motion/react'

const values = [
  {
    title: 'Glädje',
    description:
      'Engagemang, tillhörighet och delaktighet skapar en modig och kreativ miljö där vi växer tillsammans.',
  },
  {
    title: 'Utveckling',
    description:
      'Det är mer spännande att testa än att inte testa. Nyfikenhet och kunskapsdelning driver oss framåt.',
  },
  {
    title: 'Enkelhet',
    description:
      'Vi är lösningsfokuserade med snabbt genomförande och flexibilitet inför alla utmaningar.',
  },
]

export default function PhilosophySection() {
  return (
    <section id="filosofi" className={sectionWrapper('bg-cream')}>
      <div className={sectionContainer('bg-cream')}>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-cream-foreground md:text-4xl lg:text-5xl">
            Vi har en filosofi
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream-foreground/70">
            En förändringsresa behöver en tydlig karta, men framförallt en
            motiverad besättning.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: index * 0.15,
              }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-cream-foreground md:text-3xl">
                {value.title}
              </h3>
              <p className="mt-4 text-cream-foreground/70">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
