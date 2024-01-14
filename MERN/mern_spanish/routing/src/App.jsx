import './App.css'
import LukeAPIwalker from './components/LukeAPIwalker'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:paramId?' element={<LukeAPIwalker/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
