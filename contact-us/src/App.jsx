import './App.css'
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import ContactHeader from './Components/Contact-Header/ContactHeader'
import ContactForm from './Components/Contact-Form/ContactForm'


function App() {

  return (
    <>
      <div>
        <Navigation />
        <main className='main-container'>
          <ContactHeader />
          <ContactForm />
        </main>
        <Footer />


      </div>

    </>
  )
}

export default App
