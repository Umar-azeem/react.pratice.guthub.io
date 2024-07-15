import { useState,useMemo } from "react";
import Select from 'react-select';  
import countryList from "react-select-country-list";
import './App.css';

function App() {
  const [age, setAge] = useState();
  const [print, setPrint] = useState();
  const [value,setValue] = useState('')
  const option = useMemo (()=>countryList(),[])
  const changeHandler = value =>{
    setValue(value)
  }


  
   function showOutputFunctionForVote() {
    const showValue = 
       age >= 18 ? "You are eligible to vote." : "you are note eligible for vote." 
       setPrint(showValue)
    
   }
    


  return (
    <>
     <section className='w-screen h-screen bg-black'>
     <div className='w-full h-auto flex  justify-center'>
      



      <input
        value={age} 
        onChange={(e) => setAge(e.target.value)}
        className="w-2/4 h-14 text-2xl m-10  font-bold rounded-full"
        placeholder="Enter your age" 
        type="number"
      />
      <Select options={option} value={value} onChange={changeHandler}/>
       <button onClick={showOutputFunctionForVote} className="color w-28 text-black hover:text-white hover:bg-blue-900 hover:translate-y-2 m-10 h-12 rounded-sm bg-blue-400" >show</button>
      <p className="w-2/4 h-10 text-2xl text-white m-10 text-start bg-gray-400 font-bold rounded-sm">{print}</p>
      </div>


     </section>
      
    
      
      

    </>
  );
}

export default App;
