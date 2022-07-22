import React,{useState,useEffect,useContext}  from 'react';
import { Contextforabhishek } from './Context';
import { Button,Icon } from 'semantic-ui-react';
import Main from './main'


export default function Delete() {
  const [runing, setRuning] = useState("2");
  const {setStates}=useContext(Contextforabhishek);
  setStates('upcomingEventss')
  const [Fetchitem,setFetchitem] = useState([]);
  const [id,setid] = useState("");
  const [result,setresult]=useState(0)

  const Changess=(e)=>{
      setRuning("2")
      setid(e.target.id);
      window.alert("Your Delete was a Success")
    
      }


  useEffect(() => {
    if(runing==="2")
    {
      const requestOptions  = {
        method: 'POST',
        mode: "cors",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({idss:id})
    };
  fetch('http://localhost:8005/itemssss', requestOptions )
        .then(response => response.json())
        .then((jsonRes) => setFetchitem(jsonRes)).then(()=>setresult(result+1));
  }
  setRuning("stop");
  });



  if (result===2){
  setresult(0)
  window.location.href="http://localhost:3000/delete"

  }

  else{

  return (
   
    <>
    <Main/>
    <br></br>
    <div > {
    Fetchitem
    .map((doct) =>{

      const First=doct.Item;
      const iddd= doct._id;
      
      return (
        <div style={{display:"inline-block",marginLeft:29}}>
       <h1 style={{marginBottom:22,marginTop:28}}><Icon name="play" style={{marginRight:4}}/>{First}</h1>
     
      <Button negative secondary  onClick={Changess} id={iddd} >Click Here To Delete Item</Button>
  

        
       
        </div>
      );

    })}
     <div style={{marginTop:80,height:1}}><p>.</p></div>
</div>
    </>
  )
}
}
