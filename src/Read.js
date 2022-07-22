import React,{useState, useEffect,useContext} from 'react';
import { Contextforabhishek } from './Context';
import {Icon } from 'semantic-ui-react';
import Main from './main'
export default function Read() {

  const [runing, setRuning] = useState(
    {
      runing:"2"
    },
  );

  const {setStates}=useContext(Contextforabhishek);
  setStates("reviews")

  const [Fetchitem,setFetchitem] = useState([]);

  useEffect(() => {
    if(runing.runing==="2")
    {
   
    fetch("http://localhost:8005/itemss")
      .then((res) => res.json())
      .then((jsonRes) => setFetchitem(jsonRes),[]);
  }
  setRuning("stop");
  });



  return (
    <>
    <Main/>
    <br></br>
    <div >
        {Fetchitem
          .map((doct) =>{

            const First=doct.Item
            return (
              <div style={{marginTop:40}}>
            
              <h1 style={{marginLeft:40}}><Icon name="arrow circle right"/> {First}</h1>
              
         
              </div>
            );

          })}
         <div style={{marginTop:80,height:1}}><p>.</p></div>
      </div>
    </>
  )
}
