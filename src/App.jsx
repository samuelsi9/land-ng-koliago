import { useCallback, useEffect, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import DiscountBanner from './components/DiscountBanner.jsx'
import Footer from './components/Footer.jsx'
import AndroidModal from './components/AndroidModal.jsx'

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [androidOpen, setAndroidOpen] = useState(false)
  const heroRef = useRef(null)

  const closeAndroid = useCallback(() => {
    setAndroidOpen(false)
  }, [])

  useEffect(() => {
    document.body.style.overflow = androidOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [androidOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeAndroid()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeAndroid])

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        const ent = entries[0]
        if (!ent.isIntersecting) document.body.classList.add('sticky')
        else document.body.classList.remove('sticky')
      },
      { root: null, threshold: 0, rootMargin: '-80px' },
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
      document.body.classList.remove('sticky')
    }
  }, [])

  useEffect(() => {
    const flex = document.createElement('div')
    flex.style.display = 'flex'
    flex.style.flexDirection = 'column'
    flex.style.rowGap = '1px'
    flex.appendChild(document.createElement('div'))
    flex.appendChild(document.createElement('div'))
    document.body.appendChild(flex)
    const supported = flex.scrollHeight === 1
    flex.remove()
    if (!supported) document.body.classList.add('no-flexbox-gap')
    return () => document.body.classList.remove('no-flexbox-gap')
  }, [])

  const onDocumentClick = useCallback((e) => {
    const link = e.target.closest?.('a')
    if (!link) return
    const href = link.getAttribute('href')
    if (href && (href.startsWith('http://') || href.startsWith('https://'))) return
    if (link.classList.contains('js-android-download-zip')) return
    if (link.classList.contains('js-android-download-modal')) {
      e.preventDefault()
      setAndroidOpen(true)
      setNavOpen(false)
      return
    }
    if (href === '#') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      if (link.classList.contains('main-nav-link')) setNavOpen(false)
      return
    }
    if (href && href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) target.scrollIntoView({ behavior: 'smooth' })
      if (link.classList.contains('main-nav-link')) setNavOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('click', onDocumentClick)
    return () => document.removeEventListener('click', onDocumentClick)
  }, [onDocumentClick])

  const closeNav = useCallback(() => setNavOpen(false), [])

  return (
    <>
      <Header
        navOpen={navOpen}
        onToggleNav={() => setNavOpen((o) => !o)}
        onNavLinkClick={closeNav}
      />
      <main>
        <Hero sectionRef={heroRef} />
        <HowItWorks />
      </main>
      <DiscountBanner />
      <Footer />
      <AndroidModal open={androidOpen} onClose={closeAndroid} />
    </>
  )
}
