"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { hero } from "@/lib/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-dark-green pt-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(29,158,117,0.25), transparent 45%), radial-gradient(circle at 80% 70%, rgba(93,202,165,0.18), transparent 50%)",
        }}
        aria-hidden="true"
      />
      <motion.div className="container relative py-20 text-center" variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="mb-5 text-sm font-bold uppercase tracking-widest text-teal-light">
          For CHROs, CEOs & Operations Leaders in Manufacturing
        </motion.p>
        <motion.h1
          variants={item}
          className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-off-white sm:text-5xl md:text-6xl"
        >
          {hero.headline}
        </motion.h1>
        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-off-white/80 sm:text-xl"
        >
          {hero.subheadline}
        </motion.p>
        <motion.div variants={item} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={hero.primaryCta.href} variant="primary" size="lg" showArrow>
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="ghost" size="lg">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
