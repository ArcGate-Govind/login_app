import React,{useState} from 'react'

const LI = () => {

   const [curd, setCurd] = useState('click')

    let short = ()=>{
       setCurd("Govind")
    }

  return (
    <div>
    
   <button>{curd}</button>
    
    </div>
  )
}

export default LI 