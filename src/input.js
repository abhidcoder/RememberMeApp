import React,{useState,useEffect}  from 'react';
import { Button,Icon } from 'semantic-ui-react';


export default function input(props) {


  const [up, updata] = useState("");
  const [upcount, setcount] = useState(0);
  const [runing, setRuning] = useState("2");
  

  const Changes=(e)=>{
    e.preventDefault();
    const vall= e.target.value
    updata(vall)
  
    }

  const Changess=(e)=>{
      setRuning("2")
      window.alert("The Item value has been changed")
      }
 

  useEffect(() => {
    if(runing==="2")
    {
      const requestOptions  = {
        method: 'POST',
        mode: "cors",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({upss:up ,idss:props.id})
    };
  fetch('http://localhost:8005/itemsss', requestOptions )
        .then(response => response.json())
        .then(() => updata("")).then(() => setcount(upcount+1));
  }
  setRuning("stop");
  });
 
  if(upcount===2){
    window.location.href="http://localhost:3000/patch"
  }

  return (
    <>
    <div style={{display:"inline-block"}}> <Icon style={{marginBottom:28,marginTop:38}} name="arrow down"/><input onChange={Changes} style={{borderWidth: 1,borderRadius: 4,borderColor: '#E6E5ED',
    backgroundColor: '#F8F8F9', height: 60}} value={up} className='ui center aligned container' /></div>

    <Button positive style={{marginLeft:50,marginTop:25,marginBottom:20,float:"right"}} onClick={Changess}>Replace Item</Button>
    </>
  )
}
