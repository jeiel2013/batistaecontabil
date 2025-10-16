import ContatoSection from './components/ContatoSection'
import FooterSection from './components/FooterSection'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import ServicosSection from './components/ServicosSection'
import SobreSection from './components/SobreSection'

function App() {
  return (
    <>
      <Header />
      <main className='pt-20 scroll-smooth'>
        <HomeSection />
        <SobreSection />
        <ServicosSection />
        <ContatoSection />
        <FooterSection />
      </main>
    </>
  )
}

export default App
