'use client';

import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { HotAirBalloon } from '@/components/HotAirBalloon';
import { LandscapeLayers } from '@/components/LandscapeLayers';
import { CloudLayers, CloudPassage } from '@/components/CloudLayers';
import { Birds } from '@/components/Birds';
import { StarsLayer } from '@/components/StarsLayer';
import { StatBanners } from '@/components/StatBanners';
import { SunlightRays, WindRibbons } from '@/components/AtmosphereEffects';

// Isomorphic layout effect to avoid Next.js SSR warnings
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroPinnedRef = useRef<HTMLDivElement | null>(null);
  const balloonWrapperRef = useRef<HTMLDivElement | null>(null);
  const balloonAeroRef = useRef<HTMLDivElement | null>(null);
  const balloonInnerRef = useRef<HTMLDivElement | null>(null);
  const balloonCloudShadowRef = useRef<HTMLDivElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Flight stage state for the Journey HUD
  const [flightPhase, setFlightPhase] = useState<'dawn' | 'day' | 'sunset' | 'dusk'>('dawn');
  const [altitude, setAltitude] = useState<number>(850);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [ctaModalOpen, setCtaModalOpen] = useState<boolean>(false);

  useIsomorphicLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize smooth scrolling with Lenis if reduced motion is not requested
    if (!prefersReducedMotion) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });

      lenis.on('scroll', ScrollTrigger.update);
      lenisRef.current = lenis;

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }

    const ctx = gsap.context(() => {
      // If user prefers reduced motion: render static layout
      if (prefersReducedMotion) {
        gsap.set('.headline-char', { opacity: 1, y: 0 });
        gsap.set('.headline-particle', { opacity: 0, scale: 0.2 });
        gsap.set(balloonWrapperRef.current, { opacity: 1, y: 0, scale: 1 });
        gsap.set(balloonCloudShadowRef.current, { opacity: 0.3 });
        gsap.set('#burner-flame-group', { opacity: 1 });
        gsap.set('#envelope-ignition-glow', { opacity: 0.32 });
        gsap.set('#flight-chapter-liftoff', { opacity: 1 });
        gsap.set('#sunrise-disc', { opacity: 0.82, y: '-8vh' });
        gsap.set('#sunrise-flare-overlay', { opacity: 0.22 });
        gsap.set('#sunlight-rays', { opacity: 0.18 });
        gsap.set('#wind-ribbons', { opacity: 0 });
        gsap.set('#envelope-light-dawn', { opacity: 0.5 });
        gsap.set('#envelope-light-day, #envelope-light-sunset, #envelope-light-dusk, #envelope-light-lantern-bounce', { opacity: 0 });
        gsap.set('.stat-banner-item', { opacity: 1, y: 0, scale: 1 });
        gsap.set('.headline-cloud-veil, .headline-glow-sweep', { opacity: 0 });
        document.querySelectorAll<HTMLElement>('.stat-number').forEach((el) => {
          el.textContent = el.getAttribute('data-target') || '0';
        });
        gsap.set('#sky-sunrise', { opacity: 1 });
        return;
      }

      // -------------------------------------------------------------
      // 1. INITIAL LOAD TIMELINE
      // -------------------------------------------------------------
      const tlInitial = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Step A: Sky, clouds & landscape fade in softly (opacity 0 -> 1, ~1s)
      tlInitial.fromTo(
        ['#sky-sunrise', '#clouds-bg', '#clouds-mid', '#clouds-fg', '#landscape-far', '#landscape-mid', '#landscape-near'],
        { opacity: 0 },
        { opacity: 1, duration: 1.0, stagger: 0.08 }
      );

      tlInitial.fromTo(
        balloonCloudShadowRef.current,
        { opacity: 0, scaleX: 0.65, scaleY: 0.8 },
        { opacity: 0.34, scaleX: 0.85, scaleY: 1, duration: 1.1 },
        '-=0.8'
      );

      // Step B: Reveal the welcome line, then the brand wordmark in a soft stagger.
      tlInitial.fromTo(
        '.headline-welcome-char',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.055,
          duration: 0.52,
          ease: 'power3.out',
        },
        '-=0.6'
      );
      tlInitial.fromTo(
        '.headline-brand-char',
        { opacity: 0, y: 24, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.065,
          duration: 0.72,
          ease: 'power3.out',
        },
        '-=0.3'
      );
      tlInitial.fromTo(
        '.headline-cloud-veil',
        { opacity: 0.9, xPercent: -110 },
        { opacity: 0, xPercent: 110, duration: 1.45, ease: 'power2.inOut' },
        '<-0.15'
      );
      tlInitial.fromTo(
        '.hero-brand-wordmark',
        { rotation: -3, transformOrigin: '50% 50%' },
        { rotation: 0, duration: 0.85, ease: 'back.out(1.7)' },
        '<'
      );
      tlInitial.fromTo(
        '.headline-glow-sweep',
        { opacity: 0, xPercent: -110 },
        { opacity: 0.9, xPercent: 0, duration: 0.35, ease: 'power2.out' },
        '>-0.35'
      );
      tlInitial.to(
        '.headline-glow-sweep',
        { opacity: 0, xPercent: 110, duration: 0.65, ease: 'power2.inOut' },
        '>-0.05'
      );
      // Step C: Balloon rises from below viewport into position (translateY 120px -> 0, scale 0.9 -> 1, ease "power2.out", ~1.5s)
      tlInitial.fromTo(
        balloonWrapperRef.current,
        { y: 130, scale: 0.9, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          onComplete: () => {
            // Balloon idle floating loop: slow float (translateY +-10px) and slight sway (rotate +-2deg) with yoyo repeat
            gsap.to(balloonInnerRef.current, {
              y: -10,
              duration: 3.2,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
            gsap.to(balloonInnerRef.current, {
              rotation: 1.8,
              duration: 4.2,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
            gsap.to('#cirrus-cloud-drift', {
              xPercent: -8,
              duration: 18,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
            gsap.to('#cloud-bank-left-drift', {
              xPercent: -2.5,
              yPercent: -1.5,
              duration: 11,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
            gsap.to('#cloud-bank-right-drift', {
              xPercent: 2.5,
              yPercent: 1.5,
              duration: 13,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
            gsap.to('#foreground-cloud-drift', {
              xPercent: -4,
              duration: 16,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
          },
        },
        '-=0.9'
      );
      tlInitial.fromTo(
        '#envelope-ignition-glow',
        { opacity: 0 },
        { opacity: 0.32, duration: 1.2, ease: 'power2.out' },
        '<'
      );

      // Step D: Stats and their count-ups enter together with a gentle stagger.
      const statsStart = Math.max(0, tlInitial.duration() - 0.8);
      tlInitial.addLabel('statsStart', statsStart);
      tlInitial.fromTo(
        '.stat-banner-item',
        { opacity: 0, y: 24, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.22,
          duration: 0.72,
          ease: 'power3.out',
        },
        'statsStart'
      );
      document.querySelectorAll<HTMLElement>('.stat-banner-item').forEach((item, index) => {
        const number = item.querySelector<HTMLElement>('.stat-number');
        if (!number) return;

        const target = Number(number.getAttribute('data-target') || '0');
        const counter = { value: 0 };
        tlInitial.to(
          counter,
          {
            value: target,
            duration: 1.2,
            ease: 'power3.out',
            onUpdate: () => {
              number.textContent = Math.round(counter.value).toString();
            },
          },
          statsStart + index * 0.22 + 0.1
        );
      });
      gsap.to('.hero-brand-wordmark', {
        y: -4,
        duration: 3.4,
        delay: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // -------------------------------------------------------------
      // 2. SCROLL-BASED ANIMATION (Master Timeline with ScrollTrigger)
      // -------------------------------------------------------------
      const mm = gsap.matchMedia();

      // Desktop layout (min-width: 768px)
      mm.add('(min-width: 768px)', () => {
        buildMasterTimeline(16, -12); // wider S-curve coordinates
      });

      // Mobile layout (max-width: 767px)
      mm.add('(max-width: 767px)', () => {
        buildMasterTimeline(6, -5); // compact S-curve coordinates
      });

      function buildMasterTimeline(sCurveRight: number, sCurveLeft: number) {
        // Aerodynamic wind turbulence setters
        const setAeroPitch = balloonAeroRef.current
          ? gsap.quickTo(balloonAeroRef.current, 'rotation', { duration: 0.55, ease: 'power2.out' })
          : () => {};
        const setAeroLift = balloonAeroRef.current
          ? gsap.quickTo(balloonAeroRef.current, 'y', { duration: 0.65, ease: 'power2.out' })
          : () => {};
        const setStreamerWindTilt = gsap.quickTo('#balloon-basket-streamers', 'rotation', {
          duration: 0.65,
          ease: 'power2.out',
        });

        const masterTl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=3600',
            pin: heroPinnedRef.current,
            scrub: 1,
            anticipatePin: 1,
            onUpdate: (self) => {
              const prog = self.progress;
              setScrollProgress(Math.round(prog * 100));

              // Aerodynamic Scroll-Velocity Wind Turbulence
              if (!prefersReducedMotion) {
                const velocity = self.getVelocity();
                const vFactor = Math.max(-1, Math.min(1, velocity / 1800));
                const pitch = vFactor * 6.5; // degrees tilt into wind
                const dragY = -Math.abs(vFactor) * 8; // drag displacement

                setAeroPitch(pitch);
                setAeroLift(dragY);
                setStreamerWindTilt(-pitch * 1.6); // streamers trail in wind
              }

              // Update flight phase and altitude HUD
              if (prog < 0.25) {
                setFlightPhase('dawn');
                setAltitude(Math.round(850 + prog * 4000));
              } else if (prog < 0.55) {
                setFlightPhase('day');
                setAltitude(Math.round(1850 + prog * 6000));
              } else if (prog < 0.8) {
                setFlightPhase('sunset');
                setAltitude(Math.round(4850 + (prog - 0.55) * 5000));
              } else {
                setFlightPhase('dusk');
                setAltitude(Math.round(7200 + (prog - 0.8) * 3500));
              }
            },
          },
        });

        // -----------------------------------------------------------
        // SEGMENT 1: LIFTOFF (Progress 0.0 -> 0.15)
        // -----------------------------------------------------------
        // Let the headline break apart with the scroll before it fades away.
        masterTl.to(
          '#hero-headline',
          { y: -28, duration: 0.24, ease: 'sine.inOut' },
          0
        );
        masterTl.to(
          '#hero-headline',
          { opacity: 0, duration: 0.06, ease: 'power1.in' },
          0.22
        );
        gsap.utils.toArray<HTMLElement>('.headline-char').forEach((char, index) => {
          const driftX = Math.sin(index * 2.17 + 0.6) * 170;
          const driftY = Math.cos(index * 1.73 + 0.3) * 205;
          const driftZ = 180 + ((index * 83) % 360);
          const driftRotation = Math.sin(index * 2.41 + 1) * 210;
          const start = 0.012 + (index % 5) * 0.003;
          const particles = char.querySelectorAll<HTMLElement>('.headline-particle');

          masterTl.fromTo(
            char,
            { x: 0, y: 0, z: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, opacity: 1 },
            {
              x: driftX,
              y: driftY,
              z: driftZ,
              rotation: driftRotation,
              rotationX: driftRotation * 0.42,
              rotationY: -driftRotation * 0.3,
              scale: 0.28,
              opacity: 0,
              duration: 0.235,
              ease: 'sine.inOut',
              transformOrigin: '50% 50%',
              transformPerspective: 700,
            },
            start
          );

          particles.forEach((particle, particleIndex) => {
            const angle = particleIndex * 1.26 + index * 0.71;
            const burstX = Math.cos(angle) * (26 + (particleIndex % 3) * 11);
            const burstY = Math.sin(angle) * (24 + (particleIndex % 2) * 14);
            const particleStart = start + 0.035 + particleIndex * 0.004;

            masterTl.fromTo(
              particle,
              { x: 0, y: 0, z: 0, xPercent: -50, yPercent: -50, scale: 0.2, opacity: 0 },
              {
                x: burstX,
                y: burstY,
                z: 30 + particleIndex * 14,
                scale: 1,
                opacity: 0.9,
                duration: 0.09,
                ease: 'power2.out',
                transformPerspective: 500,
              },
              particleStart
            );
            masterTl.to(
              particle,
              {
                x: burstX * 2.4 + driftX * 0.12,
                y: burstY * 2.4 + driftY * 0.12,
                z: 90 + particleIndex * 18,
                scale: 0.15,
                opacity: 0,
                duration: 0.12,
                ease: 'sine.in',
              },
              particleStart + 0.09
            );
          });
        });
        masterTl.fromTo(
          '.hero-brand-wordmark',
          { color: '#f59e0b' },
          { color: '#fb7185', duration: 0.16, ease: 'sine.inOut' },
          0
        );
        masterTl.to(
          '#stat-banners-container',
          { opacity: 0, y: -50, duration: 0.12, ease: 'power2.in' },
          0
        );
        masterTl.to(
          '#scroll-cue',
          { opacity: 0, y: -20, duration: 0.08, ease: 'power1.out' },
          0
        );

        // Near landscape drops fast
        masterTl.to(
          '#landscape-near',
          { yPercent: 65, opacity: 0.2, duration: 0.22, ease: 'power1.in' },
          0
        );
        masterTl.to(
          balloonCloudShadowRef.current,
          { y: '2vh', scaleX: 0.72, opacity: 0.28, duration: 0.22 },
          0
        );

        const chapters = [
          { id: '#flight-chapter-liftoff', start: 0.015, end: 0.14 },
        ];

        chapters.forEach(({ id, start, end }) => {
          masterTl.fromTo(
            id,
            { opacity: 0, y: 18, scale: 0.96, filter: 'blur(6px)' },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              duration: 0.035,
              ease: 'power2.out',
            },
            start
          );
          masterTl.to(
            id,
            { opacity: 0, y: -10, filter: 'blur(4px)', duration: 0.045, ease: 'power1.in' },
            end
          );
        });

        // The nearby cloud banks curl away from the balloon as it lifts off.
        masterTl.to(
          '#cloud-bank-left',
          {
            xPercent: -42,
            yPercent: -8,
            rotation: -2.5,
            transformOrigin: 'center center',
            duration: 0.34,
            ease: 'power2.inOut',
          },
          0.015
        );
        masterTl.to(
          '#cloud-bank-right',
          {
            xPercent: 42,
            yPercent: -8,
            rotation: 2.5,
            transformOrigin: 'center center',
            duration: 0.34,
            ease: 'power2.inOut',
          },
          0.015
        );
        masterTl.fromTo(
          ['#cloud-curl-left', '#cloud-curl-right'],
          { opacity: 0, strokeDashoffset: 1 },
          {
            opacity: 0.7,
            strokeDashoffset: 0,
            duration: 0.15,
            stagger: 0.025,
            ease: 'power1.out',
          },
          0.04
        );
        masterTl.to(
          ['#cloud-curl-left', '#cloud-curl-right'],
          { opacity: 0, duration: 0.12, ease: 'power1.in' },
          0.2
        );

        // -----------------------------------------------------------
        // SEGMENT 2: DAWN TO DAY & CLIMB (Progress 0.12 -> 0.48)
        // -----------------------------------------------------------
        masterTl.fromTo(
          '#sunrise-disc',
          { opacity: 0.45, y: '16vh', scale: 0.76 },
          {
            opacity: 1,
            y: '-18vh',
            scale: 1,
            duration: 0.38,
            ease: 'sine.inOut',
          },
          0.04
        );
        masterTl.fromTo(
          '#sunrise-flare-overlay',
          { opacity: 0, y: '8vh', scaleX: 0.72 },
          {
            opacity: 0.72,
            y: '-10vh',
            scaleX: 1.08,
            duration: 0.24,
            ease: 'sine.out',
          },
          0.08
        );
        masterTl.to(
          '#sunrise-flare-overlay',
          { opacity: 0, scaleX: 1.18, duration: 0.18, ease: 'sine.in' },
          0.34
        );
        masterTl.fromTo(
          '#sunlight-rays',
          { opacity: 0.02, rotation: -3, scale: 0.9, transformOrigin: '38% 68%' },
          {
            opacity: 0.38,
            rotation: 2,
            scale: 1.06,
            duration: 0.3,
            ease: 'sine.inOut',
          },
          0.08
        );
        masterTl.to(
          '#sunlight-rays',
          { opacity: 0.08, rotation: 4, duration: 0.18, ease: 'sine.inOut' },
          0.38
        );

        // Sky cross-fade: Sunrise -> Bright Day
        masterTl.to('#sky-sunrise', { opacity: 0, duration: 0.28 }, 0.14);
        masterTl.to('#sky-day', { opacity: 1, duration: 0.28 }, 0.14);

        // Balloon Dynamic Lighting: Dawn peach -> Bright Day high sun specular
        masterTl.to('#envelope-light-dawn', { opacity: 0, duration: 0.28 }, 0.14);
        masterTl.to('#envelope-light-day', { opacity: 0.75, duration: 0.28 }, 0.14);

        // Balloon S-curve to top right & scale down (high altitude perspective)
        masterTl.to(
          balloonWrapperRef.current,
          {
            x: `${sCurveRight}vw`,
            y: '-14vh',
            scale: 0.76,
            rotation: -3.5,
            duration: 0.32,
            ease: 'sine.inOut',
          },
          0.14
        );
        masterTl.to(
          balloonCloudShadowRef.current,
          {
            x: `${sCurveRight * 0.45}vw`,
            y: '-3vh',
            scaleX: 0.78,
            scaleY: 0.9,
            opacity: 0.24,
            duration: 0.32,
            ease: 'sine.inOut',
          },
          0.14
        );

        // Parallax layers
        masterTl.to('#landscape-mid', { yPercent: 28, duration: 0.35 }, 0.1);
        masterTl.to('#landscape-far', { yPercent: 14, duration: 0.35 }, 0.1);
        masterTl.to('#clouds-bg', { yPercent: -12, xPercent: -10, duration: 0.35 }, 0.1);
        masterTl.to('#clouds-mid', { yPercent: -28, xPercent: 14, duration: 0.35 }, 0.1);
        masterTl.to('#clouds-fg', { yPercent: 40, xPercent: -18, duration: 0.35 }, 0.1);
        masterTl.fromTo(
          '#wind-ribbons',
          { opacity: 0, xPercent: -5, yPercent: 4 },
          { opacity: 0.52, xPercent: 0, yPercent: 0, duration: 0.08, ease: 'sine.out' },
          0.12
        );
        masterTl.fromTo(
          '#wind-ribbon-upper',
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 0.2, ease: 'sine.inOut' },
          0.14
        );
        masterTl.fromTo(
          '#wind-ribbon-middle',
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 0.22, ease: 'sine.inOut' },
          0.18
        );
        masterTl.fromTo(
          '#wind-ribbon-lower',
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 0.2, ease: 'sine.inOut' },
          0.22
        );
        masterTl.to(
          '#wind-ribbons',
          { opacity: 0.3, xPercent: 4, yPercent: -3, duration: 0.18, ease: 'sine.inOut' },
          0.48
        );
        masterTl.to('#wind-ribbons', { opacity: 0, duration: 0.12 }, 0.66);

        masterTl.fromTo(
          '#cloud-flythrough-left',
          { opacity: 0, xPercent: -14, yPercent: 7 },
          { opacity: 0.9, xPercent: 10, yPercent: -4, duration: 0.28, ease: 'sine.inOut' },
          0.22
        );
        masterTl.fromTo(
          '#cloud-flythrough-right',
          { opacity: 0, xPercent: 14, yPercent: 5 },
          { opacity: 0.82, xPercent: -10, yPercent: -5, duration: 0.28, ease: 'sine.inOut' },
          0.22
        );
        masterTl.to(
          ['#cloud-flythrough-left', '#cloud-flythrough-right'],
          { opacity: 0, duration: 0.08, ease: 'power1.in' },
          0.44
        );

        // Daytime milestone: Birds flock sweeps across
        masterTl.fromTo(
          '#birds-flock',
          { x: '-20vw', y: '10vh', opacity: 0 },
          { x: '115vw', y: '-5vh', opacity: 1, duration: 0.28, ease: 'power1.inOut' },
          0.2
        );
        masterTl.to('#birds-flock', { opacity: 0, duration: 0.08 }, 0.42);

        // -----------------------------------------------------------
        // SEGMENT 3: DAY TO GOLDEN SUNSET (Progress 0.48 -> 0.78)
        // -----------------------------------------------------------
        // Sky cross-fade: Bright Day -> Golden Sunset
        masterTl.to('#sky-day', { opacity: 0, duration: 0.26 }, 0.48);
        masterTl.to('#sky-sunset', { opacity: 1, duration: 0.26 }, 0.48);

        // Balloon Dynamic Lighting: Bright Day -> Golden Sunset rim glow
        masterTl.to('#envelope-light-day', { opacity: 0, duration: 0.26 }, 0.48);
        masterTl.to('#envelope-light-sunset', { opacity: 0.85, duration: 0.26 }, 0.48);

        // Balloon S-curve sweeps across to center-left & scales up (drifting closer)
        masterTl.to(
          balloonWrapperRef.current,
          {
            x: `${sCurveLeft}vw`,
            y: '2vh',
            scale: 1.08,
            rotation: 3.8,
            duration: 0.3,
            ease: 'sine.inOut',
          },
          0.48
        );
        masterTl.to(
          balloonCloudShadowRef.current,
          {
            x: `${sCurveLeft * 0.48}vw`,
            y: '2vh',
            scaleX: 1.28,
            scaleY: 0.72,
            opacity: 0.42,
            duration: 0.3,
            ease: 'sine.inOut',
          },
          0.48
        );

        // Parallax continued
        masterTl.to('#landscape-mid', { yPercent: 48, duration: 0.3 }, 0.48);
        masterTl.to('#landscape-far', { yPercent: 24, duration: 0.3 }, 0.48);
        masterTl.to('#clouds-bg', { yPercent: -22, xPercent: -18, duration: 0.3 }, 0.48);
        masterTl.to('#clouds-mid', { yPercent: -45, xPercent: 24, duration: 0.3 }, 0.48);

        // Lantern turns on as twilight nears
        masterTl.to('#lantern-glow-halo', { opacity: 0.85, duration: 0.2 }, 0.58);

        // -----------------------------------------------------------
        // SEGMENT 4: GOLDEN SUNSET TO STARRY DUSK & CLOSING STATE (Progress 0.78 -> 1.0)
        // -----------------------------------------------------------
        // Sky cross-fade: Golden Sunset -> Starry Dusk
        masterTl.to('#sky-sunset', { opacity: 0, duration: 0.22 }, 0.76);
        masterTl.to('#sky-dusk', { opacity: 1, duration: 0.22 }, 0.76);

        // Balloon Dynamic Lighting: Sunset -> Midnight Indigo moonlight & lantern bounce
        masterTl.to('#envelope-light-sunset', { opacity: 0, duration: 0.22 }, 0.76);
        masterTl.to('#envelope-light-dusk', { opacity: 0.85, duration: 0.22 }, 0.76);
        masterTl.to('#envelope-light-lantern-bounce', { opacity: 0.85, duration: 0.18 }, 0.82);

        // Stars & Crescent Moon fade in and twinkle
        masterTl.to('#stars-container', { opacity: 1, duration: 0.22 }, 0.78);
        masterTl.fromTo(
          '#finale-constellation path',
          { opacity: 0, strokeDashoffset: 1 },
          { opacity: 0.78, strokeDashoffset: 0, duration: 0.09, stagger: 0.025, ease: 'power1.out' },
          0.785
        );
        masterTl.fromTo(
          '.constellation-star',
          { opacity: 0, scale: 0.3 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.06,
            stagger: 0.012,
            ease: 'back.out(2)',
          },
          0.81
        );

        // Balloon gently centers under the starry sky
        masterTl.to(
          balloonWrapperRef.current,
          {
            x: '0vw',
            y: '-7vh',
            scale: 1.0,
            rotation: 0,
            duration: 0.24,
            ease: 'sine.out',
          },
          0.76
        );
        masterTl.to(
          balloonCloudShadowRef.current,
          {
            x: '0vw',
            y: '-1vh',
            scaleX: 0.92,
            scaleY: 0.8,
            opacity: 0.16,
            duration: 0.24,
            ease: 'sine.out',
          },
          0.76
        );

        // Lantern shines at maximum luminescence
        masterTl.to('#lantern-glow-halo', { opacity: 1, duration: 0.15 }, 0.82);

        // Closing state (Inside the same hero): message + CTA button fade in
        masterTl.fromTo(
          '#closing-state',
          { opacity: 0, y: 50, pointerEvents: 'none' },
          {
            opacity: 1,
            y: 0,
            pointerEvents: 'auto',
            duration: 0.2,
            ease: 'power3.out',
          },
          0.84
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  // Smooth scroll back to dawn / top
  const handleScrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.6 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main
      ref={containerRef}
      className="relative w-full bg-slate-950 font-sans text-slate-100 overflow-x-hidden"
    >
      {/* ============================================================== */}
      {/* PINNED HERO CONTAINER (100vh viewport, pinned for scroll journey) */}
      {/* ============================================================== */}
      <section
        ref={heroPinnedRef}
        role="region"
        aria-label="Hot Air Balloon Scroll Journey Hero"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-between select-none"
      >
        {/* ============================================================ */}
        {/* STACKED SKY GRADIENT LAYERS (GPU-Accelerated Cross-Fade via Opacity) */}
        {/* ============================================================ */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Layer 1: Sunrise / Dawn (Active at start) */}
          <div
            id="sky-sunrise"
            className="absolute inset-0 w-full h-full will-change-opacity gpu-layer opacity-100"
            style={{
              background:
                'linear-gradient(180deg, #93c5fd 0%, #c4b5fd 24%, #fbcfe8 50%, #fed7aa 76%, #ffedd5 100%)',
            }}
          >
            {/* Sunrise Morning Glow Horizon Orb */}
            <div
              className="absolute w-[600px] h-[600px] rounded-full bottom-[-120px] right-[10%] opacity-70 blur-3xl"
              style={{
                background:
                  'radial-gradient(circle, rgba(254, 215, 170, 0.95) 0%, rgba(251, 146, 60, 0.4) 40%, transparent 70%)',
              }}
            />
          </div>

          {/* Layer 2: Bright Day (Fades in during mid flight) */}
          <div
            id="sky-day"
            className="absolute inset-0 w-full h-full will-change-opacity gpu-layer opacity-0"
            style={{
              background:
                'linear-gradient(180deg, #0284c7 0%, #38bdf8 32%, #7dd3fc 68%, #bae6fd 100%)',
            }}
          >
            {/* High Sun Glow */}
            <div
              className="absolute w-[500px] h-[500px] rounded-full top-[-80px] left-[35%] opacity-65 blur-2xl"
              style={{
                background:
                  'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(254, 240, 138, 0.4) 30%, transparent 65%)',
              }}
            />
          </div>

          {/* Layer 3: Golden Sunset (Fades in during evening sweep) */}
          <div
            id="sky-sunset"
            className="absolute inset-0 w-full h-full will-change-opacity gpu-layer opacity-0"
            style={{
              background:
                'linear-gradient(180deg, #2e1065 0%, #581c87 22%, #9d174d 46%, #c2410c 70%, #f59e0b 92%, #fef08a 100%)',
            }}
          >
            {/* Sunset Horizon Flare */}
            <div
              className="absolute w-[650px] h-[650px] rounded-full bottom-[-160px] left-[20%] opacity-85 blur-3xl"
              style={{
                background:
                  'radial-gradient(circle, rgba(254, 240, 138, 0.95) 0%, rgba(249, 115, 22, 0.7) 30%, rgba(190, 24, 93, 0.25) 60%, transparent 75%)',
              }}
            />
          </div>

          {/* Layer 4: Starry Dusk / Night (Fades in for closing state) */}
          <div
            id="sky-dusk"
            className="absolute inset-0 w-full h-full will-change-opacity gpu-layer opacity-0"
            style={{
              background:
                'linear-gradient(180deg, #020617 0%, #0b1120 28%, #111827 55%, #1e1b4b 82%, #2e1065 100%)',
            }}
          >
            {/* Cosmic Nebula Haze */}
            <div
              className="absolute w-full h-full top-0 left-0 opacity-40 blur-3xl"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 25%, rgba(99, 102, 241, 0.25) 0%, rgba(168, 85, 247, 0.15) 35%, transparent 65%)',
              }}
            />
          </div>
        </div>

        <div
          id="sunrise-disc"
          aria-hidden="true"
          className="absolute left-[38%] top-[62%] z-[5] h-[clamp(180px,30vw,380px)] w-[clamp(180px,30vw,380px)] -translate-x-1/2 rounded-full opacity-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,235,0.98) 0%, rgba(255,226,155,0.92) 18%, rgba(255,166,89,0.52) 42%, rgba(255,135,88,0.12) 62%, transparent 72%)',
            filter: 'blur(2px) drop-shadow(0 0 45px rgba(255, 194, 117, 0.8))',
          }}
        />

        <div
          id="sunrise-flare-overlay"
          aria-hidden="true"
          className="absolute inset-x-0 top-[64%] z-[9] h-[20vh] opacity-0 pointer-events-none"
          style={{ mixBlendMode: 'screen' }}
        >
          <div
            className="absolute left-[-20%] top-1/2 h-[2px] w-[140%] -translate-y-1/2"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,206,139,0.08) 28%, rgba(255,246,212,0.82) 50%, rgba(255,187,112,0.18) 72%, transparent 100%)',
              boxShadow: '0 0 24px 5px rgba(255, 194, 117, 0.32)',
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
            style={{
              background:
                'radial-gradient(circle, rgba(255,250,226,0.8) 0%, rgba(255,194,117,0.32) 42%, transparent 72%)',
            }}
          />
          <div
            className="absolute left-[32%] top-[28%] h-3 w-3 rounded-full blur-[2px]"
            style={{ background: 'rgba(255,239,198,0.75)' }}
          />
          <div
            className="absolute left-[68%] top-[66%] h-5 w-5 rounded-full blur-[4px]"
            style={{ background: 'rgba(255,188,120,0.58)' }}
          />
        </div>

        {/* ============================================================ */}
        {/* PARALLAX VISUAL LAYERS (Hills, Clouds, Birds, Stars) */}
        {/* ============================================================ */}
        {/* Stars and Moon (Visible at Dusk) */}
        <StarsLayer className="z-[3]" />

        {/* Far Mountains Layer */}
        <LandscapeLayers className="z-[4]" />

        <SunlightRays />

        {/* Clouds: Background Wispy Cirrus & Mid Cumulus */}
        <CloudLayers className="z-[6]" />

        {/* Daytime Milestone: Migratory Birds */}
        <Birds className="z-[8]" />
        <WindRibbons />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[28%] z-[22] flex h-12 justify-center pointer-events-none"
        >
          {[
            { id: 'flight-chapter-liftoff', title: 'Liftoff' },
          ].map((chapter) => (
            <span
              key={chapter.id}
              id={chapter.id}
              className="absolute rounded-full border border-white/30 bg-slate-950/25 px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-[0_0_30px_rgba(255,255,255,0.25)] backdrop-blur-md opacity-0"
            >
              {chapter.title}
            </span>
          ))}
        </div>

        <div
          ref={balloonCloudShadowRef}
          id="balloon-cloud-shadow"
          aria-hidden="true"
          className="absolute left-1/2 top-[68%] z-[10] h-[clamp(48px,10vh,110px)] w-[min(58vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] opacity-0 blur-2xl pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.34) 0%, rgba(15, 23, 42, 0.22) 35%, rgba(15, 23, 42, 0) 74%)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* ============================================================ */}
        {/* HERO INITIAL CONTENT (Letter-Spaced Headline & Metrics) */}
        {/* ============================================================ */}
        <header className="relative z-10 pt-10 sm:pt-14 md:pt-16 px-4 text-center max-w-6xl mx-auto flex flex-col items-center">
          <h1
            id="hero-headline"
            aria-label="Welcome ITZ FIZZ"
            className="flex flex-col items-center justify-center gap-2 uppercase will-change-transform"
          >
            <span
              aria-hidden="true"
              className="flex items-center gap-3 text-[clamp(1rem,2.2vw,1.4rem)] font-black tracking-[0.3em] text-amber-950 drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)]"
            >
              <span className="h-[2px] w-8 sm:w-14 bg-gradient-to-r from-transparent to-amber-700/80" />
              <span className="inline-flex whitespace-nowrap [text-shadow:0_1px_0_rgba(255,255,255,0.5)]">
                {'WELCOME'.split('').map((char, idx) => (
                  <span key={idx} className="headline-char headline-welcome-char inline-block opacity-0 will-change-transform">
                    {char}
                    {Array.from({ length: 5 }, (_, particleIndex) => (
                      <span key={particleIndex} aria-hidden="true" className="headline-particle" />
                    ))}
                  </span>
                ))}
              </span>
              <span className="h-[2px] w-8 sm:w-14 bg-gradient-to-l from-transparent to-amber-700/80" />
            </span>

            <span
              aria-hidden="true"
              className="hero-brand-wordmark relative isolate flex items-center gap-[0.24em] whitespace-nowrap text-[clamp(2.75rem,8vw,6rem)] font-black leading-[0.95] tracking-[0.035em] text-indigo-950 drop-shadow-[0_3px_0_rgba(255,255,255,0.5)] drop-shadow-[0_9px_22px_rgba(30,27,75,0.22)]"
            >
              <span className="inline-flex whitespace-nowrap">
                {'ITZ'.split('').map((char, idx) => (
                  <span key={idx} className="headline-char headline-brand-char inline-block opacity-0 will-change-transform">
                    {char}
                    {Array.from({ length: 5 }, (_, particleIndex) => (
                      <span key={particleIndex} aria-hidden="true" className="headline-particle" />
                    ))}
                  </span>
                ))}
              </span>
              <span className="inline-flex whitespace-nowrap">
                {'FIZZ'.split('').map((char, idx) => (
                  <span key={idx} className="headline-char headline-brand-char inline-block opacity-0 will-change-transform">
                    {char}
                    {Array.from({ length: 5 }, (_, particleIndex) => (
                      <span key={particleIndex} aria-hidden="true" className="headline-particle" />
                    ))}
                  </span>
                ))}
              </span>
              <span aria-hidden="true" className="headline-cloud-veil" />
              <span aria-hidden="true" className="headline-glow-sweep" />
            </span>
          </h1>

        </header>

        {/* ============================================================ */}
        {/* HOT AIR BALLOON (Centered Visual Hero Element) */}
        {/* ============================================================ */}
        <div
          ref={balloonWrapperRef}
          id="hot-air-balloon-wrapper"
          className="absolute top-[44%] sm:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[15] w-[240px] sm:w-[280px] md:w-[320px] lg:w-[350px] will-change-transform gpu-layer opacity-0"
        >
          {/* Aerodynamic Wind Turbulence Pitch & Drag Wrapper */}
          <div
            ref={balloonAeroRef}
            className="w-full h-full will-change-transform"
            style={{ transformOrigin: '50% 55%' }}
          >
            {/* Inner float wrapper to decouple idle sway from scroll S-curve and aerodynamic wind */}
            <div ref={balloonInnerRef} className="w-full h-full">
              <HotAirBalloon />
            </div>
          </div>
        </div>

        <CloudPassage className="z-[16]" />

        {/* ============================================================ */}
        {/* IMPACT METRICS (Hanging Banners attached below balloon) */}
        {/* ============================================================ */}
        <div className="relative z-[20] pb-10 sm:pb-14">
          <StatBanners />
        </div>

        {/* ============================================================ */}
        {/* CLOSING STATE (Settles in Hero under Starry Sky) */}
        {/* ============================================================ */}
        <div
          id="closing-state"
          className="absolute inset-0 z-[30] flex flex-col items-center justify-center px-4 text-center opacity-0 pointer-events-none will-change-transform"
        >
          <div className="max-w-3xl mx-auto backdrop-blur-2xl bg-slate-950/60 p-6 sm:p-10 rounded-3xl border border-white/15 shadow-[0_20px_70px_rgba(0,0,0,0.6)]">
            {/* Glowing Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Flight Horizon Reached
            </div>

            {/* Closing Headline Message */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.08em] sm:tracking-[0.14em] text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-rose-100 to-sky-200 drop-shadow-[0_8px_30px_rgba(255,255,255,0.25)] uppercase mb-4">
              Thank You for Flying with ITZ FIZZ
            </h2>

            {/* Aspirational Subtext */}
            <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-300 font-normal leading-relaxed tracking-wide mb-8">
              The journey may end here, but there are always more skies to explore. We hope to see you on your next flight.
            </p>

            {/* Simple CTA Button (No linked page, lives inside hero) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setCtaModalOpen(true)}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-amber-500 bg-[length:200%_auto] hover:bg-right font-bold text-white tracking-widest uppercase text-sm shadow-[0_0_35px_rgba(245,158,11,0.5)] hover:shadow-[0_0_50px_rgba(244,63,94,0.7)] transition-all duration-500 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Start Your Flight</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {/* Replay Flight / Scroll to Top Button */}
              <button
                type="button"
                onClick={handleScrollToTop}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer"
              >
                <svg className="w-4 h-4 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>Fly Again</span>
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* JOURNEY HUD & ALTITUDE CONTROLS */}
        {/* ============================================================ */}
        <aside
          aria-label="Journey HUD"
          className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-xl bg-slate-900/60 border border-white/15 text-xs text-white/90 shadow-xl"
        >
          {/* Phase Indicator */}
          <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <span
              className={`w-2 h-2 rounded-full ${
                flightPhase === 'dawn'
                  ? 'bg-rose-400'
                  : flightPhase === 'day'
                  ? 'bg-sky-400'
                  : flightPhase === 'sunset'
                  ? 'bg-amber-400'
                  : 'bg-indigo-400 animate-pulse'
              }`}
            />
            <span>{flightPhase}</span>
          </div>

          <span className="text-white/30">•</span>

          {/* Altitude readout */}
          <div className="font-mono text-white/80 tabular-nums">
            ALT: <span className="font-semibold text-amber-300">{altitude.toLocaleString()}</span> FT
          </div>

          <span className="text-white/30">•</span>

          {/* Progress bar */}
          <div className="w-16 h-1.5 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-rose-400 rounded-full transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <span className="font-mono text-[10px] text-white/60">{scrollProgress}%</span>
        </aside>

        {/* ============================================================ */}
        {/* INITIAL SCROLL CUE */}
        {/* ============================================================ */}
        <div
          id="scroll-cue"
          className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2 pointer-events-none select-none text-slate-800 dark:text-slate-200"
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] drop-shadow-sm">
            Scroll to Ascend
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-700/60 dark:border-white/50 flex items-start justify-center p-1">
            <div className="w-1.5 h-2 rounded-full bg-amber-500 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SIMPLE INTERACTIVE CTA CONFIRMATION MODAL */}
      {/* ============================================================== */}
      {ctaModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
        >
          <div className="relative max-w-md w-full bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-center shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setCtaModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              ✕
            </button>

            {/* Glowing Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/20 to-rose-500/20 border border-amber-400/40 mx-auto flex items-center justify-center mb-4 text-amber-300 text-2xl shadow-inner">
              🎈
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide uppercase mb-2">
              Flight Cleared For Takeoff
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Thank you for embarking on this flight with <strong>ITZ FIZZ</strong>. Let&apos;s turn visionary heights into your brand&apos;s new baseline.
            </p>

            <button
              type="button"
              onClick={() => setCtaModalOpen(false)}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-bold tracking-wider uppercase text-xs shadow-lg hover:brightness-110 transition-all cursor-pointer"
            >
              Ready To Soar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
