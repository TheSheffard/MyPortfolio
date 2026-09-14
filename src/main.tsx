import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home, { AllProjects, ProjectDetails } from './Components/Home/Home'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'

function DetailRoute() {
  const { slug = '' } = useParams()
  return <ProjectDetails slug={slug} />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/project/:slug" element={<DetailRoute />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
