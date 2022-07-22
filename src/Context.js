import {createContext,useState } from 'react';
import * as React from 'react';
export const Contextforabhishek= createContext({});

 
export const Abhishek=({children})=>{

 const [activeItem ,setStates]=useState("editorials");
  const yy={activeItem,setStates}

return(
  <>
  <Contextforabhishek.Provider value={yy} >{children}</Contextforabhishek.Provider>
  
  </>
);


}