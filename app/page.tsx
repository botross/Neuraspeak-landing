"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Globe2,
  Mic,
  ShieldCheck,
  Rocket,
  Brain,
  Zap,
  MessageCircle,
  PlayCircle,
  Star,
} from 'lucide-react';
import PrimaryCard from '@/components/PrimaryCard';
import HeroGradient from '@/components/HeroGradient';

const heroStats = [
  { value: '190+', label: 'languages & dialects live' },
  { value: '320ms', label: 'average translation latency' },
  { value: '4.9★', label: 'beta tester satisfaction score' },
];

const featurePillars = [
  {
    icon: Mic,
    title: 'Instant speech capture',
    description:
      'Expo-powered recognition transforms your voice into text in real time while our servers deliver context-aware translations instantly.',
    bullets: ['Optimized for accents & low-resource languages', 'Offline-friendly voice capture'],
  },
  {
    icon: Globe2,
    title: 'Immersive cultural insights',
    description:
      'Beyond literal translation, NeuraSpeak explains idioms, nuance, and etiquette so every conversation lands authentically.',
    bullets: ['Adaptive tone and formality controls', 'Cultural briefings in seconds'],
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-first architecture',
    description:
      'On-device transcription keeps raw audio yours, while enterprise-grade encryption protects every interaction end to end.',
    bullets: ['Transparent usage analytics', 'SOC2-ready infrastructure'],
  },
];

const experienceHighlights = [
  {
    title: 'Live conversation mode',
    copy:
      'Hold-to-speak interactions flow across languages without awkward pauses. Effortless for travel, negotiations, and rapid-fire collaboration.',
    icon: MessageCircle,
  },
  {
    title: 'Visual translation intelligence',
    copy:
      'Snap menus, signs, or documents. Our image pipeline extracts text, translates it, and layers in narrative summaries you can trust.',
    icon: Sparkles,
  },
  {
    title: 'Storytelling-quality voices',
    copy:
      'Tap any translation to hear premium neural narration tuned to your preferred voice profile—perfect for rehearsals and accessibility.',
    icon: PlayCircle,
  },
];

const testimonials = [
  {
    quote:
      '“NeuraSpeak replaced three separate apps for our global team. Translations feel human, and the cultural insights saved an entire product launch.”',
    name: 'Amelia Richter',
    role: 'VP Global Enablement, Sondera Labs',
  },
  {
    quote:
      '“I hosted a bilingual podcast episode in real time. Zero lag. The transcriptions were cleaner than dedicated studio tools.”',
    name: 'Luis Navarro',
    role: 'Creator & Host, Beyond Borders',
  },
  {
    quote:
      '“From the airport to investor meetings, NeuraSpeak has become my constant co-pilot. The voice playback is unbelievably lifelike.”',
    name: 'Nadia Khan',
    role: 'Founder, Atlas Ventures',
  },
];

const faqs = [
  {
    question: 'Which platforms are supported?',
    answer:
      'The NeuraSpeak mobile app is launching on iOS and Android simultaneously. A desktop companion UI is in private beta—join the waitlist inside the app to get early access.',
  },
  {
    question: 'How accurate is the speech recognition?',
    answer:
      'Our Expo integration runs native speech recognition tuned with domain hints, producing transcripts that reach 97–99% accuracy even in noisy environments.',
  },
  {
    question: 'Do you store my conversations?',
    answer:
      'By default, transcripts are encrypted at rest and retained for 30 days so you can revisit insights. You can enable auto-delete or opt out entirely from the privacy dashboard at any time.',
  },
  {
    question: 'Can teams collaborate inside NeuraSpeak?',
    answer:
      'Absolutely. Shared phrasebooks, brand tone controls, and analytics dashboards roll out with our Pro tier. Contact us for early access.',
  },
];

// Neural Network Particles Component
const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(96, 165, 250, 0.6)';
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
};

