import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";

function PlayMulti() {
  const [rotate,setRotate]=useState(false);
  const [para,setPara]=useState(0);
  const [player1,setPlayer1]=useState(0);
  const [player2,setPlayer2]=useState(0);
  const [kazanan,setKazanan]=useState(null);
  const p1=useRef();
  const p2=useRef();
  const secim=()=>{
    p1.current.value==="yazi" ? p2.current.value="tura" : p2.current.value="yazi";
  }
  const players = useSelector((state) => state.oyun.player);
  const variants = {
    rotate: {y:[0,-400,0],rotate: 720,transition: { duration: 2 } },
    rotateS: { y:[0,-400,0], rotate: -720, transition: { duration: 2 } }
  };
  const ParaAt=()=>{
    setRotate(!rotate);
    setPara(Math.floor(Math.random()*2));
    console.log(para);
    let deger=(para===0 ? "tura" : "yazi");
    deger===p1.current.value ? setPlayer1(player1+1) : setPlayer2(player2+1);
    if(player1==5 || player2==5 )
    {
      if(player1>player2)
      {
        setKazanan(players[0]);
      }
      else{
        setKazanan(players[1]);
      }
      console.log(kazanan);
    }
    // 
  }

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex flex-col md:w-2/5 w-full m-5 md:m-0 h-4/5 card-back p-9 rounded-md items-center shadow-inner shadow-lg ">
        
      <motion.img src={para===0 ? "img/tura.png" : "img/yazi.png"} variants={variants} animate={rotate==true ? 'rotate' : 'rotateS'} />
        <div className="mt-2 flex justify-around w-full">
          <span className="text-2xl bg-slate-400 rounded-full p-3 block">
            {players[0]}
          </span>
          <span className="text-2xl bg-slate-400 rounded-full p-4 block">
          VS
          </span>
          <span className="text-2xl bg-slate-400 rounded-full p-4 block">
            {players[1]}
          </span>
        </div>
        <div className='flex justify-between w-full mt-5'>
          <select className='ml-14 w-28 outline-0 px-2 py-1' ref={p1} onChange={()=>secim()}>
            <option value="yazi">Yazı</option>
            <option value="tura">Tura</option>
          </select>
          <select className='mr-14 w-28 outline-0 px-2 py-1' ref={p2}>
            <option value="tura">Tura</option>
            <option value="yazi">Yazı</option>
          </select>
        </div>
        <div className="mt-2 flex justify-around w-full">
          <span className="text-2xl bg-slate-400 rounded-full p-3 block">
            {player1}
          </span>
          <span className="text-2xl bg-slate-400 rounded-full p-4 block">
          |
          </span>
          <span className="text-2xl bg-slate-400 rounded-full p-4 block">
            {player2}
          </span>
        </div>
        <div className="mt-8">
          {kazanan!==null ? "Kazanan: "+kazanan : <Link to="/playmulti" onClick={()=>ParaAt()} className="buttons">Parayı At</Link>} 
          <Link to="/" className="buttons ml-3">Anasayfa</Link>
        </div>
      </div>
    </div>
  )
}

export default PlayMulti