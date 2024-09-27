import { useState } from "react"


function App() {
  const [color, setcolor] = useState("olive")  

  return (
      <div className = "w-full  h-screen duration-200"  
      style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 
      inset-x-0 px-2'>

          <div className="flex flex-wrap justify-center bg-white px-3 py-2 rounded-3xl gap-4 text-white shadow-lg">
            <button className="px-3 py-2 rounded-3xl"
            style={{backgroundColor: "red"}}
            onClick={ ()=> setcolor("red")}
            >
            Red</button>
            <button className="px-3 py-2 rounded-3xl"
            style={{backgroundColor: "blue"}}
            onClick={ ()=> setcolor("blue")}
            >
            Blue</button>
            <button className="px-3 py-2 rounded-3xl"
            style={{backgroundColor: "purple"}}
            onClick={ ()=> setcolor("purple")}
            >
            Purple</button>
            <button className="px-3 py-2 rounded-3xl"
            style={{backgroundColor: "navy"}}
            onClick={ ()=> setcolor("navy")}
            >
            Navy</button>
            <button className="px-3 py-2 rounded-3xl"
            style={{backgroundColor: "orange"}}
            onClick={ ()=> setcolor("orange")}
            >
            Orange</button>
            <button className="px-3 py-2 rounded-3xl"
            style={{backgroundColor: "green"}}
            onClick={ ()=> setcolor("green")}
            >
            Green</button>
            <button className="px-3 py-2 rounded-3xl"
            style={{backgroundColor: "Gray"}}
            onClick={ ()=> setcolor("gray")}
            >
            Gray</button>
            <button className="px-3 py-2 rounded-3xl"
            style={{backgroundColor: "Pink"}}
            onClick={ ()=> setcolor("pink")}
            >
            Pink</button>
            <button className="px-3 py-2 rounded-3xl"
            style={{backgroundColor: "olive"}}
            onClick={ ()=> setcolor("olive")}
            >
            Olive</button>
            <button className="px-3 py-2 rounded-3xl"
            style={{backgroundColor: "brown"}}
            onClick={ ()=> setcolor("brown")}
            >
            Brown</button>
          </div>
        </div>  
      </div>
  )
}

export default App
