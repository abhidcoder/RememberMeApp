import React from "react";
import {Routes,Route} from 'react-router-dom';
import Create from "./Create";
import Update from "./Update";
import Delete from "./Delete";
import Read from "./Read";



function App() {
  return (
    <div>
    <Routes>
      <Route index element={<Create/>} />
      <Route path="/get" element={<Read/>} />
      <Route path="/patch" element={<Update/>} />
      <Route path="/delete" element={<Delete/>} />
    </Routes>
    </div>
  );
}

export default App;
