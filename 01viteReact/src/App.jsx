import { useState } from 'react'
import Chai from "./chai"

function App() {
  return (
    <>
    {/* // we can only return one element so either use div or we can use fragments */}
    {/* <div> */}
      <Chai/>
      {/* needs to be uppercase  */}
      <p>Chai</p>
    {/* </div> */}
    </>

  )
}

export default App
