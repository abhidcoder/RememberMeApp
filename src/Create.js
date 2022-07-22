import React,{useState,useEffect} from 'react';
import Main from './main';
import { Button,Message,Icon} from 'semantic-ui-react';
import './design.css';



export default function Create() {

  const [item,setitem] = useState("");
 

  const store=(e)=>{
  const vall= e.target.value

  setitem(vall)
  }

  const [runing, setRuning] = useState("Nill");

  const submit=(e)=>{
    if (item.length<1)
    {
  
      window.alert("Please Enter A Valid Input")
    }
    else{
      setitem(item);
      setRuning("2");
     window.alert("Your Item has been Added")
   
    }

    }
  console.log("states",runing)

  useEffect(() => {
    if(runing==="2")
    {
      const requestOptions  = {
        method: 'POST',
        mode: "cors",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ list:item })
    };
  fetch('http://localhost:8005/items', requestOptions )
        .then(response => response.json())
        .then((jsonRes) => setitem(jsonRes));
  }
  setRuning("stop");
  });


  return (
    <>
    <Main/>
    <br></br>
    
    <div className='ui center aligned container forall'>
    <form>
    <label style={{fontSize: '1.5rem',color:'purple'}}>Remember Me As
        <Icon name="hand point right outline" style={{marginLeft:8}}/> <input  style={{marginLeft:12,marginTop:48,fontSize: '1.5rem',color:'black',borderWidth: 1,borderRadius: 4,borderColor: '#E6E5ED',
    backgroundColor: '#F8F8F9', height: 60}} value={item} onChange={store} ></input>
    </label>
    </form>
    <div style={{marginTop:25}}>
    <br></br>
    <Button style={{color:"orange"}} secondary onClick={submit}>Add Me</Button>
    <br></br>
    <br></br>
    <div className='down'>
    <Message info >
    <Message.Header>Project Details</Message.Header>
    <p>This Project is Made using React, Semantic-Ui,</p>
    <p>Express, MongoDB, Mongoose, Node, (MERN)</p>
    <p>To Build This Project I have used</p>
    <p>Props, Context-Api, Fetch API, React Hooks, React Components And CSS</p>
  </Message>
  </div>
  <Message color='teal'>⚙︎ THANK YOU ⚙︎</Message>
  <div style={{marginTop:80,height:1}}><p>.</p></div>
    </div>
    </div>
    </>
  )
}
