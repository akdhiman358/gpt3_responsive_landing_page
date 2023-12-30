import { useState } from 'react'
import './App.css'
import { Blog,Features,Header,Footer,WhatGPT3,Possibility } from './containers'
import {Brand,Article,CTA,Feature,Navbar} from './components'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
       <div className="gradient__bg">
        <Navbar />
        <Header />
        
       </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
       
      </div>
      
    </>
  )
}

export default App
