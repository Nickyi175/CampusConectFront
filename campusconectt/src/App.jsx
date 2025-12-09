import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeneralBtn from './components/btn/btn'

function App() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("Eliminar");

  //hook useMemo
  function ChangeTitle(count) {
    return useMemo(() =>{
      return count % 2 === 0 ? "Editar" : "Crear";
    }, [count])
  }


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          //callbacks
          /* setCount((prev)=>{
            const nuevoCount = prev +1;
            setTitle(nuevoCount % 2 === 0 ? "Editar" : "Crear")
            return nuevoCount;
          }); */
          

          //propuesto
          setCount(count => count + 1);
          /* setCount((count) => count + 1);
          if (count % 2 == 0) {
            setTitle("Editar");
          } else if (count %2 !== 0){
            setTitle("Crear");
          } */
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <GeneralBtn title={ChangeTitle(count)}></GeneralBtn>
    </>
  )
}

export default App
