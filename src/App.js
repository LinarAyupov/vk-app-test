import React from 'react';
import './App.css';
import FormContainer from "./Components/Form/FormContainer";
import ProfileContainer from "./Components/Profile/PofileContainer";
import {Route} from "react-router-dom";


function App() {
  return (
        <div className='container'>
          <FormContainer/>
          <Route path ='/profile/' render={()=> <ProfileContainer/>}/>
        </div>
  );
}

export default App;
