'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const plans = [
  {
    tag: 'Package',
    name: 'PRO PLAN',
    price: '99$',
    period: '/Month',
    accent: 'border-red-500/80',
    popular: false,
    features: [
      'All-access gym membership',
      'Personalized workout plan',
      'Access to all group classes',
      'Progress tracking dashboard',
      'Locker & shower access',
      'Email support',
    ],
  },
  {
    tag: 'Package',
    name: 'CUSTOM PLAN',
    price: '149$',
    period: '/Month',
    accent: 'border-orange-500/90',
    popular: true,
    features: [
      'Everything in Pro Plan',
      '1:1 coaching with expert trainer',
      'Custom diet & nutrition plan',
      'Weekly progress check-ins',
      'Priority support',
      'Access to VIP training zone',
    ],
  },
  {
    tag: 'Package',
    name: 'BEGINNER PLAN',
    price: '49$',
    period: '/Month',
    accent: 'border-gray-500/60',
    popular: false,
    features: [
      'Gym access in off-peak hours',
      'Beginner-friendly classes',
      'Basic fitness assessment',
      'Community events access',
      'App-based workout tracking',
      'Chat support',
    ],
  },
]

const tools = [
  'Calorie Counter',
  'BMI Calculator',
  'Workout Planner',
  'Goal Setting Tool',
  'Measurement Tracker',
]

const trainers = [
  { name: 'Sam Cole', role: 'Personal Trainer' },
  { name: 'Michael Harris', role: 'Strength Coach' },
  { name: 'John Anderson', role: 'Crossfit Coach' },
  { name: 'Tom Blake', role: 'Bodybuilding Coach' },
]

const blogPosts = [
  '5 Essential Exercises For Building Muscle',
  'The Ultimate Guide To Fat Loss',
  'Best Recovery Routines After Workout',
  '10 Tips To Stay Consistent With Training',
]

