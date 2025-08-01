'use client'
import { About } from './components/about/About'
import { Hero } from './components/hero/Hero'
import { Navbar } from './components/navbar/navbar'
import { Feature } from './components/feature/Feature'
import { Contact } from './components/contact/Contact'
import { Footer } from './footer/Footer'


export default function Home() {
  return <div>
    <section id="HomePage">
      <Navbar />
      <Hero />
    </section>
    <Feature />
    <section id="About"><About /></section>
    <section id="Contact"><Contact /></section>

    {/* <Test />
    <Test /> */}
  </div>
}
