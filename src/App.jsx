
import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'

const bottlesPromise = fetch('./bottles.json')
  .then(res => res.json());

function App() {

  return (
    <>
      <section id="center">

          <h1>Buy your water bottle</h1>
          <Suspense fallback = {<div>Loading...</div>}>
            <Bottles bottlesPromise={bottlesPromise} />
          </Suspense>
      </section>
    </>
  )
}

export default App
