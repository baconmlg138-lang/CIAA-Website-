import {
  Connect,
  Events,
  FiveWays,
  Footer,
  Gallery,
  Hero,
  Involve,
  Mission,
  Nav,
  Offerings,
  Verse,
} from './components'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Mission />
        <FiveWays />
        <Offerings />
        <Verse />
        <Events />
        <Involve />
        <Gallery />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
