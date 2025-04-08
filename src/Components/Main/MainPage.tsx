import { NavBar } from '../NavComp/NavBar'
import { ContactForm, NewHeroSection, Project, Skills } from './Hero'

export const MainPage = () => {
  return (
    <div>
      <NavBar />
      <NewHeroSection />
      <Skills/>
      <Project/>
      <ContactForm/>
  
    </div>
  )
}
