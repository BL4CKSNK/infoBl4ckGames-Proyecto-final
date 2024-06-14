import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter} from 'react-router-dom';
import "primereact/resources/themes/lara-light-cyan/theme.css"

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <HashRouter>
      <App />
  </HashRouter>

)
