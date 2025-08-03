import { Suspense } from 'react'
import { Navbar } from './components/navbar/navbar'
import Hero from './components/hero/Hero'
import Feature from './components/feature/Feature'
import About from './components/about/About'
import { Contact } from './components/contact/Contact'

export default function Home() {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <Feature />
      </Suspense>

      <section id="About">
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      </section>

      <section id="Contact">
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      </section>
    </div>
  )
}