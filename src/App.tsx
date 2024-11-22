
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import './App.css'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  

  return (
    <Provider store ={store}>
      <MemoryRouter>
        <AppRouter/>
      </MemoryRouter>
    </Provider>
  )
}

export default App
