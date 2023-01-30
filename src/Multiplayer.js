import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { changePlayer } from "./oyun/yazituraSlice";
function Multiplayer() {
    const dispatch = useDispatch();
    const[player1,setPlayer1]=useState("");
    const[player2,setPlayer2]=useState("");
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex flex-col md:w-2/5 w-full m-5 md:m-0 h-3/5 card-back p-9 rounded-md items-center shadow-inner shadow-lg ">
        <h1 className="text-white text-center md:text-4xl text-xl">
          Multiplayer Modu
        </h1>
        <div className="mt-20 flex justify-around w-full">
          <span className="text-2xl bg-slate-400 rounded-full p-3 block">
            1.Oyuncu
          </span>
          <span className="text-2xl bg-slate-400 rounded-full p-4 block">
            2.Oyuncu
          </span>
        </div>
        <div className="mt-5 flex justify-around w-full">
          <input
            id="player1"
            type="text"
            onChange={(e)=>setPlayer1(e.target.value)}
            class="block w-2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
          <input
            id="player2"
            type="text"
            onChange={(e)=>setPlayer2(e.target.value)}
            class="block w-2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div className="mt-20">
          <Link to="/playmulti" onClick={()=>{dispatch(changePlayer([player1,player2]))}} className="buttons">Oyuna Geç</Link>
        </div>
      </div>
    </div>
  );
}

export default Multiplayer;
