import { useState,useMemo } from "react";
import Select from 'react-select';  
import countryList from "react-select-country-list";
import './App.css';

function App() {
  const [age, setAge] = useState();
  const [print, setPrint] = useState();
  const [value,setValue] = useState('');
  const option = useMemo ( ()=> countryList().getData(),[])
  const changeHandler = value =>{
    setValue(value)
  }
 

  
   function showOutputFunctionForVote() {
    const showValue = 
       age >= 18 && value === "pakistan" ? "You are eligible to vote." : "you are note eligible for vote." 
       setPrint(showValue)
       
    
   }
    


  return (
    <>
     <section className='w-screen h-screen bg-black'>
     <div className='w-full h-auto flex  justify-center'>
      
     <div class=" m-10 space-y-3">
  <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age" type="number" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
    </div>
      <Select className="w-96 m-10" options={option} value={value} onChange={changeHandler}/>
       <button onClick={showOutputFunctionForVote} className="color w-28 text-black hover:text-white hover:bg-blue-900 hover:translate-y-2 m-10 h-12 rounded-sm bg-blue-400" >show</button>
      </div>
      <p className="w-2/4 h-10 text-2xl text-white m-10 text-start bg-gray-400 font-bold rounded-sm">{print}</p>


     </section>
      
    
      
      

    </>
  );
}

export default App;
