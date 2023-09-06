import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterProvider } from "./context/filter.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  /* se envuelve la aplicacion con el contexto del filtro */
  <FilterProvider>
    <App />
  </FilterProvider>,
)
