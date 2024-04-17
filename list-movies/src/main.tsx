import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PendingContext } from './context/movie-list-context.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <PendingContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PendingContext>
)
