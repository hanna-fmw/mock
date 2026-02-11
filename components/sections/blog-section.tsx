'use client'

import { sectionContainer, sectionWrapper } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    title: 'Interim HR och TA — från reaktiv lösning till strategiskt verktyg',
    excerpt:
      'Hur interimslösningar har utvecklats från en snabbfix till en strategisk tillgång för moderna organisationer.',
    date: '2025-12-15',
    href: '#',
    image: '/img1.jpg',
  },
  {
    title: 'Momentum 2026 — sju aktiva rekryteringsuppdrag',
    excerpt:
      'Vi går in i det nya året med full fart och delar med oss av vad som ligger framför oss.',
    date: '2026-01-10',
    href: '#',
    image: '/img2.jpg',
  },
  {
    title: 'Zoeys interna resa och resultat',
    excerpt:
      'Vi delar öppet med oss av vår resa, våra framgångar och lärdomar som bolag.',
    date: '2026-02-01',
    href: '#',
    image: '/img3.jpg',
  },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogSection() {
  return (
    <section id="zoey-hub" className={sectionWrapper('bg-background')}>
      <div className={sectionContainer()}>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Zoey Hub
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Insikter, nyheter och inspiration från HR-världen.
            </p>
          </div>
          <Link
            href="#"
            className="hidden items-center gap-2 text-sm font-medium transition-colors hover:text-muted-foreground md:flex"
          >
            Alla artiklar
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
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
                href={post.href}
                className="group flex h-full flex-col rounded-2xl border border-border p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
              >
                <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <time className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </time>
                <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                  <span>Läs mer</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Mobile "see all" link */}
        <div className="mt-8 md:hidden">
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-medium"
          >
            Alla artiklar
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
