import { useState, useMemo } from "react";
import Select from 'react-select';  
import countryList from "react-select-country-list";
import './App.css';

function App() {
  const [age, setAge] = useState();
  const [print, setPrint] = useState();
  const [value, setValue] = useState('');
  const option = useMemo(() => countryList().getData(), [])
  const changeHandler = value => {
    setValue(value)
  }

  function showOutputFunctionForVote() {
    const showValue = 
      age >= 18 && value?.value === "PK" ? "You are eligible to vote." : "You are not eligible to vote.";
    setPrint(showValue)
  }

  return (
    <>
      <section className='w-screen h-screen bg-stone-600'>
        <div className="flex flex-row p-28 ">
          <div className='w-2/4 h-auto flex flex-col justify-center'>
            <div className="space-y-3">
              <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age" type="number" className="py-3 px-4 block w-96 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
            </div>
            <Select className="w-96 mt-7" options={option} value={value} onChange={changeHandler}/>
            <button onClick={showOutputFunctionForVote} className="color w-96 text-black hover:text-white hover:bg-blue-900 hover:translate-y-2 mt-10 h-12 rounded-sm bg-blue-400">show</button>
          </div>
          <div className="w-96 flex justify-center">
            <p className="w-96 h-48 text-2xl text-cyan-500 text-center bg-lime-800 font-bold rounded-md">{print}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
