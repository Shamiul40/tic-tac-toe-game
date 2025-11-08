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
    
    function handleClick (i) {
     const nextSquare = square.slice();
     nextSquare[i]= "X";
     setSquare(nextSquare);
     console.log("clicked")
    }

  return (
    <>
      <div className="flex">
        <Square value={square[0]} onSquareChange={()=>handleClick(0)} />
        <Square value={square[1]} onSquareChange={()=>handleClick(1)}/>
        <Square value={square[2]}  onSquareChange={()=>handleClick(2)}/>
      </div>
      <div className="flex">
        <Square value={square[3]} onSquareChange={()=>handleClick(3)}/>
        <Square value={square[4]} onSquareChange={()=>handleClick(4)}/>
        <Square value={square[5]} onSquareChange={()=>handleClick(5)}/>
      </div>
      <div className="flex">
        <Square value={square[6]} onSquareChange={()=>handleClick(6)}/>
        <Square value={square[7]} onSquareChange={()=>handleClick(7)}/>
        <Square value={square[8]} onSquareChange={()=>handleClick(8)}/>
      </div>
    </>
  );
}

export default Board;
