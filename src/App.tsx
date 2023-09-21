import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Recentes from './components/Recentes/Recentes'
import Release from './components/Release/Release'
import Favorites from './components/Favorites/Favorites'
import Notfound from './components/NotFound/NotFound'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/recentes" element={<Recentes />} />
        <Route path="/release" element={<Release />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path='/*' element={<Notfound />} />
    </Routes>
  )
}

export default App
