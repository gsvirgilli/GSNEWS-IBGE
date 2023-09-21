import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AppProvider } from './contexts/IbgeProvider.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>,
)
