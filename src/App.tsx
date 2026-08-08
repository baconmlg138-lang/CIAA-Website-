import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ConnectPage from './pages/ConnectPage'
import EventsPage from './pages/EventsPage'
import HomePage from './pages/HomePage'
import ProgramsPage from './pages/ProgramsPage'
import WhatWeDoPage from './pages/WhatWeDoPage'
import WhoWeArePage from './pages/WhoWeArePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/who-we-are" element={<WhoWeArePage />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/connect" element={<ConnectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
