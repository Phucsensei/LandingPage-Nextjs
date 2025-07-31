'use client'
import { About } from './components/about/About'
import { Hero } from './components/hero/Hero'
import { Navbar } from './components/navbar/navbar'


export default function Home() {
  return <div>
    <section id="HomePage">
      <Navbar />
      <Hero />
    </section>
    <section id="About"><About /></section>
    <section id="About">sdsdsdsd</section>
    <section id="Contact">sdsdsdsd</section>
    <section id="Blog">sdsdsdsd</section>
    {/* <Test />
    <Test /> */}
  </div>
}
