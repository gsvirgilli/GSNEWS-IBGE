import { useIBGE } from './contexts/ibgeContext'
import './App.css'
import Header from './components/Header'

function App() {
  const { apiData } = useIBGE();
  return (
    <>
    <Header />
    {apiData.map((ibge) => (
      <div key={ibge.id}>
        <p>{ibge.link}</p>
      </div>
    ))}
    </>
  )
}

export default App
