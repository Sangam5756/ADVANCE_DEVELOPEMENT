import React, { useState } from 'react'
import Header from './components/Header'

const App = () => {
  const [title,setTitle] = useState();

  const updateTitle = ()=>{
    setTitle(Math.random()*100+10)
  }

  return (
    <div>
      <button onClick={updateTitle}>Update Title</button>
      <Header title={title}/>
      <Header title={"sangammundhe4"}/>
      <Header title={"sangammundhe4"}/>
      <Header title={"sangammundhe4"}/>
      <Header title={"sangammundhe4"}/>
      <Header title={"sangammundhe4"}/>
      <Header title={"sangammundhe4"}/>
      <Header title={"sangammundhe4"}/>
      <Header title={"sangammundhe4"}/>
      <Header title={"sangammundhe4"}/>
    </div>
  )
}

export default App