const faqs = [
  {
    q: 'What Is FitMaker And How Can It Help Me Reach My Fitness Goals?',
    a: 'FitMaker is your all‑in‑one fitness platform with modern workout plans, expert coaches, and community support to help you stay consistent and reach your goals faster.',
  },
  {
    q: 'How Do I Get Started With A Workout Plan On FitMaker?',
    a: 'Choose a plan that matches your level, complete a quick assessment, and our coaches and app will guide you step by step.',
  },
  {
    q: 'What Is Included In The Custom Plan?',
    a: 'Custom training & nutrition plans, direct access to your coach, weekly check‑ins, and full access to all gym facilities.',
  },
  {
    q: 'Can I Change My Plan After Signing Up?',
    a: 'Yes, you can upgrade or downgrade your plan at any time from your account settings or by talking to our front desk.',
  },
  {
    q: 'What Kind Of Support Can I Expect From My Trainer?',
    a: 'Your trainer will provide guidance on form, plan adjustments, nutrition suggestions, and ongoing motivation.',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120305] via-[#150708] to-black text-white">
      {/* Top blurred background circle similar to Figma */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 flex justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-red-700/40 blur-[130px]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-sm bg-red-600" />
            <div className="leading-tight">
              <span className="block text-xs text-gray-300">FitMaker</span>
              <span className="block text-[10px] text-gray-500">
                Transform Your Body
              </span>
            </div>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {['Home', 'Programs', 'Coaching', 'Membership', 'About Us'].map(
              (item) => (
                <button
                  key={item}
                  className="text-[13px] text-gray-300 transition hover:text-white"
                >
                  {item}
                </button>
              ),
            )}
          </div>
          <div className="flex items-center gap-3 text-[13px]">
            <button className="hidden rounded-full border border-red-500/70 px-4 py-1.5 text-red-400 transition hover:bg-red-600 hover:text-white md:inline-block">
              Log In
            </button>
            <button className="rounded-full bg-red-600 px-4 py-1.5 font-medium text-white shadow-lg shadow-red-800/40 transition hover:bg-red-500">
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-10">
        {/* HERO SECTION */}
        <section className="grid gap-10 lg:grid-cols-[1.4fr_minmax(0,1fr)]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-red-400">
              Achive Your
            </p>
            <h1 className="text-3xl font-extrabold leading-tight md:text-[36px]">
              <span className="block text-red-500">FITNESS GOALS</span>
              <span className="block text-[22px] text-gray-100">
                With FitMaker
              </span>
            </h1>
            <p className="max-w-xl text-[13px] leading-relaxed text-gray-300">
              Join the FitMaker Community and Transform Your Fitness Journey.
              Get Expert‑Guided and Personalized Plans, Group Workouts, and
              24/7 Support. Take Control of Your Health And Become The Best
              Version Of Yourself.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-red-600 px-6 py-2 text-sm font-semibold text-white shadow-md shadow-red-800/40 transition hover:bg-red-500">
                Start Your Journey
              </button>
              <button className="rounded-full border border-red-500/60 px-6 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-600 hover:text-white">
                Explore Programs
              </button>
            </div>
            <div className="mt-6 grid gap-4 text-[12px] text-gray-300 sm:grid-cols-4">
              <div>
                <p className="text-lg font-bold text-red-500">96%</p>
                <p>Client Satisfaction</p>
              </div>
              <div>
                <p className="text-lg font-bold text-red-500">+5</p>
                <p>Years Of Experience</p>
              </div>
              <div>
                <p className="text-lg font-bold text-red-500">+800</p>
                <p>Active Members</p>
              </div>
              <div>
                <p className="text-lg font-bold text-red-500">24/7</p>
                <p>Support Available</p>
              </div>
            </div>
          </motion.div>

          {/* Hero right card */}
          <motion.div
            variants={fadeInUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="relative rounded-3xl border border-red-500/30 bg-gradient-to-b from-red-800/60 via-red-900/40 to-black/80 p-5 shadow-[0_0_60px_rgba(248,113,113,0.45)]"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 px-6 pb-6 pt-10">
              <div className="absolute -left-6 -top-10 h-32 w-32 rounded-full bg-red-600/40 blur-3xl" />
              <div className="absolute -right-10 top-10 h-28 w-28 rounded-full bg-amber-500/40 blur-3xl" />
              <div className="relative flex flex-col items-center gap-3">
                <div className="h-36 w-36 rounded-full border-4 border-red-500/80 bg-gradient-to-tr from-red-800 via-red-500 to-amber-400 shadow-xl shadow-red-900/60" />
                <p className="text-xs uppercase tracking-[0.3em] text-gray-300">
                  +1300 Programs
                </p>
                <p className="text-center text-[13px] text-gray-300">
                  Crafted by professional trainers to maximize your results in
                  minimum time.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SERVICES SECTION */}
        <section className="mt-14">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="mb-6 text-center"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-red-400">
              Our Services
            </p>
            <p className="mt-1 text-[13px] text-gray-300">
              At FitMaker You Can Easily Access All Of Our Services. Take A Look
              At Them And Choose Which Best Fits Your Work.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-4 md:grid-cols-4"
          >
            {['Losing Weight', 'Building Muscle', 'Training At Home', 'Gym Plan'].map(
              (title, idx) => (
                <motion.div
                  key={title}
                  variants={fadeInUp}
                  custom={idx * 0.08}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group cursor-pointer rounded-xl border border-red-500/40 bg-gradient-to-b from-red-900/50 via-black/60 to-black/90 p-4 text-center text-sm shadow-lg shadow-black/40 transition"
                >
                  <div className="mb-3 h-28 rounded-lg bg-gradient-to-b from-red-500/40 via-red-700/20 to-black/80" />
                  <h3 className="mb-2 font-semibold text-gray-100">{title}</h3>
                  <button className="text-[11px] font-medium text-red-400 transition group-hover:text-white">
                    Learn More
                  </button>
                </motion.div>
              ),
            )}
          </motion.div>
        </section>

        {/* PLANS SECTION */}
        <section className="mt-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="mb-6 text-center"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-red-400">
              Our Plans
            </p>
            <p className="mt-1 text-[13px] text-gray-300">
              Select The Plan That Suits Your Fitness Goals And Let Our Expert
              Coaches Guide You Every Step Of The Way.
            </p>
          </motion.div>

          <div className="mb-5 flex justify-center gap-2 text-[11px]">
            <span className="rounded-full bg-red-600/80 px-3 py-1 text-white">
              Monthly
            </span>
            <span className="rounded-full bg-black/60 px-3 py-1 text-gray-400">
              Yearly
            </span>
            <span className="rounded-full bg-black/60 px-3 py-1 text-gray-400">
              Annually
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                custom={idx * 0.12}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative rounded-2xl border bg-gradient-to-b from-[#1a0507] via-[#140305] to-black p-5 text-[12px] shadow-lg shadow-black/50 ${plan.accent}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-4 py-1 text-[11px] font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
                  {plan.tag}
                </p>
                <h3 className="mt-1 text-lg font-bold text-gray-100">
                  {plan.name}
                </h3>
                <p className="mt-3 min-h-[72px] text-[11px] leading-relaxed text-gray-300">
                  Our {plan.name.toLowerCase()} is designed to maximize your
                  performance with structured workouts and expert guidance.
                </p>
                <ul className="mt-4 space-y-2 text-[11px] text-gray-300">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-red-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <span className="text-2xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-[11px] text-gray-400">
                      {plan.period}
                    </span>
                  </div>
                  <button className="rounded-full bg-red-600 px-4 py-1.5 text-[11px] font-semibold text-white shadow-md shadow-red-900/40 transition hover:bg-red-500">
                    Choose This Plan
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TOOLS SECTION */}
        <section className="mt-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mb-4"
          >
            <h2 className="text-sm font-semibold text-white">
              Our Fitness <span className="text-red-500">Tools</span>
            </h2>
            <p className="mt-1 text-[12px] text-gray-300">
              Access a variety of tools to help you reach your fitness goals
              more effectively.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-3 md:grid-cols-5"
          >
            {tools.map((tool, idx) => (
              <motion.div
                key={tool}
                variants={fadeInUp}
                custom={idx * 0.06}
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                className="group cursor-pointer rounded-xl border border-red-500/30 bg-gradient-to-br from-red-900/60 via-black to-black/90 p-4 text-center text-xs shadow-md shadow-black/60 transition"
              >
                <div className="mb-2 h-10 w-10 rounded-md bg-red-600/70" />
                <p className="font-semibold text-gray-100">{tool}</p>
                <p className="mt-1 text-[11px] text-gray-400 group-hover:text-gray-200">
                  Learn More
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* TESTIMONIAL + TRAINERS + BLOG + COMMUNITY + FAQ are collapsed into a long vertical layout */}
        <section className="mt-16 space-y-12">
          {/* Testimonial */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
          >
            <div className="rounded-2xl border border-red-500/40 bg-gradient-to-br from-red-900/60 via-[#1a0507] to-black p-5 text-[12px] shadow-lg shadow-black/60">
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-red-400">
                What Our <span className="text-white">Customers Say</span>
              </p>
              <p className="mb-4 text-[12px] text-gray-300">
                At This Part You Can See Few Of The Many Positive Reviews Of
                Our Customers.
              </p>
              <p className="mb-4 text-[13px] leading-relaxed text-gray-100">
                “FitMaker Has Been The Perfect Place For My Fitness Goals. The
                Supportive Environment & The Trainers Helped Me Stay Consistent
                And Motivated. I’ve Never Felt More Confident And Strong.”
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">Steven Howard</p>
                  <p className="text-[11px] text-gray-400">Fitness Enthusiast</p>
                </div>
                <div className="flex gap-2 text-[11px]">
                  <button className="rounded-full border border-red-500/60 px-3 py-1 text-gray-200 hover:bg-red-600 hover:text-white">
                    Prev
                  </button>
                  <button className="rounded-full bg-red-600 px-3 py-1 text-white hover:bg-red-500">
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* Highlight trainers mini card */}
            <div className="space-y-3 text-[12px]">
              <div className="rounded-2xl border border-white/10 bg-black/70 p-4">
                <p className="text-xs font-semibold text-white">
                  Meet Our <span className="text-red-500">Trainers</span>
                </p>
                <p className="mt-1 text-[11px] text-gray-300">
                  Professional trainers ready to guide you throughout your
                  journey.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {trainers.slice(0, 2).map((t) => (
                    <div
                      key={t.name}
                      className="rounded-lg bg-gradient-to-b from-red-900/60 via-black to-black/90 p-3"
                    >
                      <div className="mb-2 h-12 w-12 rounded-md bg-red-600/70" />
                      <p className="text-[12px] font-semibold text-gray-100">
                        {t.name}
                      </p>
                      <p className="text-[11px] text-gray-400">{t.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trainers grid */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="mb-4 flex items-baseline justify-between">
              <h2 className="text-sm font-semibold">
                Meet Our <span className="text-red-500">Trainers</span>
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {trainers.map((t) => (
                <div
                  key={t.name}
                  className="group cursor-pointer rounded-2xl border border-white/10 bg-gradient-to-b from-red-900/50 via-black to-black/90 p-4 text-[12px] shadow-md shadow-black/60 transition hover:-translate-y-2 hover:border-red-500/70"
                >
                  <div className="mb-3 h-24 rounded-lg bg-gradient-to-b from-red-600/60 via-red-900/40 to-black/80" />
                  <p className="font-semibold text-gray-100">{t.name}</p>
                  <p className="text-[11px] text-red-400">{t.role}</p>
                  <button className="mt-2 text-[11px] text-gray-300 transition group-hover:text-white">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Blog Posts */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="mb-4 flex items-baseline justify-between">
              <h2 className="text-sm font-semibold">
                Fitmaker <span className="text-red-500">Blog Posts</span>
              </h2>
              <button className="text-[11px] text-red-400 hover:text-red-300">
                View All
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {blogPosts.map((title) => (
                <div
                  key={title}
                  className="group cursor-pointer rounded-2xl border border-white/10 bg-gradient-to-b from-[#1b0507] via-black to-black p-3 text-[11px] shadow-md shadow-black/60 transition hover:-translate-y-2 hover:border-red-500/70"
                >
                  <div className="mb-3 h-24 rounded-lg bg-gradient-to-tr from-red-700/70 via-red-900/40 to-black/80" />
                  <p className="font-semibold text-gray-100">{title}</p>
                  <p className="mt-1 text-[11px] text-gray-400">
                    Expert Tips & Training
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Community + Signup */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
          >
            <div className="rounded-2xl border border-white/10 bg-black/70 p-5 text-[12px]">
              <h2 className="text-sm font-semibold">
                Join Our <span className="text-red-500">Fitness Community</span>
              </h2>
              <p className="mt-1 text-[11px] text-gray-300">
                Sign up now to access exclusive resources like new workout
                routines, support coaching, and a supportive community that will
                help you stay motivated and reach your fitness goals faster.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {['Workout Plans', 'Community Support', 'Exclusive Articles'].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-gradient-to-b from-red-900/60 via-black to-black/90 p-3"
                    >
                      <p className="text-[11px] font-semibold text-gray-100">
                        {item}
                      </p>
                      <p className="mt-1 text-[10px] text-gray-400">
                        Stay up to date and get better results with expert tips.
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="rounded-2xl border border-red-500/50 bg-gradient-to-b from-red-900/60 via-[#1a0507] to-black p-5 text-[12px] shadow-lg shadow-red-900/50">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Sign Up</h3>
                <button className="text-[11px] text-gray-300 hover:text-white">
                  Login
                </button>
              </div>
              <div className="space-y-3 text-[11px]">
                <input
                  placeholder="Full Name"
                  className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-xs text-white outline-none placeholder:text-gray-500 focus:border-red-500"
                />
                <input
                  placeholder="Email Address"
                  className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-xs text-white outline-none placeholder:text-gray-500 focus:border-red-500"
                />
                <input
                  placeholder="Phone Number"
                  className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-xs text-white outline-none placeholder:text-gray-500 focus:border-red-500"
                />
                <button className="mt-1 w-full rounded-md bg-red-600 py-2 text-xs font-semibold text-white shadow-md shadow-red-900/50 transition hover:bg-red-500">
                  Sign Up
                </button>
                <button className="w-full rounded-md border border-white/15 bg-black/40 py-2 text-xs text-gray-200 transition hover:border-red-500 hover:text-white">
                  Sign Up With Google
                </button>
              </div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="rounded-2xl border border-white/10 bg-black/80 p-5 text-[12px]"
          >
            <h2 className="mb-4 text-center text-sm font-semibold">FAQ</h2>
            <div className="space-y-2">
              {faqs.map((item, idx) => (
                <details
                  key={item.q}
                  className="group rounded-md border border-white/10 bg-black/60 p-3"
                  open={idx === 0}
                >
                  <summary className="flex cursor-pointer items-center justify-between text-[12px] text-gray-100">
                    <span>{item.q}</span>
                    <span className="ml-2 text-xs text-red-400 group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-2 text-[11px] text-gray-300">{item.a}</p>
                </details>
              ))}
            </div>
          </motion.div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/95 py-6 text-[11px] text-gray-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-red-600" />
            <span className="text-xs text-gray-200">FitMaker</span>
          </div>
          <p>© {new Date().getFullYear()} FitMaker. All Rights Reserved.</p>
          <div className="flex gap-4">
            <button className="hover:text-white">Privacy Policy</button>
            <button className="hover:text-white">Terms</button>
          </div>
        </div>
      </footer>
    </main>
  )
}
