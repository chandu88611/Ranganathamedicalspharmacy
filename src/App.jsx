import { useState } from 'react'
import Product from './components/Product'
import Sales from './components/Sales'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-xl sm:text-l">
       <h2>Sri Ranganatha Pharmaceuticles</h2>

      </div>
  <Sales/>
      
<Product/>
    </>
  )
}

export default App
