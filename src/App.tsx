import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Recentes from './components/Recentes'
import Release from './components/Release'
import Favorites from './components/Favorites'
import Notfound from './components/Notfound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/recentes" element={ <Recentes /> } />
        <Route path="/release" element={ <Release /> } />
        <Route path="/favorites" element={ <Favorites /> } />
      </Route>
      <Route path='/*' element={ <Notfound /> } />
    </Routes>
  )
}

export default App
