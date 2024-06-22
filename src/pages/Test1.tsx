import React, {useEffect, useState} from "react"


const Test1 = () => {
  const[val ,setVal] =useState(0)
  useEffect(()=>{

  },[val])
  return (
    <>
    <h1>Incremented</h1>
    <button onClick={()=>{
      setVal(val+1)
    }}>click</button>
    </>
  )
}

export default Test1