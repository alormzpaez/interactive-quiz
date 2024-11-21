
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import './App.css'
import { AppRouter } from './router/AppRouter'

function App() {
  

  return (
    <MemoryRouter>
      <AppRouter/>
    </MemoryRouter>
  )
}

export default App