// Floating orbs component
const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            background: `radial-gradient(circle, ${
              i % 2 === 0 ? 'rgba(96, 165, 250, 0.15)' : 'rgba(168, 85, 247, 0.15)'
            }, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroY = useTransform(springScrollProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(springScrollProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(springScrollProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#000000] via-[#050510] to-[#0a0a1a] text-midnight-50">
      {/* Animated Neural Network Background */}
      <NeuralNetwork />
      
      {/* Floating Orbs */}
      <FloatingOrbs />
      
      {/* Enhanced Hero Gradient */}
      <HeroGradient />
      
      {/* Dynamic gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.3),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.25),_transparent_60%)]"
        animate={{
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-28 sm:px-10 lg:px-12">
        <motion.section
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 rounded-full border border-neon-300/40 bg-midnight-800/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-neon-200 backdrop-blur-xl shadow-[0_0_20px_rgba(96,165,250,0.3)]"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(96,165,250,0.3)',
                  '0 0 30px rgba(168,85,247,0.4)',
                  '0 0 20px rgba(96,165,250,0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="h-4 w-4 text-neon-200" />
              </motion.div>
              NeuraSpeak
            </motion.span>
          </motion.div>

          <motion.h1 
            className="mt-8 text-5xl font-bold leading-tight sm:text-6xl lg:text-[4.5rem] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Speak boldly across{' '}
            </motion.span>
            <br />
            <motion.span 
              className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              style={{
                backgroundSize: '200% auto',
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              every border
            </motion.span>
          </motion.h1>

          <motion.p 
            className="mx-auto mt-8 max-w-2xl text-lg text-midnight-200/90 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            NeuraSpeak is the ultra-premium live translation studio that hears, understands, and responds
            faster than you can switch languages. Crafted for founders, diplomats, creators, and every traveler
            rewriting what "global" means.
          </motion.p>

          {/* <motion.div 
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link
                href="https://apps.apple.com"
                className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(96,165,250,0.4)] transition-all hover:shadow-[0_0_50px_rgba(168,85,247,0.6)]"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <span className="relative">Download for iOS</span>
                <ArrowRight className="relative h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link
                href="https://play.google.com"
                className="inline-flex items-center gap-3 rounded-full border border-neon-300/50 bg-midnight-800/40 px-7 py-4 text-sm font-semibold text-neon-200 backdrop-blur-xl transition hover:border-neon-300/80 hover:bg-midnight-800/60 hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]"
              >
                Coming to Android <Rocket className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div> */}

          <motion.div 
            className="mt-16 grid gap-6 sm:grid-cols-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative rounded-3xl border border-white/10 bg-midnight-800/30 px-6 py-8 backdrop-blur-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
                
                <div className="relative">
                  <motion.p 
                    className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="mt-3 text-sm uppercase tracking-wide text-midnight-300 group-hover:text-midnight-200 transition-colors">
                    {stat.label}
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_30px_rgba(96,165,250,0.2)]" />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 space-y-16"
        >
          <div className="text-center sm:max-w-3xl sm:mx-auto">
            <motion.span 
              className="text-xs font-semibold uppercase tracking-[0.3em] text-neon-300/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Why leaders choose NeuraSpeak
            </motion.span>
            <motion.h2 
              className="mt-6 text-4xl font-bold sm:text-5xl bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Built for clarity, charisma, and unstoppable momentum
            </motion.h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featurePillars.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <PrimaryCard className="h-full relative border border-white/10 bg-gradient-to-br from-midnight-800/60 via-midnight-800/40 to-midnight-900/60 backdrop-blur-xl overflow-hidden">
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(96,165,250,0.1), transparent 70%)',
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    <div className="relative flex h-full flex-col gap-6">
                      <motion.span 
                        className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-neon-300/40 bg-gradient-to-br from-neon-300/20 to-purple-500/20 text-neon-200 shadow-[0_0_20px_rgba(96,165,250,0.3)]"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: '0 0 40px rgba(96,165,250,0.5)',
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <Icon className="h-7 w-7" />
                      </motion.span>

                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="mt-4 text-sm text-midnight-200/90 leading-relaxed group-hover:text-midnight-100 transition-colors">
                          {feature.description}
                        </p>
                      </div>

                      <ul className="mt-auto space-y-3 text-sm text-midnight-200">
                        {feature.bullets.map((bullet, bulletIndex) => (
                          <motion.li 
                            key={bullet} 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 + bulletIndex * 0.1 }}
                          >
                            <motion.span 
                              className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                              whileHover={{ scale: 1.5 }}
                              transition={{ type: 'spring', stiffness: 400 }}
                            />
                            <span className="group-hover:text-midnight-100 transition-colors">{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Border glow effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_40px_rgba(96,165,250,0.15)]" />
                  </PrimaryCard>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <PrimaryCard className="h-full relative border border-white/10 bg-gradient-to-br from-midnight-800/70 via-midnight-900/60 to-midnight-800/50 backdrop-blur-xl overflow-hidden">
              {/* Animated background effect */}
              <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                animate={{
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <div className="relative flex flex-col gap-8">
                <motion.span 
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-neon-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Experience blueprint
                </motion.span>

                <motion.h3 
                  className="text-4xl font-bold sm:text-[2.5rem] leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  From idea to fluency in{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    three effortless steps
                  </span>
                </motion.h3>

                <div className="space-y-5 text-sm text-midnight-200">
                  {[
                    { icon: Zap, title: 'Capture', desc: 'Press and hold the mic anywhere in the app—NeuraSpeak listens locally, smoothing out noise, pauses, and filler so only key ideas remain.', delay: 0.2 },
                    { icon: Brain, title: 'Understand', desc: 'Our hybrid GPT-4o pipeline translates, refines, and explains context in fractions of a second, adapting to your tone, audience, and intent.', delay: 0.3 },
                    { icon: Star, title: 'Deliver', desc: 'Share transcripts, play lifelike audio, or hand someone your phone for instant bilingual chat. Every output is polished to sound like you—only smoother.', delay: 0.4 },
                  ].map((step, index) => (
                    <motion.div
                      key={step.title}
                      className="group relative rounded-2xl border border-white/10 bg-midnight-900/50 p-6 backdrop-blur-sm hover:border-neon-300/30 transition-all duration-300"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: step.delay }}
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      {/* Glow effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        style={{
                          backgroundSize: '200% 200%',
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                        }}
                      />

                      <div className="relative">
                        <div className="flex items-center gap-4 text-neon-200">
                          <motion.div
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 shadow-[0_0_20px_rgba(96,165,250,0.3)]"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <step.icon className="h-5 w-5" />
                          </motion.div>
                          <p className="text-lg font-bold uppercase tracking-wide">{step.title}</p>
                        </div>
                        <p className="mt-4 leading-relaxed text-midnight-200/90 group-hover:text-midnight-100 transition-colors">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </PrimaryCard>
          </motion.div>

          <div className="grid gap-6">
            {experienceHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05, x: -5 }}
                >
                  <PrimaryCard className="h-full group relative border border-white/10 bg-gradient-to-br from-midnight-900/50 to-midnight-800/40 backdrop-blur-xl overflow-hidden">
                    {/* Animated glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    <div className="relative flex items-start gap-4">
                      <motion.span 
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-neon-300/20 to-purple-500/20 text-neon-200 shadow-[0_0_15px_rgba(96,165,250,0.3)]"
                        whileHover={{ 
                          rotate: 180,
                          scale: 1.1,
                          boxShadow: '0 0 30px rgba(96,165,250,0.5)',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.span>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-midnight-50 group-hover:text-blue-100 transition-colors">
                          {item.title}
                        </h4>
                        <p className="mt-3 text-sm text-midnight-200/90 leading-relaxed group-hover:text-midnight-100 transition-colors">
                          {item.copy}
                        </p>
                      </div>
                    </div>
                  </PrimaryCard>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32"
        >
          <div className="text-center">
            <motion.span 
              className="text-xs font-semibold uppercase tracking-[0.3em] text-neon-300/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Voices from the field
            </motion.span>
            <motion.h2 
              className="mt-6 text-4xl font-bold sm:text-5xl bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Trusted by pioneers on every continent
            </motion.h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ perspective: 1000 }}
              >
                <PrimaryCard className="h-full group relative border border-white/10 bg-gradient-to-br from-midnight-900/60 to-midnight-800/40 backdrop-blur-xl overflow-hidden">
                  {/* Quote mark decoration */}
                  <motion.div
                    className="absolute -top-4 -right-4 text-9xl text-blue-500/10 font-serif"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    "
                  </motion.div>

                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="relative flex h-full flex-col gap-6">
                    <p className="text-sm text-midnight-200/90 leading-relaxed group-hover:text-midnight-100 transition-colors italic">
                      {testimonial.quote}
                    </p>

                    <div className="mt-auto pt-4 border-t border-white/10">
                      <motion.p 
                        className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                      >
                        {testimonial.name}
                      </motion.p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-midnight-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Border glow on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_40px_rgba(96,165,250,0.15)]" />
                </PrimaryCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32"
        >
          <motion.div 
            className="relative rounded-[40px] border border-neon-300/40 bg-gradient-to-br from-neon-300/15 via-midnight-900/70 to-midnight-900/95 p-10 sm:p-14 overflow-hidden backdrop-blur-xl"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Animated background elements */}
            <motion.div
              className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, 50, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
              animate={{
                x: [0, -30, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <motion.span 
                  className="inline-flex items-center gap-2 rounded-full border border-neon-300/50 bg-midnight-900/70 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.35em] text-neon-200 backdrop-blur-xl shadow-[0_0_20px_rgba(96,165,250,0.3)]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ShieldCheck className="h-4 w-4" />
                  </motion.div>
                  Security & Trust
                </motion.span>

                <motion.h3 
                  className="mt-8 text-4xl font-bold text-white sm:text-[2.5rem] leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Enterprise-grade protection for every whisper and headline moment
                </motion.h3>

                <motion.p 
                  className="mt-6 text-base text-midnight-200/90 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Role-based access, device fingerprinting, and AI-powered anomaly alerts keep your account safe.
                  Your translations, images, and usage data are always encrypted in transit and at rest.
                </motion.p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: Globe2, text: 'Zero raw audio ever leaves your device—only refined transcripts are processed securely in the cloud.', delay: 0.3 },
                  { icon: Brain, text: 'Dedicated compliance roadmap for HIPAA, GDPR, and SOC2 so regulated teams onboard with confidence.', delay: 0.4 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-midnight-900/80 px-6 py-5 text-sm text-midnight-200 backdrop-blur-sm hover:border-neon-300/30 transition-all duration-300"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: item.delay }}
                    whileHover={{ x: -5, scale: 1.02 }}
                  >
                    <motion.span 
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-300/20 to-purple-500/20 text-neon-200 shadow-[0_0_15px_rgba(96,165,250,0.3)]"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="h-5 w-5" />
                    </motion.span>
                    <span className="group-hover:text-midnight-100 transition-colors">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 space-y-12"
        >
          <div className="text-center">
            <motion.span 
              className="text-xs font-semibold uppercase tracking-[0.3em] text-neon-300/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              FAQs
            </motion.span>
            <motion.h2 
              className="mt-6 text-4xl font-bold sm:text-5xl bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Everything you're about to ask
            </motion.h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-5">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                className="group rounded-3xl border border-white/10 bg-gradient-to-br from-midnight-900/60 to-midnight-800/40 backdrop-blur-xl p-7 transition-all duration-300 hover:border-neon-300/30 hover:shadow-[0_0_30px_rgba(96,165,250,0.1)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <summary className="flex cursor-pointer items-center justify-between text-left text-base font-bold text-midnight-50 group-hover:text-blue-100 transition-colors">
                  {faq.question}
                  <motion.span 
                    className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-neon-300/10 text-neon-300 transition group-open:rotate-45 group-open:bg-neon-300/20"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                  >
                    <PlusIcon />
                  </motion.span>
                </summary>
                <motion.p 
                  className="mt-5 text-sm text-midnight-200/90 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              </motion.details>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-40 mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <PrimaryCard className="relative overflow-hidden border border-neon-300/40 bg-gradient-to-br from-neon-300/15 via-purple-500/10 to-midnight-900/95 px-10 py-16 sm:px-16 backdrop-blur-xl">
              {/* Epic animated background */}
              <motion.div
                className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl"
                animate={{
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl"
                animate={{
                  x: [0, -50, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.4, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Floating particles around CTA */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              <div className="relative mx-auto max-w-3xl text-center">
                <motion.h2 
                  className="text-4xl font-bold sm:text-[3.5rem] leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Ready to rewrite your{' '}
                  <motion.span 
                    className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    style={{
                      backgroundSize: '200% auto',
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    global story
                  </motion.span>
                  ?
                </motion.h2>

                <motion.p 
                  className="mt-6 text-base text-midnight-200/90 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Join thousands of leaders who already use NeuraSpeak for investor calls, press tours, remote
                  collaboration, and unforgettable adventures. Download today and bring the world into your voice.
                </motion.p>

                <motion.div 
                  className="mt-10 flex flex-wrap items-center justify-center gap-5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* <motion.div
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href="https://apps.apple.com"
                      className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-10 py-4 text-base font-bold text-white shadow-[0_0_40px_rgba(96,165,250,0.5)] transition-all hover:shadow-[0_0_60px_rgba(168,85,247,0.7)]"
                    >
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />
                      <span className="relative">Get NeuraSpeak for iOS</span>
                      <ArrowRight className="relative h-5 w-5 transition group-hover:translate-x-1" />
                    </Link>
                  </motion.div> */}

                  <motion.div
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href="mailto:hello@neuraspeak.co"
                      className="inline-flex items-center gap-3 rounded-full border-2 border-neon-300/60 bg-midnight-900/50 px-9 py-4 text-base font-bold text-neon-200 backdrop-blur-xl transition hover:border-neon-300 hover:bg-midnight-900/70 hover:shadow-[0_0_30px_rgba(96,165,250,0.4)]"
                    >
                      Talk to our team
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </PrimaryCard>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}

const PlusIcon = () => (
  <svg
    className="h-4 w-4 text-neon-300"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 3v10M13 8H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
