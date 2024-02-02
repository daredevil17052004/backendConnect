import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState('')

  useEffect(()=>{
    async function getApi(){
      try{
        const response = await axios.get("https://backendconnext.onrender.com/")
        console.log(response);
        setCount(response.data)
      }catch(err){
        console.log('error in receiving');
      }
    }

    getApi()
  },[])

  return (
    <>
      
      {
        count.mes
      }
    </>
  )
}

export default App
