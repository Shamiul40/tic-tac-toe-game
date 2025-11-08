import { useState } from "react";
import "./App.css";



function Square({value, onSquareChange}) {


 
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      onClick={onSquareChange}
    >
      {value}
    </button>
  );
};

function Board() {

    const [square, setSquare]= useState([Array(9).fill(null)]); 
    
    const handleClick =()=>{
      console.log("clicked")
    }

  return (
    <>
      <div className="flex">
        <Square value={square[1]} onSquareChange={handleClick} />
        <Square value={square[2]} />
        <Square value={square[3]} />
      </div>
      <div className="flex">
        <Square value={square[4]}/>
        <Square value={square[5]}/>
        <Square value={square[6]}/>
      </div>
      <div className="flex">
        <Square value={square[7]}/>
        <Square value={square[8]}/>
        <Square value={square[9]}/>
      </div>
    </>
  );
}

export default Board;
