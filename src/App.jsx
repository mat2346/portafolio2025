


import Hero from './components/hero'
import About from './components/About'
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/navbar";
function App() {
  return (
    <>
       <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Hero/>  
        <About/>
      
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
