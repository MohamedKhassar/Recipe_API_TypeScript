import { useState } from "react"

export default function App() {
  const [counter,setCounter]=useState(0)
  const inc=()=>{
    setCounter(prev=>prev+=1)
  }
  return (
    <div>
      {counter}<br/>
      <button onClick={inc}>add</button>
    </div>
  )
}
