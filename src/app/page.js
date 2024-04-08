import Image from 'next/image'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <div className="p-12">
        <Header />
        <Main />
      </div>

    </div>
  )
}
