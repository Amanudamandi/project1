import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './page/Main'
import Features from './components/Features'

import './App.css'
const DiagonalShape = () => {
  return (
    <div className="relative w-48 h-48"> 
    <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[192px] border-b-red-500 border-l-[192px] border-l-transparent"></div>
  </div>
  );
};
function App() {
 

  return (
    <>
     <main>
      <Header />
     <Main/>
      <Footer />
     </main>
      
    </>
  )
}

export default App
