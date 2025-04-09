import { NavBar } from '../NavComp/NavBar'
import { ContactForm,  Hero,   Project, Skills,  } from './Hero'

export const MainPage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Skills/>
      <Project/>
      <ContactForm/>
  
    </div>
  )
}
