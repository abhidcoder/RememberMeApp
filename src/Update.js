import React,{useState,useEffect,useContext}  from 'react';
import { Contextforabhishek } from './Context';
import {Icon } from 'semantic-ui-react';
import Main from './main';
import Input from './input';



export default function Update() {
  const [runing, setRuning] = useState("2");
  const {setStates}=useContext(Contextforabhishek);
  setStates('upcomingEvents')

  const [Fetchitem,setFetchitem] = useState([]);


  useEffect(() => {
    if(runing==="2")
    {
      const requestOptions  = {
        method: 'POST',
        mode: "cors",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    };
  fetch('http://localhost:8005/itemsss', requestOptions )
        .then(response => response.json())
        .then((jsonRes) => setFetchitem(jsonRes));
  }
  setRuning("stop");
  });

  return (
    <>
    <Main/>
    <br></br>
    <div> {
    Fetchitem
    .map((doct) =>{

      const First=doct.Item;
      const iddd= doct._id;
      
      return (
        <div style={{marginBottom:100,marginTop:60}} className='ui center aligned container' >  
        <h1 style={{marginLeft:20,display:"inline-block",float:"left"}}> <Icon name="pencil alternate"/> {First}</h1>
       <Input id={iddd}></Input> 
       <div style={{marginTop:80,background:"orange",height:1}}><p></p></div>
       
        </div>
      );

    })}
</div>
    </>
  )
}
