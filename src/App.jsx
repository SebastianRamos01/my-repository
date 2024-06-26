import { AnimatePresence } from "framer-motion"
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from "./pages/Home"
import Work from "./pages/Work"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Single from "./pages/Single"
import { useEffect } from "react"

function App() {

  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={ <Home/> }></Route>
            <Route path="/about" element={ <About/> }></Route>
            <Route path="/work" element={ <Work/> }></Route>
            <Route path="/work/:title" element={ < Single/> }></Route>
            <Route path="/contact" element={ <Contact/> }></Route>
          </Routes>
      </AnimatePresence>
    </>
  )
}

export default App

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
